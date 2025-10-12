export function createCatCard(gato) {
  const tagsHTML = gato.tags.map(tag => 
    `<span class="badge ${tag.cor}" role="listitem">${tag.texto}</span>`
  ).join('');

  return `
    <article class="card" aria-labelledby="gato-${gato.id}">
        <img src="${gato.imagem}" alt="Foto de ${gato.nome}." loading="lazy">
        <div class="card-content">
            <h3 id="gato-${gato.id}">${gato.nome}</h3>
            <p>${gato.descricao}</p>
            <div class="card-tags" role="list" aria-label="Características de ${gato.nome}">
                ${tagsHTML}
            </div>
        </div>
    </article>
  `;
}