// console.log("110");

// setTimeout(() => {
//   console.log("220");
// }, 0);

// console.log("330");
// console.log("430");

// ---- ACTIVITY -1

// function showGreeting(name) {
//   console.log("Hello " + name + "!");
// }

// setTimeout(() => {
//   showGreeting("alaska");
// }, 3000);

// console.log(showGreeting("asdasdasd"));

// console.log("hello");

// setTimeout(() => {
//   showGreeting("alaska");
// }, 3000);

// setTimeout(showGreeting("asdasdasd"), 3000);

// ------- - - - - - Promise (javascript)--------

// const url = "https://api.kanye.rest/";
// const dataPromise = fetch(url); // browser API
// console.log(dataPromise);

// dataPromise
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data, "play with data ");
//   })
//   .catch((err) => {
//     console.log(err + "hey there this is an wrror");
//   });

// --------- activity 4  -------

function fetchQuotes() {
  const url = "https://api.kanye.rest/";
  const dataPromise = fetch(url);
  return dataPromise.then((response) => response.json());
}

function addQuoteToDOM(queoteData) {
  const { quote } = queoteData;

  const paragraph = document.createElement("p");
  paragraph.innerHTML = `<strong> ${quote} </strong>`;

  document.body.append(paragraph);
}

fetchQuotes().then((data) => {
  addQuoteToDOM(data);
});
// addQuoteToDOM({ quote: "hey the i am a motivational quote" });
