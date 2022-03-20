const olderExperience = document.getElementById('older');

function scrollToElement() {
  const scrollY = olderExperience.offsetTop;
  window.scroll({
    top: scrollY,
    left: 0,
    behavior: 'smooth',
  });
}

function delayBeforeTheScroll() {
  setTimeout(() => scrollToElement(), 100);
}

olderExperience.addEventListener('click', () => delayBeforeTheScroll());

