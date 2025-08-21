//1. Query the DOM (Document Object Model)   . this involves picking the element
const loginForm = document.getElementById("login-form");

// 2. Add event listener 
//3. Handle event
loginForm.addEventListener("submit", function (e) {
    // alert("Form submitted");
    e.preventDefault();
})

// const googleLink = document.getElementById("google");
// googleLink.addEventListener("click", (e) => {
//     e.preventDefault();
//     alert("You have clicked me!");
// }
// )




