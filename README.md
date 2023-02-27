# Generating a Random Password
In this tutorial, I will be creating a JavaScript program that generates a random password for the user.
Our program will use an array of lowercase letters, numbers, and special characters to create a unique password.

## Setting up the Environment
I will be using Visual Studio Code to write our JavaScript code. 
You can use any text editor of your choice, such as Notepad, Sublime Text, or Visual Studio Code.

## Creating the Password Generator
I will start by creating an array of lowercase letters, numbers, and special characters that I will use to create our random password.
```javascript
const lowerCase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
  'u', 'v', 'w', 'x', 'y','z'
];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialCharacter = ['-', '_', '.',',', '@'];
```
I have created three arrays, one for lowercase letters, one for numbers, and one for special characters.
Next, I will create three functions that will return a random element from each array.
```javascript
function randomLowerCase() {
  let randomLowerCase = lowerCase[Math.trunc(Math.random() * lowerCase.length)];
  return randomLowerCase;
}

function randomNumber() {
  let randomNumber = numbers[Math.trunc(Math.random() * numbers.length)];
  return randomNumber;
}

function randomSpecialChar() {
  let randomSpecialCharacter = specialCharacter[Math.trunc(Math.random() * specialCharacter.length)];
  return randomSpecialCharacter;
}
```
Each function generates a random number between 0 and the length of the array, 
rounds it down to the nearest whole number using the Math.trunc() method, and returns the element at that index.
Now that I have the arrays and functions, I can create the randomPassword() function. 
This function will call each of the three functions and combine the results to create a random password.
```javascript
function randomPassword() {
  let password = '';
  for (let i = 0; i < 4; i++) {
    password += randomLowerCase();
  }
  password += randomSpecialChar();
  for (let i = 0; i < 4; i++) {
    password += randomNumber();
  }
  return password;
}
```
The randomPassword() function starts by initializing an empty string called password. It then calls the randomLowerCase() function four times to 
add four random lowercase letters to the password.
Next, it calls the randomSpecialChar() function once to add a random special character to the password.
Finally, it calls the randomNumber() function four times to add four random numbers to the password.
The function then returns the password string.
To test our function, I will add a console.log() statement that calls the randomPassword() function.
```javascript
console.log(randomPassword());
```
## Running the Program
To run the program, open the text editor and create a new file. Copy and paste the code into the file and save it with a .js extension.
Next, open the terminal and navigate to the directory where saved the file.
Type node filename.js to run the program, replacing filename with the name of your file.
