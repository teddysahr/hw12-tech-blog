async function newFormHandler(event) {
  event.preventDefault();
  const post_title = document.querySelector("#post_title").value;
  const post_content = document.querySelector("#post_content").value;

  // Send fetch request to add a new post
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      post_title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add post");
  }
}

document
  .querySelector(".add-post-form")
  .addEventListener("submit", newFormHandler);
