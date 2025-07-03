const letterContainer = document.querySelector("#letterContainer");
const wordContainer = document.querySelector("#wordContainer");
const failCounter = document.querySelector("#failCounter");
const picture = document.querySelector("#picture");
const LoseScreen = document.querySelector(".LoseScreen");
const WinScreen = document.querySelector(".WinScreen");
const restartButton = document.querySelector("#restartButton");

let failCount = 0;
let words = ["wild lotus", "fire serpent", "howl", "asiimov", "inheritance"];
let filteredLetters = [];
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const randomIndex = Math.floor(Math.random() * words.length);
const currentWord = words[randomIndex];

function showLetter() {
  for (let i = 0; i < letters.length; i++) {
    const newLetter = document.createElement("button");
    newLetter.classList.add("letter");
    newLetter.id = i.toString();
    newLetter.innerText = letters[i];
    letterContainer.appendChild(newLetter);

    newLetter.addEventListener("click", function () {
      newLetter.disabled = true
      filteredLetters.push(letters[i]);
      if (!currentWord.includes(letters[i])) {
        failCount++;
        failCounter.innerHTML = failCount;
        picture.src = `./images/${failCount}.png`;
        if (failCount === 7) {
          LoseScreen.style.visibility = "visible";
        }
      }
      showWord();
    });
  }
}

function showWord() {
  let word = "";
  for (let i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === " " || filteredLetters.includes(currentWord[i])) {
      word = word + currentWord[i];
    } else {
      word = word + "_";
    }
  }
  wordContainer.innerText = word;
  if (currentWord === word) {
    WinScreen.style.visibility = "visible";
  }
}

restartButton.addEventListener("click", function () {
  window.location.reload();
});

showWord();
showLetter();
