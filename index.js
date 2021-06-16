const item = $(".gridItem:nth-of-type(2)");
item.css("color", "green");
// item.children().prepend("<p>test</p>");
const text = item.text();
// item.html(`
// <img src="https://rickandmortyapi.com/api/character/avatar/69.jpeg" alt="">
// <p>${text}</p>
// `);
// render image and text from the following api
//
(async function getRick() {
  const res = await fetch("https://rickandmortyapi.com/api/character/1,13,183");
  const data = await res.json();
  let name = data[0].name;
  let image = data[0].image;
  item.html(`
<img src=${image} alt="">
<p>${name}</p>
`);
})();
