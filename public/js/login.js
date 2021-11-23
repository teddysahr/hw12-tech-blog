async function newFormHandler(event) {
  event.preventDefault();
  const login_username = document.querySelector("#login_username").value;
  const login_email = document.querySelector("#login_email").value;
  const login_password = document.querySelector("#login_password").value;

  // Send fetch request to add a new post
  const response = await fetch(`/api/users/login`, {
    method: "POST",
    body: JSON.stringify({
      login_username,
      login_email,
      login_password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("failed to login");
  }
}

document
  .querySelector("#login-form")
  .addEventListener("submit", newFormHandler);
