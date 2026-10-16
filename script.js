"use strict";

/* =====================================================
   BIBLIOTECA ÁUREA — CONFIGURAÇÃO PRINCIPAL
   Edite esta seção para personalizar sua biblioteca.
   ===================================================== */

const CONFIG = {
  nome: "Biblioteca Áurea",
  email: "",

  redesSociais: {
    instagram: "",
    pinterest: "",
    youtube: ""
  },

  politicas: {
    privacy: "",
    terms: ""
  },

  categorias: [
    "Desenvolvimento pessoal",
    "Finanças e investimentos",
    "Marketing digital",
    "Empreendedorismo",
    "Produtividade",
    "Saúde e bem-estar",
    "Educação",
    "Literatura",
    "Espiritualidade",
    "Tecnologia"
  ]
};

/*
  CADASTRO DOS E-BOOKS
  --------------------
  Os produtos abaixo são exemplos demonstrativos.
  Substitua-os pelos seus produtos reais.

  imagem:
    Caminho relativo da imagem salva na pasta do projeto
    (ex.: "./capa.jpg", "./capa.png") ou URL pública direta.
    Pode ficar vazia enquanto você cadastra o produto.

  linkAfiliado:
    Cole o SEU link individual de afiliado da Hotmart.
    Deixe vazio até possuir o link verdadeiro.
    Não use o link da página de vendas como se fosse
    automaticamente um link de afiliado.

  precoOriginal e precoAtual:
    Informe números, sem "R$".
    Use null quando o preço não estiver confirmado.

  avaliacao:
    Nota real entre 0 e 5, ou null.
  quantidadeAvaliacoes:
    Quantidade real correspondente à nota.

  Para cadastrar um livro, copie um objeto, altere os
  dados e separe os objetos por vírgula.

  Para remover um livro, remova o objeto inteiro.
*/

