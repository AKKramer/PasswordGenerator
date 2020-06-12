// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// ----------------------------------------------------------------------------------------

//User clicks the button asking to generate a password

// Button is listening for the user's click. When clicked it calls the next appropriate function.

//PROMPT asks the user how long they would like their password to be. Between 8-128 characters. 

var passwordLength = prompt("How long would you like your password to be? Password must be between 8-128 characters")

// Validation checks to see if the number inputted is less than 8 or greater than 128. If so, loop and keep asking user the same question. 

while (passwordLength < 8 || passwordLength > 128) {
  alert("Please type a password length between 8-128 characters long")
  passwordLength = prompt("How long would you like your password to be? Password must be between 8-128 characters")
} 

// -------------------------------------

// Create and array to store user selector password preferences

var passwordSettingsArr = []

allPasswordSettings()

// Create a function to store the password preferenaces below
function allPasswordSettings (){

// CONFIRM asks the user if they would like to include LOWER CASE letters in their password. 
var lowerCase = confirm("Would you like your password to include lower case letters?")
  console.log(lowerCase)
  

// Lower case confirmation variable is changed to TRUE
passwordSettingsArr.push(lowerCase)
  console.log(passwordSettingsArr)

  
// CONFIRM asks the user if they would like to include UPPER CASE letters in their password. 
var upperCase = confirm("Would you like your password to include upper case letters")
  console.log(upperCase)


// Upper case confirmation variable is changed to TRUE
passwordSettingsArr.push(upperCase)
  console.log(passwordSettingsArr)


// CONFIRM asks the user if they would like to include NUMBERS in their password. 
var numbers = confirm("Would you like your password to include numbers?")
  console.log(numbers)


// Numbers confirmation variable is changed to TRUE
passwordSettingsArr.push(numbers)
  console.log(passwordSettingsArr)


// CONFIRM asks the user if they would like to include SYMBOLS in their password. 
var symbols = confirm("Would you like your password to include symbols?")
  console.log(symbols)


// Symbols confirmation variable is changed to TRUE
passwordSettingsArr.push(symbols)
  console.log(passwordSettingsArr)

// Calls the validation function to make sure at least one of the answers above was true. 
passwordValidation()  
}

// ---------------------------------------------------------------------------

// Validation checks to verify that at least one of the prompts above was answered TRUE.

function passwordValidation () {

  const checkPasswordSettings = (currentValue) => currentValue === false;
              
  console.log(passwordSettingsArr.every(checkPasswordSettings));

  if (passwordSettingsArr.every(checkPasswordSettings) === true) {
    alert("You must select at least one preference")

    // Clear passwordSsettings array for the user to try again
    passwordSettingsArr.length = 0;

    // Call the function to start over the selection process
    allPasswordSettings()
  }
}

console.log(passwordSettingsArr)






//Generate random letter functions
function getRandomLower(){
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  return lowerCase [Math.floor(Math.random() * lowerCase.length)]

}

function getRandomUpper(){
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return upperCase [Math.floor(Math.random() * upperCase.length)]

}

function getRandomNumber(){
  var numbers = '1234567890';
  return numbers [Math.floor(Math.random() * numbers.length)];

}

function getRandomSymbol() {
  var symbols = '!@#$%^&*()-+';
  return symbols[Math.floor(Math.random() * symbols.length)];
  console.log(symbols.length)

}


console.log(getRandomLower())
console.log(getRandomUpper())
console.log(getRandomNumber())
console.log(getRandomSymbol())


