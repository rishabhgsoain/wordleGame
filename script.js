let board = document.getElementById("square");
let keys = document.querySelectorAll(".keyboard-row button");
let numberOfGuess = 6;
let guessRemaining = numberOfGuess;
let currentGuess = [];
let nextLetter = 0;
let word = ["A", "B", "C", "D", "E"];
// console.log(word[1]);
function createSquares() {
  for (let index = 0; index < 30; index++) {
    let ele = document.createElement("div");
    ele.classList.add("ele");
    ele.setAttribute("id", index + 1);
    board.appendChild(ele);
  }
}
createSquares();

let i = 1;

document.addEventListener("keyup", (ev) => {
  if (guessRemaining === 0) return;

  let keyPress = String(ev.key);

  if (keyPress === "Backspace" && nextLetter != 0) {
    deleteLetter();
    return;
  }

  if (keyPress === "Enter") {
    submitGuess();
    return;
  } else insertLetter(keyPress);
});

function insertLetter(keyPress) {
  if (nextLetter == 5) submitGuess();

  keyPress = keyPress.toUpperCase();
  let box = document.getElementById(i);
  box.textContent = keyPress;
  box.classList.add("filledBox");
  i++;
  currentGuess.push(keyPress);
  // console.log(nextLetter);
  nextLetter += 1;
}

function submitGuess() {
  if (currentGuess.length != 5) {
    alert("Not Enough Letters");
    return;
  }
  for (let i = 0; i < 5; i++) {
    if (word[i] != currentGuess[i]) {
      guessRemaining -= 1;
      currentGuess = [];
      nextLetter = 0;
      console.log(`Wrong Ans you have  ${guessRemaining} chances remaining`);
      return;
    }
  }
  console.log("Correct Ans");
}
