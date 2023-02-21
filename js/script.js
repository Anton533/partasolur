///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnMobNavEl = document.querySelector(".menu-btn");
const headerEl = document.querySelector(".header");
const mainNavEl = document.querySelector(".main-nav");
const mainNavList = document.querySelector(".main-nav-list");

window.addEventListener(
  "resize",
  debounce(function () {
    const headerHeight = headerEl.clientHeight;
    const mainNavContentHeight = mainNavEl.clientHeight;
    const availableSpace = mainNavContentHeight - 2 * headerHeight;

    mainNavEl.classList.toggle(
      "main-nav--center",
      availableSpace > mainNavList.scrollHeight
    );
  }, 500)
);

btnMobNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  btnMobNavEl.classList.toggle("active");
});

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
