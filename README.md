I initially broken down how pieces I would need to create to build the password generator. 

I first set up the prompts and confirms for the questions. Then I console.log the responses so I knew that it was working. 

I also built the corresponding arrays to the confirms. I then also defined intermediate array, array length (since that can vary), and the final Array which will hold our password. 


Create generatePassword function and returns all of my code should live inside this code

Create a series of prompts:
  1. var= Prompt-length of password (validation: 8-128 characters) (save to variable)
  2.Confirm-Special Characters?
  3.Confirm-Numeric Characters?
  4.Confirm-UpperCase Characters?
  5.Confirm-LowerCharacters?

 Create arrays with all needed characters (lowercase, lowercase, numeric and special)

 create a new var that holds all of the chosen characters

Create a conditional situational that saves the choisen char from our confirm statement


 We have to select the spefic # of char randomly from our collection based on user answer to 1st prompt 
 
 Add loop that encompasses arrays and is decided by first prompt

Create a new array with to hold final password 

Push each time to new password and turn array into a string

Add validations to make sure at least one type character is selected and alert the user that they need to chose 

Add event listener to generate button**