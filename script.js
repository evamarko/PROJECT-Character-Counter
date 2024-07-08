const textArea = document.querySelector(".message");
const counterParagraph = document.querySelector(".text-counter");

textArea.addEventListener("input", () => {
  const lettersCount = textArea.value.length;

  if (lettersCount >= 80) {
    textArea.style.color = "red";
    counterParagraph.style.color = "red";
  } else if (lettersCount >= 40 && lettersCount < 80) {
    textArea.style.color = "orange";
    counterParagraph.style.color = "orange";
  } else if (lettersCount <= 5) {
    textArea.style.color = "green";
    counterParagraph.style.color = "green";
  } else {
    textArea.style.color = "white";
    counterParagraph.style.color = "white";
  }

  counterParagraph.textContent = lettersCount;
});
