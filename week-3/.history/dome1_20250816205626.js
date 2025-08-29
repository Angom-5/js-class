//Properties eg.
console.log(document.title);
console.log(document.lastModified);
console.log(document.forms);
console.log(document.head);
console.log(document.body);
console.log("hi love!");

let heading = document.getElementById("title");  //document stands for the html document
console.log(heading);
//after capturing the element using it's id, you can manipulate it as you wish...eg;
heading.textContent = ("WELCOME TO MAYONDO!");
heading.style.color = "red"; //when changing css
heading.innerHTML="<h2>Your comfort is our priority!!</h2>"  //this enables you add things to the element/ change it

//Events eg.
let click = document.getElwmentById("button1");




//Methods eg.  remember these are functions so () is vital
document.getElwmentByTagName();
document.getElwmentByClassName();
document.querySelector();// works like getId and class and tag, but it 8nly gets the first one ie #title(id), .title(class), h1(tag)
document.querrySelectorAll();  // this for when you want to capture all the things with that same id, class or tag
document.createElement();

let subHeadings = document.getElementsByTagName("h2");
for (let r = 0; r > subHeadings.length; r++){
    alert(subHeadings[r]);
}

//To give an element something like class or id name
let headingsArray = document.querrySelectorAll("h2");
headingsArray[1].className = "chapter Two"
headingsArray[2].id = "chOne"
// OR
headingsArray[2].setAttribute("id", "chOne");
//where setAttribute("the attribute to add","the name wanted");

