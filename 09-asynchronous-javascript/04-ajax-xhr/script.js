const xhr = new XMLHttpRequest();

// xhr.open("GET", "./movie.json");

// readyState had 5 possible values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach((movie) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${movie.title}</strong> -$ ${movie.year}`;
      document.querySelector("#results").appendChild(li);
    });
  }
};

xhr.send();
