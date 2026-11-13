// Todo o conteúdo do site fica aqui. Para adaptar a um cliente real:
// 1) troque os textos PT e EN, 2) preencha site.url, 3) troque o número do WhatsApp,
// 4) apague a linha <meta name="robots" content="noindex, nofollow"> em index.html,
// 5) troque as "fotos" (cenas desenhadas) por fotos reais: veja o README.

export const site = {
  // Endereço final do site (ex.: "https://claraveiga.com.br"). Vazio = sem canonical/hreflang/og:url.
  url: "",
  // Número fictício. Formato internacional, só dígitos.
  whatsapp: "5511900000000",
  instagram: "claraveiga.foto",
  brand: "Clara Veiga",
};

// ---- Orçamento ----
// Valor base por tipo de ensaio (pacote Essencial), em R$
export const baseByType = { portrait: 350, couple: 450, family: 550, event: 800 };
// Multiplicador de cada pacote sobre o valor base
export const packages = {
  essential: { mult: 1, hours: 1, photos: 20, days: 7 },
  complete: { mult: 1.6, hours: 2, photos: 40, days: 10 },
  premium: { mult: 2.3, hours: 3, photos: 70, days: 10 },
};
// Extras opcionais, em R$
export const extrasPrice = { location: 120, album: 280, reel: 250, express: 150 };

// Fotos (Unsplash, licença Unsplash). Arquivos em public/fotos/. pos = ponto de foco do corte (object-position).
export const photos = {
  retrato1: { src: "/fotos/retrato-1.webp", w: 934, h: 1400, pos: "50% 30%" },
  retrato2: { src: "/fotos/retrato-2.webp", w: 1400, h: 928, pos: "42% 50%" },
  casal1: { src: "/fotos/casal-1.webp", w: 933, h: 1400, pos: "50% 45%" },
  casal2: { src: "/fotos/casal-2.webp", w: 933, h: 1400, pos: "50% 40%" },
  familia: { src: "/fotos/familia.webp", w: 898, h: 1400, pos: "50% 50%" },
  evento: { src: "/fotos/evento.webp", w: 1400, h: 933, pos: "50% 50%" },
  paisagem1: { src: "/fotos/paisagem-1.webp", w: 1033, h: 1400, pos: "50% 50%" },
  paisagem2: { src: "/fotos/paisagem-2.webp", w: 1400, h: 1050, pos: "62% 50%" },
  detalhe: { src: "/fotos/detalhe.webp", w: 933, h: 1400, pos: "50% 50%" },
};

// Itens do portfólio (id = chave em photos e em content.portfolio.items; cat = categoria do filtro)
export const gallery = [
  { id: "retrato1", cat: "portrait" },
  { id: "casal1", cat: "couple" },
  { id: "familia", cat: "family" },
  { id: "paisagem2", cat: "landscape" },
  { id: "retrato2", cat: "portrait" },
  { id: "casal2", cat: "couple" },
  { id: "evento", cat: "event" },
  { id: "paisagem1", cat: "landscape" },
  { id: "detalhe", cat: "detail" },
];

