function createPost({title, body}) {
  fetch("", {
    method: "POST",
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
        'Content-Type': 'application/json',
        token: 'abc123'
    }
  }).then(res => res.json())
  .then(data => console.log(data));
}


createPost({title: 'My Posts', body: 'This is my body'})