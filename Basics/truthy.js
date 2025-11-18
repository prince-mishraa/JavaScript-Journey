const useremail = "h@hitesh.ai"

if(useremail){
    console.log("Got user email")
} else{
    console.log("Nothing")
}

// falsy value ->
// false, 0, -0, bigInt 0n, "" , null, undefined, NaN

// truthy value -> 
// "0", 'false' , " " ,[], {}, function(){}

if(useremail.length === 0){
    console.log("array empty");
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Empty object")
}

// Nullish Coalescing Operator (??): null operator

let val1;
val1 = 5 ?? 10

console.log(val1)

// Ternary Operator

const icetea = 100
icetea >= 80 ? console.log("less") : console.log("more")