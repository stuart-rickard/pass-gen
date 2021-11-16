var anarray = ['a','b','c','d','e']

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
    reject bad answers
        quit if necessary
what are required characters
    lowercase
    uppercase
    numbers?
        reject bad answers
            quit
    special characters?
        reject
            quit
generate password
    set up parameters
        length of password
        requirements of password
    fill in required characters first
    fill in remaining characters using whole list
    shuffle the array
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
