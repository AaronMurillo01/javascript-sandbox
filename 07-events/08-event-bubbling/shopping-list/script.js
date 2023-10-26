const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
  alert("Button was clicked");
  // The rest of the alert wont active after this one.
  e.stopPropagation();
});

div.addEventListener("click", () => {
  alert("Div was clicked");
});

form.addEventListener("click", () => {
  alert("Form was clicked");
});

document.body.addEventListener("clicked", () => {
  alert("Body was clicked");
});
