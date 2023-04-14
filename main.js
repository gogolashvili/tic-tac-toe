const choiceButtons = document.querySelectorAll(".btn-box");

const activateChoice = (icon) => {
  if (icon === "x") {
    choiceButtons[0].classList.add("active");
    choiceButtons[1].classList.remove("active");
  } else {
    choiceButtons[1].classList.add("active");
    choiceButtons[0].classList.remove("active");
  }
};
