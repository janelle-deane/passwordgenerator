// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// To Do: 
// Create generatePassword function and returns all of my code should live inside this code
// Create a series of prompts:
// 1. var= Prompt-length of password (validation: 8-128 characters) (save to variable)
// 2.Confirm-Special Characters?
// 3.Confirm-Numeric Characters?
// 4.Confirm-UpperCase Characters?
// 5.Confirm-LowerCharacters?

// Create arrays with all needed characters (lowercase, lowercase, numeric and special)

var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var specialCharacter = ["\'", "\"", "#", "$", "%", "&", "!", "(", ")", "*", "+", "\&", "{", "'", "|", "}", "~", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^"];



// create a new var that holds all of the chosen characters

// create a conditional situational that saves the choisen char from our confirm statement


// We have to select the spefic # of char randomly from our collection based on user answer to 1st prompt 
// Add loop that encompasses arrays and is dedicated by first prompt

// create a new array with to hold final password 

// push each time to new password

// Add validations to make sure at least one type character is selected and alert the user that they need to chose 

// Add event listener to generate button

// add validation to after logic
generateBtn.addEventListener("click", writePassword);
