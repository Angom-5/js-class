// there are four sections to this thing
//1. Encapsulation. putting your variables within a curly bracket so as to make it private  -->
let userName = {
    firstName: "Claire",
    lastName: "Angom"
}

//Classes/ Constructer function(basically for making new objects). A templet/ mold/blue-print for creating an object
// class Person{
//     // code goes here
//     constructor(parameter) {
//         this.parameter =;

//     }:
// function() {
    
// }
// }

const person1 = new Person(); // instatiate
console.log(person1); //it will return an empty object ie Person{} hence it shows it was created by Person class


class Furniture{
    constructor(productName, price, stock) {
        this.productName = productName;
        this.price = price;
        this.stock = stock;
    }
} sell(){
    alert(`sold: ${this.stock}`);
}


//inherit uses the key word extends and super(makes sure it picks fron the parent only)
class Chair extends Furniture{
    constructor(productName, price, stock) {
        super(productName, price, stock);
        this.material = this.material;// additional x-tics
    };
    showMaterial(){
    alert(`${this.productName} is made of ${this.material}`);
    }
    //this is for polymorphism where something has the same aspects but also has its own feautures
    deliveryTime() {
        
    }

}





//abstraction. this hides what you don't want the user to see



// Inheritance
//Polymorphism. enables an object take on many forms
//syntax: class a extends main class eg
class Animal{
    speak() {
        alert("generic animal sounds");
    }
}

class Dog extends Animal{
    alert("woof woof!");
}
