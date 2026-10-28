import { siteConfig } from "@/lib/site-config";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.phoneWhatsapp}?text=${encodeURIComponent(
        siteConfig.contact.whatsappMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Betell Móveis"
      className="btn-press fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center border border-ink bg-ink text-ground shadow-none transition-colors duration-interaction hover:bg-field-deep"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-current"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.43 1.33 4.92L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.05c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .54.01.17.01.41-.07.64.49.24.57.82 1.97.89 2.11.07.14.12.3.02.49-.1.19-.15.3-.29.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.34 1.46.28.14.44.12.6-.07.17-.19.72-.84.91-1.13.19-.28.38-.23.64-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
      </svg>
    </a>
  );
}
