import type { Metadata } from "next";
import { EB_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://betellmoveis.com.br"),
  title: {
    default: `${siteConfig.name} | Marcenaria Planejada em Joinville`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "móveis planejados Joinville",
    "marcenaria sob medida",
    "móveis planejados alto padrão",
    "cozinha planejada Joinville",
    "quarto planejado",
    "Betell Móveis",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://betellmoveis.com.br",
    title: `${siteConfig.name} | Marcenaria Planejada em Joinville`,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${ebGaramond.variable} ${instrumentSans.variable}`}>
      <body className="bg-ground text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
