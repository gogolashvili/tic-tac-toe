const choiceButtons = document.querySelectorAll(".btn-box");
const playButtons = document.querySelectorAll(".play-btn");
const home = document.querySelector("#home");
const board = document.querySelector("#board");

let player1 = "x";
let mode = "cpu";
let turn = "x";
let freeButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let xArray = [];
let oArray = [];
let winnerCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const activateChoice = (icon) => {
  if (icon === "x") {
    choiceButtons[0].classList.add("active");
    choiceButtons[1].classList.remove("active");
    player1 = "x";
  } else {
    choiceButtons[1].classList.add("active");
    choiceButtons[0].classList.remove("active");
    player1 = "o";
  }
};

const onHoverEffect = () => {
  for (let index = 0; index < freeButtons.length; index++) {
    const playButtonIndex = freeButtons[index];
    if (turn == "x") {
      playButtons[playButtonIndex].classList.add("xHover");
      playButtons[playButtonIndex].classList.remove("oHover");
    } else {
      playButtons[playButtonIndex].classList.add("oHover");
      playButtons[playButtonIndex].classList.remove("xHover");
    }
  }
};

const startGame = (modeParam) => {
  home.style.display = "none";
  board.style.display = "flex";
  document.body.style.alignItems = "flex-start";
  mode = modeParam;
  onHoverEffect();
};
