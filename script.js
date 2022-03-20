const olderExperience = document.getElementById('older');
const elementToPrint = document.getElementById('to-print');

function scrollToElement() {
  const scrollY = olderExperience.offsetTop;
  window.scroll({
    top: scrollY,
    left: 0,
    behavior: 'smooth',
  });
}

function saveToPDF() {
  console.log('SAVE TO PDF');
  window.html2pdf(elementToPrint);
}

function delayBeforeTheScroll() {
  setTimeout(() => scrollToElement(), 100);
}

olderExperience.addEventListener('click', () => delayBeforeTheScroll());

