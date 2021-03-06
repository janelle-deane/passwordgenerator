// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Create generatePassword function and returns all of my code should live inside this code
function generatePassword(){
  
// Create arrays with all needed characters (lowercase, lowercase, numeric and special)
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var specialCharacter = ["\'", "\"", "#", "$", "%", "&", "!", "(", ")", "*", "+", "\&", "{", "'", "|", "}", "~", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^"];
// create a new var that holds all of the chosen characters to be selected from
var chosenArray =[]; 
// create a new array with to hold final password 
var passwordArray=[]; 

// Define prompt variables:
charSpecial = false; 
charNumeric = false; 
charUpper = false; 
charLower = false; 

// Create a series of prompts with conditionals:
// 1. var= Prompt-length of password (validation: 8-128 characters) **Is there a way to loop back to orginal prompt if condition is not met?
var charLength = prompt ("How many characters do you want you password? Please enter a number between 8-128: ");
console.log (charLength);
if (charLength >= 8 && charLength <=129){

        // 2.Confirm-Special Characters?
        charSpecial =confirm ("Do you want special characters?");
        console.log(charSpecial);
 

        // 3.Confirm-Numeric Characters?
        charNumeric =confirm ("Do you want numbers?");
        console.log(charNumeric);

        // 4.Confirm-UpperCase Characters?
        charUpper =confirm ("Do you want UPPER CASE letters?");
        console.log(charUpper);

        // 5.Confirm-LowerCharacters?
        charLower =confirm ("Do you want lower case letters?");
        console.log(charLower);

// Add validations to make sure at least one type character is selected and alert the user that they need to chose 

// add validation to after logic       
        while(charLower===false && charNumeric===false && charSpecial===false && charUpper===false) {
          alert("Please choose one Character trait to be included in your password");
          charSpecial =confirm ("Do you want special characters?");
          charNumeric =confirm ("Do you want numbers?");
          charUpper =confirm ("Do you want UPPER CASE letters?");
          charLower =confirm ("Do you want lower case letters?");
        };

        if (charSpecial===true){
          chosenArray.push(...specialCharacter); 
        };

        if (charNumeric===true){
          chosenArray.push(...numeric); 
        }; 

        if (charUpper===true){
          chosenArray.push(...alphaUpper); 
        }; 

        if (charLower===true){
          chosenArray.push(...alphaLower); 
        }; 

        // Check combination Array & array length
        console.log(chosenArray);  

        // Add loop that encompasses arrays and is decided by first prompt 
        for (var i =0; i<charLength; i++){
        var index = Math.floor(Math.random()*chosenArray.length);
        var part = chosenArray[index];
        console.log(part);

        // push each time to the new password
        passwordArray.push(...part);
        }
        console.log(passwordArray);

        // convert array to string and alert
        alert("Your new Password is: " + passwordArray.join(''));
        console.log (passwordArray.join(''));
        return (passwordArray.join(''));

}else{
  alert("Please enter a number 8-128")}; 

}
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);