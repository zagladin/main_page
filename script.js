const { jsPDF } = window.jspdf;

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
  window.html2canvas = html2canvas;
    const doc = new jsPDF('p', 'pt', 'a4');

    doc.html(elementToPrint, {
      html2canvas: {
        width: 230,
        scale: 0.56,
      },
      callback: function(pdf) {
        pdf.save("Zagladin-CV.pdf");
      }
    });
  // const worker = window.html2pdf();
  // const params = {
  //   margin:       0,
  //   filename:     'Zagladin-CV.pdf',
  //   image:        { type: 'jpeg', quality: 1 },
  //   html2canvas:  { scale: 2 },
  //   pagebreak: { mode: ['avoid-all', 'css', 'legacy'], after: ['.contacts'] },
  //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  // };
  //
  // worker
  // .set(params)
  // .from(elementToPrint)
  // .toContainer()
  // .toCanvas()
  // .toImg()
  // .toPdf()
  // .save()
}

function delayBeforeTheScroll() {
  setTimeout(() => scrollToElement(), 100);
}

olderExperience.addEventListener('click', () => delayBeforeTheScroll());

