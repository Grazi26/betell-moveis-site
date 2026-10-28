import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-accent bg-field">
      <div className="mx-auto max-w-[1600px] px-pad-narrow py-14 md:px-pad-mid lg:px-pad">
        <div className="grid grid-cols-2 gap-x-gap-compact gap-y-10 md:grid-cols-4 lg:grid-cols-12 lg:gap-gap">
          <div className="col-span-2 lg:col-span-4">
            <p className="font-serif text-item-title text-on-field">
              {siteConfig.shortName}
            </p>
            <p className="mt-3 max-w-[26em] text-caption leading-reading text-on-field-2">
              {siteConfig.tagline}.
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="font-sans text-label uppercase tracking-label text-accent-light">
              Projetos
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/categorias/${c.slug}`}
                    className="text-caption text-on-field-2 transition-colors duration-interaction hover:text-on-field"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-sans text-label uppercase tracking-label text-accent-light">
              Contato
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-caption text-on-field-2">
              <li>{siteConfig.address.full}</li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.phoneWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-interaction hover:text-on-field"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-interaction hover:text-on-field"
                >
                  Ver no Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-sans text-label uppercase tracking-label text-accent-light">
              Social
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-caption text-on-field-2">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-interaction hover:text-on-field"
                >
                  {siteConfig.social.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-field-line pt-8 text-attribution text-on-field-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.shortName}. Todos os
            direitos reservados.
          </p>
          <p>{siteConfig.address.city} - {siteConfig.address.state}</p>
        </div>
      </div>
    </footer>
  );
}