const LIVROS = [
  {
    id: 1,
    titulo: "A Arte da Guerra",
    autor: "",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "A Arte da Guerra, de Sun Tzu, é um clássico sobre estratégia, liderança e inteligência. Ensina a vencer desafios, conhecer o adversário e alcançar objetivos com sabedoria, planejamento e sem conflitos desnecessários.",
    imagem: "./A arte da Guerra.png",
    linkAfiliado: "https://go.hotmart.com/O107975038E",
    precoOriginal: 30.80,
    precoAtual: 27.90,
    avaliacao: 4.7,
    quantidadeAvaliacoes: 20,
    destaque: true,
    maisVendido: true,
    novidade: true,
    tags: ["Autoconhecimento", "Hábitos", "Desenvolvimento"],
    beneficios: [
      "Apresente aqui um benefício real do material.",
      "Explique o que o leitor encontrará no conteúdo.",
      "Informe para quem o e-book foi desenvolvido."
    ],
    demonstracao: true
  },
  {
    id: 2,
    titulo: "Empreendedorismo o caminho do sucesso.",
    autor: "Nome do autor",
    categoria: "Empreendedorismo",
    descricao: "Este livro de empreendedorismo é um guia inspirador para quem deseja transformar ideias em oportunidades e construir um negócio de sucesso. Ao longo de suas páginas, o leitor encontrará conhecimentos, estratégias e reflexões sobre planejamento, inovação, liderança, gestão financeira e desenvolvimento pessoal.",
    imagem: "./Empreendedorismo o caminho do sucesso.jpg",
    linkAfiliado: "https://go.hotmart.com/C107981953E",
    precoOriginal: 22.00,
    precoAtual: 19.00,
    avaliacao: 5,
    quantidadeAvaliacoes: 589,
    destaque: true,
    maisVendido: false,
    novidade: false,
    tags: ["Mentalidade", "Objetivos", "Carreira"],
    beneficios: [
      "Inclua uma característica verdadeira do e-book.",
      "Descreva o tema principal da publicação."
    ],
    demonstracao: true
  },
  {
    id: 3,
    titulo: "A arte da produtividade.",
    autor: "Nome do autor",
    categoria: "Produtividade",
    descricao:
      "Como se tornar mais produtivo e ter mais tempo para as coisas que realmente importam pra você. Chega de procrastinar a vida felicidade, esse livro vai te ensinar como se tornar mais produtivo e ter mais tempo pra você e sua família.",
    imagem: "./A arte da produtividade.jpg",
    linkAfiliado: "https://go.hotmart.com/K107982123S",
    precoOriginal: 45,
    precoAtual: 39.90,
    avaliacao: 4,
    quantidadeAvaliacoes: 800,
    destaque: false,
    maisVendido: false,
    novidade: true,
    tags: ["Organização", "Rotina", "Planejamento"],
    beneficios: [
      "Adicione os benefícios descritos pelo produtor.",
      "Não prometa resultados que o material não garante."
    ],
    demonstracao: true
  },
  {
    id: 4,
    titulo: "10 receitas incríveis na Air Fryer.",
    autor: "Nome do autor",
    categoria: "Saúde e bem-estar",
    descricao:
      " 10 Receitas Incríveis na Air Fryer — Mais Sabor e Praticidade no Seu Dia a Dia! Transforme sua rotina na cozinha com o e-book 10 Receitas Incríveis na Air Fryer! Descubra como preparar receitas deliciosas, práticas e fáceis de fazer, mesmo que você não tenha muita experiência na cozinha. Com este guia digital, você terá novas ideias para variar suas refeições e preparar pratos saborosos sem complicação.",
    imagem: "./10 receitas incríveis na Air Fryer.jpg",
    linkAfiliado: "https://go.hotmart.com/O107889300C",
    precoOriginal: 15,
    precoAtual: 12,
    avaliacao: 4,
    quantidadeAvaliacoes: 1600,
    destaque: false,
    maisVendido: false,
    novidade: true,
    tags: ["Organização", "Rotina", "Planejamento"],
    beneficios: [
      "Adicione os benefícios descritos pelo produtor.",
      "Não prometa resultados que o material não garante."
    ],
    demonstracao: true
  },
  {
    id: 5,
    titulo: "O Manual do Marketing Eficiente",
    autor: "Nome do autor",
    categoria: "Marketing digital",
    descricao:
      "Neste livro você vai conhecer metódos de marketing, vendas e histórias sobre empreendedorismo que lhe ajudarão a subir de nível. São mais de 100 páginas em uma linguagem simples e direta. Aproveite e boa leitura!",
    imagem: "./O Manual do Marketing eficiente z.jpg",
    linkAfiliado: "https://go.hotmart.com/E107982769G",
    precoOriginal: 55.00,
    precoAtual: 49.90,
    avaliacao: 5,
    quantidadeAvaliacoes: 3.000,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  },
{
    id: 6,
    titulo: "Curso de Marketing Digital",
    autor: "Nome do autor",
    categoria: "Marketing digital",
    descricao:
      "O marketing digital é essencial para o sucesso empresarial em um mundo cada vez mais conectado. Nosso curso oferece treinamento completo e atualizado sobre marketing digital, incluindo SEO, mídias sociais, anúncios online e muito mais..",
    imagem: "./Curso de Marketing Digital.jpg",
    linkAfiliado: "https://go.hotmart.com/E107983501F",
    precoOriginal: 23.40,
    precoAtual: 17.90,
    avaliacao: 4,
    quantidadeAvaliacoes: 246,
    destaque: false,
    maisVendido: false,
    novidade: true,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  },
  {
    id: 7,
    titulo: "Desenvolver-se",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "Este E-book é relacionado as principais áreas de Desenvolvimento pessoal como Mentalidade Espiritualidade, Desenvolvimento Físico e Financeiro. O caminho para iniciar uma transformação sendo aplicado cada passo sugerido no E-book o foco e a disciplina de fazer um pouco a cada dia o resultado acontecera.",
    imagem: "./Desenvolver-se.jpg",
    linkAfiliado: "https://go.hotmart.com/E107983501F",
    precoOriginal: 35.80,
    precoAtual: 29.00,
    avaliacao: 5,
    quantidadeAvaliacoes: 1290,
    destaque: false,
    maisVendido: true,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Principio básico para se desenvolver-se nas principais áreas da vida."
    ],
    demonstracao: true
  },
  
  {
    id: 8,
    titulo: "Arquétipo, O Cuidador.",
    autor: "Autor: Lucas Maicon dos Santos",
    categoria: "Desenvolvimento pessoal",
    descricao:
      " OCUIDADOR — O poder de cuidar sem se perder O Cuidador é um livro sobre empatia, generosidade, proteção e, principalmente, sobre a importância de aprender a cuidar dos outros sem abandonar a si mesmo. Ao longo desta jornada, você descobrirá como o arquétipo do Cuidador se manifesta nas relações, na família, nas amizades e na vida cotidiana. O livro explora tanto o lado saudável do cuidado — acolher, proteger, apoiar e estar presente — quanto sua sombra: a necessidade de ser indispensável, a dificuldade de dizer “não”, o medo de decepcionar e o excesso de responsabilidade pelos problemas dos outros. A obra também aborda uma questão essencial: quem cuida de quem cuida? Muitas pessoas estão tão acostumadas a oferecer ajuda que esquecem de reconhecer as próprias necessidades, limites, cansaço e desejos.",
    imagem: "./Arquétipo, O Cuidador.jpg",
    linkAfiliado: "https://go.hotmart.com/Y107896501H",
    precoOriginal: 32.97,
    precoAtual: 21.45,
    avaliacao: 5,
    quantidadeAvaliacoes: 2700,
    destaque: true,
    maisVendido: true,
    novidade: false,
    tags: ["Digital", "Aprendizado", "lei da atração"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  },
   {
    id: 9,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "ARQUÉTIPOS — Por que você busca constantemente aprovação, liberdade, controle, segurança ou reconhecimento? Em “Arquétipos — O Mapa Invisível de Quem Somos”, você será convidado a olhar para dentro e reconhecer os padrões psicológicos que podem estar influenciando sua maneira de pensar, sentir e agir.",
    imagem: "./Arquétipos.jpg",
    linkAfiliado: "https://go.hotmart.com/D107894697G",
    precoOriginal: 24.18,
    precoAtual: 21.45,
    avaliacao: 5,
    quantidadeAvaliacoes: 3000,
    destaque: true,
    maisVendido: true,
    novidade: true,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 10,
    titulo: "Arquétipos,O Amante",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "O Amante — A arte de se conectar sem se perder é uma reflexão sobre o desejo humano de amar, pertencer, criar vínculos e experimentar a vida com intensidade. A obra apresenta o arquétipo do Amante como a capacidade de estabelecer conexões profundas não apenas nos relacionamentos românticos, mas também com pessoas, experiências, lugares, projetos e com a própria vida.",
    imagem: "./Arquétipos O Amante.jpg",
    linkAfiliado: "https://go.hotmart.com/W107913791G",
    precoOriginal: 31.80,
    precoAtual: 21.45,
    avaliacao: 5,
    quantidadeAvaliacoes: 0,
    destaque: true,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 11,
    titulo: "Arquétipos-O Explorador",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "O Explorador — A necessidade de liberdade, descoberta e novos horizontes Descubra o poder da liberdade, da curiosidade e do autoconhecimento em uma jornada de transformação pessoal. Neste livro, você vai explorar o desejo de mudança, a busca pela própria identidade e a coragem de descobrir novos caminhos Aprenda a diferenciar a verdadeira liberdade da fuga, a encontrar o equilíbrio entre independência e responsabilidade e a construir raízes sem abrir mão dos seus sonhos. Uma leitura inspiradora para quem deseja sair da zona de conforto, explorar novas possibilidades e descobrir que a maior jornada é aquela que nos leva ao encontro de nós mesmos.",
    imagem: "./Arquétipos-O explorador.jpg",
    linkAfiliado: "https://go.hotmart.com/X107895556E",
    precoOriginal: 32.12,
    precoAtual: 21.45,
    avaliacao: 5,
    quantidadeAvaliacoes: 6000,
    destaque: false,
    maisVendido: true,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 12,
    titulo: "Arquétipos-O Governante",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "Arquétipos e Consciência: O Governante — Poder, Responsabilidade e o Equilíbrio do Controle O livro O Governante: Poder, Responsabilidade e o Equilíbrio do Controle integra a série de estudos psicológicos voltados à psicologia analítica e simbólica. A obra propõe uma profunda imersão no arquétipo do Governante, investigando aquela força interna que habita o ser humano e deseja colocar ordem no caos, estruturar o ambiente, decidir caminhos e proteger o que foi construído. Mais do que analisar figuras de liderança externa, reis ou chefes, o texto expande o conceito para o cotidiano: trata-se do poder que cada indivíduo exerce sobre a própria vida, na gestão de recursos, nos limites estabelecidos e na forma de responder ao inesperado.",
    imagem: "",
    linkAfiliado: "https://go.hotmart.com/A107905011I",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 13,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "",
    imagem: "",
    linkAfiliado: "",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 14,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "",
    imagem: "",
    linkAfiliado: "",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 15,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "",
    imagem: "",
    linkAfiliado: "",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 16,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "",
    imagem: "",
    linkAfiliado: "",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 17,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "",
    imagem: "",
    linkAfiliado: "",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 18,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "",
    imagem: "",
    linkAfiliado: "",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 19,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "",
    imagem: "",
    linkAfiliado: "",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 20,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "",
    imagem: "",
    linkAfiliado: "",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 21,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "",
    imagem: "",
    linkAfiliado: "",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  }, {
    id: 22,
    titulo: "",
    autor: "Nome do autor",
    categoria: "Desenvolvimento pessoal",
    descricao:
      "",
    imagem: "",
    linkAfiliado: "",
    precoOriginal: null,
    precoAtual: null,
    avaliacao: null,
    quantidadeAvaliacoes: 0,
    destaque: false,
    maisVendido: false,
    novidade: false,
    tags: ["Digital", "Aprendizado", "Tecnologia"],
    beneficios: [
      "Cadastre somente informações reais do produto.",
      "Use uma descrição clara e objetiva."
    ],
    demonstracao: true
  },
];

