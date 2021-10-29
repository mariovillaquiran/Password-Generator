// Assignment code here

var specialcharacter = ["!()?[]`~;:!@#$%^&*+=c"]
var numberscharacters = ["0123456789"]
var lowercasecharacters = ["abcdefghijklmnopqrstuvwxyz"]
var uppercasecharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

//Write password
function passwordoptions () {

//vars for password
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
// vars for criteria 
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

//if for criteria 
if (lowCase) {
password = lowercasecharacters
}

if (upCase) {
  password = uppercasecharacters
  }

  if (numbers) {
    password = numberscharacters
    }

    if (specialChars) {
      password = specialcharacter
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
