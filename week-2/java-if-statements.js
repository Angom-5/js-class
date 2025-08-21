//if else statements
let person = 25;
if (person >= 18) {
  console.log("Can Vote!");
} else {
  console.log("Can't Vote!");
}

//prompt
let age = prompt("Please enter your age: ");
age = Number(age); //this is just to make sure that the the input is a number
if (person >= 18) {
  window.alert("You are an adult, You Can Vote!");
} else {
  window.alert("You are a minor, You Can't Vote!");
} //the alert shows on the browser while console.log shows on the terminal

//isNaN. It's usually used for removing possibilities of gaining unwanted data
//eg; taking the above example if someone wrote a word in place of a number the code will take it as else and say they can't vote, hence why we use isNaN

let age = prompt("Please enter your age: ");
age = Number(age);

if (isNaN(age) || age < 0) {
  window.alert("Please enter a valid age!");
} else {
  if (age >= 18) {
    window.alert("You are an adult, You Can Vote!");
  } else {
    window.alert("You are a minor, You Can't Vote!");
  }
  window.alert("You are a minor, You Can't Vote!");
}

// switch statement
let paymentMethod = prompt("Enter Payment method:(Cash,Mobile Money,Bank)")
switch(expression)(
    case value1:

    //write code when expression ===value1 
    break
    case 2:
         //write code when expression === value2
    break
    case 3:
        //write code when expression === value3
    default:
        // wirte code non of the code matchs       
}        

switch(payment Type)(
    case: value"Cash":

    windw.alert("Process cash payment on the counter") 
    break;
    case "Mbile Money":
   windw.alert("verify your phone  details befre delivering")
    break;
    case "Bank":
console.log("confirm before proceding")
    break;    
    default:
       windw.alert("unknown method please check again!") 