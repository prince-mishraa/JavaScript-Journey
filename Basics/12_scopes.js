// var c = 300
let a = 300
// if(true){
// //     let a = 2
//     console.log("inner: ", a)
// }

// console.log(a);

function one(){
    const name = "Prince"

    function two(){
        const website = "instagram"
        console.log(name);
    }
    // console.log(website)

    two()
}
// one()

if(true){
    const name = "prince"
    if(name === "prince"){
        const website = " INsta"
        console.log(name + website)
    }
    // console.log(website);
}
// console.log(name)

// +++++++++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1;
}
const addtwo = function(num){
    return num + 2;
}

addtwo(5)

