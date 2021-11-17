var anarray = ['a','b','c','d','e']

var lowerCaseLetters = [ 'a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_'];

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

//obtainValidatedResponseOrQuit - uses allowable answers array to validate them
//    try to do one function that can handle number range, yes/no, and selected at least one?

// SKIP FUNCTION - this adds required values into the target array and makes sure they don't get overwritten
// subtract number of required from total
// fill those at random
// squeeze in required using splice

            /*
          
            BASIC VAR: arrays of password characters
              a-z ; A-Z ; 0-9 ; special characters list
              allowable answers for questions [ , error message, allowable values]
                number of characters 
                yes or not
                at least one of the types of characters
        
              


how long a password - obtainAndValidate
    validate or quit
what are required characters
    lowercase
      validate or quit
      uppercase
      validate or quit
      numbers?
      validate or quit
      special characters?
      validate or quit
      at least one selected
       if not, go back to start or quit
generate password
    set up parameters
        length of password
        requirements of password
      fill in (length - required) characters using whole list
      splice in required characters at random locations
present password
    
var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    if (promptFight === 'skip' || promptFight === 'SKIP') {
    
var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];

window.alert("This is an alert! JavaScript is running!");
      

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