/*
  Proteção: se dois livros tiverem o mesmo id (ex.: ao copiar
  um objeto e esquecer de trocar o número), o site gera um id
  novo automaticamente. Sem isso, o botão "Comprar" abriria
  sempre o PRIMEIRO livro com aquele id (e o link errado).
*/
(function garantirIdsUnicos() {
  const usados = new Set();
  let maior = LIVROS.reduce((m, l) => Math.max(m, Number(l.id) || 0), 0);

  LIVROS.forEach(livro => {
    if (livro.id === undefined || livro.id === null || usados.has(String(livro.id))) {
      maior += 1;
      console.warn(`Id repetido/ausente em "${livro.titulo}". Novo id: ${maior}`);
      livro.id = maior;
    }
    usados.add(String(livro.id));
  });
})();

/* =====================================================
   ESTADO DA APLICAÇÃO
   ===================================================== */

const STORAGE_KEYS = {
  favorites: "bibliotecaAurea:favoritos:v1",
  theme: "bibliotecaAurea:tema:v1"
};

const state = {
  pesquisa: "",
  categoria: "",
  tipo: "all",
  preco: "all",
  avaliacaoMinima: 0,
  ordenacao: "relevance",
  apenasFavoritos: false,
  favoritos: new Set(),
  tema: "dark",
  livroModal: null,
  toastTimer: null,
  modalAnterior: null
};

const $ = (seletor, raiz = document) =>
  raiz.querySelector(seletor);

const $$ = (seletor, raiz = document) =>
  [...raiz.querySelectorAll(seletor)];

/* =====================================================
   FUNÇÕES UTILITÁRIAS
   ===================================================== */

// Escapa textos antes de inseri-los em HTML.
function escapeHTML(valor) {
  return String(valor ?? "").replace(/[&<>"']/g, caractere => {
    const entidades = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entidades[caractere];
  });
}

// Evita erros se o navegador bloquear localStorage.
function lerStorage(chave, padrao) {
  try {
    const valor = localStorage.getItem(chave);

    return valor === null ? padrao : valor;
  } catch {
    return padrao;
  }
}

function salvarStorage(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
    return true;
  } catch {
    return false;
  }
}

// Normaliza palavras para pesquisa sem acentos.
function normalizar(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .trim();
}

function textoProduto(livro) {
  return [
    livro.titulo,
    livro.autor,
    livro.categoria,
    livro.descricao,
    ...(Array.isArray(livro.tags) ? livro.tags : [])
  ].join(" ");
}

function obterLivro(id) {
  return LIVROS.find(livro => String(livro.id) === String(id));
}

