console.log("Anjali");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => {
    let stuff = json;
    stuff = stuff.map((s) => ({
      ...s,
      bodyLength: s.body.length
    }));
    stuff = stuff.sort((a, b) => b.bodyLength - a.bodyLength);
    document.querySelector("#app pre").innerHTML = JSON.stringify(
      stuff,
      null,
      2
    );
    const longestBody = stuff[0].body
      .split(" ")
      .map((a) => a.split("\n"))
      .flat()
      .sort((a, b) => b.length - a.length);
    const UserIDPosts = stuff.reduce((acc, cur) => {
      if (!acc[cur.userId]) {
        acc[cur.userId] = [];
      }
      acc[cur.userId].push(cur);
      return acc;
    }, {});
    document.querySelector(
      "#app article"
    ).innerHTML = `<strong>Title & User ID of Longest Body:</strong>
    <br/>
    Title: ${stuff[0].title}
    <br/>
    UserID: ${stuff[0].userId}
    <br/>
    <br/>
    <strong>Longest Word in Longest Body</strong>
    <br/>
    ${longestBody[0]}
    <br/>
    <br/>
    <strong>Array of Objects with the UserID and their Posts</strong>
    <pre>${JSON.stringify(UserIDPosts, null, 2)}</pre>`;
  });
