'use strict';

const lowerCase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
  'u', 'v', 'w', 'x', 'y','z'
   ];
function randomLowerCase() {
let randomLowerCase = lowerCase[Math.trunc(Math.random() * lowerCase.length)];
return randomLowerCase;
}

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
function randomNumber() {
let randomNumber = numbers[Math.trunc(Math.random() * numbers.length)];
return randomNumber;
}

const specialCharacter = ['-', '_', '.',',', '@'];
function randomSpecialChar() {
let randomSpecialCharacter = specialCharacter[Math.trunc(Math.random() * specialCharacter.length)];
return randomSpecialCharacter;
}

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

console.log(randomPassword());
