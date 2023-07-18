document.addEventListener("DOMContentLoaded", function () {
  const botonComenzar = document.getElementById("comenzar");
  const gameContainer = document.getElementById("gameContainer");
  const mensajeBienvenida = document.getElementById("bienvenida");
  const playerNameInput = document.getElementById("playerName");
  const guardarNombre = document.getElementById("guardarNombre");
  const reglas = document.getElementById("reglas");
  const comenzarJuego = document.getElementById("comenzarJuego");
  const gamePlayContainer = document.getElementById("gamePlayContainer");
  const intentoNumero = document.getElementById("intentoNumero");
  const intentoNumeroBton = document.getElementById("intentoNumeroBton");
  const hint = document.getElementById("hint");
  const result = document.getElementById("result");
  const btonRango = document.getElementById("btonRango");
  const rangoNumerico = document.getElementById("rangoNumerico");
  const rangoNumericoMinInput = document.getElementById("rangoNumericoMin");
  const rangoNumericoMaxInput = document.getElementById("rangoNumericoMax");
  const reiniciar = document.getElementById("reiniciar");
  const felicitacion = document.getElementById("felicitacion");
  const pistasContainer = document.getElementById("pistasContainer");
  const preguntaContainer = document.getElementById("preguntaContainer");
  const preguntaTexto = document.getElementById("preguntaTexto");
  const respuestaInput = document.getElementById("respuestaInput");
  const respuestaBtn = document.getElementById("respuestaBtn");
  const barraRadiactividad = document.getElementById("barraRadiactividad");
  const open = document.getElementById("open");
  const modal_container = document.getElementById("modal_container");
  const close = document.getElementById("close");
  const resultadosLista = document.getElementById("resultadosLista");

  // LISTA DE EVENTOS
  botonComenzar.addEventListener("click", function () {
    gameContainer.style.display = "block";
    botonComenzar.style.display = "none";
    mensajeBienvenida.textContent =
      "¡Bienvenido al juego de Dipli versión 5.0!";
  });

  guardarNombre.addEventListener("click", function () {
    const nombreJugador = decodeURIComponent(playerNameInput.value);
    if (nombreJugador !== "") {
      mensajeBienvenida.textContent = `¡HOLA!, ${nombreJugador}!`;
      playerNameInput.parentNode.style.display = "none";
      reglas.style.display = "block";
    }
  });

  comenzarJuego.addEventListener("click", function () {
    reglas.style.display = "none";
    rangoNumerico.style.display = "block";
  });

  btonRango.addEventListener("click", rangoNum);

  intentoNumeroBton.addEventListener("click", function () {
    const guess = parseInt(intentoNumero.value);
    if (!isNaN(guess)) {
      checkGuess(guess);
    }
  });

  open.addEventListener("click", () => {
    mostrarResultados();
    modal_container.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal_container.classList.remove("show");
  });

  reiniciar.addEventListener("click", function () {
    felicitacion.style.display = "none";
    reiniciar.style.display = "none";
    intentoNumeroBton.style.display = "block";
    ocultarPregunta();
    initializeGame();
    intentoNumeroBton.disabled = false;
    animateRainfall();
    open.style.display = "none";
    resultados = [];
    resultadosLista.innerHTML = "";
  });

  respuestaBtn.addEventListener("click", function () {
    const respuesta = respuestaInput.value.toLowerCase();

    const respuestaCorrecta = preguntas[indicePregunta].respuesta;

    if (respuesta === respuestaCorrecta) {
      pistasContainer.innerHTML +=
        "Respuesta correcta. Puedes ingresar otro número.";
      intentoNumeroBton.disabled = false;
    } else {
      pistasContainer.innerHTML +=
        "Respuesta incorrecta. No puedes ingresar otro número.";
      intentoNumeroBton.disabled = "none";
      reiniciar.style.display = "block";
      open.style.display = "block";
      actualizarRadioactividad();
    }

    preguntaContainer.style.display = "none";
    respuestaInput.value = "";
  });

  //VARIABLES DEL JUEGO:
  let numeroDipli;
  let unValorMin;
  let unValorMax;
  let nivelRadioactividad = 0;
  let pistaMostrada = false;
  let resultados = [];
  const preguntas = [
    {
      pregunta: "¿Cómo se abrevia HyperText Markup Language?",
      respuesta: "HTML"
    },
    { pregunta: "¿En qué año se fundó Google?", respuesta: "1998" },
    { pregunta: "¿En qué año se creó JavaScript?", respuesta: "1995" }
  ];

  const indicePregunta = Math.floor(Math.random() * preguntas.length);
  const preguntaSeleccionada = preguntas[indicePregunta].pregunta;

  //LIBRERIA DE FUNCIONES:
  function rangoNum() {
    const valorNumMin = parseInt(rangoNumericoMinInput.value);
    const valorNumMax = parseInt(rangoNumericoMaxInput.value);

    if (
      isNaN(valorNumMin) ||
      isNaN(valorNumMax) ||
      valorNumMin >= valorNumMax
    ) {
      mensajeBienvenida.textContent = "Por favor, ingresa un rango válido.";
      return;
    }

    unValorMin = valorNumMin;
    unValorMax = valorNumMax;
    initializeGame();
    rangoNumerico.style.display = "none";
    gamePlayContainer.style.display = "block";
  }

  function initializeGame() {
    gamePlayContainer.style.display = "none";
    numeroDipli = Math.floor(
      Math.random() * (unValorMax - unValorMin + 1) + unValorMin
    );
    hint.textContent = "";
    result.textContent = "";
    intentoNumero.value = "";
    rangoNumerico.style.display = "block";
    pistasContainer.textContent = "";
    rangoNumericoMinInput.value = "";
    rangoNumericoMaxInput.value = "";

    reiniciarRadioactividad();
  }

  function mostrarPregunta(pregunta) {
    preguntaTexto.textContent = "";
    preguntaTexto.textContent += pregunta;
    preguntaContainer.style.display = "block";
  }

  function actualizarBarraRadiactividad(nivel, remPorIntento) {
    const anchoMaximo = 200;
    const anchoNivel = (Math.min(nivel, 500) / 500) * anchoMaximo;

    const nivelElemento = document.createElement("div");
    nivelElemento.className = "nivel";
    nivelElemento.style.width = anchoNivel + "px";

    const remTexto = document.createElement("div");
    remTexto.className = "rem-texto";
    remTexto.textContent = `+${remPorIntento.toFixed(2)} REM`;

    nivelElemento.appendChild(remTexto);

    barraRadiactividad.innerHTML = "";
    barraRadiactividad.appendChild(nivelElemento);
  }

  function actualizarRadioactividad() {
    const maxRadioactividad = 500;
    const diferencia = Math.abs(numeroDipli - parseInt(intentoNumero.value));
    const porcentajeREM = Math.floor(
      (diferencia / (unValorMax - unValorMin)) * 100
    );
    const remPorIntento = porcentajeREM;

    if (nivelRadioactividad >= maxRadioactividad) {
      pistasContainer.innerHTML =
        "¡Has alcanzado el nivel máximo de radioactividad (500 REM)! ¡EXPLOSION NUCLEAR DE DIPLI! El juego ha terminado.";
      result.textContent = `El número era ${numeroDipli}.`;
      intentoNumeroBton.disabled = true;
      open.style.display = "block";
      reiniciar.style.display = "block";
    } else {
      nivelRadioactividad += porcentajeREM;
      if (nivelRadioactividad > maxRadioactividad) {
        nivelRadioactividad = maxRadioactividad;
      }

      actualizarBarraRadiactividad(nivelRadioactividad, remPorIntento);

      if (nivelRadioactividad >= maxRadioactividad) {
        bonus();
      }
    }
  }

  function reiniciarRadioactividad() {
    nivelRadioactividad = 0;
    actualizarBarraRadiactividad(nivelRadioactividad, 0);
  }

  function ocultarPregunta() {
    preguntaContainer.style.display = "none";
  }

  function pistas(numeroDipli) {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        if (numeroDipli % 5 === 0) {
          pistasContainer.innerHTML = " El número es múltiplo de 5. \n";
        } else {
          pistasContainer.innerHTML = " El número no es múltiplo de 5. \n";
        }
        break;
      case 1:
        if (numeroDipli % 2 === 0) {
          pistasContainer.innerHTML = " El número es par. \n";
        } else {
          pistasContainer.innerHTML = " El número es impar.\n";
        }
        break;
      case 2:
        if (numeroDipli % 3 === 0) {
          pistasContainer.innerHTML = " El número es múltiplo de 3. \n";
        } else {
          pistasContainer.innerHTML = " El número no es múltiplo de 3. \n";
        }
        break;
      default:
        pistasContainer.innerHTML = " No hay pistas para ti \n";
    }
  } //Funcion swicht

  function bonus() {
    const randomChance = Math.random();
    if (randomChance < 0.5) {
      pistasContainer.innerHTML =
        " Ganaste un BONUS. Responde la siguiente pregunta: <br>";
      intentoNumeroBton.disabled = true;
      mostrarPregunta(preguntaSeleccionada);
    } else {
      pistasContainer.innerHTML = " Lo siento no ganaste un bonus. \n";
      intentoNumeroBton.style.display = "none";
      reiniciar.style.display = "block";
      open.style.display = "block";
      result.textContent = `El número era ${numeroDipli}.`;
    }
  }

  function checkGuess(guess) {
    if (guess < unValorMin || guess > unValorMax) {
      hint.textContent = `Por favor, ingresa un número dentro del rango ${unValorMin} - ${unValorMax}.`;
    } else if (guess === numeroDipli) {
      pistasContainer.style.display = "none";
      felicitacion.style.display = "block";
      result.textContent = `El número era ${numeroDipli}.`;
      reiniciar.style.display = "block";
      open.style.display = "block";
      intentoNumeroBton.style.display = "none";
      hint.textContent = "";
    } else {
      const diferencia = Math.abs(numeroDipli - guess);
      resultados.push(parseInt(diferencia));
      hint.textContent = "";
    }

    if (!pistaMostrada) {
      pistas(numeroDipli);
      pistaMostrada = true;
    }

    actualizarRadioactividad();
  } //Alternativas

  function mostrarResultados() {
    for (let i = 0; i < resultados.length; i++) {
      const diferencia = resultados[i];
      const item = document.createElement("li");
      item.textContent = `Intento ${i + 1}: ${diferencia} de diferencia`;
      resultadosLista.appendChild(item);
    }

    modal_container.style.display = "block";
  } //Repetitivas
});

function animateRainfall() {
  const mainContainer = document.getElementById("gameContainer");
  const numRaindrops = 40;

  for (let i = 0; i < numRaindrops; i++) {
    const raindropContainer = document.createElement("div");
    raindropContainer.className = "raindrop-container";

    const raindrop = document.createElement("div");
    raindrop.className = "raindrop";

    if (Math.random() < 0.5) {
      raindrop.classList.add("large");
    }

    const x = Math.random() * window.innerWidth;
    raindropContainer.style.left = `${x}px`;

    const delay = Math.random() * 1;
    raindrop.style.animationDelay = `${delay}s`;

    raindropContainer.appendChild(raindrop);
    mainContainer.appendChild(raindropContainer);

    setTimeout(() => {
      raindropContainer.remove();
    }, 3000);
  }
} //Funcion animacion lluvia Dipli
