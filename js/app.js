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
