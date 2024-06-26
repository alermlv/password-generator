const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const firstPasswordEl = document.querySelector("#first-password");
const secondPasswordEl = document.querySelector("#second-password");

let firstPassword = "";
let secondPassword = "";

function generatePasswords() {
  firstPassword = getRandomPassword();
  secondPassword = getRandomPassword();
  updatePasswords();
}

function getRandomPassword() {
  let password = "";
  for (let i = 0; i < 15; i++) {
    let randomNumber = getRandomNumber(1, characters.length - 1);
    password += characters[randomNumber];
  }
  return password;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updatePasswords() {
  firstPasswordEl.textContent = firstPassword;
  secondPasswordEl.textContent = secondPassword;
}

async function copyPassword(obj) {
  try {
    await navigator.clipboard.writeText(obj.textContent);
  } catch (error) {
    console.log("Failed to copy password:", error);
  }
}
