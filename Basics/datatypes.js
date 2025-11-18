// Primitive Data Types in JavaScript

// 7 types : String, number, Boolean, Null, undefined, Symbol, BigInt

// let userEmail;

// const id = Symbol('234')
// const anotherId = Symbol('234')

// console.log(id === anotherId)

// const Bignumber = 54846618778548854155205535n



// //  Reference (non-primitive) Data Types: Objects, Arrays, Functions 

// const heros = ["shaktimaan", "doga", "krish"]
// let myobj = {
//     name: "Prince",
//     age: 23,
// }

// const myfuction = function() {
//     console.log("Hii")
// }

// console.log(typeof myobj)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), heap(Non-Primitive)

// let myname = "Prince"
// let username = myname
// username = "Princemishra"
// console.log(myname);

let user = {
    email : "Iser@gmail.com",
    user_name: "user123"
}
let user2 = {
    email : "user@gmail.com",
    user_name: "user2"
}
user2 = user
console.log(user)
console.log(user2);