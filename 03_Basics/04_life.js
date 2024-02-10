// Immediately Invoked Function Expressions (IIFE)

(function tea(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("Salunkhe Abhijit")
