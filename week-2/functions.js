//function <name of thing to do>(things to manipulate) {}
//say return if you want the thing to be saved in memory
/*eg;
function add(a,b){
return a+b;
} 
1. if you want to call the function to do something 
functionName()

2. if the thing needs parameters
 function functionName(parameters){}

3. if there are arguments
functionName(arguments) 

4. use arguments and parametres when you want to repeat the use
*/

function addTwoNumbers(x, y) {
  let sum = x + y;
  return sum;
}
console.log(addTwoNumbers(10.3));

function squareNumber(x) {
  return x * x;
}
console.log(squareNumber(3));
console.log(squareNumber(7));
console.log(squareNumber(21));
console.log(squareNumber(78));
// when you declare a specific value, the function can't be used for other things hence its just good to state parameters and use arguments.

// calculate the total price for tables
//calculate vat for the total price
function calculateTotalPrice(quantity, unitPrice, transportCost) {
  const vat = 0.18;
  let fullPrice = quantity * unitPrice;
  let totalPrice = fullPrice + fullPrice * transportCost;
  let vatFee = fullPrice * vat;
  return { totalPrice, vatFee };
}

console.log(calculateTotalPrice(3, 20000, 5 / 100));
// you can return more than one thing. This is done by return{put whatever it is you want to return}

//functions with strings
let firsName = "Claire";
let lastName = "Angom";
function greeting(firsName, lastName) {
  let fullName = firsName + "" + lastName;

  return "Hello " + fullName;
}

console.log(greeting("Claire ", " Angom!"));

function greeting(fullName) {
  return "Hello " + fullName;
}

console.log(greeting("Claire Angom!"));

//functions with arrays
let actions = [
  function greet() {
    console.log("hello");
  },
  function calculate() {
    console.log(1 + 1);
  },
  function thankYou() {
    console.log("thank you for using our system");
  },
];

actions[0]();
actions[1](); //Remember its an ordered list hence it starts counting 0. The () invokes the thing to run.
actions[2]();
console.log(actions); // remember to link this thing to the html file using<script src=""></script>

//functions with objects
//state the properties
//using a list for groceries
let quantity;
let price;
let unitPrice;
let address;
let transportCost;
let vatFee;
let productName;
let paymentMethod;

//state the actions done in this thing
let calcTotalPrice;
let calculateFullPrice;

//now make the object
let order = {
  unitPrice: 30000,
  quantity: 3,
  calculateFullPrice: function () {
    return this.unitPrice * this.quantity; //select the thing which in the same object because some objects share the same properties
  },
};

//to make it show
order.unitPrice;
order.quantity;
order.calculateFullPrice(); //for this one we put () it's an action hence the () calls it to action

// so to print it
console.log(order.calculateFullPrice());
console.log(order.quantity);

function userObject(fullname, email, position){
    return {
        fullname: fullname,
        email: email,
        position: position,
        isLoggedIn: false,
        isMarried: false,
        printInformation: function(){
          return fullname: `${fullname}\nE-mail: ${email}\nPosition: ${position}`;
        },
        login: function(){
             this.isLoggedIn = true;
          return `${fullname} has logged in!`;
        },
        logout: function(){
            this.isLoggedIn = false;
          return `${fullname} has logged out!`;
        },
        getStatus: function(){
          return `${this.fullname} is currently ${this.isLoggedIn ? "logged In" : "logged out"}`;
        },
        isMarried: function(){
            this.isMarried = true
          return `${fullname} is married`;
        },
         isNotMarried: function(){
            this.isMarried = true
           return `${fullname} is not married`;
        }

    }

}

let userOne = userObject("Hana Debay","hana.debay@gmail.com","Manager");
let userTwo = userObject("Desire", "desire2025@gmail.com","Software Engineer")
let userThree = userObject("Timothy", "timothy2025@gmail.com","CEO")
console.log(userOne.printInformation());
console.log(userOne.login());
//console.log(userOne.logout());
console.log(userOne.isMarried());
console.log(userTwo.printInformation())
console.log(userTwo.isNotMarried())