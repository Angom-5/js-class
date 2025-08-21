//Local storage enables you store datat in your in browser permanenetly
//Session storage stores it temporarily

//Basic Methods
//localStorage
// Store data
localStorage.setItem("username", "Claire");     //("storeName", "item")

//Retrieve data 
let name = localStorage.getItem("username");
console.log(name);   //Output: Claire

//Remove specific item
localStorage.removeItem("username");


//Clear all data
localStorage.clear();



//Session Storage
//Store data
sessionStorage.setItem("username", "Claire");     //("storeName", "item")

//Retrieve data
let name1 = sessionStorage.setItem("username1", "Angom");
console.log(name1);

//Remove specific item
sessionStorage.removeItem("username1");


//Clear all data
sessionStorage.clear();

//localStorage can't store objects directly;
// You have to convert them into strings using JSON. stringify() and parse them back with JSON.parse

let user = {
    name: "Alba",
    age: 18,
    maritalStatus: "Single"
}
localStorage.setItem("user", JSON.stringify(user));

//retrieving data
let retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name);
console.log(retrievedUser.age);
console.log(retrievedUser.maritalStatus);






