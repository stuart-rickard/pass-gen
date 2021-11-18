const lowerCaseLetters = [ 'a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_'];

const minCharsInPassword = 8;
const maxCharsInPassword = 128;


// This array tracks which types to include as follows: lower case, upper case, numbers, and specials
var typesOfCharactersToInclude = [false,false,false,false];

var passwordLength = 8;

var characterSet = [];
var passwordArray = [];
var passwordString = "";

var resetVariables = function() {
  characterSet = [];
  passwordArray = [];
  passwordString = "";
  typesOfCharactersToInclude = [false,false,false,false];
}

// generates random number between two numbers, inclusive
var getRandomNumberFromTo = function(min, max) {
  var x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}            

// pulls an element at random from an array
var getRandomElementFromArray = function(array) {
  var lastElementIndex = array.length - 1;
  var randomIndex = getRandomNumberFromTo(0, lastElementIndex);
  return array[randomIndex];
}

// splice in random location
var spliceValueAtRandomIndex = function(value, array) {
  var lastElementIndex = array.length - 1;
  var randomIndex = getRandomNumberFromTo(0, lastElementIndex);
  array = array.splice(randomIndex, 0, value);
}

// validates "y" or "n" entry, returns error message otherwise
var validateEntryYorN = function(string) {
  if (string.toLowerCase() == "y" || string.toLowerCase() == "yes") {
    return "y";
  }
  else {
    if (string.toLowerCase() == "n" || string.toLowerCase() == "no") {
      return "n";
    }
    else {
      return "Please enter either \"Y\" or \"N\"";
    }
  }
};

// validates entry is an integer within a min/max range, returns error message otherwise
var validateEntryNumberWithMinMax = function(string, min, max) {
  var x = Number(string);
  if ((x >= min && x <=max) && x == Math.round(x)) {
    passwordLength = x;
  }
  else {
      return "Please enter a whole number (integer) between " + min + " and " + max + ".";
    }
};

// using the typesOfCharactersToInclude global variable arraty, validates at least one character type has been included for the password generator
var atLeastOneCharacterTypeSelected = function() {
  if (typesOfCharactersToInclude.includes(true)) {
    return true;
  }
  else {
    return false;
  }
};

var promptNumberOfCharacters = window.prompt('Please indicate the number of characters needed for the password (minimum of 8; maximum of 128)');

validateEntryNumberWithMinMax(minCharsInPassword,maxCharsInPassword,promptNumberOfCharacters);


/*
                            var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
                if (promptFight === 'skip' || promptFight === 'SKIP') {
                  
                  var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
                  
                  window.alert("This is an alert! JavaScript is running!");
                  
                  
obtainValidPasswordLength
  while password length is not OK
    get password length
obtainTypesOfChars
  while typesofchars is not OK
    get types of chars
generatePassword
    set up big array
      fill it up except for any required
    splice random the required ones
        length of password
        requirements of password
      fill in (length - required) characters using whole list
      splice in required characters at random locations
presentPassword
    */



// Assignment code here

//     get criteria
//     generate password
var generatePassword = function() {
  // fill in required characters first
  //   fill in remaining characters using whole list
  var generatedPassword = "this is what we print";
  return generatedPassword;
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
