function addContent() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const image = document.getElementById("image").value;
  const video = document.getElementById("video").value;

  // Create a new content div element
  const newContent = document.createElement("div");
  newContent.classList.add("content-item");

  // Populate the content div with the entered data
  newContent.innerHTML = `
      <h2>${title}</h2>
      <p>${content}</p>
      ${image ? `<img src="${image}" alt="${title}">` : ""}
      ${
        video
          ? `<iframe width="560" height="315" src="${video}" frameborder="0" allowfullscreen></iframe>`
          : ""
      }
  `;

  // Add the new content to the blog container
  const blogContainer = document.getElementById("blog");
  blogContainer.appendChild(newContent);

  // Clear the input fields
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  document.getElementById("image").value = "";
  document.getElementById("video").value = "";
}
