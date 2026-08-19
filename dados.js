/* ================================================================
   LVCASBECKER.COM — DADOS DO SITE
   Este é o ÚNICO arquivo que você precisa editar no dia a dia.
   ================================================================ */

/* ----------------------------------------------------------------
   CONFIGURAÇÃO GERAL
   - nome: aparece no header e no hero da home.
   - logo: deixe null para usar o nome em texto.
           Para usar uma logo, salve o arquivo em assets/
           (ex.: assets/logo.svg ou logo.png, de preferência em
           fundo transparente) e escreva: logo: "assets/logo.svg"
   ---------------------------------------------------------------- */
const CONFIG = {
  nome: "Lvcas Becker",
  logo: null,
  email: "lvcasb3cker@gmail.com",
  instagram: "https://www.instagram.com/lvcasbecker",
  acervo: "https://www.instagram.com/acervocampbr",
  behance: "https://www.behance.net/lvcasbecker",
  linkedin: "https://www.linkedin.com/in/lvcasbecker",
};

/* ----------------------------------------------------------------
   CATEGORIAS DA HOME (os "botões")
   A ordem aqui define a ordem na home.
   ---------------------------------------------------------------- */
const CATEGORIAS = [
  { slug: "design",   nome: "Direção de Arte & Design" },
  { slug: "criativa", nome: "Direção Criativa" },
  { slug: "moda",     nome: "Moda & Conteúdo" },
];

/* ----------------------------------------------------------------
   PROJETOS — COMO ADICIONAR UM NOVO
   1. Crie uma pasta em assets/projetos/ com o nome do projeto,
      sem espaços ou acentos. Ex.: assets/projetos/meu-projeto/
   2. Coloque nela a capa (capa.jpg) e as fotos/vídeos do projeto
      (01.jpg, 02.jpg, video.mp4... o nome é livre).
   3. Copie um bloco { ... } abaixo, cole no TOPO da lista da
      categoria certa (o primeiro aparece primeiro) e ajuste.

   TIPOS DE MÍDIA aceitos na lista "midias":
     { tipo:"imagem",  src:"assets/projetos/meu-projeto/01.jpg" }
     { tipo:"video",   src:"assets/projetos/meu-projeto/video.mp4" }
     { tipo:"youtube", id:"dQw4w9WgXcQ" }   ← só o código do link
     { tipo:"vimeo",   id:"123456789" }     ← só o número do link

   CAMPOS OPCIONAIS (pode apagar a linha se não quiser usar):
     ano, descricao, creditos

   PARA TROCAR UMA FOTO depois: substitua o arquivo na pasta do
   projeto mantendo o mesmo nome — pronto, nada mais muda.
   ---------------------------------------------------------------- */
const PROJECTS = [

  /* ============ DIREÇÃO DE ARTE & DESIGN ============ */
  {
    slug: "brazilian-camp-ed01",
    categoria: "design",
    rotulo: "Editorial",
    nome: "Brazilian Camp ED.01",
    ano: "2026",
    capa: "assets/projetos/brazilian-camp-ed01/capa.jpg",
    descricao: "Publicação editorial que investiga o camp no contexto brasileiro — perfis, ensaios e arquivo.",
    midias: [
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/capa.jpg" },
    ],
  },
  {
    slug: "branding-acervocampbr",
    categoria: "design",
    rotulo: "Branding",
    nome: "Brazilian Camp @acervocampbr",
    capa: "assets/projetos/branding-acervocampbr/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/capa.jpg" },
    ],
  },
  {
    slug: "rebranding-bruna-paz",
    categoria: "design",
    rotulo: "Rebranding",
    nome: "Bruna Paz Brand",
    capa: "assets/projetos/rebranding-bruna-paz/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/rebranding-bruna-paz/capa.jpg" },
    ],
  },
  {
    slug: "branding-bruna-paz",
    categoria: "design",
    rotulo: "Branding",
    nome: "Bruna Paz Brand",
    capa: "assets/projetos/branding-bruna-paz/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/capa.jpg" },
    ],
  },
  {
    slug: "wonder-oculos",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "Wonder Óculos",
    capa: "assets/projetos/wonder-oculos/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/capa.jpg" },
    ],
  },
  {
    slug: "moma-house",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "MoMa House",
    capa: "assets/projetos/moma-house/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/moma-house/capa.jpg" },
    ],
  },
  {
    slug: "house-of-rufino",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "House of Rufino",
    capa: "assets/projetos/house-of-rufino/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/house-of-rufino/capa.jpg" },
    ],
  },
  {
    slug: "six-wowness",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "Six Wowness Club",
    capa: "assets/projetos/six-wowness/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/six-wowness/capa.jpg" },
    ],
  },
  {
    slug: "mob-studio",
    categoria: "design",
    rotulo: "Branding",
    nome: "MOB Studio",
    capa: "assets/projetos/mob-studio/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/mob-studio/capa.jpg" },
    ],
  },
  {
    slug: "camisetas-ladder",
    categoria: "design",
    rotulo: "Camisetas",
    nome: "Ladder Brand",
    capa: "assets/projetos/camisetas-ladder/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/camisetas-ladder/capa.jpg" },
    ],
  },

  /* ============ DIREÇÃO CRIATIVA ============ */
  {
    slug: "ensaio-brazilian-camp",
    categoria: "criativa",
    rotulo: "Dir. Criativa",
    nome: "Brazilian Camp — O Ensaio",
    capa: "assets/projetos/ensaio-brazilian-camp/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/ensaio-brazilian-camp/capa.jpg" },
    ],
    creditos:
