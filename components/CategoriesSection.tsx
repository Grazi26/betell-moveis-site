import { categories } from "@/lib/data";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
  return (
    <section id="categorias" className="bg-ground py-section-block md:py-section-roomy">
      <div className="mx-auto max-w-[1600px] px-pad-narrow md:px-pad-mid lg:px-pad">
        <div className="grid grid-cols-1 gap-gap-compact lg:grid-cols-12 lg:gap-gap">
          <div className="hidden lg:col-span-2 lg:block">
            <span className="roman-marker">II</span>
          </div>

          <div className="lg:col-span-6 lg:col-start-3">
            <p className="font-sans text-label uppercase tracking-label text-accent-text">
              Projetos
            </p>
            <h2 className="mt-3 max-w-[14em] font-serif text-[clamp(2rem,3vw+1rem,3.5rem)] font-normal leading-[1.02] tracking-tight text-ink">
              Cada ambiente, uma <em className="italic">categoria</em> de projeto.
            </h2>
            <p className="mt-5 max-w-[32em] text-reading-small leading-reading text-ink-2">
              Da intimidade do quarto à precisão de um espaço comercial, cada
              categoria reúne projetos reais, fabricados sob medida em Joinville.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-gap gap-y-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-20">
          {categories.map((category) => (
            <div key={category.slug} className="lg:col-span-4">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
