window.addEventListener("scroll", reveal);

function reveal() {
  const revealElements = document.querySelectorAll(".reveal");
  for (let i = 0; i < revealElements.length; i++) {
    let windowsHeight = window.innerHeight;
    let revealTop = revealElements[i].getBoundingClientRect().top;
    let revealPoint = 150;
    if (revealTop < windowsHeight - revealPoint) {
      revealElements[i].classList.add("animate__animated", "animate__backInLeft");
      revealElements[i].classList.remove("v-hidden");
    } else {
      revealElements[i].classList.remove("animate__animated", "animate__backInLeft");
      revealElements[i].classList.add("v-hidden");
    }
  }
}