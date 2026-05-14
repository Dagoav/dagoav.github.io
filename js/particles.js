particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#233D4D" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.4, // Súbelo un poco para verlas, o déjalo en 0 si quieres que aparezcan de la nada
      "random": false
    },
    "size": {
      "value": 5,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#233D4D",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble" // Aquí activas el modo
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    /* --- ESTA ES LA PARTE QUE TE FALTABA --- */
    "modes": {
      "bubble": {
        "distance": 200,    // A qué distancia del mouse reaccionan
        "size": 8,         // Qué tan grandes se vuelven
        "duration": 2,      // Cuánto dura el efecto
        "opacity": 1,       // ¡IMPORTANTE! Si tu opacidad base era 0, aquí debes ponerla en 1
        "speed": 3
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});