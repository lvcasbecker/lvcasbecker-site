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
  { slug: "moda",     nome: "Produção" },
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
      { tipo: "video", src: "assets/projetos/brazilian-camp-ed01/00.mp4", poster: "assets/projetos/brazilian-camp-ed01/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/01.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/02.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/03.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/04.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/05.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/06.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/07.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/08.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/09.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/10.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/11.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/12.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/13.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/14.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/15.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/16.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/17.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/18.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/19.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/20.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/21.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/22.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/23.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/24.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/25.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/26.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/27.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/28.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/29.jpg", largura: "sozinha" },    
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/30.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/31.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/32.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/33.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/34.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/35.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/36.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/37.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/38.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/39.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/40.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/41.jpg", largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/brazilian-camp-ed01/42.jpg", largura: "sozinha" },
    ],
  },
  {
    slug: "bossa",
    categoria: "design",
    rotulo: "Rebranding",
    nome: "BOSSA",
    ano: "2026",
    capa: "assets/projetos/bossa/capa.jpg",
    descricao: "Rebranding de uma marca de roupa feminina construído sobre uma tensão: fazer conviver a elegância da bossa carioca e a informalidade do borogodó recifense sem que uma anule a outra. A identidade foi desenhada para se comportar como as próprias peças da marca — um sistema com base fixa e aplicação flexível, que atravessa contextos diferentes sem trocar de personagem. O trabalho abrange a construção da marca, o sistema tipográfico, a paleta e o desdobramento da linguagem nos pontos de contato.",
    midias: [
      { tipo: "video", src: "assets/projetos/bossa/00.mp4", poster: "assets/projetos/bossa/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/bossa/01.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/06.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/07.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/08.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/09.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/10.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/11.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/12.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/13.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/bossa/14.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "rebranding-bruna-paz",
    categoria: "design",
    rotulo: "Rebranding",
    nome: "Bruna Paz Brand",
    ano: "2025",
    capa: "assets/projetos/rebranding-bruna-paz/capa.jpg",
    descricao: "Rebranding de uma marca de moda feminina feito por dentro: fui diretor de arte da Bruna Paz por dois anos, e a marca que existe hoje foi construída nesse convívio diário, não num entregável fechado. A cor foi mantida como o ativo mais forte da identidade, e é por ela que a marca é reconhecida muitas vezes antes mesmo do nome. O gesto ficou concentrado no logotipo: afinar o peso da fonte e abrir o espacejamento entre as letras, atualizando o tom sem romper com o que o público já reconhecia. Um rebranding de baixa amplitude e efeito duradouro, que segue sustentando toda a comunicação da marca.",
    midias: [
      { tipo: "video", src: "assets/projetos/rebranding-bruna-paz/00.mp4", poster: "assets/projetos/rebranding-bruna-paz/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/rebranding-bruna-paz/01.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/rebranding-bruna-paz/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/rebranding-bruna-paz/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/rebranding-bruna-paz/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/rebranding-bruna-paz/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/rebranding-bruna-paz/06.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/rebranding-bruna-paz/07.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/rebranding-bruna-paz/08.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "six-wowness",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "Six Wowness Club",
    ano: "2026",
    capa: "assets/projetos/six-wowness/capa.jpg",
    descricao: "Direção de arte da primeira e única academia seis estrelas do Brasil. Cada unidade ganhou identidade própria dentro do mesmo sistema, individualizando o branding de cada uma para uma experiência e estética diferente, sem que nenhuma deixasse de ser reconhecida como Six. A marca opera em três registros que convivem: o SIX itálico condensado, o selo Wowness Club em serifa e a assinatura por extenso de cada unidade. O trabalho cobria o online e o offline na mesma mesa, toda decisão estética da marca passava por essa coordenação.",
    midias: [
      { tipo: "video", src: "assets/projetos/six-wowness/00.mp4", poster: "assets/projetos/six-wowness/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/01.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/06.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/07.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/08.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/09.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/10.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/11.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/12.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/13.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/14.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/15.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/16.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/17.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/six-wowness/18.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "branding-acervocampbr",
    categoria: "design",
    rotulo: "Identidade Visual",
    nome: "Brazilian Camp @acervocampbr",
    ano: "2025",
    capa: "assets/projetos/branding-acervocampbr/capa.jpg",
    descricao: "Identidade visual do @acervocampbr, arquivo de curadoria do camp brasileiro que criei em 2021 e mantenho sozinho desde então — concepção, pesquisa, design e conteúdo. A identidade resolve a tese do próprio projeto em um gesto: uma Helvetica bold, sóbria e institucional, atravessada por uma caligrafia de floreios excessivos. O rigor e o exagero na mesma assinatura, sem que um corrija o outro. O sistema se desdobra em um monograma B que carrega os mesmos floreios, uma paleta de rosa choque, verde e roxo saturados sobre neutros, e um tratamento de imagem em halftone grosseiro que reprocessa material de arquivo da TV, das revistas e da internet brasileira. É por essa identidade visual que o projeto é reconhecido hoje.",
    midias: [
      { tipo: "video", src: "assets/projetos/branding-acervocampbr/00.mp4", poster: "assets/projetos/branding-acervocampbr/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/01.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/06.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/07.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/08.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/09.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/10.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/11.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-acervocampbr/12.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "branding-bruna-paz",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "Bruna Paz Brand",
    ano: "2025",
    capa: "assets/projetos/branding-bruna-paz/capa.jpg",
    descricao: "Direção de arte da Bruna Paz ao longo de dois anos, a camada que faz a marca viver depois do rebranding, A identidade definiu o que é fixo e a direção de arte cuidou do que muda: cada coleção, cada data, cada drop pede um vocabulário próprio sem que a marca deixe de se reconhecer.O trabalho cobriu campanha e lançamento de coleção, grids de Instagram e stories, convites e peças de evento, cartelas de adesivo, papelaria e material de loja.",
    midias: [
      { tipo: "video", src: "assets/projetos/branding-bruna-paz/00.mp4", poster: "assets/projetos/branding-bruna-paz/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/06.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/07.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/08.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/09.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/branding-bruna-paz/10.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "divino-k",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "Divino K",
    ano: "2026",
    capa: "assets/projetos/divino-k/capa.jpg",
    descricao: "Direção de arte da Divino K, incluindo peças gráficas que dão voz a coleção e também montando a estética de acordo com o tom de voz da marca, clássica, sacra e feminina",
    midias: [
      { tipo: "video", src: "assets/projetos/divino-k/00.mp4", poster: "assets/projetos/divino-k/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/divino-k/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/divino-k/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/divino-k/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/divino-k/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/divino-k/06.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/divino-k/07.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/divino-k/08.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/divino-k/09.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "wonder-oculos",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "Wonder",
    ano: "2025",
    capa: "assets/projetos/wonder-oculos/capa.jpg",
    descricao: "Direção de arte da Wonder, ótica recifense. O trabalho parte de uma premissa: óculos é objeto de rosto, então a comunicação tinha que ser sobre cara — cara de gente, cara de cidade. O resultado é uma expressividade quase de cartoon, mas feita de gente real.  Uma marca de ótica falando de Recife com o humor e a língua de Recife. O sistema se desdobra em campanha, grids de Instagram, catálogo de modelos, comunicados de loja e material de ponto de venda.",
    midias: [
      { tipo: "video", src: "assets/projetos/wonder-oculos/00.mp4", poster: "assets/projetos/wonder-oculos/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/01.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/06.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/07.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/08.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/09.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/10.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/11.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/wonder-oculos/12.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "varanda",
    categoria: "design",
    rotulo: "Dir. de Arte",
    nome: "Varanda do Picanha",
    ano: "2026",
    capa: "assets/projetos/varanda/capa.jpg",
    descricao: "Design do Varanda do Picanha, hamburgueria recifense que existe desde 2017. A marca já tinha um lettering de floreio forte, e o trabalho foi construir em volta dele um sistema que se ligasse com o tom da casa, a linha editorial funciona por afirmação curta, o sistema se desdobra em campanha, grids de Instagram, cartela de adesivos, cardápio e material de loja.",
    midias: [
      { tipo: "video", src: "assets/projetos/varanda/00.mp4", poster: "assets/projetos/varanda/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/varanda/01.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/varanda/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/varanda/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/varanda/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/varanda/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/varanda/06.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/varanda/07.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/varanda/08.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "studios-recife",
    categoria: "design",
    rotulo: "Design",
    nome: "Studios Recife",
    ano: "2026",
    capa: "assets/projetos/studios/capa.jpg",
    descricao: "Design para os Studios, grupo de cinco estúdios: AERA Pilates, TONUS Gym, JAB House, RACE Bootcamp e VIDYA Studio. O desafio é o de qualquer sistema de sub-marcas, cada estúdio precisa de personalidade própria o bastante para que alguém escolha entre eles, e proximidade o bastante para que se reconheça o grupo por trás. Todas as marcas compartilham a mesma lógica de assinatura, mas cada uma recebe paleta, ilustração e tom de voz próprios.O trabalho é contínuo e cobre identidade visual de eventos, cards e grids de Instagram, cartelas de adesivos, papelaria, banners e materiais de uso interno.",
    midias: [
      { tipo: "video", src: "assets/projetos/studios/00.mp4", poster: "assets/projetos/studios/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/studios/01.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/06.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/07.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/08.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/09.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/10.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/11.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/12.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/13.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/studios/14.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "moma-house",
    categoria: "design",
    rotulo: "Design",
    nome: "Moma House",
    ano: "2026",
    capa: "assets/projetos/moma-house/capa.jpg",
    descricao: "Design para a Moma House, agência de moda, cultura e branding onde atuo como designer e diretor de arte. O trabalho é de conteúdo: posts e carrosséis de Instagram que são a cara pública da agência. A marca se apoia num azul único e saturado, usado sem meio-termo — ora como fundo chapado, ora como duotone que engole a foto inteira — e num monograma M de traço líquido, com terminações em gota, que funciona como assinatura em qualquer peça. A partir daí o sistema se permite trocar de registro conforme o assunto: serifa fina em deco para o institucional, gordinha arredondada de cartaz dos anos 70 para o descontraído, strass e caligrafia para o que tem glamour. O eixo que mantém tudo junto é o azul, o monograma e um certo deboche de referência pop — a maçã de Nova York coberta de adesivo, o alvo de mira, a parede de Marilyns. Cada post se comporta como cartaz: uma ideia, uma pergunta curta, um gesto gráfico forte.",
    midias: [
      { tipo: "video", src: "assets/projetos/moma-house/00.mp4", poster: "assets/projetos/moma-house/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/moma-house/01.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/moma-house/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/moma-house/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/moma-house/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/moma-house/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/moma-house/06.jpg", largura: "dupla" },
    ],
  },
  {
    slug: "camisetas-ladder",
    categoria: "design",
    rotulo: "Camisetas",
    nome: "Ladder Brand",
    ano: "2025",
    capa: "assets/projetos/camisetas-ladder/capa.jpg",
    descricao: "Design de camisetas para a Ladder, marca de roupa. O trabalho parte de uma ideia simples: camiseta estampada é objeto de pertencimento antes de ser peça de roupa — a pessoa veste porque quer dizer de onde ela é. Daí as estampas assumirem formato de pôster, com a composição ocupando o peito inteiro ou as costas inteiras, em vez do logo discreto no canto. A coleção Having a Ladder Summer trabalha o preto e branco estourado em alto contraste, com as fotos reduzidas a mancha e grão de fotocópia, e a tipografia em caixa baixa solta na lateral, respirando. Já a Burger Gang vai pro lado oposto: monocromia vermelha, lettering script com contorno, pin-up ilustrada e quadriculado de lanchonete, tudo na chave da camiseta de promoção de bar dos anos 50 — com a graça de aplicar o mesmo capricho de uma peça de alfaiataria a um visual que finge ser descartável. O trabalho cobriu concepção das estampas, arte final para serigrafia e as peças de divulgação das coleções.",
    midias: [
      { tipo: "video", src: "assets/projetos/camisetas-ladder/00.mp4", poster: "assets/projetos/camisetas-ladder/00-poster.jpg", autoplay: true, largura: "sozinha" },
      { tipo: "imagem", src: "assets/projetos/camisetas-ladder/01.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/camisetas-ladder/02.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/camisetas-ladder/03.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/camisetas-ladder/04.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/camisetas-ladder/05.jpg", largura: "dupla" },
      { tipo: "imagem", src: "assets/projetos/camisetas-ladder/06.jpg", largura: "dupla" },
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
