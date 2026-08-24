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
     { tipo:"imagem",  src:"assets/projetos/meu-projeto/01.jpg", largura:"dupla" }
     { tipo:"video",   src:"assets/projetos/meu-projeto/video.mp4", largura:"dupla" }
     { tipo:"youtube", id:"dQw4w9WgXcQ", largura:"dupla" }   ← só o código do link
     { tipo:"vimeo",   id:"123456789", largura:"dupla" }     ← só o número do link

   LARGURAS: "dupla" (2 por fileira — o padrão se não escrever),
   "trio" (3 por fileira) ou "sozinha" (1 na fileira).

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
    descricao: "Publicação editorial que investiga as manifestações do camp no contexto brasileiro, explorando suas relações com a cultura popular, a moda, a televisão, a música, o comportamento e o imaginário coletivo. O projeto reúne pesquisa, entrevistas, ensaios visuais e textuais e um arquivo de referências, construindo uma perspectiva sobre o camp a partir de diferentes personagens, épocas, linguagens e manifestações da cultura brasileira. Como resultado, essa investigação é transformada em uma peça editorial de TCC que articula conteúdo, imagem e direção de arte, utilizando o próprio design como ferramenta de pesquisa, documentação e interpretação do camp brasileiro.",
    midias: [
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/01.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/06.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/07.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/08.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/09.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/10.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/11.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/12.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/13.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/14.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/15.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/16.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/17.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/18.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/19.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "branding-acervocampbr",
    categoria: "design",
    rotulo: "Branding",
    nome: "Brazilian Camp @acervocampbr",
    ano: "2025",
    capa: "assets/projetos/branding-acervocampbr/capa.jpg",
    descricao: "Identidade visual do acervo: logo, sistema gráfico e linguagem para os conteúdos da curadoria.",
    midias: [
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/capa.jpg" },
    ],
  },
  {
    slug: "rebranding-bruna-paz",
    categoria: "design",
    rotulo: "Rebranding",
    nome: "Bruna Paz Brand",
    ano: "2025",
    capa: "assets/projetos/rebranding-bruna-paz/capa.jpg",
    descricao: "Redesenho da identidade da marca — refinamento do logotipo, paleta e aplicações em embalagem e aviamentos.",
    midias: [
      { tipo: "imagem", src: "assets/projetos/rebranding-bruna-paz/capa.jpg" },
    ],
  },
  {
    slug: "branding-bruna-paz",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "Bruna Paz",
    ano: "2025",
    capa: "assets/projetos/branding-bruna-paz/capa.jpg",
    descricao: "Materiais de comunicação e ativações da marca — convites, stickers e peças sazonais.",
    midias: [
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/capa.jpg" },
    ],
  },
  {
    slug: "wonder-oculos",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "Wonder Óculos",
    ano: "2025",
    capa: "assets/projetos/wonder-oculos/capa.jpg",
    descricao: "Campanha Les Recifenses — direção de arte que transforma o vocabulário visual de Recife em linguagem de marca.",
    midias: [
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/capa.jpg" },
    ],
  },
  {
    slug: "moma-house",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "MoMa House",
    ano: "2026",
    capa: "assets/projetos/moma-house/capa.jpg",
    descricao: "Direção de arte para as frentes da marca — conteúdo, imersões e comunicação institucional.",
    midias: [
      { tipo: "imagem", src: "assets/projetos/moma-house/capa.jpg" },
    ],
  },
  {
    slug: "house-of-rufino",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "House of Rufino",
    ano: "2025",
    capa: "assets/projetos/house-of-rufino/capa.jpg",
    descricao: "Identidade e direção de arte com referências de renda, bordado e memória afetiva de mesa posta.",
    midias: [
      { tipo: "imagem", src: "assets/projetos/house-of-rufino/capa.jpg" },
    ],
  },
  {
    slug: "six-wowness",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "Six Wowness Club",
    ano: "2026",
    capa: "assets/projetos/six-wowness/capa.jpg",
    descricao: "Direção de arte para o clube e suas unidades — sistema visual, eventos e comunicação members only.",
    midias: [
      { tipo: "imagem", src: "assets/projetos/six-wowness/capa.jpg" },
    ],
  },
  {
    slug: "mob-studio",
    categoria: "design",
    rotulo: "Branding",
    nome: "MOB Studio",
    ano: "2024",
    capa: "assets/projetos/mob-studio/capa.jpg",
    descricao: "Peças de identidade e comunicação para marcas do estúdio — do food ao beauty.",
    midias: [
      { tipo: "imagem", src: "assets/projetos/mob-studio/capa.jpg" },
    ],
  },
  {
    slug: "camisetas-ladder",
    categoria: "design",
    rotulo: "Camisetas",
    nome: "Ladder Brand",
    ano: "2025",
    capa: "assets/projetos/camisetas-ladder/capa.jpg",
    descricao: "Estampas autorais para a marca — ilustração e tipografia com referência retrô americana.",
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
    ano: "2025",
    capa: "assets/projetos/ensaio-brazilian-camp/capa.jpg",
    descricao: "Ensaio fotográfico em três atos que traduz ícones do imaginário camp brasileiro em imagem de moda.",
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
    ano: "2025",
    capa: "assets/projetos/dir-criativa-bruna-paz/capa.jpg",
    descricao: "Direção criativa de campanhas da marca — conceito, locação e construção de imagem.",
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
    ano: "2025",
    capa: "assets/projetos/caba/capa.jpg",
    descricao: "Direção criativa de campanha masculina — alfaiataria leve em diálogo com a arquitetura.",
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
    ano: "2025",
    capa: "assets/projetos/cleber-lima/capa.jpg",
    descricao: "Produção de moda para editorial em preto e branco — silhuetas gráficas e acessórios como pontuação.",
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
    ano: "2025",
    capa: "assets/projetos/mare-suspensa/capa.jpg",
    descricao: "Editorial de moda à beira-mar — texturas metálicas e drapeados contra a paisagem da maré.",
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
    ano: "2025",
    capa: "assets/projetos/moda-bruna-paz/capa.jpg",
    descricao: "Produção de moda para campanha da marca — looks, locação e narrativa de coleção.",
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
    ano: "2025",
    capa: "assets/projetos/ensaio-autoral/capa.jpg",
    descricao: "Ensaio autoral de estúdio.",
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
    ano: "2025",
    capa: "assets/projetos/amazing-model/capa.jpg",
    descricao: "Produção de moda para material de polaroides de agência.",
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
    ano: "2025",
    capa: "assets/projetos/moda-ladder/capa.jpg",
    descricao: "Produção de moda para editorial da marca",
    midias: [
      { tipo: "imagem", src: "assets/projetos/moda-ladder/capa.jpg" },
    ],
    creditos:
`Fotografia: Thompson Diego @_thompsondiego
Modelos: Sabryna Oliveira @sabrynaoliveirra / Julia Voll @julialira.voll`,
  },
];
