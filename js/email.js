const scriptURL =
  "https://script.google.com/macros/s/AKfycbyYkxouuHZPKZ4KqeKzQUJT5t3-5vVz8nUUWMdKJAUQOvB1VObDQbaLp_0OZ0u4F5gSHg/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you for subscribing !!!";
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
