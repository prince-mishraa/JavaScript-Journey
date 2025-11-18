// for of 

let arr = [1,2,3,45,55]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = " hello world! "
for(const greet of greetings){
    // console.log(`each char is ${greet}`)
}
// Maps

const map = new Map()

map.set('in',"India")
map.set('usa',"america")
map.set('np',"nepal")
map.set('bh',"bhutan")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,':- ', value);
    
}