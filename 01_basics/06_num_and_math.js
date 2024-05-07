const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++Maths+++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//converts to absolute value like -4 to 4 only in +ve value.
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));


console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10 
const max = 20

Math.random()*(max - min +1)