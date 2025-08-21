/**i. strings are a primitive data tpye which are used to represent  words
 * we use "" when writing them
 * state them by declaring eg. */
let firstName = "Claire";
let lastName = "Angom";
let fullName = firstName + " " + lastName;
//then yu rint by
console.log(firstName, lastName, fullName);

//ii. Completing code eg
let sentence = "this is";
sentence += "a sentence"; //or sentence=sentence +"a sentence"

//iii. long literal strings- long messages in JS
//You can write it in two ways;
//1. with "" eg.
let qoute1 =
  "It's never about doing more" + " it's about being better everyday.";
console.log(qoute1);

//2. by using '' eg.
let qoute2 = `Get u and do everyday
all the things you need to do   //ask group D
to get you where you need to go`; //use the backtick symbol
console.log(qoute1);

//iv. Escape sequences...aka writing in direct speech in JS
let greeting = 'claire said,"Hell Nah!" '; // the \ represents the escape key or in other time when you don't want to use the \, use `(the backtick symmbol)
console.log(greeting);

//Temlate strings r...$()
let name = "Ben";
let age = 21;
let intro = `Hello, my name is ${name} and I am ${age} years old.`; //this is string interpolation.

// Now the amazing thing with the backtick is that it allows you to create multi-lined and long strings as well s string interpolatin(which means you can add variables/code within your declaration) and it can

//embedded exressions(putting algorithms within a string)
let price = 2000;
let quantity = 34;
let total = `the total is ${price * quantity} shs.`;
