"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { ProjectImage } from "@/lib/types";

interface CarouselProps {
  images: ProjectImage[];
  categoryTitle: string;
  aspect?: string; // ex.: "aspect-[4/5]" ou "aspect-[4/3]"
  framed?: boolean;
}

export default function Carousel({
  images,
  categoryTitle,
  aspect = "aspect-[4/3]",
  framed = false,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const liveRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => {
      const total = images.length;
      const newIndex = (next + total) % total;
      setIndex(newIndex);
    },
    [images.length]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  if (images.length === 0) return null;
  const current = images[index];

  return (
    <div
      className="group relative"
      role="region"
      aria-roledescription="carrossel"
      aria-label={`Fotos de projetos — ${categoryTitle}`}
      onKeyDown={handleKeyDown}
    >
      <div
        className={`relative w-full overflow-hidden ${aspect} ${
          framed ? "framed-image" : ""
        }`}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={`Foto anterior de ${categoryTitle}`}
              className="btn-press absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-ground bg-ink/70 text-ground opacity-0 transition-opacity duration-interaction focus-visible:opacity-100 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={`Próxima foto de ${categoryTitle}`}
              className="btn-press absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-ground bg-ink/70 text-ground opacity-0 transition-opacity duration-interaction focus-visible:opacity-100 group-hover:opacity-100 group-focus-within:opacity-100"
            >
              <span aria-hidden="true">›</span>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir para foto ${i + 1} de ${images.length}`}
              aria-current={i === index}
              className={`h-1.5 w-6 transition-colors duration-interaction ${
                i === index ? "bg-accent" : "bg-panel-line"
              }`}
            />
          ))}
        </div>
      )}

      {/* Região viva, sem mover o foco — anuncia a troca para leitores de tela */}
      <div ref={liveRef} className="sr-only" aria-live="polite">
        {`Mostrando foto ${index + 1} de ${images.length}: ${current.alt}`}
      </div>
    </div>
  );
}
