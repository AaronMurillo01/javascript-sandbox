const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John", age: 20 });
  }, 1000);
});

// promise.then(data => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

async function getUser() {
  const res = await fetch("https://josnplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

// function getUser() {
//   fetch("https://josnplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data));

//   console.log(data);
// }

// getUser();

const getPosts = async() => {
    const res = await fetch("https://josnplaceholder.typicode.com/posts");
    const data = await res.json();
  
    console.log(data);
  }

  getPosts();