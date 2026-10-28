"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-ground/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-pad-narrow py-4 md:px-pad-mid lg:px-pad">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} — página inicial`}>
          <Image
            src="/images/logo.png"
            alt={`Logotipo ${siteConfig.shortName}`}
            width={44}
            height={44}
            priority
            className="h-10 w-10 md:h-11 md:w-11"
          />
          <span className="font-serif text-lg tracking-tight text-ink md:text-xl">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          <Link
            href="/#categorias"
            className="font-sans text-label uppercase tracking-label text-ink-2 transition-colors duration-interaction hover:text-ink"
          >
            Projetos
          </Link>
          <Link
            href="/#sobre"
            className="font-sans text-label uppercase tracking-label text-ink-2 transition-colors duration-interaction hover:text-ink"
          >
            Sobre
          </Link>
          <Link
            href="/#orcamento"
            className="font-sans text-label uppercase tracking-label text-ink-2 transition-colors duration-interaction hover:text-ink"
          >
            Orçamento
          </Link>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-label uppercase tracking-label text-ink-2 transition-colors duration-interaction hover:text-ink"
          >
            Instagram
          </a>
          <Link
            href="/#orcamento"
            className="btn-press flex h-12 items-center justify-center border border-ink bg-ink px-6 font-sans text-label uppercase tracking-label text-ground transition-colors duration-interaction hover:bg-field-deep"
          >
            Solicitar orçamento
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="btn-press flex h-11 w-11 items-center justify-center border border-ink lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-interaction ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-full bg-ink transition-transform duration-interaction ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navegação móvel"
          className="flex flex-col border-t border-rule bg-ground px-pad-narrow py-6 lg:hidden"
        >
          <Link
            href="/#categorias"
            onClick={() => setOpen(false)}
            className="border-b border-rule py-4 font-sans text-label uppercase tracking-label text-ink-2"
          >
            Projetos
          </Link>
          <Link
            href="/#sobre"
            onClick={() => setOpen(false)}
            className="border-b border-rule py-4 font-sans text-label uppercase tracking-label text-ink-2"
          >
            Sobre
          </Link>
          <Link
            href="/#orcamento"
            onClick={() => setOpen(false)}
            className="border-b border-rule py-4 font-sans text-label uppercase tracking-label text-ink-2"
          >
            Orçamento
          </Link>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-rule py-4 font-sans text-label uppercase tracking-label text-ink-2"
          >
            Instagram
          </a>
          <Link
            href="/#orcamento"
            onClick={() => setOpen(false)}
            className="btn-press mt-6 flex h-12 items-center justify-center border border-ink bg-ink px-6 font-sans text-label uppercase tracking-label text-ground"
          >
            Solicitar orçamento
          </Link>
        </nav>
      )}
    </header>
  );
}
