var movies = [
  "1898: Our Last Men in the Philippines , June 13th, 2021",
  "13TH: A Conversation with Oprah Winfrey & Ava DuVernay , June 14th, 2021",
  "100 Meters June 15th,  2021"
];

for (let i = 0; i < movies.length; i++) {
  document.querySelector(
    ".movies-container"
  ).innerHTML += `<p>${movies[i]}</p>`;
}
