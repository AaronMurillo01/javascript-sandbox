const firstName = "Aaron";
const lastName = "Murillo";
const age = "24";

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

//Destructing

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "Aaron",
  },
};

const {
  id: todoId, 
  title,
  user: { name },
} = todo;

console.log(todoId);

// Destructure arrays
const numbers = [23, 67, 33, 49, 53]

const [first, second, ...rest] = numbers;

console.log(first, second, rest);