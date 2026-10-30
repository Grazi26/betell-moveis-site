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
      src: "/images/categorias/quartos/capa.png",
      alt: "Quarto planejado com guarda-roupa sob medida e iluminação embutida",
      width: 1200,
      height: 1500,
    },
    gallery: [
      {
        src: "/images/categorias/quartos/capa.png",
        alt: "Guarda-roupa planejado de porta lisa com puxadores perfil",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/quartos/capa.png",
        alt: "Closet sob medida com prateleiras e nichos iluminados",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/quartos/capa.png",
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
      src: "/images/categorias/salas/capa.png",
      alt: "Sala de estar com painel de TV ripado planejado",
      width: 1200,
      height: 1500,
    },
    gallery: [
      {
        src: "/images/categorias/salas/01.png",
        alt: "Painel ripado com rack suspenso e iluminação indireta",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/salas/02.png",
        alt: "Estante planejada com nichos para livros e objetos decorativos",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/salas/03.png",
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
      src: "/images/categorias/cozinhas/capa.png",
      alt: "Cozinha planejada com marcenaria em madeira, bancada iluminada e armários em vidro",
      width: 1200,
      height: 1500,
    },
    gallery: [
      {
        src: "/images/categorias/cozinhas/capa.png",
        alt: "Cozinha planejada com iluminação embutida sob a bancada e armários em vidro",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/cozinhas/02.png",
        alt: "Armários superiores planejados com portas de vidro e perfil de alumínio",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/cozinhas/03.png",
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
      src: "/images/categorias/lavabos/capa.png",
      alt: "Lavabo planejado com gabinete suspenso e espelheira sob medida",
      width: 1200,
      height: 1500,
    },
    gallery: [
      {
        src: "/images/categorias/lavabos/01.png",
        alt: "Gabinete suspenso planejado com cuba esculpida",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/lavabos/02.png",
        alt: "Espelheira planejada com iluminação integrada",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/lavabos/03.png",
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
      src: "/images/categorias/comercial/capa.png",
      alt: "Recepção comercial planejada com balcão sob medida",
      width: 1200,
      height: 1500,
    },
    gallery: [
      {
        src: "/images/categorias/comercial/01.png",
        alt: "Balcão de recepção planejado em madeira e laca",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/comercial/02.png",
        alt: "Mobiliário corporativo sob medida com iluminação embutida",
        width: 1200,
        height: 900,
      },
      {
        src: "/images/categorias/comercial/03.png",
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
