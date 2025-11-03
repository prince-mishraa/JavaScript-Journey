// array

const myarr = [2,3,4,5,6]
const myhero = ["Hulk", "Thor", "Blade", "Hercules"]
const dchero = ["flash" , "superman", "batman"]
const myarr2 = new Array(1,7,8,9)

// console.log(myarr);
// console.log(myhero);

// Array method

// myarr.push(8)
// myarr.pop()

// myarr.unshift(0)
// myarr.shift()

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));

const newArr = myarr.join()

// console.log(myarr)
// console.log(typeof newArr);

// slice, splice

// console.log("A", myarr);
// const myn1 = myarr.slice(1,3)
// console.log(myn1);
// console.log("B ", myarr)

// myhero.push(dchero)
// console.log(myhero)

// const allhero = myhero.concat(dchero)
// console.log(allhero)

const allnewhero = [...myhero, ...dchero]

// console.log(allnewhero)

const another_array = [1,2,3, [4,5,6], 7, [6,7, [8,9,4]]]

const real_aa = another_array.flat(Infinity)

console.log(real_aa)

console.log(Array.isArray("hsitesh"));
console.log(Array.from("Prince"))
console.log(Array.from({name: "Prince"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


console.log(Array.of(score1, score2, score3));
(Functions)
