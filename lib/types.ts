export type CategorySlug =
  | "quartos"
  | "salas"
  | "cozinhas"
  | "lavabos"
  | "comercial";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Category {
  slug: CategorySlug;
  numeral: string; // numeral romano da seção
  title: string;
  shortDescription: string;
  longDescription: string;
  coverImage: ProjectImage;
  gallery: ProjectImage[];
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  category: CategorySlug | "outro";
  message: string;
}
