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

// Create arrays with all needed characters (lowercase, lowercase, numeric and special)
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var specialCharacter = ["\'", "\"", "#", "$", "%", "&", "!", "(", ")", "*", "+", "\&", "{", "'", "|", "}", "~", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^"];
// Define array length since it will vary with answers (lower/upper will add by 26, special 31 and numbers 10 )
var arrayLength = 0; 
// create a new var that holds all of the chosen characters
var chosenArray =[]; 
// create a new array with to hold final password 
var passwordArray=[]; 

// Create a series of prompts:
// 1. var= Prompt-length of password (validation: 8-128 characters) (save to variable)
var charLength = prompt ("How many characters do you want you password? Please enter a number between 8-128: ");
console.log (charLength)
// 2.Confirm-Special Characters?
var charSpecial =confirm ("Do you want special characters?")
console.log(charSpecial)
if (charSpecial===true){
  chosenArray.push(...specialCharacter); 
  arrayLength= arrayLength + 31;
}; 

// 3.Confirm-Numeric Characters?
var charNumeric =confirm ("Do you want numbers?")
console.log(charNumeric)
if (charNumeric===true){
  chosenArray.push(...numeric); 
  arrayLength=arrayLength + 10;
}; 
// 4.Confirm-UpperCase Characters?
var charUpper =confirm ("Do you want UPPER CASE letters?")
console.log(charUpper)
if (charUpper===true){
  chosenArray.push(...alphaUpper); 
  arrayLength=arrayLength + 26;
}; 
// 5.Confirm-LowerCharacters?
var charLower =confirm ("Do you want lower case letters?")
console.log(charLower)
if (charLower===true){
  chosenArray.push(...alphaLower); 
  arrayLength=arrayLength + 26;
}; 

// Check combination Array & array length
console.log(chosenArray);
console.log(arrayLength);

// create a conditional situational that saves the chosen char from our confirm statement
// Add loop that encompasses arrays and is dedicated by first prompt 
for (var i =0; i<charLength; i++){
var index = Math.floor(Math.random()*arrayLength);
 var part = chosenArray[index];
 console.log(part);

// push each time to the new password
passwordArray.push(...part);
}
console.log(passwordArray);

// convert array to string and alert
alert("Your new Password is: " + passwordArray.join(''));
console.log (passwordArray.join(''));

// Add validations to make sure at least one type character is selected and alert the user that they need to chose 

// Add event listener to generate button

// add validation to after logic
generateBtn.addEventListener("click", writePassword);
