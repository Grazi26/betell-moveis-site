import QuoteForm from "./QuoteForm";
import { siteConfig } from "@/lib/site-config";

export default function QuoteSection() {
  return (
    <section id="orcamento" className="bg-field py-section-block md:py-section-roomy">
      <div className="mx-auto max-w-[1600px] px-pad-narrow md:px-pad-mid lg:px-pad">
        <div className="grid grid-cols-1 gap-gap-compact lg:grid-cols-12 lg:gap-gap">
          <div className="hidden lg:col-span-2 lg:block">
            <span className="roman-marker text-accent-light">III</span>
          </div>

          <div className="lg:col-span-4 lg:col-start-3">
            <p className="font-sans text-label uppercase tracking-label text-accent-light">
              Orçamento
            </p>
            <h2 className="mt-3 max-w-[10em] font-serif text-[clamp(2rem,3vw+1rem,3.5rem)] font-normal leading-[1.02] tracking-tight text-on-field">
              Conte-nos sobre o seu <em className="italic">projeto</em>.
            </h2>
            <p className="mt-5 max-w-[30em] text-reading-small leading-reading text-on-field-2">
              Preencha os dados abaixo a qualquer hora do dia ou da noite.
              Nossa equipe retorna assim que possível, geralmente em até um
              dia útil.
            </p>

            <dl className="mt-10 flex flex-col gap-5 border-t border-field-line pt-6">
              <div>
                <dt className="font-sans text-label uppercase tracking-label text-accent-light">
                  Endereço
                </dt>
                <dd className="mt-1 text-reading-small text-on-field-2">
                  {siteConfig.address.full}
                </dd>
              </div>
              <div>
                <dt className="font-sans text-label uppercase tracking-label text-accent-light">
                  Telefone / WhatsApp
                </dt>
                <dd className="mt-1 text-reading-small text-on-field-2">
                  {siteConfig.contact.phoneDisplay}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0">
            <div className="border border-field-line bg-field-deep p-6 md:p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
