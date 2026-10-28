import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative bg-ground pt-10 md:pt-14 lg:pt-20">
      <div className="mx-auto max-w-[1600px] px-pad-narrow md:px-pad-mid lg:px-pad">
        <div className="grid grid-cols-1 gap-gap-compact md:gap-gap lg:grid-cols-12">
          {/* Numeral + margem — visível a partir de lg */}
          <div className="hidden lg:col-span-2 lg:block">
            <span className="roman-marker">I</span>
          </div>

          {/* Título + corpo: colunas 3–7 */}
          <div className="lg:col-span-5 lg:col-start-3">
            <p className="mb-4 font-sans text-label uppercase tracking-label text-accent-text">
              {siteConfig.shortName} · Joinville, SC
            </p>
            <h1 className="font-serif font-normal leading-[0.96] tracking-tight text-ink text-[clamp(3rem,6vw+1rem,7.75rem)] max-w-[8.6em]">
              Marcenaria sob medida com <em className="italic">presença</em>.
            </h1>
            <p className="mt-8 max-w-[34em] text-reading-small leading-reading text-ink-2 md:text-body">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/#orcamento"
                className="btn-press flex h-12 items-center justify-center border border-ink bg-ink px-8 font-sans text-label uppercase tracking-label text-ground transition-colors duration-interaction hover:bg-field-deep"
              >
                Solicitar orçamento
              </Link>
              <Link
                href="/#categorias"
                className="group font-sans text-label uppercase tracking-label text-ink"
              >
                <span className="border-b border-accent pb-1 transition-colors duration-interaction group-hover:text-accent-text">
                  Ver projetos
                </span>
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-2 font-sans text-attribution text-ink-2">
              <span aria-hidden="true" className="text-accent">★★★★★</span>
              <span>
                {siteConfig.rating.value.toFixed(1)} · {siteConfig.rating.count} avaliações no Google
              </span>
            </div>
          </div>

          {/* Imagem retrato: colunas 9–12, cruzando para o próximo campo */}
          <div className="relative mt-10 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <div className="framed-image relative aspect-[4/5] w-full overflow-hidden lg:mb-[-7rem]">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Cozinha planejada Betell Móveis com marcenaria em madeira e iluminação embutida"
                fill
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Espaço reservado para o cruzamento da imagem no campo taupe seguinte */}
      <div className="hidden h-28 lg:block" aria-hidden="true" />
    </section>
  );
}
