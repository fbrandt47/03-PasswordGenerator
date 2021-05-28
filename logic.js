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
var lowerCaseCharacters = [
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

var upperCaseCharacters = [ "A", "B", "C", "D", "E"]





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
  var hasNumericCharacters = confirm("Click okay if you want to use numbers");

  var hasLowerCaseCharacters = confirm("Click okay if you want to use lowercase letters");

  var hasUpperCaseCharacters = confirm("Click okay if you want to use capital letters");
  
  //make sure that the user chose some type of character 
  if(hasSpecialCharacters === false && 
      hasNumericCharacters === false &&
      hasLowerCaseCharacters === false &&
      hasUpperCaseCharacters === false){
        alert("Please choose at least one type of character to create your password");
        return
      }
  
  //create an object variable to store all the user preferences. setting key-value pairs. 

  var preferences = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,

  }
  console.log(preferences);


  return preferences;
}


//Create a helper function that grabs a random character (index) from an array. 
function getRandom(ar) {
  //grab a random index for the array 
  var randomIndex = Math.floor(Math.random() * ar.length);
  //using the random Index, get a random element from the array 
  var randomElement = ar[randomIndex];
  return randomElement;

}


//Now that we have user preferences, we can build their password! 
function generatePassword() {

//Received user preferences, 
var options = getPasswordOptionsFromUser();

//Where we store the users password. 
var password = [];

//Storing the characters the user could potentially use, based on their preferences. 
var possibleCharacters = [];

//A place to store a few characters so we know we have a few different characters... 
var guaranteedCharacters = [];

//If there are no user preferences, escape from the function! 
if(!options){
  return 
}

//Starting to build our possibleCharacters arrays, 
if(options.hasSpecialCharacters){
  //push the special characters into the possible characters array 
  possibleCharacters = possibleCharacters.concat(specialCharacters)
  //console.log(possibleCharacters);

}
if(options.hasNumericCharacters){
  //push the numeric characters into the possible characters array 
  possibleCharacters = possibleCharacters.concat(numericCharacters)
  //console.log(possibleCharacters);

}
if(options.hasLowerCaseCharacters){
  //push the lower case characters into the possible characters array 
  possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
  //console.log(possibleCharacters);

}
if(options.hasUpperCaseCharacters){
  //push the upper case characters into the possible characters array 
  possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
  console.log(possibleCharacters);

}


//Loop over the possible characters array, as many times as the length of users password 
for(var i = 0; i < options.length; i++) {
  //every time we loop over, grab a random character from the array 
  var randomCharacter = getRandom(possibleCharacters); 
  //push the random character into the password array 
  password.push(randomCharacter); 
  console.log(password)

  }


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