`Fotografia: Gabriel Mesgo @gabriel.mesgo
Styling: Camila Ferza @camilaferza
Prod. Executiva: Maria Luisa Lisboa @lisboamarialuisa
Make: Fernanda Godoy @fernandagodoy.makeup
Cabelo: Chico Domingues @chicodominguess
Modelos: Lorena Bispo @lorenabispo__ / Eliz Xavier @elizzxavier`,
  },
  {
    slug: "dir-criativa-bruna-paz",
    categoria: "criativa",
    rotulo: "Dir. Criativa",
    nome: "Bruna Paz Brand",
    capa: "assets/projetos/dir-criativa-bruna-paz/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/dir-criativa-bruna-paz/capa.jpg" },
    ],
    creditos:
`Fotografia: Uhgo @__uhgo / Thompson Diego @_thompsondiego
Modelos: Zarcia Mendes @zarciamendes / Ashley Nicole @ashleynicolebrasil`,
  },
  {
    slug: "caba",
    categoria: "criativa",
    rotulo: "Dir. Criativa",
    nome: "Caba",
    capa: "assets/projetos/caba/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/caba/capa.jpg" },
    ],
    creditos:
`Fotografia: Gabriel Maia @gmaiaphotos
Styling: Gabriela Queiroz @gabqueif`,
  },

  /* ============ MODA & CONTEÚDO ============ */
  {
    slug: "cleber-lima",
    categoria: "moda",
    rotulo: "Prod. de Moda",
    nome: "Cleber Lima",
    capa: "assets/projetos/cleber-lima/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/cleber-lima/capa.jpg" },
    ],
    creditos:
`Fotografia: Ernando Prado @ernandoprdo
Styling: Maria Luisa Lisboa @lisboamarialuisa`,
  },
  {
    slug: "mare-suspensa",
    categoria: "moda",
    rotulo: "Prod. de Moda",
    nome: "Maré Suspensa",
    capa: "assets/projetos/mare-suspensa/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/mare-suspensa/capa.jpg" },
    ],
    creditos:
`Fotografia: Ernando Prado @ernandoprdo
Styling: Maria Luisa Lisboa @lisboamarialuisa`,
  },
  {
    slug: "moda-bruna-paz",
    categoria: "moda",
    rotulo: "Prod. de Moda",
    nome: "Bruna Paz Brand",
    capa: "assets/projetos/moda-bruna-paz/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/moda-bruna-paz/capa.jpg" },
    ],
    creditos:
`Fotografia: Uhgo @__uhgo
Modelo: Guilhermina Montarroyos @guimontarroyos`,
  },
  {
    slug: "ensaio-autoral",
    categoria: "moda",
    rotulo: "Prod. de Moda",
    nome: "Ensaio Autoral",
    capa: "assets/projetos/ensaio-autoral/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/ensaio-autoral/capa.jpg" },
    ],
    creditos:
`Fotografia: Thompson Diego @_thompsondiego
Modelo: Sabryna Oliveira @sabrynaoliveirra`,
  },
  {
    slug: "amazing-model",
    categoria: "moda",
    rotulo: "Prod. de Moda",
    nome: "Amazing Model",
    capa: "assets/projetos/amazing-model/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/amazing-model/capa.jpg" },
    ],
    creditos:
`Fotografia: Pedro Fonseca @fonsecapedroo
Modelo: Amanda Souza @amandastepha`,
  },
  {
    slug: "moda-ladder",
    categoria: "moda",
    rotulo: "Prod. de Moda",
    nome: "Ladder Brand",
    capa: "assets/projetos/moda-ladder/capa.jpg",
    midias: [
      { tipo: "imagem", src: "assets/projetos/moda-ladder/capa.jpg" },
    ],
    creditos:
`Fotografia: Thompson Diego @_thompsondiego
Modelos: Sabryna Oliveira @sabrynaoliveirra / Julia Voll @julialira.voll`,
  },
];
