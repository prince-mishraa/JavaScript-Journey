// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("55555")
//     }
//     console.log(element)
// }

let myarr = ['flash' , 'batman', 'superman']

for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop  ${i}`)
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop ${j} and inner loop ${i }`);
        console.log(i + '*' + j + ' = ' + i*j);
    }
}

for (let index = 0; index < 21; index++) {
    if(index == 5) break;
    console.log(`element: ${index}`)
    
}