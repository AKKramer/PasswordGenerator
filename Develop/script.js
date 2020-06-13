// Variables
var passwordLength
var passwordSettingsArr = []
var passwordPrefArr = []
var lowerCase
var upperCase
var numbers
var symbols

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = getPasswordLength();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ----------------------------------------------------------------------------------------

//User clicks the button asking to generate a password

// Button is listening for the user's click. When clicked it calls the next appropriate function.

//PROMPT asks the user how long they would like their password to be. Between 8-128 characters. 
function getPasswordLength(){
  passwordLength = prompt("How long would you like your password to be? Password must be between 8-128 characters")

  // Validation checks to see if the number inputted is less than 8 or greater than 128. If so, loop and keep asking user the same question. 

  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please type a password length between 8-128 characters long")
    passwordLength = prompt("How long would you like your password to be? Password must be between 8-128 characters")
  } 
}
// -------------------------------------

// Create and array to store user selector password preferences



allPasswordSettings()

// Create a function to store the password preferenaces below
function allPasswordSettings (){

  // CONFIRM asks the user if they would like to include LOWER CASE letters in their password. 
  lowerCase = confirm("Would you like your password to include lower case letters?")
    console.log(lowerCase)
    

  // Lower case confirmation variable is changed to TRUE or FALSE and then pushed into an array.
  passwordSettingsArr.push(lowerCase)
  // If the prefrence is selected, the random generater for that preference is added to an array. 
    if (lowerCase === true) {
      passwordPrefArr.push(getRandomLower)
    }
  console.log(passwordSettingsArr)
  console.log(passwordPrefArr)
    
  // CONFIRM asks the user if they would like to include UPPER CASE letters in their password. 
  upperCase = confirm("Would you like your password to include upper case letters")
    console.log(upperCase)


  // Upper case confirmation variable is changed to TRUE or FALSE and then pushed into an array.
  passwordSettingsArr.push(upperCase)
  // If the prefrence is selected, the random generater for that preference is added to an array.
    if (upperCase === true) {
      passwordPrefArr.push(getRandomUpper)
    }
    console.log(passwordSettingsArr)
    console.log(passwordPrefArr)


  // CONFIRM asks the user if they would like to include NUMBERS in their password. 
  numbers = confirm("Would you like your password to include numbers?")
    console.log(numbers)


  // Numbers confirmation variable is changed to TRUE or FALSE and then pushed into an array.
  passwordSettingsArr.push(numbers)
  // If the prefrence is selected, the random generater for that preference is added to an array.
    if (numbers === true) {
      passwordPrefArr.push(getRandomNumber)
    }
    console.log(passwordSettingsArr)
    console.log(passwordPrefArr)


  // CONFIRM asks the user if they would like to include SYMBOLS in their password. 
  symbols = confirm("Would you like your password to include symbols?")
    console.log(symbols)


  // Symbols confirmation variable is changed to TRUE or FALSE and then pushed into an array.
  passwordSettingsArr.push(symbols)
    console.log(passwordSettingsArr)
      if (symbols === true) {
        passwordPrefArr.push(getRandomSymbol)
      }

  // Calls the validation function to make sure at least one of the answers above was true. 
  passwordValidation()  
}

console.log(passwordPrefArr)
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

// INFO ONLY -- The selected password generator functions are now in array "passwordPrefArr".

// An array is created to store the final password
var finalPasswordString = '';


// A for-loop is started, looping equal to the length of the password the user entered. 
for ([i] = 0; i < passwordLength.length; i++) {
// Using Math.random, the element generator functions are randomly called inside the for-loop.
  passwordPrefArr[Math.floor(Math.random() * array.length)];
}

// ************HERE IS WHERE I AM STUCK*****************
// 1. -- I don't know what else to do inside the for-loop. It has randomly selected one of the random generator functions in the array, but I don't know what do to then. 

// 2. -- I can't figure out how to add the return of my generator functions to a string. I thought this would work: finalPasswordString.push(getRandomLower()) but it does not. I tried to save them into variables and then push those into the string but that does not work either. 

// 3. -- I also ran out of to connect the button on the page to the code.




// Trying to figure out ways to get the value out of the random element funtions..
var ranLowLetter = getRandomLower()
var ranUpLetter = getRandomUpper()
var ranNumber = getRandomNumber()
var ranSymbol = getRandomSymbol()






//Generate random element functions
function getRandomLower(lower){
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  return lower = lowerCase[Math.floor(Math.random() * lowerCase.length)];
  
}

function getRandomUpper(upper){
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper = upperCase[Math.floor(Math.random() * upperCase.length)];

}

function getRandomNumber(num){
  var numbers = '1234567890';
  return num = numbers[Math.floor(Math.random() * numbers.length)];

}

function getRandomSymbol(sym) {
  var symbols = '!@#$%^&*()-+';
  return sym = symbols[Math.floor(Math.random() * symbols.length)];

}



// console.log(finalPasswordString)

console.log(ranLowLetter)
console.log(ranUpLetter)
console.log(ranNumber)
console.log(ranSymbol)

console.log(getRandomLower())
console.log(getRandomUpper())
console.log(getRandomNumber())
console.log(getRandomSymbol())


