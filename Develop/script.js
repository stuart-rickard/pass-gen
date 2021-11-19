const minCharsInPassword = 8;
const maxCharsInPassword = 128;
const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_'];

// objects and array of these objects to allow "for" loops to be used for creating the password
var lowerCaseLettersObject = {
  name: "lower case letter",
  includeInPassword: false,
  arrayOfCharacters: lowerCaseLetters
}
var upperCaseLettersObject = {
  name: "upper case letter",
  includeInPassword: false,
  arrayOfCharacters: upperCaseLetters
}
var numbersZeroToNineObject = {
  name: "number",
  includeInPassword: false,
  arrayOfCharacters: numbersZeroToNine
}
var specialCharactersObject = {
  name: "special character",
  includeInPassword: false,
  arrayOfCharacters: specialCharacters
}
var passwordSource = [lowerCaseLettersObject, upperCaseLettersObject, numbersZeroToNineObject, specialCharactersObject];

var passwordLength = false; // false is a placeholder until user enters a valid password length; while it is false the user is prompted for a password length
var numberOfTypesOfCharacters = 0; // used to confirm that user has selected at least one type of character and to reserve space for required characters
var characterSet = []; // working array to use as source for password characters
var passwordArray = ["t", "e", "s", "t"]; // TODO make empty later // working array to hold randomly-selected password characters
var passwordString = ""; // this is the string for the outputted password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var resetVariables = function() {
  passwordLength = 10;  //reset to false
  characterSet = [];
  passwordArray = [];
  passwordString = "";
  for (let i = 0; i < passwordSource.length; i++) {
    passwordSource[i].includeInPassword = false;
  }
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
      window.alert("Your entry was not \"Y\" or \"N.\"  Please try again.");
      return false;
    }
  }
};

// validates entry is an integer within a min/max range, returns error message otherwise
var validateEntryNumberWithMinMax = function(string, min, max) {
  var x = Number(string);
  if ((x >= min && x <=max) && x == Math.round(x)) {
    return x;
  }
  else {
    textForPromptNumberOfCharacters = "Your last entry for the number of characters in the password didn't work.  Please enter a whole number (integer) between " + min + " and " + max + ".";
    return false;
  }
};

// TODO add response to cancel choice

                                  // using the typesOfCharactersToInclude global variable arraty, validates at least one character type has been included for the password generator
                                  // var atLeastOneCharacterTypeSelected = function() {
                                  //   if (typesOfCharactersToInclude.includes(true)) {
                                  //     return true;
                                  //   }
                                  //   else {
                                  //     return false;
                                  //   }
                                  // };


var textForPromptNumberOfCharacters = "Please indicate the number of characters needed for the password (minimum of " + minCharsInPassword + "; maximum of " + maxCharsInPassword + ")";

// var promptNumberOfCharacters = function() {
//   window.prompt(textForPromptNumberOfCharacters);
//};

// Assignment code here

var generatePassword = function() {

// intro statement to user;
  // getPasswordLength;

// XXXXXXXXXXXXXXXXXXXX reset passwordLength to false
//   while (passwordLength == false) {
//     passwordLength = window.prompt(textForPromptNumberOfCharacters);
//     passwordLength = validateEntryNumberWithMinMax(passwordLength, minCharsInPassword, maxCharsInPassword);
//   }  


// getTypesOfCharacters; TODO: how many include in passwords do we have?
var firstTime = true;
while (numberOfTypesOfCharacters == 0) {
  // message to user about what's coming up / error message if they've already tried before
  if (firstTime) {
    window.alert("Next you will choose types of characters to include in your password; you must include at least one type!");
    firstTime = false;
  } else {
    window.alert("Please include at least one type of character in your password!");
  };
  
  // for all types of chars
  var textToPromptTypeOfCharacter = null;
  for (i = 0; i < passwordSource.length; i++ ) {
    textToPromptTypeOfCharacter = "Would you like to include " + passwordSource[i].name.toUpperCase() + "S in your password?  Please respond with \"Y\" or \"N.\""
    var typeChoice = false; // this variable is used to repeat the prompt if an invalid entry is given, so it needs to be reset with each for loop
    while (typeChoice == false) {
      typeChoice = window.prompt(textToPromptTypeOfCharacter);
      // get validated y or n
      typeChoice = validateEntryYorN(typeChoice);
      // if y, increment number of required chars and update include that type
      if (typeChoice == "y") {
        passwordSource[i].includeInPassword = true;
        numberOfTypesOfCharacters++;
      };
    }
  }
  
}
//    fillPasswordArray();
// for each type of char
for (i = 0; i < passwordSource.length; i++ ) {
  // if char is included
  if (passwordSource[i].includeInPassword == true) {
    // add that string to the pull-from string
    characterSet = characterSet.concat(passwordSource[i].arrayOfCharacters);
  }
};

debugger;
  // for password length - number of required
  for (i = 0; i < (passwordLength - numberOfTypesOfCharacters); i++ ) {

    // pull values into the working string from the pull-from string
    passwordArray.push(getRandomElementFromArray(characterSet));
  };
    // for each type of char
    // if char is included 
    // splice in required chars

 passwordString = passwordArray.join("");
 return passwordString;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  //resetVariables(); // added to get ready for next password request and also so that the password is not sitting around in memory for hackers
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
                            var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
                                  
                  window.alert("This is an alert! JavaScript is running!");
                             

    */
   
   
   