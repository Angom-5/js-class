/**
 *  1. How to Create an Empty Array
 * ***** An empty array is a container with no initial elements.
 * ***** It is often used when you want to add items later.
 */


//  ******* Using Literal Syntax ******* //
const sales = [];
console.log(sales); // Output: []

//  ******* Using Array Constructor ******* //

let woodStock = new Array(); 
console.log(woodStock); // Output: []

/**
 *   2. How to Create an Array with Values
 * ***** Arrays can hold multiple values of any type.
 * ***** Values are enclosed in square brackets [].
 */

// ******** Using square brackets ******* //
const furnitureList = ["Sofa", "Table", "Drawer"];

let suppliers = ["Timber World", "Upcountry Co", "Furniture Hub"];

//  ******* Using Array Constructor ******* //

const salesAgents = new Array("James", "Agnes", "Musa");

let emptyStock = new Array(3); 

/**
 *   3. Creating an Array Using split()
 * ***** split() turns a string into an array.
 * ***** We provide a separator (like space or comma).
 * ***** Useful when dealing with CSV or sentences.
 */
//  ******* Splitting by space ******* //

let raw = "Sofa Table Drawer";
let furniture = raw.split(" "); // ["Sofa", "Table", "Drawer"]

  //  ******* Splitting by comma ******* //

  let woodItems = "Timber,Poles,Hardwood,Softwood";
  let woodArray = woodItems.split(","); // ["Timber", "Poles", "Hardwood", "Softwood"]

  //  ******* Splitting each character ******* //
  let code = "MWF";
  let characters = code.split(""); // ["M", "W", "F"]

  //  ******* Replacing character  ******* //
  let input = "Sofa,Bed,Table";
  let modified = input.replace("Bed", "Double Bed").split(","); // ["Sofa", "Double Bed", "Table"]
  // when using .replace(original,replacement)
  input = "Sofa,Bed,Table".split("e");
  console.log(input);

  /**
   *   4. Accessing Array Items Using Index
   * ***** Array elements are accessed using indexes.
   * ***** Indexes start from 0.
   * ***** Use array[index] syntax.
   */

  //  ******* Use a single index to Access an element ******* //
  const furnitureOne = ["Sofa", "Table", "Drawer"];
console.log(furnitureOne[1]); // Output: "Table"

  //  ******* Use a Loop to Access a Range of Indexes ******* //
// To get a reverse order
for (let i = furnitureOne.length - 1; i >= 0; i--) {  //also this is the only way to print all the elements of the array.
    //for (let i = 0; i <=2; i++) cause two is the representative of the length of the array
  console.log(furnitureOne[i]);
  console.log("Item", i + 1 + ":", furnitureOne[i]);
  
}
//to get a normal order
   for (let i = 0; i < furnitureOne.length; i++) {
     //also this is the only way to print all the elements of the array which is very long
     //for (let i = 0; i <=2; i++) cause two is the representative of the length of the array
     console.log(furnitureOne[i]);
   }

  //  ******* Use slice() for a Range ******* //

  const topFurnitures = furnitureOne.slice(0, 2); // ["Sofa", "Table"]
// where 0 shows the starting element while 2 shows where the thing should end but doesn't include it
 
//To get the position of a member in an array
//  ******* Use a for...of loop  ******* //
const salesAgents = ["James", "Agnes", "Musa", "Lydia"];
for (let agent of salesAgents) {
  console.log("Sales Agent: ", agent);
}

//  ******* Use slice() for a Range ******* //
//  ******* to extract part of the array **** //
const topFurnitures = furnitureOne.slice(0, 2); // ["Sofa", "Table"]
console.log(topFurnitures);

// ******** to get last 2 items ******** //
const woodStocks = ["Timber", "Poles", "Hardwood", "Softwood"];
const latestStock = woodStocks.slice(-2);
console.log(latestStock);

// ******** using console.table() ******** //
const woodStock = [
  {
    productName: "Timber",
    type: "Hardwood",
    quantity: 50,
    supplier: "Upcountry Co. Ltd",
    dateReceived: "2025-07-20",
  },
  {
    productName: "Poles",
    type: "Softwood",
    quantity: 80,
    supplier: "GreenWood Suppliers",
    dateReceived: "2025-07-22",
  },
  {
    productName: "Hardwood Plank",
    type: "Hardwood",
    quantity: 30,
    supplier: "TimberLand Inc.",
    dateReceived: "2025-07-25",
  },
];

console.table(woodStock);

/**
   *   5. Modifying Array Elements
   * ***** We can change an element by assigning a new value to an index.
   * ***** Array items are mutable.
   * ***** Direct assignment works.
   */
  let furnitureTwo = ["Sofa", "Table", "Drawer","TV Stand","Wardrobe"];
  furnitureTwo[2] = "Cupboard"; // Replaces "Drawer" with "Cupboard"

  // Desire research
