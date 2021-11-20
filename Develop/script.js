const minCharsInPassword = 8;
const maxCharsInPassword = 128;
const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

// character-type objects
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
//array of character-type objects; this allows "for" loops to be used
var passwordSource = [lowerCaseLettersObject, upperCaseLettersObject, numbersZeroToNineObject, specialCharactersObject];

var passwordLength = false; // false is a placeholder until user enters a valid password length; while it is false the user is prompted for a password length
var numberOfTypesOfCharacters = 0; // used to confirm that user has selected at least one type of character and to reserve space for required characters
var characterSet = []; // working array to use as source for password characters
var passwordArray = []; // working array to hold the password characters as they are generated
var passwordString = ""; // this is the string for the password output

var resetVariables = function() {
  passwordLength = false;
  numberOfTypesOfCharacters = 0;
  characterSet = [];
  passwordArray = [];
  passwordString = "";
  for (let i = 0; i < passwordSource.length; i++) {
    passwordSource[i].includeInPassword = false;
  }
}

// Get references to the #generate button and #password textarea
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// generates random number between two numbers, inclusive
var getRandomNumberFromTo = function(min, max) {
  var x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}            

// returns a random element from an array
var getRandomElementFromArray = function(array) {
  var lastElementIndex = array.length - 1;
  var randomIndex = getRandomNumberFromTo(0, lastElementIndex);
  return array[randomIndex];
}

// splices a given value into a random location in a given array; this is used to ensure that required characters are always included in the output
var spliceValueAtRandomIndex = function(value, array) {
  var lastElementIndex = array.length - 1;
  var randomIndex = getRandomNumberFromTo(0, lastElementIndex);
  array = array.splice(randomIndex, 0, value);
}

// validates "y" or "n" entry, alerts user with an error message otherwise
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


// provides instructions to user if cancel button is clicked in response to a window.prompt
var userClickedCancel = function() {
  window.alert("You clicked \"Cancel\"; if you wish to restart, please refresh this page; if you wish to exit altogether, please close this browser window.  If you click \"OK,\" we'll continue from where we were.");
}

// updates passwordLength global variable with a validated number
var getPasswordLength = function() {
  
  // this subfunction validates entry is an integer within a min/max range, alerts user with an error message otherwise
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

  var textForPromptNumberOfCharacters = "Please indicate the number of characters needed for the password (minimum of " + minCharsInPassword + "; maximum of " + maxCharsInPassword + ")";
  while (passwordLength == false) {
    passwordLength = window.prompt(textForPromptNumberOfCharacters);
    if (passwordLength == null) {
      passwordLength = "will not be validated";
      userClickedCancel();
    };
    passwordLength = validateEntryNumberWithMinMax(passwordLength, minCharsInPassword, maxCharsInPassword);
  };  
};

var getTypesOfCharacters = function() {
  var firstTime = true;
  while (numberOfTypesOfCharacters == 0) {
    // message to user about what's coming up / error message if they've already tried before
    if (firstTime) {
      window.alert("Next, please choose types of characters to include in your password.  There are " + passwordSource.length + " types.  You must include at least one type!");
      firstTime = false;
    } else {
      window.alert("Please include at least one type of character in your password!");
    };
    
    // for all types of chars
    
    for (i = 0; i < passwordSource.length; i++ ) {
      var textToPromptTypeOfCharacter = "Would you like to include " + passwordSource[i].name.toUpperCase() + "S in your password?  Please respond with \"Y\" or \"N.\""
      var typeChoice = false; // this variable is used to repeat the prompt if an invalid entry is given, so it needs to be reset with each for loop
      
      while (typeChoice == false) {
        typeChoice = window.prompt(textToPromptTypeOfCharacter);
        
        if (typeChoice == null) {
          typeChoice = false;
          userClickedCancel();
        } else {
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
  }
}; 
  
var fillPasswordArray = function() {

  // for each type of char
  for (i = 0; i < passwordSource.length; i++ ) {
    // if char is included
    if (passwordSource[i].includeInPassword == true) {
      // add that string to the pull-from string
      characterSet = characterSet.concat(passwordSource[i].arrayOfCharacters);
    }
  };
  
  // for password length - number of required
  for (i = 0; i < (passwordLength - numberOfTypesOfCharacters); i++ ) {
    // pull values into the working string from the pull-from string
    passwordArray.push(getRandomElementFromArray(characterSet));
  };
  
  // for each type of char
  for (i=0; i < passwordSource.length; i++) {
    // if char is included 
    if (passwordSource[i].includeInPassword == true) {
      // splice in required chars
      spliceValueAtRandomIndex(getRandomElementFromArray(passwordSource[i].arrayOfCharacters), passwordArray);
      
    };
  }
};
  




// main function for generating password; password is returned as a string
var generatePassword = function() {
  
  getPasswordLength();

  getTypesOfCharacters();

  fillPasswordArray();


passwordString = passwordArray.join("");
return passwordString;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  passwordText.value = password;
  
  resetVariables(); // clear password traces from memory and get ready for next password request
}
// event listener for generate button
generateBtn.addEventListener("click", writePassword);