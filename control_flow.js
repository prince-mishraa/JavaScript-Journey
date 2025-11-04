const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question("Enter the temperature: ", (temp) => {
//   temp = Number(temp);

//   if (temp < 50) {
//     console.log("Yes, the temperature is less than 50.");
//   } else {
//     console.log("No, the temperature is greater than or equal to 50.");
//   }

//   rl.close();
// });


// const score = 400
// if(score > 200){
//     var result = "pass"
//     console.log(`User result: ${result}`);
// }

// console.log(`User result: ${result}`)

// const balance = 1000
// if(balance < 500){
//     console.log("less than 500");
    
// } else if(balance < 750){
//     console.log("less than 750");
    
// }else{
//     console.log("greater");
    
// }

const userLoggedin = true;
const debitcard = true;
const loggedinFromgoogle = false;
const loggedinfromemail = true

if(userLoggedin && debitcard){
    console.log("allowed to buy course");
    
}
if(loggedinFromgoogle || loggedinfromemail){
    console.log("Welcome");
    
}

else{
    console.log("No")
}
