import { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "quartos",
    numeral: "I",
    title: "Quartos",
    shortDescription:
      "Guarda-roupas, closets e cabeceiras planejadas que unem silêncio visual e organização.",
    longDescription:
      "Projetamos dormitórios sob medida que aproveitam cada centímetro com acabamento macio, iluminação integrada e ferragens de alta durabilidade — do guarda-roupa ao closet completo.",
    coverImage: {
      src: "/images/categorias/quartos/capa.jpg",
      alt: "Quarto planejado com guarda-roupa sob medida e iluminação embutida",
      width: 1200,
      height: 1500,
    },
    gallery: [
      {
        src: "/images/categorias/quartos/01.jpg",
        alt: "Guarda-roupa planejado de porta lisa com puxadores perfil",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/quartos/02.jpg",
        alt: "Closet sob medida com prateleiras e nichos iluminados",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/quartos/03.jpg",
        alt: "Cabeceira planejada com criados-mudos integrados",
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    slug: "salas",
    numeral: "II",
    title: "Salas",
    shortDescription:
      "Painéis de TV, estantes e racks que estruturam o ambiente social da casa.",
    longDescription:
      "Painéis ripados, estantes com nichos e racks suspensos projetados para equilibrar madeira, laca e metal — compondo salas de estar e de jantar com presença e leveza.",
    coverImage: {
      src: "/images/categorias/salas/capa.jpg",
      alt: "Sala de estar com painel de TV ripado planejado",
      width: 1200,
      height: 1500,
    },
    gallery: [
      {
        src: "/images/categorias/salas/01.jpg",
        alt: "Painel ripado com rack suspenso e iluminação indireta",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/salas/02.jpg",
        alt: "Estante planejada com nichos para livros e objetos decorativos",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/salas/03.jpg",
        alt: "Sala de jantar com buffet planejado sob medida",
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    slug: "cozinhas",
    numeral: "III",
    title: "Cozinhas",
    shortDescription:
      "Marcenaria funcional com acabamento premium, da bancada à iluminação embutida.",
    longDescription:
      "Cozinhas planejadas com módulos em madeira e laço metálico, iluminação em LED embutida sob bancada e armários superiores em vidro — o encontro entre função e alto padrão.",
    coverImage: {
      src: "/images/categorias/cozinhas/capa.jpg",
      alt: "Cozinha planejada com marcenaria em madeira, bancada iluminada e armários em vidro",
      width: 1200,
      height: 1500,
    },
    gallery: [
      {
        src: "/images/categorias/cozinhas/capa.jpg",
        alt: "Cozinha planejada com iluminação embutida sob a bancada e armários em vidro",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/cozinhas/02.jpg",
        alt: "Armários superiores planejados com portas de vidro e perfil de alumínio",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/cozinhas/03.jpg",
        alt: "Ilha planejada com bancada em quartzo e iluminação em LED",
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    slug: "lavabos",
    numeral: "IV",
    title: "Lavabos",
    shortDescription:
      "Gabinetes e espelheiras sob medida para o ambiente mais íntimo da casa.",
    longDescription:
      "Gabinetes suspensos, cubas esculpidas e espelheiras planejadas que transformam o lavabo em um detalhe de assinatura dentro do projeto arquitetônico.",
    coverImage: {
      src: "/images/categorias/lavabos/capa.jpg",
      alt: "Lavabo planejado com gabinete suspenso e espelheira sob medida",
      width: 1200,
      height: 1500,
    },
    gallery: [
      {
        src: "/images/categorias/lavabos/01.jpg",
        alt: "Gabinete suspenso planejado com cuba esculpida",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/lavabos/02.jpg",
        alt: "Espelheira planejada com iluminação integrada",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/lavabos/03.jpg",
        alt: "Lavabo com marcenaria em madeira e metal escovado",
        width: 1200,
        height: 900,
      },
    ],
  },
  {
    slug: "comercial",
    numeral: "V",
    title: "Comercial",
    shortDescription:
      "Balcões, recepções e mobiliário corporativo projetados para representar marcas.",
    longDescription:
      "Recepções, balcões de atendimento e mobiliário corporativo sob medida, pensados para comunicar a identidade da marca com a mesma precisão de um projeto residencial.",
    coverImage: {
      src: "/images/categorias/comercial/capa.jpg",
      alt: "Recepção comercial planejada com balcão sob medida",
      width: 1200,
      height: 1500,
    },
    gallery: [
      {
        src: "/images/categorias/comercial/01.jpg",
        alt: "Balcão de recepção planejado em madeira e laca",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/comercial/02.jpg",
        alt: "Mobiliário corporativo sob medida com iluminação embutida",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/comercial/03.jpg",
        alt: "Ambiente comercial com marcenaria planejada e identidade visual integrada",
        width: 1200,
        height: 900,
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
