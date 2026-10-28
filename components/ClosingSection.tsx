import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function ClosingSection() {
  return (
    <section className="bg-field py-section-block md:py-section-roomy">
      <div className="mx-auto max-w-[1600px] px-pad-narrow md:px-pad-mid lg:px-pad">
        <div className="grid grid-cols-1 gap-gap-compact lg:grid-cols-12 lg:items-center lg:gap-gap">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[clamp(2rem,3vw+1rem,3.75rem)] font-normal leading-[1.02] tracking-tight text-on-field">
              Seu projeto merece <em className="italic">acabamento</em> de
              assinatura.
            </h2>
          </div>

          <div className="relative mt-10 aspect-[3/4] w-full max-w-[280px] self-center justify-self-center lg:col-span-3 lg:col-start-6 lg:mt-0">
            <Image
              src="/images/sobre/detalhe-marcenaria.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="mt-10 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <p className="max-w-[28em] text-reading-small leading-reading text-on-field-2">
              Do primeiro desenho à instalação final, acompanhamos cada etapa
              para que o móvel planejado seja, de fato, único — pensado para
              o seu espaço e para o seu dia a dia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/#orcamento"
                className="btn-press flex h-12 items-center justify-center border border-on-field bg-on-field px-8 font-sans text-label uppercase tracking-label text-ink transition-colors duration-interaction hover:bg-ground-2"
              >
                Solicitar orçamento
              </Link>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-label uppercase tracking-label text-on-field"
              >
                <span className="border-b border-accent-light pb-1 transition-colors duration-interaction hover:text-accent-light">
                  Ver no Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
