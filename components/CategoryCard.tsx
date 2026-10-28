import Link from "next/link";
import { Category } from "@/lib/types";
import Carousel from "./Carousel";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="flex flex-col">
      <Carousel
        images={[category.coverImage, ...category.gallery]}
        categoryTitle={category.title}
        aspect="aspect-[4/5]"
      />
      <div className="mt-5">
        <p className="font-sans text-label uppercase tracking-label text-accent-text">
          {category.numeral}
        </p>
        <h3 className="mt-1 font-serif text-item-title leading-item-title tracking-item-title text-ink">
          {category.title}
        </h3>
        <p className="mt-2 max-w-[30em] font-sans text-reading-small leading-reading text-ink-2">
          {category.shortDescription}
        </p>
        <Link
          href={`/categorias/${category.slug}`}
          className="mt-4 inline-block border-b border-accent font-sans text-label uppercase tracking-label text-ink transition-colors duration-interaction hover:text-accent-text"
        >
          Ver projetos
        </Link>
      </div>
    </article>
  );
}
