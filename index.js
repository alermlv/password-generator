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

const passwordEl = document.querySelector("#password");
const passwordLengthEl = document.querySelector("#password-length");

let password = "";
let passwordLength = 15;

function increaseLength() {
  if (passwordLength >= 20) return;
  passwordLength += 1;
  updatePasswordLength();
}

function decreaseLength() {
  if (passwordLength <= 1) return;
  passwordLength -= 1;
  updatePasswordLength();
}

function updatePasswordLength() {
  passwordLengthEl.textContent = passwordLength;
}

function generatePassword() {
  password = getRandomPassword();
  updatePassword();
}

function getRandomPassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = getRandomNumber(1, characters.length - 1);
    password += characters[randomNumber];
  }
  return password;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updatePassword() {
  passwordEl.textContent = password;
}

async function copyPassword() {
  try {
    await navigator.clipboard.writeText(password);
  } catch (error) {
    console.log("Failed to copy password:", error);
  }
}
