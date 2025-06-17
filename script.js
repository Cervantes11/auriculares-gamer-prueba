const articulos = [
  {
    titulo: "Top 5 auriculares gamer calidad/precio (2025)",
    imagen: "https://via.placeholder.com/800x400?text=Auriculares+Gamer+1",
    enlace: "articulos/articulo1.html"
  },
  {
    titulo: "Auriculares inalámbricos vs con cable: ¿cuál conviene para jugar?",
    imagen: "https://via.placeholder.com/800x400?text=Auriculares+Inalambricos",
    enlace: "articulos/articulo2.html"
  },
  {
    titulo: "Cómo elegir auriculares para juegos FPS competitivos",
    imagen: "https://via.placeholder.com/800x400?text=FPS+Gaming+Headsets",
    enlace: "articulos/articulo3.html"
  },
  {
    titulo: "Los mejores auriculares con micrófono para streamers",
    imagen: "https://via.placeholder.com/800x400?text=Streaming+Headsets",
    enlace: "articulos/articulo4.html"
  },
  {
    titulo: "¿Qué marcas recomiendan los gamers profesionales en 2025?",
    imagen: "https://via.placeholder.com/800x400?text=Marcas+Gamer+2025",
    enlace: "articulos/articulo5.html"
  }
];

const contenedor = document.getElementById("articulos-container");

articulos.forEach(articulo => {
  const div = document.createElement("div");
  div.className = "articulo";
  div.innerHTML = `
    <h2>${articulo.titulo}</h2>
    <img src="${articulo.imagen}" alt="${articulo.titulo}">
    <a href="${articulo.enlace}">Leer más</a>
  `;
  contenedor.appendChild(div);
});
