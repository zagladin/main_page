const errorStatus = document.getElementsByClassName("error")[0];
const errorMessage = document.getElementsByClassName("message")[0];
const contacts = document.getElementsByClassName("contact")[0];

const errorStatusText = "700 No Content Yet";
const errorMessageText = "No available information";

window.onload = function runningString() {
  filler(errorStatus, errorStatusText, 200);
  setTimeout(() => {
    filler(errorMessage, errorMessageText, 150);
  }, 3600);

  setTimeout(() => {
    contacts.style.animation = "show 1s linear";
    contacts.style.opacity = 1;
  }, 7200);
};

function filler(element, text, delay) {
  const textToArray = text.split("");
  textToArray.forEach((letter, i) => {
    setTimeout(() => {
      element.innerHTML += letter;
    }, i * delay);
  });
}
