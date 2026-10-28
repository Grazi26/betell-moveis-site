import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

interface OrcamentoBody {
  name: string;
  phone: string;
  email?: string;
  category: string;
  message?: string;
  submittedAtNight: boolean;
}

export async function POST(req: NextRequest) {
  let body: OrcamentoBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { name, phone, category } = body;

  if (!name || !phone || !category) {
    return NextResponse.json(
      { error: "Nome, telefone e categoria são obrigatórios." },
      { status: 400 }
    );
  }

  const timestamp = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  const summary = `
Nova solicitação de orçamento — ${siteConfig.shortName}

Nome: ${body.name}
Telefone: ${body.phone}
E-mail: ${body.email || "não informado"}
Ambiente: ${body.category}
Mensagem: ${body.message || "—"}
Enviado à noite (fora do horário comercial): ${body.submittedAtNight ? "Sim" : "Não"}
Data/hora: ${timestamp}
  `.trim();

  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || siteConfig.contact.email;

  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${siteConfig.shortName} <onboarding@resend.dev>`,
          to: [notifyEmail],
          subject: `Novo orçamento: ${body.name} (${body.category})`,
          text: summary,
        }),
      });

      if (!res.ok) {
        console.error("Falha ao enviar e-mail via Resend", await res.text());
      }
    } catch (err) {
      console.error("Erro ao chamar Resend", err);
    }
  } else {
    // Sem chave configurada ainda: registra no log do servidor (visível nos logs da Vercel)
    console.log("[ORÇAMENTO RECEBIDO — configure RESEND_API_KEY]\n", summary);
  }

  return NextResponse.json({ ok: true });
}
