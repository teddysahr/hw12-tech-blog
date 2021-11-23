async function newFormHandler(event) {
  event.preventDefault();
  const create_username = document.querySelector("#create_username").value;
  const create_email = document.querySelector("#create_email").value;
  const create_password = document.querySelector("#create_password").value;

  // Send fetch request to add a new post
  const response = await fetch(`/api/users`, {
    method: "POST",
    body: JSON.stringify({
      create_username,
      create_email,
      create_password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("failed to create account");
  }
}

document
  .querySelector("#create-account-form")
  .addEventListener("submit", newFormHandler);
