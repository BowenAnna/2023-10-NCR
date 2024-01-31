const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res)=>{
    res.send("Check if a number is a Fibonacci number")
})

app.get('/:fibonacci_number', (req, res)=>{
    const {fibonacci_number} = req.params;
    const num = parseFloat(fibonacci_number);

    function isSquare(n) {
        return Math.sqrt(n) % 1 === 0;
    }
    function Fibonacci(num) {
        if (isSquare(5*(num*num)-4) || isSquare(5*(num*num)+4)) {
            res.send(`The number ${num} is a Fibonacci number.`);
        } else {
            res.send(`The number ${num} is not a Fibonacci number.`);
        }}
       Fibonacci(num); // Call the Fibonacci function with the num parameter
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
////////////////////////////////////////////////////
// const isFibonacci = (num) => {
//     if (num === 0 || num === 1) return true;

//     let a = 0;
//     let b = 1;
//     while (b < num) {
//         [a, b] = [b, a + b];
//     }
//     return b === num;
// };


///////////////////////////////////////////////////
// app.get('/fibonacci/:number', (req, res) => {
//     const num = parseInt(req.params.number);
//     if (isNaN(num)) {
//         res.send("Please provide a valid number.");
//     } else {
//         if (isFibonacci(num)) {
//             res.send("Very good. It is Fibonacci.");
//         } else {
//             res.send("I can tell this is not a fibonacci number.");
//         }
//     }
// });