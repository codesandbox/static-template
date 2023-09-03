// Array con los datos de los países que clasificaron al Mundial 2018
const paises = [
  {
    numero: 1,
    nombre: "Rusia",
    bandera:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAs1JREFUeNrtmL9v00AUx32xkdsQkgapSwcG/wkgxMKEBBVqVf6ETu0KgYGhFQuwIUQWGBF/AmsGBoYuiIkOnaz8AYgMUZp0cF5folSxT/fu3vlSJUh30sX23dX+fN+P86uDwDffnJpQDXa73R08vACAe3hsLpnxH/ZfyPIxSZKOUUCapu+EEEeraG0U8QZFvCUFIPwewn/HnjWbzYtarRZUKpXqMqHH4/F5v98Per1ejJchitjOe6JSUCPEy8kR4Uf1er26bPgpIDI0Go3qxKB5RqUAbPcnP2j5aNXCB5kgz0gJqM5Ux6smIAzDm7PT2zoB/13zArwAL8AL8AKcmvKNe/Ln77yAUlZV5AU9Cow10gRIA3c2mAKevf5pqAoLFSIxfvVooOdmJyDdaz5ffM7Ztwc8ASZoW3jVfQDApoy2CyHTveUbmuBVFpXDSLa+Uw5wrSAP6eC5FrX1VGTrMhpKD+9qfXD3ACOhGfBy4rpYv3QOKMOnJLyL9a08QIeBOaHpHDJvsdfnAQ249l1hsSkU17vmgMaRumQ1wet2KSjtgQDKhZMDvC50dBHhnAMm8LLwwAxnpYDPg6/cuOK9QyRaIObmfytVc3D1w6yF7mZdu8wGfmIUBSrdoHo7WoYQtyABVjzx4Usw2H2BA4sEIcE18Eov6N8LkTWo5Va0CPgFegDYc2xwBrz1/wP8HABmJQucWsMAD44eMJbYYI7F0vDXtAvRDwB2gvPgwT0HzNYAq53JGh5434WG07Xx2mhyk3ynoUFtcZPVbS1/qz6YnfVIAUKI39PjoyeZGZiwOBjEyOAceBwXj58WGKkQ+oT9Ybx/GA8DGGQ/OlEwGsb6qAFiCOh1QIcaSOvE+voo2t7N1vYP4hzj3OgyU5qmH1Dlq1X8jIgeep8kyXF+LJQXtdvtTqvVOkURW3i5if3GkrnPsZ8g/HOE/xL45tti2yV1xVBlY9S95wAAAABJRU5ErkJggg==",
    puntos: 20,
    enlace:
      "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Rusia"
  },
  {
    numero: 2,
    nombre: "Uruguay",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/200px-Flag_of_Uruguay.svg.png",
    puntos: 17,
    enlace:
      "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Uruguay"
  },
  {
    numero: 3,
    nombre: "Francia",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png",
    puntos: 17,
    enlace:
      "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Francia"
  },
  {
    numero: 4,
    nombre: "Croacia",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/200px-Flag_of_Croatia.svg.png",
    puntos: 16,
    enlace:
      "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Croacia"
  },
  {
    numero: 5,
    nombre: "Brasil",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/200px-Flag_of_Brazil.svg.png",
    puntos: 15,
    enlace:
      "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Brasil"
  },
  {
    numero: 6,
    nombre: "Suecia",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/200px-Flag_of_Sweden.svg.png",
    puntos: 14,
    enlace:
      "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Suecia"
  },
  {
    numero: 7,
    nombre: "Bélgica",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/200px-Flag_of_Belgium_%28civil%29.svg.png",
    puntos: 13,
    enlace:
      "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_B%C3%A9lgica"
  },
  {
    numero: 8,
    nombre: "Inglaterra",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/200px-Flag_of_England.svg.png",
    puntos: 12,
    enlace:
      "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Inglaterra"
  },
  {
    numero: 9,
    nombre: "Portugal",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/200px-Flag_of_Portugal.svg.png",
    puntos: 12,
    enlace:
      "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Portugal"
  },
  {
    numero: 10,
    nombre: "Argentina",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png",
    puntos: 11,
    enlace:
      "https://es.wikipedia.org/wiki/Selecci%C3%B3n_de_f%C3%BAtbol_de_Argentina"
  }
];

// Función para agregar filas a la tabla
function agregarFilas() {
  const tbody = document.querySelector("tbody");
  paises.forEach((pais) => {
    const fila = `
          <tr>
              <td>${pais.numero}</td>
              <td>${pais.nombre}</td>
              <td><img class="flag" src="${pais.bandera}" alt="Bandera de ${pais.nombre}"></td>
              <td>${pais.puntos}</td>
              <td><a href="${pais.enlace}" target="_blank">Ver más</a></td>
          </tr>
      `;
    tbody.innerHTML += fila;
  });
}

// Llama a la función para agregar las filas cuando la página se carga
window.onload = agregarFilas;
