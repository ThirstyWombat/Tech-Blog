const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      //   document.location.replace("/views/layouts/main.handlebars");
      alert("login sucess!");
    } else {
      alert(response.statusText);
    }
  }
  console.log("-----> CLICKED!");
};

const loginBtn = document.querySelector(".btn");
loginBtn.addEventListener("click", loginFormHandler);
