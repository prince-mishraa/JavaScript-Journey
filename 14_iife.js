// Immediately invoked function expression (IIFE)

(function connect(){
    // named iife
    console.log(`Connected`)
})();
// connect()

((name) => {
    console.log(`Connected again ${name}`);
})('Prince')