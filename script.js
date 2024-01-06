// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


function specialChars(){
  var specialX;  
  var specialXs = '';
  if (confirm("Would you add a special character to your password?")) {
    specialXs = "1";
  }else{
    specialXs = "2";
  }

  if(specialXs == "1"){
    for(i=0; i < specialCharacters.length; i++){
      specialX += specialCharacters[i];
    }
    return specialX.replace("undefined", "");
  }else{
    return specialX = "";
  }
 
}


function specialNums(){
  var specialN;
  var specialNs = '';
  if (confirm("Would you add a numeric number between 0 - 9 to your password?")) {
    specialNs = "1";
  }else{
    specialNs = "2";
  }

  if(specialNs == "1"){
  for(j = 0; j < numericCharacters.length; j++){
    specialN += numericCharacters[j];
  }
    return specialN.replace("undefined", "");
  }else{
    return specialN = "";
  }
}


function lowerChars(){
  var specialL;
  var specialLs = '';
  if (confirm("Would you add a lower case letter between a - z to your password?")) {
    specialLs = "1";
  }else{
    specialLs = "2";
  }
  
  if(specialLs == "1"){
  for(k = 0; k < lowerCasedCharacters.length; k++){
    specialL += lowerCasedCharacters[k];
  }
    return specialL.replace("undefined", "");
  }else{
    return specialL = "";
  }
}


function upperChars(){
  var specialU;
  var specialUs = '';
  if (confirm("Would you add an upper case letter between A - Z to your password?")) {
    specialUs = "1";
  }else{
    specialUs = "2";
  }

  if(specialUs == "1"){
  for(l = 0; l < upperCasedCharacters.length; l++){
    specialU += upperCasedCharacters[l];
  }
    return specialU.replace("undefined", "");
  }else{
    return specialU = "";
  }
}


// Function to prompt user for password options
function getPasswordOptions() {
  var sp = this.specialChars();
  var sn = this.specialNums();  
  var lc = this.lowerChars();
  var uc = this.upperChars();

  if(sp.length > 0 && sn.length > 0 && lc.length > 0 && uc.length > 0){
    return uc + lc + sn + sp;
  }else{
    return "";
  }
  
}


// Function for getting a random element from an array
var arr = getPasswordOptions()
function getRandom(arr) {
  if(arr.length > 0){
    return arr;
  }else{
    return "";
  }
}


// Function to generate password with user input
function generatePassword() {
  var stringLength = 15;
  var randomstring = '';
  var chars = getRandom(arr);
  //console.log(characters);
  if(chars.length > 0) {
    for (var i = 0; i < stringLength; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars[rnum];
  }
    return randomstring;
  }else{
    return "Invalid";
  }

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  if(password === 'Invalid'){
    passwordText.value = "Invalid! All requirements are to be met.";
    console.clear();
    console.log("Invalid! All requirements are to be met.");
    alert("Invalid! All requirements are to be met.");
  }else{
    passwordText.value = password;
    console.clear();
    console.log("The secure password is " + password);
    alert("The secure password is " + password);
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
