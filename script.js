// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Pull single random index from specified array
function getRand(arr) {
  var randOut = arr[(Math.floor(Math.random() * arr.length))];
  return randOut;
}

// Main password generation function
function generatePassword() {

  // debugger;

  // Un-ediatble arrays from which random characters are pulled
  const arrSpecial = "!@#$%^&*";
  const arrAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const arrNum = "0123456789";

  var pass = "";

  var options = {};

  // Prompt user for desired password length
  options.length = parseInt(prompt("How long would you like your password to be?"));

  // Catch length requests outside min/max length parameters
  if (options.length < 8 || options.length > 128 || isNaN(options.length)) {
    alert("Please select a value between 8 and 128 (inclusive).");
    return "";
  }

  // Prompt user for character-inclusion options
  options.special = confirm("Would you like to include special characters?");
  options.numeric = confirm("Would you like to include numeric characters?");
  options.uppercase = confirm("Would you like to include uppercase characters?");
  options.lowercase = confirm("Would you like to include lowercase characters?");

  // Guard against impossible password
  if (!options.special && !options.numeric && !options.uppercase && !options.lowercase) {
    alert("Please select at least one option.")
    return "";
  }

  while (pass.length < options.length) {

    var optionOut = null;

    var optionSelect = (Math.floor(Math.random() * 4));

    if (options.special && optionSelect === 0) {
      var optionOut = getRand(arrSpecial);
    }
    if (options.numeric && optionSelect === 1) {
      var optionOut = getRand(arrNum);
    }
    if (options.uppercase && optionSelect === 2) {
      var optionOut = getRand(arrAlphabet).toUpperCase();
    }
    if (options.lowercase && optionSelect === 3) {
      var optionOut = getRand(arrAlphabet);
    }

    if (optionOut !== null) {
      pass = pass + optionOut;
    } 
  }
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



  // Loop through selected options, generating 1 random character per pass
  // for (var i = 0; i < options.length; i++) {

    // Clears optionOut variable at start of loop
    // var optionOut = null;

    // Generates random number 0-3 used to select option at random
    // Repeats each time new character is generated
    // var optionSelect = (Math.floor(Math.random() * 4));

    // if statements selected to run based off combination of two parameters
    // Only 1 if statement runs per run of for loop
    // if (options.special && optionSelect === 0) {
      //   var optionOut = getRand(arrSpecial);
      // }

      // if (options.numeric && optionSelect === 1) {
        //   var optionOut = getRand(arrNum);
        // }

        // if (options.uppercase && optionSelect === 2) {
          //   var optionOut = getRand(arrAlphabet).toUpperCase();
          // }

          // if (options.lowercase && optionSelect === 3) {
            //   var optionOut = getRand(arrAlphabet);
            // }
            //   // Append generated character to previously generated characters
            //   var pass = pass + optionOut;
            // }

            // // Generated password returned as output of generatePassword function
            // return pass;
