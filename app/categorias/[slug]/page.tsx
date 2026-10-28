import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";

interface CategoryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};

  return {
    title: `${category.title} planejados`,
    description: category.longDescription,
    openGraph: {
      title: `${category.title} planejados | ${siteConfig.shortName}`,
      description: category.longDescription,
      images: [{ url: category.coverImage.src }],
    },
  };
}

const details = [
  {
    label: "Projeto",
    text: "Medição, desenho técnico e aprovação em 3D antes da fabricação.",
  },
  {
    label: "Fabricação",
    text: "Produção sob medida com ferragens e acabamentos de alto padrão.",
  },
  {
    label: "Instalação",
    text: "Equipe própria, entrega e montagem acompanhadas até o fim.",
  },
];

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <Header />
      <main id="conteudo">
        {/* Abertura da categoria */}
        <section className="bg-ground pb-section-block pt-14 md:pt-16">
          <div className="mx-auto max-w-[1600px] px-pad-narrow md:px-pad-mid lg:px-pad">
            <div className="grid grid-cols-1 gap-gap-compact lg:grid-cols-12 lg:gap-gap">
              <div className="hidden lg:col-span-2 lg:block">
                <span className="roman-marker">{category.numeral}</span>
              </div>

              <div className="lg:col-span-8 lg:col-start-3">
                <Link
                  href="/#categorias"
                  className="font-sans text-label uppercase tracking-label text-ink-2 transition-colors duration-interaction hover:text-ink"
                >
                  ← Todos os projetos
                </Link>
                <h1 className="mt-4 max-w-[12em] font-serif text-[clamp(2.5rem,4vw+1rem,5rem)] font-normal leading-[0.98] tracking-tight text-ink">
                  {category.title}
                </h1>
                <p className="mt-5 max-w-[36em] text-reading-small leading-reading text-ink-2 md:text-body">
                  {category.longDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Imagem grande emoldurada + lista */}
        <section className="bg-panel py-section-block md:py-section-roomy">
          <div className="mx-auto max-w-[1600px] px-pad-narrow md:px-pad-mid lg:px-pad">
            <div className="grid grid-cols-1 gap-gap-compact lg:grid-cols-12 lg:gap-gap">
              <div className="hidden lg:col-span-2 lg:block" aria-hidden="true" />

              <div className="lg:col-span-6 lg:col-start-3">
                <div className="framed-image relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={category.coverImage.src}
                    alt={category.coverImage.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-10 lg:col-span-3 lg:col-start-10 lg:mt-0">
                <p className="font-sans text-label uppercase tracking-label text-accent-text">
                  Como fazemos
                </p>
                <ul className="mt-6 flex flex-col">
                  {details.map((d, i) => (
                    <li
                      key={d.label}
                      className="flex gap-4 border-t border-panel-line py-5 first:border-t-0 lg:border-t lg:first:border-t"
                    >
                      <span className="font-serif text-attribution text-accent-text">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-serif text-reading-small font-medium leading-item-title text-ink">
                          {d.label}
                        </p>
                        <p className="mt-1 text-caption leading-reading text-ink-2">
                          {d.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#orcamento"
                  className="btn-press mt-8 flex h-12 w-full items-center justify-center border border-ink bg-ink px-6 font-sans text-label uppercase tracking-label text-ground transition-colors duration-interaction hover:bg-field-deep sm:w-auto"
                >
                  Solicitar orçamento
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria completa */}
        <section className="bg-ground py-section-block md:py-section-roomy">
          <div className="mx-auto max-w-[1600px] px-pad-narrow md:px-pad-mid lg:px-pad">
            <div className="grid grid-cols-1 gap-gap-compact lg:grid-cols-12 lg:gap-gap">
              <div className="hidden lg:col-span-2 lg:block" aria-hidden="true" />
              <div className="lg:col-span-8 lg:col-start-3">
                <p className="font-sans text-label uppercase tracking-label text-accent-text">
                  Galeria
                </p>
                <h2 className="mt-2 font-serif text-[clamp(1.75rem,2vw+1rem,2.5rem)] font-normal text-ink">
                  Projetos de {category.title.toLowerCase()}
                </h2>
              </div>
            </div>

            <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-gap">
              <div className="hidden lg:col-span-2 lg:block" aria-hidden="true" />
              <div className="lg:col-span-8 lg:col-start-3">
                <Carousel
                  images={[category.coverImage, ...category.gallery]}
                  categoryTitle={category.title}
                  aspect="aspect-[16/10]"
                  framed
                />
              </div>
            </div>
          </div>
        </section>

        {/* Outras categorias */}
        <section className="bg-panel py-section-block">
          <div className="mx-auto max-w-[1600px] px-pad-narrow md:px-pad-mid lg:px-pad">
            <div className="grid grid-cols-1 gap-gap-compact lg:grid-cols-12 lg:gap-gap">
              <div className="hidden lg:col-span-2 lg:block" aria-hidden="true" />
              <div className="lg:col-span-8 lg:col-start-3">
                <p className="font-sans text-label uppercase tracking-label text-accent-text">
                  Explore também
                </p>
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                  {otherCategories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/categorias/${c.slug}`}
                      className="border-b border-accent font-serif text-item-title text-ink transition-colors duration-interaction hover:text-accent-text"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