// Arrays are like lists of items, and each item has a position called an index (starting from 0).
// You can change any item in the array by using its index and assigning a new value.
// For example, if you have let arr = [5, 10, 15]; and you write arr[1] = 20;, the array becomes [5, 20, 15]. The second item (index 1) is now 20.
// You can use math or other variables to update values, like arr[2] = arr[0] + arr[1]; which adds the first and second items and puts the result in the third spot.
// You can also use a loop to change many items at once, for example, to add 1 to every number in the array.
// In summary: To modify an array element, just use the array name, the index in square brackets, and assign a new value. Arrays are flexible, so you can update their contents any time!

// re more examples of modifying array elements:

// Example 1: Change a value by index
let numbers = [2, 4, 6];
numbers[1] = 10; // Now numbers is [2, 10, 6]


// Example 2: Use a variable for the index
let fruits = ["Table", "Sofa", "Tv stand"];
let i = 2;
fruits[i] = "Tv stand";



// Now fruits is ["apple", "banana", "mango"]
// Example 3: Update all elements in a loop
let scores = [5, 10, 15];
for (let j = 0; j < scores.length; j++) {
  scores[j] = scores[j] + 1;
}
console.log(scores[j])
// Now scores is [6, 11, 16]



// // Example 4: Use a calculation to update an element
let arr = [1, 2, 3];
arr[0] = arr[1] * arr[2]; // arr is now [6, 2, 3]
// Exercise:

// Create an array with the numbers [3, 6, 9, 12, 15].
// Change the second element to 100.
// Multiply the last element by 2.
// Add 5 to every element using a loop.
// Print the final array.
// Try it yourself, and let me know if you want the solution!

let arr2 = [3, 6, 9, 12, 15];
 arr2[1] = 100 
 console.log(arr2[1]);

 
 let arr3 = [8,9,5];

 for(let i = 0; i<= 2; i++){
  console.log(arr3[i])
 }
  /**
   *   6.  Array Methods
   * ***** Arrays come with built-in methods.
   * ***** These help in adding, removing, or transforming data.
   * ***** Common methods: push, pop, join, slice, length, etc.
   */
  let furnitureThree = ["Sofa", "Table", "Drawer","Bed","Coffee Table","Dining Table"];


  //  ******* Add an item  ******* //  
  furnitureThree.push("Dressing Table");
  console.log(furnitureThree); 
  /*[
    'Sofa',
    'Table',
    'Drawer',
    'Bed',
    'Coffee Table',
    'Dining Table',
    'Dressing Table'
  ]*/

  // ******** Remove last item ******* //
  furnitureThree.pop(); // [ 'Sofa', 'Table', 'Drawer', 'Bed', 'Coffee Table', 'Dining Table' ]
  console.log(furnitureThree); 

  // ********  Count elements ******** //
  console.log(furnitureThree.length); // 6

  // ******** Rearranging alphabetically ****** //
  furnitureThree.sort();
  console.log(furnitureThree); // [ 'Bed', 'Coffee Table', 'Dining Table', 'Drawer', 'Sofa', 'Table' ]

  // ******** Reverse the order ******* //
  furnitureThree.reverse();
  console.log(furnitureThree); // [ 'Table', 'Sofa', 'Drawer', 'Dining Table', 'Coffee Table', 'Bed' ]

  // ******** Remove from the beginning ******** //
  furnitureThree.shift(); // [ 'Sofa', 'Drawer', 'Dining Table', 'Coffee Table', 'Bed' ]
  console.log(furnitureThree); 


  // ******** Add to the beginning ******** //
  furnitureThree.unshift("Bookshelf");
  console.log(furnitureThree); 
  /*[
    'Bookshelf',
    'Sofa',
    'Drawer',
    'Dining Table',
    'Coffee Table',
    'Bed'
  ]*/

  // ******** Join items ******* //
  let text = furnitureThree.join(" - "); // Bookshelf - Sofa - Drawer - Dining Table - Coffee Table - Bed
  console.log(text); 

  // ******** Remove elements ****** //
  furnitureThree.splice(1, 1); //Remove the second index-element
  console.log(furnitureThree); //[ 'Bookshelf', 'Drawer', 'Dining Table', 'Coffee Table', 'Bed' ]

  // ******** Add elements ****** //
  furnitureThree.splice(1, 0, "Shoe Rack"); //Add an element without removing an element
  console.log(furnitureThree); 

  // [
  //   'Bookshelf',
  //   'Shoe Rack',
  //   'Drawer',
  //   'Dining Table',
  //   'Coffee Table',
  //   'Bed'
// ]
  
//includes(). checks if smething is in the array