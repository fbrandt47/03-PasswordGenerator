//VARIABLES 

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var uppcaseLetters = [ "A", "B", "C", "D"]





function getPasswordOptionsFromUser() {

  //get the user length preference
  var length = prompt("how many characters do you want your password to be?");
  console.log(length);
  //validate user content, making sure password lenght is a NUMBER
  if(isNaN(length)) {
    //alert the user to put a number in! 
    alert("Please put in a number, that is not a number");
    return;
  }
  //now, that it is a number, validating the lenght is not more than 128
  if(length > 128) {
    //alert the user to put a number in! 
    alert("Your password is too long. It needs to be under 128 characters");
    return;
  }
  //password must be a minimum of 8 characters 
  if(length < 8) {
    //alert the user to put a number in! 
    alert("Your password is too short. It needs to be at least 8 characters");
    return;
  }
  
  //asking the user if they want special characters 
  var hasSpecialCharacters = confirm("Click okay if you want to use special characters");
  console.log(hasSpecialCharacters);

  //confirm whether or not they want all the OTHER character types 

  //make sure that the user chose some type of character 
  
  //create an object variable to store all the user preferences

  var preferences = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,

  }
  console.log(preferences);


  return preferences;
}

function generatePassword() {


var options = getPasswordOptionsFromUser();
console.log(options); 


//use array 'concat' method

var password = [];

var possibleCharacters = [];

var guaranteedCharacters = [];

return password.join("");

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
