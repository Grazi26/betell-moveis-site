import { siteConfig } from "@/lib/site-config";

const facts = [
  {
    label: "Avaliação Google",
    value: `${siteConfig.rating.value.toFixed(1)} ★`,
    detail: `${siteConfig.rating.count} avaliações`,
  },
  {
    label: "Atendimento",
    value: "Joinville, SC",
    detail: "Iririú e região",
  },
  {
    label: "Horário",
    value: "08:00 às 18:00",
    detail: "Segunda a sexta",
  },
  {
    label: "Especialidade",
    value: "Sob medida",
    detail: "Projeto, fabricação e instalação",
  },
];

export default function FactsBar() {
  return (
    <section className="bg-panel py-10 md:py-12">
      <div className="mx-auto max-w-[1600px] px-pad-narrow md:px-pad-mid lg:px-pad">
        <div className="grid grid-cols-1 gap-gap-compact border-t border-panel-line pt-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-gap lg:pt-10">
          <div className="hidden lg:col-span-2 lg:block" aria-hidden="true" />
          {facts.map((fact) => (
            <div key={fact.label} className="lg:col-span-2">
              <p className="font-sans text-label uppercase tracking-label text-accent-text">
                {fact.label}
              </p>
              <p className="mt-2 font-serif text-item-title leading-item-title text-ink">
                {fact.value}
              </p>
              <p className="mt-1 font-sans text-caption text-ink-2">{fact.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
