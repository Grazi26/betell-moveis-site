"use client";

import { useEffect, useState } from "react";

interface SpineSection {
  id: string;
  numeral: string;
}

interface GoldSpineProps {
  sections: SpineSection[];
}

export default function GoldSpine({ sections }: GoldSpineProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-10 hidden h-full w-[3px] md:left-[16.6%] lg:block"
    >
      <div className="relative h-full w-px bg-rule">
        <div className="absolute inset-0 w-px bg-accent" />
        {sections.map((s) => {
          const el = typeof document !== "undefined" ? document.getElementById(s.id) : null;
          const top = el ? el.offsetTop : 0;
          const isActive = activeId === s.id;
          return (
            <span
              key={s.id}
              className="roman-marker absolute -translate-x-1/2 -translate-y-1/2 bg-ground px-1 transition-opacity duration-interaction"
              style={{
                top: `${Math.min(top, 1)}px`,
                opacity: isActive ? 1 : 0.55,
                position: "sticky",
              }}
            >
              {s.numeral}
            </span>
          );
        })}
      </div>
    </div>
  );
}
