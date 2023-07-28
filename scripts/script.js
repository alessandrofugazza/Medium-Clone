let scrolled = false;
const header = document.querySelector("header");

addEventListener("scroll", () => {
  if (window.scrollY > 358 && !scrolled) {
    header.classList.add("scrolled-header");
    scrolled = true;
  } else if (window.scrollY <= 358 && scrolled) {
    header.classList.remove("scrolled-header");
    scrolled = false;
  }
});
