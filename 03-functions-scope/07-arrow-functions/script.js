// function add (a, b) {
//     return a + b;
// }

const add = (a, b) => {
  return a + b;
};

//Implicit return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = (a) => a * 2;

// Returning an object
const createObj = () => ({
  name: "Brad",
});

const number = [1, 2, 3, 4, 5];

number.forEach(function(n) {
    console.log(n);
});

// Arrow function in a callback
number.forEach(n => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());
