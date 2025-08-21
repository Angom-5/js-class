 /*exercise
1. model a phone object with properties:color,size,type
methods: take pictures, play music, ring.
create two phones samsung and iphone.
dislay the properties of the phone as well as call the methods of the phone objects.

2. model a user object with properties:email, username, gender
with methods: login, logout. create 2 user objects: Bob and Alice
dislay the properties of the user as well as call the methods of the user objects.

*/

1. let samsung = {
    color: "red",
    size: 46,
    type: "S25",
    takePictures: function () {
        return "click click"
    },
    playMusic: function () {
        return "Wish you the best by Lewis Capaldi"
    },
    ring: function () {
        return "prr prr"
    }
}

console.log(samsung.color);
console.log(samsung.size);
console.log(samsung.type);
console.log(samsung.takePictures());
console.log(samsung.playMusic());
console.log(samsung.ring());

let iphone = {
    color: "blue",
    size: 62,
    type: "16 Pro",
    takePictures: function () {
        return "picture picture"
    },
    playMusic: function () {
        return "fire by BTS"
    },
    ring: function () {
        return "DING DING!"
    }
}

console.log(iphone.color);
console.log(iphone.size);
console.log(iphone.type);
console.log(iphone.takePictures());
console.log(iphone.playMusic());
console.log(iphone.ring());

