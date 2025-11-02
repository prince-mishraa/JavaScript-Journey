function sayMyName(){
    console.log("P")
    console.log("R")
    console.log("I")
    console.log("N")
    console.log("C")
    console.log("E")
}

// function addTwoNum(num1, num2){
//     console.log(num1+num2);
// }

function addTwoNum(num1, num2){
    // let result = num1 + num2;
    // return result
    // console.log(Prince) wont return anything 

    return num1+ num2
}

const result = addTwoNum(5,15)
// console.log(result)


// function loginuser(username){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginuser())


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,500))

const user= {
    name: "Prince",
    price : 255
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    name: "P",
    price:552
})

const myNewarr = [200, 400, 600, 800]

function return2ndVal(getArray){
    return getArray[1];
}
console.log(return2ndVal(myNewarr))