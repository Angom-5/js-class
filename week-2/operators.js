//1. increament and decreament operators. it's only used for -1 or +1
let x = 5; x++;   // used to show increasing numbers automatically
let y = 4; y--;   //used to show decreasing numbers automatically
console.log(x,y)
//It can be used when stock counting eg.
let stckqnty = 2000; stckqnty--;
console.log(`stock left is ${stockqnty}`); // also in products sold, sales made, or anything that increases or decreases in number.

//2. assignment operators. it can be used fr many mathematical 
//assigns a value t a variable eg.
let z = 5;  //5 (the value) is assigned to z(the variable)
console.log(z = 5);

//others are
z += 6;   //or z= z+6;
z -= 3;   //or z= z-3;
z *= 2;   //or z= z*2;
z /= 5;   //or z= z/5;
z %= 4;   //or z= z%4;
z **= 2;  //r z=z**2(raised to the po

//3. comparison operators
let k = 54.3;
k == 54;//if k is losely equal to 54
k === 54;//if k is strictly equal to 54
k !== 43;//if k is NOT equal to 43
k > 34;//greater than
k < 60;//less than
k <= 57;//less than or equal to
k >= 55;//greater than or equal to

//4. logic operators. it's for connecting two conditions or more(nesting)
let isLoggedIn = true;
let isAdmin = false;

console.log(`isLoggedIn && isAdmin ${isLoggedIn && isAdmin}`); //AND: both are true
console.log(`isLoggedIn || isAdmin ${isLoggedIn || isAdmin}`); //OR: at least one is true
console.log(`|isLoggedIn ${|isLoggedIn}`); //NOT:opposite of value

//5. bitwise operators. wrks n binary digits.(used to move from base 10 t base 2)
console.log(`a^b`);
console.log(``);
console.log(``);

