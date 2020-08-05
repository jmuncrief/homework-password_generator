// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var options = {};

  options.length = parseInt(prompt("How long would you like your password to be?"));
  if (options.length < 8 || options.length > 128) {
    alert("Alert goes here.");
    return;
  }
  options.special = confirm("Would you like to include special characters?");
  options.numeric = confirm("Would you like to include numeric characters?");
  options.uppercase = confirm("Would you like to include uppercase characters?");
  options.lowercase = confirm("Would you like to include lowercase characters?");

  for (var i = 0; i < options.length; i++) {

    if (options.special) {

    }

    if (options.numeric) {

    }

    if (options.uppercase) {

    }

    if (options.lowercase) {

    }

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
