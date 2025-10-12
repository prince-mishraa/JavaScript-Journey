const name = "prince"
const repoCount = 4

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gamename = new String('Coc')
console.log(gamename)
console.log(gamename[0])
console.log(typeof gamename); 
console.log(gamename.length);

console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('c'));

const newStringOne = "    prince    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prince.com/prince%20mishra"

console.log(url.replace('%20', '-'))
console.log(url.includes('prince'))

console.log(gamename.split('-'));