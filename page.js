//
let section = document.querySelector(".data-skills");
let spans = document.querySelectorAll(".progress span");
//
//
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    console.log("jgjek");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
//
//
let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".meni-box .number");
let start = false;
//
//
window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 100) {
    if (!start) {
      numbers.forEach((num) => startCount(num));
    }
    start = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//
//
