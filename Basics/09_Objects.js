// singleton
// Object.create
// Object literals

const mySymbol = Symbol("key1")

const jsUser = {
    [mySymbol] : "mykey",
    name: "prince",
    "full name": "Prince Mishra",
    
    age: 18,
    location: "Mumbai",
    email: "prince.com",
    isLoggedin : false,
    lastLogindays: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySymbol])
