async function commentFormHandler(e) {
  e.preventDefault();

  const title = document.querySelector("#comment-title").value.trim();
  const comment_text = document.getElementById("comment-content").value.trim();
  const pod_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (title && comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        title,
        comment_text,
        pod_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#comment-submit")
  .addEventListener("click", commentFormHandler);
