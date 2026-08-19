/* Funções compartilhadas do site — você não precisa mexer aqui. */

function montarHeader() {
  const logo = document.getElementById('logo');
  if (CONFIG.logo) {
    logo.innerHTML = `<img src="${CONFIG.logo}" alt="${CONFIG.nome}">`;
  } else {
    logo.innerHTML = `${CONFIG.nome}<span>.</span>`;
  }
}

function pegarParam(nome) {
  return new URLSearchParams(location.search).get(nome);
}

function nomeDaCategoria(slug) {
  const c = CATEGORIAS.find(c => c.slug === slug);
  return c ? c.nome : '';
}

function renderMidia(m, altBase) {
  if (m.tipo === 'imagem') {
    return `<img src="${m.src}" alt="${altBase}" loading="lazy">`;
  }
  if (m.tipo === 'video') {
    return `<video src="${m.src}" controls playsinline preload="metadata"></video>`;
  }
  if (m.tipo === 'youtube') {
    return `<div class="midia-embed"><iframe src="https://www.youtube-nocookie.com/embed/${m.id}" title="${altBase}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
  }
  if (m.tipo === 'vimeo') {
    return `<div class="midia-embed"><iframe src="https://player.vimeo.com/video/${m.id}?dnt=1" title="${altBase}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
  }
  return '';
}