export const content = {
  pt: {
    lang: "pt-BR",
    meta: {
      title: "Clara Veiga Fotografia | Fotógrafa de retratos, casais e famílias em São Paulo",
      description:
        "Ensaios de retrato, casal, família e eventos com a fotógrafa Clara Veiga, em São Paulo. Monte seu ensaio, veja o valor na hora e peça orçamento pelo WhatsApp.",
      ogAlt: "Clara Veiga Fotografia: ensaios de retrato, casal e família em São Paulo",
    },
    skip: "Pular para o conteúdo",
    langLabel: "Idioma",
    demoNotice: "Site de demonstração. Nome, preços e depoimentos são fictícios. Fotos: Unsplash.",
    nav: {
      label: "Navegação principal",
      items: [
        { id: "portfolio", label: "Portfólio" },
        { id: "servicos", label: "Serviços" },
        { id: "ensaio", label: "Monte seu ensaio" },
        { id: "sobre", label: "Sobre" },
        { id: "duvidas", label: "Dúvidas" },
      ],
      cta: "Pedir orçamento",
    },
    hero: {
      eyebrow: "Fotógrafa · Perdizes, São Paulo",
      before: "Momentos que viram",
      accent: "memórias",
      text:
        "Sou a Clara. Fotografo pessoas, casais e famílias com luz natural e muita conversa, para você se reconhecer em cada imagem.",
      primary: "Monte seu ensaio",
      secondary: "Ver portfólio",
      quote: "fotografar é guardar o tempo",
      badge: { value: "10+", label: "anos de experiência" },
      heroAlt: "Retrato de uma jovem de cabelo castanho e camisa listrada, com luz dourada ao fundo",
    },
    about: {
      id: "sobre",
      eyebrow: "Sobre mim",
      title: "Oi, eu sou a Clara",
      paragraphs: [
        "Há mais de 10 anos fotografo retratos, casais, famílias e eventos em São Paulo e no litoral. Acredito que toda boa foto começa com conforto, então a gente conversa, ri e só depois o clique acontece.",
        "Trabalho com luz natural, direção leve e entrega cuidadosa: cada ensaio chega tratado, em galeria online privada e pronto para imprimir.",
      ],
      cta: "Falar com a Clara",
      values: [
        { title: "Olhar autoral", text: "Enquadramentos e cores com identidade própria." },
        { title: "Momentos reais", text: "Direção leve para sair natural, sem pose forçada." },
        { title: "Entrega cuidadosa", text: "Edição manual e galeria online privada." },
      ],
      stats: [
        { value: "400+", label: "ensaios feitos" },
        { value: "7 dias", label: "entrega média" },
      ],
      photoAlt: "Falésias brancas com um arco de pedra sobre o mar turquesa",
    },
    services: {
      id: "servicos",
      eyebrow: "Serviços",
      title: "O que eu fotografo",
      items: [
        { photo: "retrato2", title: "Retratos", text: "Books pessoais, profissionais e ensaios de aniversário.", alt: "Retrato em preto e branco de um homem de óculos e cabelo ondulado" },
        { photo: "casal2", title: "Casais", text: "Pré-wedding, noivado e aniversário de namoro.", alt: "Casal se abraçando em luz dourada, com ele beijando a testa dela" },
        { photo: "familia", title: "Famílias", text: "Ensaios ao ar livre, com crianças e pets.", alt: "Família com três crianças sentada em um campo de flores laranja" },
        { photo: "evento", title: "Eventos", text: "Aniversários, formaturas e pequenas celebrações.", alt: "Salão de eventos com muitas pessoas sentadas diante de um telão" },
      ],
      more: "Pedir orçamento",
    },
    portfolio: {
      id: "portfolio",
      eyebrow: "Portfólio",
      title: "Trabalhos selecionados",
      note: "Fotos de demonstração do Unsplash. No site real entram as fotos da fotógrafa.",
      filterLabel: "Filtrar por categoria",
      all: "Todos",
      cats: { portrait: "Retratos", couple: "Casais", family: "Famílias", event: "Eventos", landscape: "Paisagens", detail: "Detalhes" },
      items: {
        retrato1: { title: "Luz de fim de tarde", alt: "Retrato de uma jovem de cabelo castanho e camisa listrada, com luz dourada ao fundo" },
        casal1: { title: "Pôr do sol", alt: "Silhueta de um casal dançando à beira de um lago ao pôr do sol" },
        familia: { title: "Tarde em família", alt: "Família com três crianças sentada em um campo de flores laranja" },
        paisagem2: { title: "Falésias", alt: "Falésias brancas com um arco de pedra sobre o mar turquesa" },
        retrato2: { title: "Preto e branco", alt: "Retrato em preto e branco de um homem de óculos e cabelo ondulado" },
        casal2: { title: "Pré-wedding", alt: "Casal se abraçando em luz dourada, com ele beijando a testa dela" },
        evento: { title: "Encontros e eventos", alt: "Salão de eventos com muitas pessoas sentadas diante de um telão" },
        paisagem1: { title: "Deserto e mar", alt: "Montanhas vermelhas de um deserto com o mar e as ondas em primeiro plano" },
        detalhe: { title: "Detalhes", alt: "Detalhe em close de uma íris azul acinzentada" },
      },
    },
    builder: {
      id: "ensaio",
      eyebrow: "Monte seu ensaio",
      title: "Veja o valor antes de falar comigo",
      intro: "Escolha o tipo de ensaio, o pacote e os extras. O valor aparece na hora e o pedido vai pronto para o WhatsApp.",
      typeLabel: "Que tipo de ensaio?",
      types: [
        { id: "portrait", label: "Retrato", text: "Book pessoal ou profissional" },
        { id: "couple", label: "Casal", text: "Pré-wedding, noivado" },
        { id: "family", label: "Família", text: "Com crianças e pets" },
        { id: "event", label: "Evento", text: "Aniversário, formatura" },
      ],
      pkgLabel: "Escolha o pacote",
      pkgs: [
        { id: "essential", label: "Essencial", text: "Para um registro simples" },
        { id: "complete", label: "Completo", text: "O mais escolhido" },
        { id: "premium", label: "Premium", text: "Ensaio sem pressa" },
      ],
      pkgInfo: (p) => `${p.hours}h de ensaio · ${p.photos} fotos tratadas · entrega em ${p.days} dias`,
      extrasLabel: "Extras (opcional)",
      extras: [
        { id: "location", label: "Segundo local ou troca de look", text: "Mais variedade no mesmo dia" },
        { id: "album", label: "Álbum impresso 20x20", text: "Capa dura, 20 páginas" },
        { id: "reel", label: "Vídeo curto para Reels", text: "Bastidores do ensaio, 30 s" },
        { id: "express", label: "Entrega expressa", text: "Galeria em até 72 horas" },
      ],
      lightLabel: "Melhor luz para o ensaio",
      lights: [
        { id: "morning", label: "Manhã", text: "Luz suave, 8h às 10h" },
        { id: "golden", label: "Fim de tarde", text: "Hora dourada, 16h às 18h" },
      ],
      summaryTitle: "Seu orçamento",
      typeWord: "Ensaio",
      pkgWord: "Pacote",
      lightWord: "Luz",
      extrasWord: "Extras",
      noExtras: "Nenhum",
      total: "valor estimado",
      note: "Valores fictícios de demonstração. O orçamento final é confirmado pelo WhatsApp, e o sinal de 50% reserva a data.",
      cta: "Enviar pedido pelo WhatsApp",
      selected: "selecionado",
      waMessage: ({ type, pkg, light, extras, total, info }) =>
        `Oi, Clara! Montei meu ensaio no seu site:\n- Ensaio: ${type}\n- Pacote: ${pkg} (${info})\n- Luz: ${light}\n- Extras: ${extras}\n- Valor estimado: ${total}\nPodemos conversar sobre datas?`,
    },
    testimonials: {
      eyebrow: "Depoimentos",
      title: "O que dizem os clientes",
      items: [
        { name: "Mariana e Lucas", role: "Pré-wedding", text: "A Clara nos deixou tão à vontade que esquecemos da câmera. As fotos ficaram a nossa cara." },
        { name: "Priscila T.", role: "Book pessoal", text: "Eu odiava aparecer em foto. Saí do ensaio com imagens que uso no trabalho e na vida." },
        { name: "Família Andrade", role: "Ensaio de família", text: "Fotografar crianças pequenas é difícil, e ela fez parecer fácil. Entrega rápida e linda." },
      ],
    },
    faq: {
      id: "duvidas",
      eyebrow: "Dúvidas",
      title: "Perguntas frequentes",
      items: [
        { q: "Como funciona o ensaio?", a: "Começamos com uma conversa pelo WhatsApp para alinhar estilo, local e roupas. No dia, eu conduzo com direção leve. Em até 7 a 10 dias você recebe a galeria online." },
        { q: "Preciso saber posar?", a: "Não. Eu te guio o tempo todo, com movimentos simples. A maioria das pessoas começa nervosa e termina se divertindo." },
        { q: "E se chover no dia?", a: "Remarcamos sem custo para outra data na mesma luz. Em locais cobertos, o ensaio pode acontecer normalmente." },
        { q: "Como é o pagamento?", a: "Sinal de 50% para reservar a data (Pix ou cartão) e o restante no dia do ensaio." },
        { q: "As fotos vêm tratadas?", a: "Sim. Todas as fotos do pacote são editadas uma a uma e entregues em alta resolução, prontas para imprimir." },
      ],
    },
    contact: {
      id: "contato",
      title: "Tem um projeto em mente?",
      text: "Vamos criar algo especial juntas. Me chame no WhatsApp e eu respondo no mesmo dia.",
      cta: "Chamar no WhatsApp",
      waMessage: "Oi, Clara! Vim pelo seu site e quero um orçamento de ensaio.",
      address: "Estúdio em Perdizes, São Paulo, SP (atendo também em locação)",
      hours: "Seg a sáb, 9h às 18h",
      instagramLabel: "Instagram",
    },
    footer: "Clara Veiga Fotografia. Site de demonstração com dados fictícios.",
    jsonLd: {
      name: "Clara Veiga Fotografia",
      description: "Fotógrafa de retratos, casais, famílias e eventos em São Paulo.",
      address: { street: "Rua Exemplo, 000", locality: "São Paulo", region: "SP", country: "BR" },
    },
  },

  en: {
    lang: "en",
    meta: {
      title: "Clara Veiga Photography | Portrait, couple and family photographer in São Paulo",
      description:
        "Portrait, couple, family and event photo sessions with photographer Clara Veiga in São Paulo. Build your session, see the price instantly and request a quote on WhatsApp.",
      ogAlt: "Clara Veiga Photography: portrait, couple and family sessions in São Paulo",
    },
    skip: "Skip to content",
    langLabel: "Language",
    demoNotice: "Demo website. Name, prices and testimonials are fictional. Photos: Unsplash.",
    nav: {
      label: "Main navigation",
      items: [
        { id: "portfolio", label: "Portfolio" },
        { id: "servicos", label: "Services" },
        { id: "ensaio", label: "Build your session" },
        { id: "sobre", label: "About" },
        { id: "duvidas", label: "FAQ" },
      ],
      cta: "Get a quote",
    },
    hero: {
      eyebrow: "Photographer · Perdizes, São Paulo",
      before: "Moments that become",
      accent: "memories",
      text:
        "I'm Clara. I photograph people, couples and families with natural light and plenty of conversation, so you recognize yourself in every image.",
      primary: "Build your session",
      secondary: "View portfolio",
      quote: "photography keeps time",
      badge: { value: "10+", label: "years of experience" },
      heroAlt: "Portrait of a young woman with brown hair and a striped shirt, with golden light behind her",
    },
    about: {
      id: "sobre",
      eyebrow: "About me",
      title: "Hi, I'm Clara",
      paragraphs: [
        "For over 10 years I've photographed portraits, couples, families and events in São Paulo and along the coast. I believe every good photo starts with comfort, so we talk, laugh, and only then does the click happen.",
        "I work with natural light, gentle direction and careful delivery: every session arrives edited, in a private online gallery and ready to print.",
      ],
      cta: "Talk to Clara",
      values: [
        { title: "Authorial eye", text: "Framing and colors with their own identity." },
        { title: "Real moments", text: "Gentle direction for natural results, no forced poses." },
        { title: "Careful delivery", text: "Hand-edited photos in a private online gallery." },
      ],
      stats: [
        { value: "400+", label: "sessions shot" },
        { value: "7 days", label: "average delivery" },
      ],
      photoAlt: "White cliffs with a stone arch over the turquoise sea",
    },
    services: {
      id: "servicos",
      eyebrow: "Services",
      title: "What I photograph",
      items: [
        { photo: "retrato2", title: "Portraits", text: "Personal and professional shoots, birthday sessions.", alt: "Black and white portrait of a man with glasses and wavy hair" },
        { photo: "casal2", title: "Couples", text: "Pre-wedding, engagement and anniversary sessions.", alt: "Couple embracing in golden light, he kisses her forehead" },
        { photo: "familia", title: "Families", text: "Outdoor sessions with kids and pets.", alt: "Family with three kids sitting in a field of orange flowers" },
        { photo: "evento", title: "Events", text: "Birthdays, graduations and small celebrations.", alt: "Event hall with many people seated in front of a screen" },
      ],
      more: "Get a quote",
    },
    portfolio: {
      id: "portfolio",
      eyebrow: "Portfolio",
      title: "Selected works",
      note: "Demo photos from Unsplash. The real site uses the photographer's own photos.",
      filterLabel: "Filter by category",
      all: "All",
      cats: { portrait: "Portraits", couple: "Couples", family: "Families", event: "Events", landscape: "Landscapes", detail: "Details" },
      items: {
        retrato1: { title: "Late afternoon light", alt: "Portrait of a young woman with brown hair and a striped shirt, with golden light behind her" },
        casal1: { title: "Sunset", alt: "Silhouette of a couple dancing by a lake at sunset" },
        familia: { title: "Family afternoon", alt: "Family with three kids sitting in a field of orange flowers" },
        paisagem2: { title: "Cliffs", alt: "White cliffs with a stone arch over the turquoise sea" },
        retrato2: { title: "Black and white", alt: "Black and white portrait of a man with glasses and wavy hair" },
        casal2: { title: "Pre-wedding", alt: "Couple embracing in golden light, he kisses her forehead" },
        evento: { title: "Gatherings and events", alt: "Event hall with many people seated in front of a screen" },
        paisagem1: { title: "Desert and sea", alt: "Red desert mountains with the sea and waves in the foreground" },
        detalhe: { title: "Details", alt: "Close-up detail of a blue-gray iris" },
      },
    },
    builder: {
      id: "ensaio",
      eyebrow: "Build your session",
      title: "See the price before you talk to me",
      intro: "Pick the session type, the package and any extras. The price updates instantly and your request goes ready to WhatsApp.",
      typeLabel: "What kind of session?",
      types: [
        { id: "portrait", label: "Portrait", text: "Personal or professional shoot" },
        { id: "couple", label: "Couple", text: "Pre-wedding, engagement" },
        { id: "family", label: "Family", text: "With kids and pets" },
        { id: "event", label: "Event", text: "Birthday, graduation" },
      ],
      pkgLabel: "Choose a package",
      pkgs: [
        { id: "essential", label: "Essential", text: "For a simple record" },
        { id: "complete", label: "Complete", text: "The most popular" },
        { id: "premium", label: "Premium", text: "A relaxed, longer session" },
      ],
      pkgInfo: (p) => `${p.hours}h session · ${p.photos} edited photos · delivery in ${p.days} days`,
      extrasLabel: "Extras (optional)",
      extras: [
        { id: "location", label: "Second location or outfit change", text: "More variety on the same day" },
        { id: "album", label: "Printed album 20x20", text: "Hardcover, 20 pages" },
        { id: "reel", label: "Short video for Reels", text: "Behind the scenes, 30 s" },
        { id: "express", label: "Express delivery", text: "Gallery within 72 hours" },
      ],
      lightLabel: "Best light for your session",
      lights: [
        { id: "morning", label: "Morning", text: "Soft light, 8 am to 10 am" },
        { id: "golden", label: "Late afternoon", text: "Golden hour, 4 pm to 6 pm" },
      ],
      summaryTitle: "Your quote",
      typeWord: "Session",
      pkgWord: "Package",
      lightWord: "Light",
      extrasWord: "Extras",
      noExtras: "None",
      total: "estimated price",
      note: "Demo prices in Brazilian reais (BRL). The final quote is confirmed on WhatsApp, and a 50% deposit holds the date.",
      cta: "Send request on WhatsApp",
      selected: "selected",
      waMessage: ({ type, pkg, light, extras, total, info }) =>
        `Hi, Clara! I built my session on your website:\n- Session: ${type}\n- Package: ${pkg} (${info})\n- Light: ${light}\n- Extras: ${extras}\n- Estimated price: ${total}\nCan we talk about dates?`,
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What clients say",
      items: [
        { name: "Mariana and Lucas", role: "Pre-wedding", text: "Clara made us so comfortable we forgot about the camera. The photos look exactly like us." },
        { name: "Priscila T.", role: "Personal shoot", text: "I used to hate being photographed. I left with images I use at work and in life." },
        { name: "Andrade family", role: "Family session", text: "Photographing small kids is hard, and she made it look easy. Fast and beautiful delivery." },
      ],
    },
    faq: {
      id: "duvidas",
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        { q: "How does the session work?", a: "We start with a WhatsApp chat to align on style, location and outfits. On the day I guide you with gentle direction. Within 7 to 10 days you receive your online gallery." },
        { q: "Do I need to know how to pose?", a: "No. I guide you the whole time with simple movements. Most people start nervous and end up having fun." },
        { q: "What if it rains?", a: "We reschedule at no cost to another date with the same light. At covered locations the session can go ahead as planned." },
        { q: "How does payment work?", a: "A 50% deposit holds the date (Pix or card) and the rest is paid on the day of the session." },
        { q: "Are the photos edited?", a: "Yes. Every photo in the package is edited one by one and delivered in high resolution, ready to print." },
      ],
    },
    contact: {
      id: "contato",
      title: "Have a project in mind?",
      text: "Let's create something special together. Message me on WhatsApp and I'll reply the same day.",
      cta: "Chat on WhatsApp",
      waMessage: "Hi, Clara! I found your website and I'd like a session quote.",
      address: "Studio in Perdizes, São Paulo, Brazil (also available on location)",
      hours: "Mon to Sat, 9 am to 6 pm",
      instagramLabel: "Instagram",
    },
    footer: "Clara Veiga Photography. Demo website with fictional data.",
    jsonLd: {
      name: "Clara Veiga Photography",
      description: "Portrait, couple, family and event photographer in São Paulo.",
      address: { street: "Rua Exemplo, 000", locality: "São Paulo", region: "SP", country: "BR" },
    },
  },
};
