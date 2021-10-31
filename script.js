// Assignment code here

var specialcharacter = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numberscharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercasecharacters = [
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
var uppercasecharacters = [
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
];

//Write password
function passwordoptions() {
  //vars for password
  var characterlength = parseInt(
    prompt(
      "How long would you like your password to be? Enter a number between 8 and 128"
    )
  );
  if (Number.isNaN(characterlength)) {
    alert("Please Try Again");
    return null;
  }
  if (characterlength < 8) {
    alert("Please Try Again");
    return null;
  }
  if (characterlength > 128) {
    alert("Please try again");
    return null;
  }
  // vars for criteria
  var specialcharacterchoicelist = confirm(
    "Click Ok to include your special characters"
  );
  var numberscharacterschoicelist = confirm(
    "Click Ok to include your number characters"
  );

  var lowercasecharacterschoicelist = confirm(
    "Click Ok to include your lowercase characters"
  );

  var uppercasecharacterschoicelist = confirm(
    "Click Ok to include your uppercase characters"
  );
  var passwordoptions = {
    characterlength: characterlength,
    specialcharacterchoicelist: specialcharacterchoicelist,
    numberscharacterschoicelist: numberscharacterschoicelist,
    lowercasecharacterschoicelist: lowercasecharacterschoicelist,
    uppercasecharacterschoicelist: uppercasecharacterschoicelist,
  };
  return passwordoptions;
}

function randomnumber(arr) {
  var randomindex = Math.floor(Math.random() * arr.length);
  var randomelement = arr[randomindex];

  return randomelement;
}

function generatePassword() {
  var options = passwordoptions();
  var results = [];
  var possiblecharacters = [];
  var guaranteedcharaters = [];

  if (options.specialcharacterchoicelist) {
    possiblecharacters = possiblecharacters.concat(specialcharacter);
    guaranteedcharaters.push(randomnumber(specialcharacter));
  }

  if (options.uppercasecharacterschoicelist) {
    possiblecharacters = possiblecharacters.concat(uppercasecharacters);
    guaranteedcharaters.push(randomnumber(uppercasecharacters));
  }

  if (options.lowercasecharacterschoicelist) {
    possiblecharacters = possiblecharacters.concat(lowercasecharacters);
    guaranteedcharaters.push(randomnumber(lowercasecharacters));
  }

  if (options.numberscharacterschoicelist) {
    possiblecharacters = possiblecharacters.concat(numberscharacters);
    guaranteedcharaters.push(randomnumber(numberscharacters));
  }

  for (let i = 0; i < options.characterlength; i++) {
    var possiblecharacter = randomnumber(possiblecharacters);
    results.push(possiblecharacter);
  }
  for (let i = 0; i < guaranteedcharaters.length; i++) {
    results[i] = guaranteedcharaters[i];
  }
  return results.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
