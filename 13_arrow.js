const user = {
    name : "Prince",
    price: 999,

    welcome: function(){
        console.log(`${this.name}, welcome to the website`)
        console.log(this)
    }

}

// user.welcome()
// user.name = "Achal"
// user.welcome()

// console.log(this);

// function one(){
//     let name = "prince"
//     console.log(this.name)
// }
// one()

// const one = function (){
//     let name = "prince"
//     console.log(this.name)
// }

const one = () => {
    let name = "prince"
    console.log(this.name)
}
// one()

// const add = (num1, num2) => {
//     return num1+num2
// }
// console.log(add(2,3))

// const add = (num1, num2) => (num1+num2)

const add = (num1, num2) => {name : "Prince"}


console.log(add(2,3))

const myarr = [2,3,5,74,2]

// myarr.forEach()