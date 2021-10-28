// Assignment code here

//Add special chatacters
var specialcharacter = ["!", "@","etc"]
var numberscharacters = ["1", "2". etc]
var lowercasecharacters = ["a" etc...]
var uppercasecharacters = ["A" etc...]

function passwordoptions () {
var characterlength = parseInt(
  prompt("How long would you like your password to be?")
)
if (Number.isNaN(characterlength)) {
  alert ("Try Again")
  return null
}
if (characterlength <8) {
  alert ("Try Again")
  return null
}
if (characterlegnth >128) {
  alert ("try again")
  return null 
}
// add fpr the rest of the variables (see above)
var specialcharacterchoicelist = confirm(
  "Click Ok to include your special characters"
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