function formatarPreco(valor) {
  if (
    typeof valor !== "number" ||
    !Number.isFinite(valor) ||
    valor < 0
  ) {
    return "";
  }

  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function precoValido(valor) {
  return typeof valor === "number" &&
    Number.isFinite(valor) &&
    valor >= 0;
}

function notaValida(livro) {
  return Number.isFinite(livro.avaliacao) &&
    livro.avaliacao >= 0 &&
    livro.avaliacao <= 5 &&
    Number.isInteger(livro.quantidadeAvaliacoes) &&
    livro.quantidadeAvaliacoes > 0;
}

function urlHttpValida(valor) {
  if (typeof valor !== "string" || !valor.trim()) {
    return false;
  }

  try {
    const url = new URL(valor.trim());

    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function urlImagemValida(valor) {
  if (typeof valor !== "string" || !valor.trim()) {
    return false;
  }

  try {
    const url = new URL(valor.trim(), document.baseURI);
    return ["http:", "https:", "file:"].includes(url.protocol);
  } catch {
    return false;
  }
}

function temLinkAfiliado(livro) {
  if (!urlHttpValida(livro.linkAfiliado)) {
    return false;
  }

  const url = livro.linkAfiliado.trim();

  return !/SEU-LINK|SEU_LINK|EXEMPLO|SUBSTITUA/i.test(url);
}

function escaparAtributo(valor) {
  return escapeHTML(valor).replace(/`/g, "&#96;");
}

/* =====================================================
   CAPAS E AVALIAÇÕES
   ===================================================== */

function renderizarCapa(livro, classe = "book-cover") {
  const titulo = escapeHTML(livro.titulo || "E-book");
  const imagem = String(livro.imagem || "").trim();

  if (urlImagemValida(imagem)) {
    return `
      <img
        class="${classe}"
        src="${escaparAtributo(imagem)}"
        alt="Capa do e-book ${titulo}"
        loading="lazy"
        decoding="async"
        data-cover-title="${escaparAtributo(titulo)}"
      >
    `;
  }

  return `
    <div class="cover-fallback" role="img"
      aria-label="Capa ilustrativa de ${titulo}">
      <span class="fallback-symbol" aria-hidden="true">✳</span>
      <span class="fallback-title">${titulo}</span>
      <span class="fallback-caption">BIBLIOTECA ÁUREA</span>
    </div>
  `;
}

function renderizarAvaliacao(livro) {
  if (!notaValida(livro)) {
    return `
      <div class="no-rating">
        Ainda sem avaliações cadastradas
      </div>
    `;
  }

  const nota = livro.avaliacao;
  const estrelasCheias = Math.round(nota);
  const estrelas = "★".repeat(estrelasCheias) +
    "☆".repeat(5 - estrelasCheias);

  return `
    <div class="rating-line"
      aria-label="Nota ${nota.toLocaleString("pt-BR")} de 5">
      <span class="stars" aria-hidden="true">${estrelas}</span>
      <span class="rating-number">${nota.toLocaleString("pt-BR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      })}</span>
      <span class="rating-count">
        (${livro.quantidadeAvaliacoes.toLocaleString("pt-BR")})
      </span>
    </div>
  `;
}

function renderizarPreco(livro) {
  const atual = precoValido(livro.precoAtual)
    ? livro.precoAtual
    : null;

  const original = precoValido(livro.precoOriginal)
    ? livro.precoOriginal
    : null;

  if (atual === null && original === null) {
    return `
      <div class="book-price">
        <span class="price-missing">Consulte o preço na página oficial</span>
      </div>
    `;
  }

  const precoExibido = atual !== null ? atual : original;

  const precoAnterior = original !== null &&
    atual !== null &&
    original > atual
      ? `<span class="price-old">${formatarPreco(original)}</span>`
      : "";

  return `
    <div class="book-price">
      ${precoAnterior}
      <span class="price-current">${formatarPreco(precoExibido)}</span>
    </div>
  `;
}

function renderizarSelo(livro) {
  if (livro.destaque) {
    return '<span class="book-badge">Destaque</span>';
  }

  if (livro.maisVendido) {
    return '<span class="book-badge">Mais popular</span>';
  }

  if (livro.novidade) {
    return '<span class="book-badge">Novidade</span>';
  }

  return "";
}

/* =====================================================
   CARDS DOS PRODUTOS
   ===================================================== */

function renderizarCard(livro) {
  const favorito = state.favoritos.has(String(livro.id));
  const titulo = escapeHTML(livro.titulo);
  const autor = escapeHTML(livro.autor || "Autor não informado");
  const categoria = escapeHTML(livro.categoria || "Sem categoria");
  const descricao = escapeHTML(livro.descricao || "");
  const id = escaparAtributo(livro.id);

  return `
    <article class="book-card" data-book-id="${id}">
      <div class="book-cover-wrap">
        ${renderizarCapa(livro)}
        ${renderizarSelo(livro)}

        <button
          class="favorite-button ${favorito ? "active" : ""}"
          type="button"
          data-action="favorite"
          data-id="${id}"
          aria-pressed="${favorito}"
          aria-label="${favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}: ${titulo}"
          title="${favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}"
        >${favorito ? "♥" : "♡"}</button>
      </div>

      <div class="book-card-body">
        <span class="book-category">${categoria}</span>
        <h3>${titulo}</h3>
        <p class="book-author">${autor}</p>
        <p class="book-description">${descricao}</p>

        ${renderizarAvaliacao(livro)}
        ${renderizarPreco(livro)}

        <div class="book-card-actions">
          <button class="button details-button"
            type="button" data-action="details" data-id="${id}">
            Ver detalhes
          </button>

          <button class="button button-gold"
            type="button" data-action="buy" data-id="${id}">
            Adquirir e-book <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

/* =====================================================
   FILTROS E ORDENAÇÃO
   ===================================================== */

function livroCorrespondeAoPreco(livro) {
  if (state.preco === "all") {
    return true;
  }

  const preco = precoValido(livro.precoAtual)
    ? livro.precoAtual
    : precoValido(livro.precoOriginal)
      ? livro.precoOriginal
      : null;

  // Produtos sem preço cadastrado não entram em faixas de preço.
  if (preco === null) {
    return false;
  }

  switch (state.preco) {
    case "free":
      return preco === 0;

    case "under50":
      return preco > 0 && preco < 50;

    case "50to100":
      return preco >= 50 && preco <= 100;

    case "over100":
      return preco > 100;

    default:
      return true;
  }
}

function filtrarLivros() {
  const termo = normalizar(state.pesquisa);

  let resultado = LIVROS.filter(livro => {
    if (termo && !normalizar(textoProduto(livro)).includes(termo)) {
      return false;
    }

    if (state.categoria && livro.categoria !== state.categoria) {
      return false;
    }

    if (state.apenasFavoritos &&
        !state.favoritos.has(String(livro.id))) {
      return false;
    }

    if (state.tipo === "featured" && !livro.destaque) {
      return false;
    }

    if (state.tipo === "popular" && !livro.maisVendido) {
      return false;
    }

    if (state.tipo === "new" && !livro.novidade) {
      return false;
    }

    if (!livroCorrespondeAoPreco(livro)) {
      return false;
    }

    if (state.avaliacaoMinima > 0) {
      if (!notaValida(livro)) {
        return false;
      }

      if (livro.avaliacao < state.avaliacaoMinima) {
        return false;
      }
    }

    return true;
  });

  switch (state.ordenacao) {
    case "priceAsc":
      resultado.sort((a, b) => {
        const precoA = precoValido(a.precoAtual) ? a.precoAtual : Infinity;
        const precoB = precoValido(b.precoAtual) ? b.precoAtual : Infinity;
        return precoA - precoB;
      });
      break;

    case "priceDesc":
      resultado.sort((a, b) => {
        const precoA = precoValido(a.precoAtual) ? a.precoAtual : -Infinity;
        const precoB = precoValido(b.precoAtual) ? b.precoAtual : -Infinity;
        return precoB - precoA;
      });
      break;

    case "rating":
      resultado.sort((a, b) => {
        const notaA = notaValida(a) ? a.avaliacao : -1;
        const notaB = notaValida(b) ? b.avaliacao : -1;
        return notaB - notaA;
      });
      break;

    default:
      resultado.sort((a, b) => {
        const destaqueA = a.destaque ? 1 : 0;
        const destaqueB = b.destaque ? 1 : 0;

        return destaqueB - destaqueA || Number(a.id) - Number(b.id);
      });
  }

  return resultado;
}

function atualizarContagem(quantidade) {
  const contador = $("#resultsCount");

  if (state.apenasFavoritos) {
    contador.textContent = `${quantidade} ${quantidade === 1 ? "favorito encontrado" : "favoritos encontrados"}`;
    return;
  }

  contador.textContent =
    `${quantidade} ${quantidade === 1 ? "e-book encontrado" : "e-books encontrados"}`;
}

function renderizarBiblioteca() {
  const livros = filtrarLivros();
  const grade = $("#bookGrid");
  const vazio = $("#emptyState");

  grade.innerHTML = livros.map(renderizarCard).join("");
  vazio.hidden = livros.length > 0;

  atualizarContagem(livros.length);
  atualizarBotaoFavoritos();
  atualizarBotaoLimparPesquisa();
}

function atualizarBotaoFavoritos() {
  const botao = $("#favoritesToggle");

  botao.setAttribute("aria-pressed", String(state.apenasFavoritos));
  botao.innerHTML = state.apenasFavoritos
    ? "<span aria-hidden=\"true\">♥</span> Ver todos os livros"
    : "<span aria-hidden=\"true\">♡</span> Meus favoritos";
}

function atualizarBotaoLimparPesquisa() {
  $("#clearSearch").hidden = !$("#searchInput").value;
}

function sincronizarFiltros() {
  $("#searchInput").value = state.pesquisa;
  $("#categoryFilter").value = state.categoria;
  $("#typeFilter").value = state.tipo;
  $("#priceFilter").value = state.preco;
  $("#ratingFilter").value = String(state.avaliacaoMinima);
  $("#sortFilter").value = state.ordenacao;
}

/* =====================================================
   CATEGORIAS
   ===================================================== */

function renderizarCategorias() {
  const categoriasUsadas = [...new Set(
    LIVROS
      .map(livro => livro.categoria)
      .filter(Boolean)
  )];

  const categorias = [
    ...new Set([...CONFIG.categorias, ...categoriasUsadas])
  ];

  const lista = $("#categoryList");
  const filtro = $("#categoryFilter");

  lista.innerHTML = `
    <button class="category-chip ${state.categoria === "" ? "active" : ""}"
      type="button" data-category="">
      <span aria-hidden="true">✳</span> Todas as categorias
    </button>
    ${categorias.map(categoria => `
      <button
        class="category-chip ${state.categoria === categoria ? "active" : ""}"
        type="button"
        data-category="${escaparAtributo(categoria)}"
      >
        <span aria-hidden="true">◇</span>
        ${escapeHTML(categoria)}
      </button>
    `).join("")}
  `;

  const categoriaAnterior = state.categoria;

  filtro.innerHTML = `
    <option value="">Todas as categorias</option>
    ${categorias.map(categoria => `
      <option value="${escaparAtributo(categoria)}">
        ${escapeHTML(categoria)}
      </option>
    `).join("")}
  `;

  if (categorias.includes(categoriaAnterior)) {
    filtro.value = categoriaAnterior;
  } else {
    state.categoria = "";
    filtro.value = "";
  }
}

function selecionarCategoria(categoria) {
  state.categoria = categoria;
  $("#categoryFilter").value = categoria;

  renderizarCategorias();
  renderizarBiblioteca();

  $("#biblioteca").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* =====================================================
   SEÇÕES DE DESTAQUES E POPULARES
   ===================================================== */

function renderizarCardDestaque(livro) {
  return `
    <article class="featured-card">
      <div class="featured-cover">
        ${renderizarCapa(livro, "featured-image")}
      </div>
      <div>
        <span class="book-category">${escapeHTML(livro.categoria || "")}</span>
        <h3>${escapeHTML(livro.titulo)}</h3>
        <p>${escapeHTML(livro.descricao || "")}</p>
        <button class="text-link" type="button"
          data-action="details" data-id="${escaparAtributo(livro.id)}">
          Conhecer o e-book <span>↗</span>
        </button>
      </div>
    </article>
  `;
}

function renderizarDestaques() {
  const destaques = LIVROS.filter(livro => livro.destaque);
  const grade = $("#featuredGrid");

  grade.innerHTML = destaques.map(renderizarCardDestaque).join("");
  $("#featuredEmpty").hidden = destaques.length > 0;
}

function renderizarPopulares() {
  const populares = LIVROS
    .filter(livro => livro.maisVendido)
    .slice(0, 3);

  const display = $("#popularDisplay");

  if (!populares.length) {
    display.innerHTML = `
      <p class="section-empty">
        Os títulos desta seleção serão exibidos aqui quando forem cadastrados.
      </p>
    `;
    return;
  }

  display.innerHTML = populares.map(livro => `
    <article class="popular-mini-card"
      role="button" tabindex="0"
      data-action="details"
      data-id="${escaparAtributo(livro.id)}"
      aria-label="Ver detalhes de ${escapeHTML(livro.titulo)}">
      <div class="popular-mini-cover">
        ${renderizarCapa(livro, "popular-cover-image")}
      </div>
      <h3>${escapeHTML(livro.titulo)}</h3>
      <p>${escapeHTML(livro.categoria || "")}</p>
    </article>
  `).join("");
}

/* =====================================================
   FAVORITOS
   ===================================================== */

function carregarFavoritos() {
  try {
    const salvos = JSON.parse(
      lerStorage(STORAGE_KEYS.favorites, "[]")
    );

    if (Array.isArray(salvos)) {
      state.favoritos = new Set(salvos.map(String));
    }
  } catch {
    state.favoritos = new Set();
  }
}

function salvarFavoritos() {
  const sucesso = salvarStorage(
    STORAGE_KEYS.favorites,
    JSON.stringify([...state.favoritos])
  );

  if (!sucesso) {
    mostrarToast("Não foi possível salvar os favoritos neste navegador.");
  }
}

function alternarFavorito(id) {
  const chave = String(id);
  const livro = obterLivro(id);

  if (!livro) return;

  if (state.favoritos.has(chave)) {
    state.favoritos.delete(chave);
    mostrarToast("E-book removido dos favoritos.");
  } else {
    state.favoritos.add(chave);
    mostrarToast("E-book adicionado aos favoritos.");
  }

  salvarFavoritos();
  renderizarBiblioteca();
  renderizarDestaques();
}

/* =====================================================
   MODAL DE DETALHES
   ===================================================== */

function renderizarBeneficios(livro) {
  const beneficios = Array.isArray(livro.beneficios)
    ? livro.beneficios.filter(Boolean)
    : [];

  if (!beneficios.length) {
    return "";
  }

  return `
    <h3>Sobre este conteúdo</h3>
    <ul>
      ${beneficios.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ul>
  `;
}

function abrirDetalhes(id) {
  const livro = obterLivro(id);

  if (!livro) {
    mostrarToast("Não foi possível localizar este e-book.");
    return;
  }

  const dialog = $("#bookDialog");
  const conteudo = $("#dialogContent");

  state.livroModal = livro.id;
  state.modalAnterior = document.activeElement;

  const tags = Array.isArray(livro.tags) ? livro.tags : [];

  conteudo.innerHTML = `
    <div class="dialog-cover">
      ${renderizarCapa(livro, "dialog-cover-image")}
    </div>

    <div class="dialog-details">
      <span class="book-category">${escapeHTML(livro.categoria || "")}</span>
      <h2 id="dialogTitle">${escapeHTML(livro.titulo)}</h2>
      <p class="dialog-author">${escapeHTML(livro.autor || "Autor não informado")}</p>

      ${renderizarAvaliacao(livro)}
      ${renderizarPreco(livro)}

      <p class="dialog-description">
        ${escapeHTML(livro.descricao || "Descrição não cadastrada.")}
      </p>

      ${renderizarBeneficios(livro)}

      ${tags.length ? `
        <div class="dialog-tags" aria-label="Assuntos relacionados">
          ${tags.map(tag => `
            <span class="dialog-tag">${escapeHTML(tag)}</span>
          `).join("")}
        </div>
      ` : ""}

      ${livro.demonstracao ? `
        <p class="no-rating">
          Produto demonstrativo: substitua este cadastro por informações reais antes da publicação.
        </p>
      ` : ""}

      <div class="dialog-actions">
        <button type="button" class="button button-gold"
          data-action="buy" data-id="${escaparAtributo(livro.id)}">
          Adquirir e-book ↗
        </button>
        <button type="button" class="button button-outline"
          data-action="favorite" data-id="${escaparAtributo(livro.id)}">
          ${state.favoritos.has(String(livro.id)) ? "♥ Nos favoritos" : "♡ Favoritar"}
        </button>
      </div>
    </div>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    document.body.classList.add("dialog-open");
    $("#dialogClose").focus();
  } else {
    mostrarToast("Seu navegador não oferece suporte a esta janela de detalhes.");
  }
}

function fecharDetalhes() {
  const dialog = $("#bookDialog");

  if (dialog.open) {
    dialog.close();
  }
}

$("#bookDialog").addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  state.livroModal = null;

  if (state.modalAnterior &&
      typeof state.modalAnterior.focus === "function") {
    state.modalAnterior.focus();
  }
});

$("#bookDialog").addEventListener("click", evento => {
  if (evento.target === $("#bookDialog")) {
    fecharDetalhes();
  }
});

$("#dialogClose").addEventListener("click", fecharDetalhes);

/* =====================================================
   LINKS INDIVIDUAIS DE AFILIADOS
   ===================================================== */

function abrirCompra(id) {
  const livro = obterLivro(id);

  if (!livro) {
    mostrarToast("Não foi possível localizar este e-book.");
    return;
  }

  if (!temLinkAfiliado(livro)) {
    mostrarToast(
      "Este produto ainda não possui um link de afiliado válido cadastrado."
    );
    return;
  }

  /*
    O endereço é aberto sem alterar seus parâmetros.
    window.open é chamado diretamente pela interação
    do usuário para reduzir o risco de bloqueio do navegador.
  */

  /*
    Com "noopener", window.open SEMPRE devolve null, mesmo quando a
    aba abre normalmente. Por isso a aba é aberta sem essa opção e
    o noopener é aplicado manualmente logo depois.
  */
  const novaAba = window.open(livro.linkAfiliado.trim(), "_blank");

  if (novaAba) {
    try { novaAba.opener = null; } catch (e) { /* ignora */ }
  } else {
    mostrarToast(
      "O navegador pode ter bloqueado a nova aba. Permita pop-ups para este site e tente novamente."
    );
  }
}

/* =====================================================
   JANELAS DE POLÍTICAS E INFORMAÇÕES
   ===================================================== */

function abrirInformacao(titulo, textoHTML) {
  const dialog = $("#infoDialog");

  state.modalAnterior = document.activeElement;

  $("#infoContent").innerHTML = `
    <h2 id="infoTitle">${escapeHTML(titulo)}</h2>
    ${textoHTML}
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    document.body.classList.add("dialog-open");
    $("#infoClose").focus();
  }
}

function fecharInformacao() {
  $("#infoDialog").close();
}

$("#infoClose").addEventListener("click", fecharInformacao);

$("#infoDialog").addEventListener("close", () => {
  document.body.classList.remove("dialog-open");

  if (state.modalAnterior &&
      typeof state.modalAnterior.focus === "function") {
    state.modalAnterior.focus();
  }
});

$("#infoDialog").addEventListener("click", evento => {
  if (evento.target === $("#infoDialog")) {
    fecharInformacao();
  }
});

$$("[data-policy]").forEach(link => {
  link.addEventListener("click", evento => {
    evento.preventDefault();

    const tipo = link.dataset.policy;
    const url = CONFIG.politicas[tipo];

    if (urlHttpValida(url)) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    const titulo = tipo === "privacy"
      ? "Política de privacidade"
      : "Termos de uso";

    abrirInformacao(
      titulo,
      `<p>
        Esta página ainda precisa ser configurada pelo responsável
        pela biblioteca. Antes de publicar o site, crie o documento
        correspondente e informe seu endereço na seção CONFIG do
        arquivo script.js.
      </p>`
    );
  });
});

/* =====================================================
   MENSAGENS DE FEEDBACK
   ===================================================== */

function mostrarToast(mensagem) {
  const toast = $("#toast");

  toast.textContent = mensagem;
  toast.classList.add("visible");

  if (state.toastTimer) {
    clearTimeout(state.toastTimer);
  }

  state.toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 3600);
}

/* =====================================================
   TEMA CLARO E ESCURO
   ===================================================== */

function aplicarTema(tema) {
  state.tema = tema === "light" ? "light" : "dark";

  document.documentElement.dataset.theme = state.tema;

  $("#themeIcon").textContent = state.tema === "dark" ? "☼" : "☾";

  $("#themeToggle").setAttribute(
    "aria-label",
    state.tema === "dark"
      ? "Ativar tema claro"
      : "Ativar tema escuro"
  );

  salvarStorage(STORAGE_KEYS.theme, state.tema);
}

function carregarTema() {
  const temaSalvo = lerStorage(STORAGE_KEYS.theme, "dark");
  aplicarTema(temaSalvo);
}

$("#themeToggle").addEventListener("click", () => {
  aplicarTema(state.tema === "dark" ? "light" : "dark");
});

/* =====================================================
   MENU RESPONSIVO
   ===================================================== */

const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");

function fecharMenu() {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  menuToggle.querySelector("span").textContent = "☰";
}

menuToggle.addEventListener("click", () => {
  const aberto = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );

  menuToggle.querySelector("span").textContent = aberto ? "×" : "☰";
});

$$(".main-nav a").forEach(link => {
  link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") {
    fecharMenu();
  }
});

/* =====================================================
   CONTROLES DA PESQUISA E DOS FILTROS
   ===================================================== */

$("#searchInput").addEventListener("input", evento => {
  state.pesquisa = evento.target.value;
  renderizarBiblioteca();
});

$("#clearSearch").addEventListener("click", () => {
  state.pesquisa = "";
  $("#searchInput").value = "";
  renderizarBiblioteca();
  $("#searchInput").focus();
});

$("#categoryFilter").addEventListener("change", evento => {
  state.categoria = evento.target.value;
  renderizarCategorias();
  renderizarBiblioteca();
});

$("#typeFilter").addEventListener("change", evento => {
  state.tipo = evento.target.value;
  renderizarBiblioteca();
});

$("#priceFilter").addEventListener("change", evento => {
  state.preco = evento.target.value;
  renderizarBiblioteca();
});

$("#ratingFilter").addEventListener("change", evento => {
  state.avaliacaoMinima = Number(evento.target.value) || 0;
  renderizarBiblioteca();
});

$("#sortFilter").addEventListener("change", evento => {
  state.ordenacao = evento.target.value;
  renderizarBiblioteca();
});

$("#favoritesToggle").addEventListener("click", () => {
  state.apenasFavoritos = !state.apenasFavoritos;
  renderizarBiblioteca();
});

function limparFiltros() {
  state.pesquisa = "";
  state.categoria = "";
  state.tipo = "all";
  state.preco = "all";
  state.avaliacaoMinima = 0;
  state.ordenacao = "relevance";
  state.apenasFavoritos = false;

  sincronizarFiltros();
  renderizarCategorias();
  renderizarBiblioteca();
}

$("#resetFilters").addEventListener("click", limparFiltros);
$("#emptyReset").addEventListener("click", limparFiltros);

/* =====================================================
   CLIQUES DOS CARDS E DAS CATEGORIAS
   ===================================================== */

document.addEventListener("click", evento => {
  const botaoAcao = evento.target.closest("[data-action]");

  if (botaoAcao) {
    const acao = botaoAcao.dataset.action;
    const id = botaoAcao.dataset.id;

    if (acao === "favorite") {
      alternarFavorito(id);

      // Atualiza também o botão do modal aberto.
      if (state.livroModal !== null) {
        const livro = obterLivro(state.livroModal);

        if (livro && $("#bookDialog").open) {
          abrirDetalhes(livro.id);
        }
      }

      return;
    }

    if (acao === "details") {
      abrirDetalhes(id);
      return;
    }

    if (acao === "buy") {
      /*
        Fluxo para TODOS os produtos:
        1º clique em "Adquirir e-book" no card -> abre a janela de
        detalhes (com capa, preço, descrição).
        2º clique no "Adquirir e-book" dessa janela -> abre o link
        de afiliado da Hotmart.
      */
      const modalAberto = $("#bookDialog").open &&
        String(state.livroModal) === String(id);

      if (modalAberto) {
        abrirCompra(id);
      } else {
        abrirDetalhes(id);
      }
      return;
    }
  }

  const categoria = evento.target.closest("[data-category]");

  if (categoria) {
    selecionarCategoria(categoria.dataset.category);
  }
});

document.addEventListener("keydown", evento => {
  const elemento = evento.target.closest(
    '.popular-mini-card[role="button"]'
  );

  if (elemento && (evento.key === "Enter" || evento.key === " ")) {
    evento.preventDefault();
    abrirDetalhes(elemento.dataset.id);
  }
});

/* =====================================================
   RODAPÉ E IDENTIDADE
   ===================================================== */

function configurarIdentidade() {
  $$("[data-library-name]").forEach(elemento => {
    elemento.textContent = CONFIG.nome;
  });

  document.title = `${CONFIG.nome} — Conhecimento que transforma`;

  $("#currentYear").textContent = new Date().getFullYear();

  const email = String(CONFIG.email || "").trim();
  const elementoEmail = $("#footerEmail");

  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    elementoEmail.innerHTML = `
      <a href="mailto:${escaparAtributo(email)}">
        ${escapeHTML(email)}
      </a>
    `;
  } else {
    elementoEmail.textContent =
      "Configure seu e-mail de contato no script.js.";
  }

  const socialLinks = {
    instagram: "Instagram",
    pinterest: "Pinterest",
    youtube: "YouTube"
  };

  $("#socialLinks").innerHTML = Object.entries(socialLinks)
    .filter(([chave]) => urlHttpValida(CONFIG.redesSociais[chave]))
    .map(([chave, nome]) => `
      <a
        href="${escaparAtributo(CONFIG.redesSociais[chave])}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${nome}"
        title="${nome}"
      >${escapeHTML(nome.slice(0, 1))}</a>
    `)
    .join("");

  const contato = $("#contactLink");

  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    contato.href = `mailto:${email}`;
  } else {
    contato.href = "#contato";
  }
}

/* =====================================================
   BOTÃO VOLTAR AO TOPO
   ===================================================== */

const backToTop = $("#backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
}, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth"
  });
});

/* =====================================================
   IMAGENS COM ERRO DE CARREGAMENTO
   ===================================================== */

document.addEventListener("error", evento => {
  const imagem = evento.target;

  if (!(imagem instanceof HTMLImageElement)) {
    return;
  }

  if (!imagem.matches("[data-cover-title]")) {
    return;
  }

  const titulo = imagem.dataset.coverTitle || "E-book";
  const fallback = document.createElement("div");

  fallback.className = "cover-fallback";
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", `Capa ilustrativa de ${titulo}`);

  fallback.innerHTML = `
    <span class="fallback-symbol" aria-hidden="true">✳</span>
    <span class="fallback-title"></span>
    <span class="fallback-caption">BIBLIOTECA ÁUREA</span>
  `;

  fallback.querySelector(".fallback-title").textContent = titulo;

  imagem.replaceWith(fallback);
}, true);

/* =====================================================
   INICIALIZAÇÃO
   ===================================================== */

function iniciarBiblioteca() {
  carregarFavoritos();
  carregarTema();
  configurarIdentidade();

  renderizarCategorias();
  sincronizarFiltros();

  renderizarDestaques();
  renderizarPopulares();
  renderizarBiblioteca();
}

iniciarBiblioteca();
