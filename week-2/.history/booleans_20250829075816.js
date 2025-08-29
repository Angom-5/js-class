//Used to test conditions in the code.

//methods
//.includes()=used to check if something is inside the datatype
let girl = {
    name: "claire",
    age: 19,
    sex:female 
}

let result=girl.includes(19)
//they have two values, true or false
let number1 = 5;
let number2 = 10;
isGreaterThan = number1 > number2;
console.log(isGreaterThan);

//when using booleans we use two operators i.e logic and comparison
//using comparison operators
console.log(5 == 5);
console.log(5 != 5);
console.log(5 === 5);
console.log(5 !== 5);
console.log("5" == 5);

//using logic operators
//&& AND opearator
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn && isAdmin) {
    console.log("Access is accepted")
} else {
    console.log("Access denied")
}

//|| OR operator. it remains true as long as one of the two is true
const width = 20;
const height = 15;
let result = width <= 20 || height < 5;
console.log(result);

//| NOT operator.

//using else if. this is used when there are three or more different situations 
let time = 0001;
let recentTime = x;
if (x>=0001){
    console.log("Good Morning")
}