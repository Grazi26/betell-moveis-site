// Dados reais da empresa — centralizados para fácil manutenção.
// Caso o horário de funcionamento mude, ajuste apenas aqui.

export const siteConfig = {
  name: "Betell Móveis Sob Medida",
  shortName: "Betell Móveis",
  tagline: "Marcenaria planejada de alto padrão em Joinville",
  description:
    "Móveis planejados sob medida para quartos, salas, cozinhas, lavabos e espaços comerciais. Projeto, fabricação e instalação com acabamento de alto padrão em Joinville - SC.",

  rating: {
    value: 5.0,
    count: 22,
  },

  contact: {
    phoneDisplay: "(47) 99961-3829",
    phoneWhatsapp: "5547999613829", // formato internacional p/ wa.me
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de solicitar um orçamento para móveis planejados.",
    email: "contato@betellmoveis.com.br", // ajuste se houver e-mail oficial diferente
  },

  address: {
    street: "R. Papa João XXIII, 882",
    neighborhood: "Iririú",
    city: "Joinville",
    state: "SC",
    zip: "89227-300",
    full: "R. Papa João XXIII, 882 - Iririú, Joinville - SC, 89227-300",
    mapsUrl: "https://maps.app.goo.gl/txMziHwXUjd3ayoh8",
  },

  hours: {
    weekdays: "Segunda a sexta · 08:00 às 18:00",
    saturday: "Sábado · sob consulta",
    note: "Horário de atendimento comercial. Orçamentos podem ser solicitados a qualquer hora pelo site.",
  },

  social: {
    instagram: "https://www.instagram.com/betellmoveis/",
    instagramHandle: "@betellmoveis",
  },
} as const;
