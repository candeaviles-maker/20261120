let menu = document.querySelector("#menu-shows");
let detalle = document.querySelector("#detalle-show");

fetch("js/shows.json")
  .then(response => response.json())
  .then(shows => {
    shows.forEach(show => {
      menu.innerHTML += `
        <button class="btn btn-danger text-start" onclick="mostrarShow('${show.artista}')">
          ${show.artista}
        </button>
      `;
    });

    mostrarShow(shows[0].artista);
  });

function mostrarShow(artista) {
  fetch("js/shows.json")
    .then(response => response.json())
    .then(shows => {
      const show = shows.find(show => show.artista === artista);

      detalle.innerHTML = `
        <div class="card-body p-4 p-md-5">
          <p class="text-danger text-uppercase fw-bold mb-2">${show.lugar}</p>
          <h2 class="mb-3 card-title">${show.artista}</h2>
          <img src="${show.imagen}" class="card-img-top img-fluid mb-4" alt="${show.artista}">
          <p class="card-text">${show.descripcion}</p>
          <p class="card-text fw-bold">${show.fecha}</p>
        </div>
        <div class="card-footer">
          <a href="${show.link}" target="_blank" class="btn btn-outline-danger">Más info</a>
        </div>
      `;
    });
}