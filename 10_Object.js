// const tinderUser = new Object;
const tinderUser = {};
tinderUser.id = "123"
tinderUser.name = "Panta"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname : "Prince",
            lastname : " Mishra"
        }
    }
}
// console.log(regularuser.fullname?.username)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "s", 6: "h"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1, obj2, obj5)
const obj3 = {...obj1, ...obj2,...obj5}
// console.log(obj3);

const users = [{
    id : 1,
    email: "h@.com"
}]

// users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



