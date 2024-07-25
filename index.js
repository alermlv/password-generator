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
const preferencesEls = document.querySelectorAll(".preference-button");

let password = "";
let passwordLength = 15;
let passwordPreferences = [];
let filteredCharacters = [];

function increaseLength() {
  if (passwordLength >= 20) return;
  passwordLength += 1;
  updatePasswordLengthEl();
}

function decreaseLength() {
  if (passwordLength <= 1) return;
  passwordLength -= 1;
  updatePasswordLengthEl();
}

function updatePasswordLengthEl() {
  passwordLengthEl.textContent = passwordLength;
}

function setPreferences(obj) {
  obj.classList.toggle("selected");
  updatePasswordPreferences();
  setFilteredCharacters();
}

function updatePasswordPreferences() {
  passwordPreferences = [];
  preferencesEls.forEach((element) => {
    if (element.classList.contains("selected")) {
      passwordPreferences.push(element.textContent);
    }
  });
}

function setFilteredCharacters() {
  filteredCharacters = [];
  passwordPreferences.forEach((element) => {
    if (element === "Numbers") {
      characters.map(function (char) {
        if (char.match(/\d/)) filteredCharacters.push(char);
      })
    }
    if (element === "Lowercase Characters") {
      characters.map(function (char) {
        if (char.match(/[a-z]/)) filteredCharacters.push(char);
      })
    }
    if (element === "Uppercase Characters") {
      characters.map(function (char) {
        if (char.match(/[A-Z]/)) filteredCharacters.push(char);
      })
    }
    if (element === "Symbols") {
      characters.map(function (char) {
        if (char.match(/[`~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) filteredCharacters.push(char);
      })
    }
  });
}

function generatePassword() {
  password = getRandomString(filteredCharacters);
  updatePasswordEl();
}

function getRandomString(filteredCharacters) {
  let string = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomInteger = getRandomInteger(1, filteredCharacters.length - 1);
    string += filteredCharacters[randomInteger];
  }
  return string;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function updatePasswordEl() {
  passwordEl.textContent = password;
}

async function copyPassword() {
  try {
    await navigator.clipboard.writeText(password);
  } catch (error) {
    console.log("Failed to copy password:", error);
  }
}
