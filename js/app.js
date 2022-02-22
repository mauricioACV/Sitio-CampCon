const typed = new Typed(".typed", {
  strings: [
    '<span class="typed_text2">Seguridad Industrial y Demarcaciones Viales</span> <br><span class="typed_text3">Compromiso y calidad asegurada.</span>',
  ],
  stringsElement: "#cadenas-texto", // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
  startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 30000, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: false, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: "", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
});

window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  const optionsMenu = ["HOME", "ACERCA DE", "SERVICIOS", "GALERÍA", "CONTACTO"];
  const mobileOptions = document.getElementById("mobile-options");
  const checkMobile = document.getElementById("check-mobile");

  mobileOptions.addEventListener("click", (e) => {
    const clickInOption = optionsMenu.includes(e.target.textContent);
    if (clickInOption) {
      checkMobile.checked = false;
    }
  });

  const navDeskContainer = this.document.getElementById("navDeskContainer");
  navDeskContainer.addEventListener("click", (e) => {
    const [classTarget] = Array.from(e.target.classList);
    const textTarget = e.target.textContent;

    console.log(classTarget);

    if (clickInOption(textTarget) && classTarget !== undefined) {
      removeActiveClassFromNav();
      e.target.classList.add("active-section");
    }
  });
});

function clickInOption(option) {
  const optionsMenu = ["HOME", "ACERCA DE", "SERVICIOS", "GALERÍA", "CONTACTO"];
  return optionsMenu.includes(option);
}

function removeActiveClassFromNav() {
  const navMenu = document.getElementsByClassName("nav-desk-item");
  Array.from(navMenu).forEach((item) => {
    item.classList.remove("active-section");
  });
}
