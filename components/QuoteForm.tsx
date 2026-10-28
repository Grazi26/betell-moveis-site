"use client";

import { useEffect, useState, FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

function getIsNightTime(): boolean {
  const hour = new Date().getHours();
  // Fora do horário comercial da loja (08h–18h)
  return hour >= 18 || hour < 8;
}

export default function QuoteForm() {
  const [isNight, setIsNight] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setIsNight(getIsNightTime());
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/orcamento", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          category: data.get("category"),
          message: data.get("message"),
          submittedAtNight: isNight,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Falha ao enviar");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-accent bg-ground p-8 text-center"
      >
        <p className="font-serif text-item-title text-ink">
          Recebemos sua solicitação.
        </p>
        <p className="mt-2 text-reading-small text-ink-2">
          {isNight
            ? "Mesmo fora do horário comercial, seus dados já estão com a gente. Entraremos em contato no próximo dia útil."
            : "Entraremos em contato em breve para conversar sobre o seu projeto."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {isNight && (
        <div
          className="border border-panel-line bg-panel px-5 py-4 text-reading-small text-ink-2"
          role="note"
        >
          <span className="font-serif italic text-ink">Boa noite. </span>
          Nossa loja está fechada agora, mas você pode deixar seus dados que
          respondemos assim que abrirmos — {siteConfig.hours.weekdays}.
        </div>
      )}

      <div>
        <label htmlFor="name" className="font-sans text-label uppercase tracking-label text-ink-2">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 h-12 w-full border border-panel-line bg-ground px-4 font-sans text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="font-sans text-label uppercase tracking-label text-ink-2">
            WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(47) 00000-0000"
            className="mt-2 h-12 w-full border border-panel-line bg-ground px-4 font-sans text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-sans text-label uppercase tracking-label text-ink-2">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 h-12 w-full border border-panel-line bg-ground px-4 font-sans text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="category" className="font-sans text-label uppercase tracking-label text-ink-2">
          Ambiente de interesse
        </label>
        <select
          id="category"
          name="category"
          defaultValue=""
          required
          className="mt-2 h-12 w-full border border-panel-line bg-ground px-4 font-sans text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          <option value="" disabled>
            Selecione um ambiente
          </option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
          <option value="outro">Outro / não sei ainda</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-sans text-label uppercase tracking-label text-ink-2">
          Conte um pouco do seu projeto
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full resize-none border border-panel-line bg-ground px-4 py-3 font-sans text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-caption text-accent-text">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-press flex h-12 items-center justify-center border border-ink bg-ink px-8 font-sans text-label uppercase tracking-label text-ground transition-colors duration-interaction hover:bg-field-deep disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar solicitação"}
      </button>

      <p className="text-caption text-ink-2">
        Prefere falar agora? Chame no{" "}
        <a
          href={`https://wa.me/${siteConfig.contact.phoneWhatsapp}?text=${encodeURIComponent(
            siteConfig.contact.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-accent text-ink hover:text-accent-text"
        >
          WhatsApp {siteConfig.contact.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}
