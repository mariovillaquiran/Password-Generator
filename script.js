// Assignment code here

var specialcharacter = ["!()?[]`~;:!@#$%^&*+=c"]
var numberscharacters = ["0123456789"]
var lowercasecharacters = ["abcdefghijklmnopqrstuvwxyz"]
var uppercasecharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

function passwordoptions () {
var characterlength = parseInt(
  prompt("How long would you like your password to be? Enter a number between 8 and 128")
)
if (Number.isNaN(characterlength)) {
  alert ("Please Try Again")
  return null
}
if (characterlength <8) {
  alert ("Please Try Again")
  return null
}
if (characterlegnth >128) {
  alert ("Please try again")
  return null 
}
// add fpr the rest of the variables (see above)
var specialcharacterchoicelist = confirm(
  "Click Ok to include your special characters"
)
}

var numberscharacterschoicelist = confirm(
  "Click Ok to include your number characters"
)
}

var lowercasecharacterschoicelist = confirm(
  "Click Ok to include your lowercase characters"
)
}
var uppercasecharacterschoicelist = confirm(
  "Click Ok to include your uppercase characters"
)
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
