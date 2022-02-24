window.addEventListener("scroll", reveal);

function reveal() {
  const revealElements = document.querySelectorAll(".reveal");
  for (let i = 0; i < revealElements.length; i++) {
    let windowsHeight = window.innerHeight;
    let revealTop = revealElements[i].getBoundingClientRect().top;
    let revealPoint = 100;
    if (revealTop < windowsHeight - revealPoint) {
      revealElements[i].classList.add("active");
    } else {
      revealElements[i].classList.remove("active");
    }
  }
}