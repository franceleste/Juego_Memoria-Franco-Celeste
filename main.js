// Mandar a estebansaul@itscipolletti.edu.ar

const card = document.querySelectorAll(".container");

let hayCardVolteada = false;
let bloquearTablero = false;
let primeraCarta = null;
let segundaCarta = null;
let contadorPuntos = document.querySelector(".contador");
let puntos = 0;

card.forEach((tarjeta) => {
  const cartaRandom = Math.floor(Math.random() * 12);
  tarjeta.style.order = cartaRandom;

  tarjeta.addEventListener("click", () => {
    if (bloquearTablero) return;
    if (tarjeta === primeraCarta) return;

    tarjeta.classList.toggle("volteada");

    if (!hayCardVolteada) {
      hayCardVolteada = true;
      primeraCarta = tarjeta;
    } else {
      hayCardVolteada = false;
      segundaCarta = tarjeta;

      if (primeraCarta.dataset.nombre === segundaCarta.dataset.nombre) {
        primeraCarta.style.pointerEvents = "none";
        segundaCarta.style.pointerEvents = "none";
        puntos += 15;
        contadorPuntos.textContent = "Puntuación: " + puntos;
        primeraCarta = null;
        segundaCarta = null;
        return contadorPuntos;
      } else {
        bloquearTablero = true;

        setTimeout(() => {
          primeraCarta.classList.remove("volteada");
          segundaCarta.classList.remove("volteada");

          bloquearTablero = false;
          primeraCarta = null;
          segundaCarta = null;
        }, 1000);
      }
    }
  });
});

console.log(contadorPuntos);
