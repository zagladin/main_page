const olderExperience = document.getElementById('older');

function scrollToElement() {
  const scrollY = olderExperience.offsetTop;
  window.scroll({
    top: scrollY,
    left: 0,
    behavior: 'smooth',
  });
}

function printCV() {
  window.print();
}

function up() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function delayBeforeTheScroll() {
  setTimeout(() => scrollToElement(), 100);
}

olderExperience.addEventListener('click', () => delayBeforeTheScroll());

