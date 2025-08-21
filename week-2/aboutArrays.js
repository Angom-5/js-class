/**
 *  1. How to Create an Empty Array
 * ***** An empty array is a container with no initial elements.
 * ***** It is often used when you want to add items later.
 */


//  ******* Using Literal Syntax ******* //

let emptyArray =[];

//  ******* Using Array Constructor ******* //

let emptyArrayTwo = new Array(); 


/**
 *   2. How to Create an Array with Values
 * ***** Arrays can hold multiple values of any type.
 * ***** Values are enclosed in square brackets [].
 */

// ******** Using square brackets ******* //
let fruits = ["apple", "banana", "orange"];

//  ******* Using Array Constructor ******* //

let numbers = new Array(1, 2, 3, 4);

/**
 *   3. Creating an Array Using split()
 * ***** split() turns a string into an array.
 * ***** We provide a separator (like space or comma).
 * ***** Useful when dealing with CSV or sentences.
 */
//  ******* Splitting by space ******* //

let words = "Hello world today".split(" ");
console.log(words);

//  ******* Splitting by comma ******* //

let colors = "red,blue,green".split(",");
console.log(colors);

//  ******* Splitting each character ******* //
let letters = "Code".split("");
console.log(letters);


//creating an array using split()method
//when you want to create an array by splitting string by words
let text1 = "How are you doing today?";  //string
const myArray1 = text1.split(" ");    //notice the space between the ""

console.log(myArray1); 
['How', 'are', 'you', 'doing', 'today'] 

//when you want to split the string by letter
let text2 = "How are you doing today?";
const myArray2 = text2.split("");   //notice how there's no space between the ""

console.log(myArray2);
[H, o, w, a, r, e, y, o, u, d, o, i, n, g, t, o, d, a, y]

//when you want to make an array of only one specific string in the set
let text3 = "How are you doing today?";
const myArray3 = text3.split(" ");

console.log(myArray3[1])   //remember it's an ordered list so it starts counting from 0
are

//when you want to determine how many strings come back from the set
let text4 = "How are you doing today?";
const myArray4 = text4.split(" ", 3);

console.log(myArray4);
[How, are, you]

//when you want to return a specific charater(2nd)
let text5 = "How are you doing today?";
const chars = text5.split("");

document.getElementById("demo").innerHTML = chars[1];
o

//when you use a certain letter as a separator(o)
let text6 = "How are you doing today?";
const myArray6 = text6.split("o");

console.log(myArray6);
[H, warey, ud, ingt, day]

//you don't have to put any brackets to call this thing to action cause its not an array. we are just creating it.
/**
 *   4. Accessing Array Items Using Index
 * ***** Array elements are accessed using indexes.
 * ***** Indexes start from 0.
 * ***** Use array[index] syntax.
 */

//  ******* Use a single index to Access an element ******* //
let animals = ["cat", "dog", "lion"];

console.log(animals[0]); 
console.log(animals[1]); 
console.log(animals[2]); 

//  ******* Use a Loop to Access a Range of Indexes ******* //

let listOfFruits = ["apple", "banana", "cherry", "mango"];

for (let i = 1; i <= 2; i++) {    // here i is the variable we have chsen to represent our array. <= is used 
  console.log(listOfFruits[i]);  // "banana", "cherry"
}

//  ******* Use slice() for a Range ******* //

let fruitsList = ["apple", "banana", "cherry", "mango"];

let someFruits = fruitsList.slice(1, 3);  // ["banana", "cherry"]
console.log(someFruits);

/**
 *   5. Modifying Array Elements
 * ***** We can change an element by assigning a new value to an index.
 * ***** Array items are mutable.
 * ***** Direct assignment works.
 */

let scores = [10, 20, 30];

scores[0] = 15;  // Change 10 to 15
scores[2] = 35;  // Change 30 to 35
scores[1] = scores[1] + 5; //25
scores[1] = scores[1] + scores[2]; // 60
console.log(scores[0])
console.log(scores[1])
console.log(scores[2])



/**
 *   6.  Array Methods
 * ***** Arrays come with built-in methods.
 * ***** These help in adding, removing, or transforming data.
 * ***** Common methods: push, pop, join, slice, length, etc.
 */
let devices = ["Laptop","Smartphone","Tablet","Smart TV"];


//  ******* Add an item  ******* //  
devices.push("Smartwatch"); // ["Laptop","Smartphone","Tablet","Smart TV","Smartwatch"]
console.log(devices); 

// ******** Remove last item ******* //
devices.pop(); // ["Laptop","Smartphone","Tablet","Smart TV"]
console.log(devices); 

// ********  Count elements ******** //
console.log(devices.length); // 4

// ******** Rearranging alphabetically ****** //
devices.sort();
console.log(devices); // [ 'Headphones', 'Smart TV', 'Smartphone', 'Tablet' ]

// ******** Reverse the order ******* //
devices.reverse();
console.log(devices); // [ 'Tablet', 'Smartphone', 'Smart TV', 'Headphones' ]

// ******** Remove from the beginning ******** //
devices.shift(); // ["Smartphone","Tablet","Smart TV"]
console.log(devices); 


// ******** Add to the beginning ******** //
devices.unshift("Headphones");
console.log(devices); // ["Headphones","Smartphone","Tablet","Smart TV"]

// ******** Join items ******* //
let text = devices.join(" - "); // "Headphones - Smartphone - Tablet - Smart TV "
console.log(text); 

// ******** Remove elements ****** //
devices.splice(1, 1); //Remove the second index-element
console.log(devices); // [ 'Headphones', 'Smart TV', 'Laptop' ]
// ******** Add elements ****** //
devices.splice(1, 0, "Smartphone"); //Add an element without removing an element
console.log(devices); // [ 'Headphones', 'Smartphone', 'Smart TV', 'Laptop' ]

