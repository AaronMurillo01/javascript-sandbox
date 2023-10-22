// Falsy Value
// - false
// - 0
// - "" ir '' (Empty string)
// - null 
// - undefined
// - NaN

//  Truthy Value
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string) 
// - [] (empty object)
// - {} (empty object)
// - function () {} (empty function)

const x = false;

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is Falsy')
};

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 0;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Checking for empty arrays
const posts = ['Post One', 'Post Two'];

if(posts) {
    console.log('List Posts');
} else {
    console.log('No Posts');
}

//Checking for empty objects
const user = {
    name: 'Aaron'
};

if (user) {
    console.log('List user')
} else {
    console.log('No User');
}

//Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);