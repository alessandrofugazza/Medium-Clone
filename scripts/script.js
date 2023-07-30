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

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}

let ms = document.querySelectorAll("svg>g>g>g:has(g[opacity])");

ms.forEach(m => {
  Math.random() > 0.5
    ? ((m.style.opacity = "1"), Math.random() > 0.5 ? m.classList.add("animate") : null)
    : (m.style.opacity = "0");
});

const animatedMs = document.querySelectorAll(".animate");
const animatedMsLen = animatedMs.length;
const randomOrder = [];
for (let i = 0; i < animatedMsLen; i++) {
  randomOrder.push(i);
}

shuffle(randomOrder);

let disappearing = true;
let i = 0;

setInterval(() => {
  if (disappearing) {
    animatedMs[randomOrder[i]].style.opacity = "0";
    i++;
    if (i === animatedMsLen - 1) {
      disappearing = false;
    }
  } else {
    animatedMs[randomOrder[i]].style.opacity = "1";
    i--;
    if (i === 0) {
      disappearing = true;
    }
  }
}, 100);
