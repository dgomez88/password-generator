
// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^" < "&", "*", "()"];

var passwordLength = "";
var passwordSpecialCharacters;
var passwordNumeric;
var passwordUpperCase;
var passwordLowerCase;

function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password? Choose between 8-128?"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8-128 characters Try again");
    var passwordLength = (prompt("How many characters would you like your password? Choose between 8-128?"));
  }

  alert("Your password will have " + passwordLength + " characters");

  var passwordSpecialCharacters = confirm("Click OK to have SPECIAL CHARACTERS Click CANCEL to not have SPECIAL CHARACTERS");
  var passwordNumeric = confirm("Click OK to have NUMERIC characters Click CANCEL to not have NUMERIC characters");
  var passwordLowerCase = confirm("Click OK to have LOWERCASE characters Click CANCEL to not have LOWERCASE characters");
  var passwordUpperCase = confirm("Click Ok to have UPPERCASE characters Click CANCEL to not have UPPERCASE characters");

  var generateSelectCharacters = []

  if (passwordSpecialCharacters) {
    generateSelectCharacters = generateSelectCharacters.concat(specialCharacters)
  }

  if (passwordNumeric) {
    generateSelectCharacters = generateSelectCharacters.concat(numeric)
  }

  if (passwordLowerCase) {
    generateSelectCharacters = generateSelectCharacters.concat(lowercase)
  }

  if (passwordUpperCase) {
    generateSelectCharacters = generateSelectCharacters.concat(uppercase)
  }

  console.log(generateSelectCharacters)

  var generateRandomPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    generateRandomPassword = generateRandomPassword + generateSelectCharacters[Math.floor(Math.random() * generateSelectCharacters.length)];
  }
  return generateRandomPassword;

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
generateBtn.addEventListener("click", writePassword)

