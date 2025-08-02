const accountId = 14534
let accoutnEmail = "prince@html.com"
var accoutPassword = "12442"
/* Prefer not to use var,
because of issue in block scope and functional scope */
accountCity = "Mumbai"
let accountState;

// accountId = 2; ❌ cannot change const variable
accoutnEmail = "heint";
accoutPassword = "1232";
accountCity = "Delhi";

console.table([accountId, accoutnEmail, accoutPassword, accountCity, accountState]);
console.log(accountState);