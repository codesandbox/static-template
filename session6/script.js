// FETCH and PROMISE

// console.log("a");

// const fetchPromise = fetch("https://api.github.com/users")
//   .then((response) => response.json()) // status code, other thing
//   .then((data) => console.log(data))
//   .then(() => console.log(fetchPromise))
//   .then(() => console.log("hello"));

// console.log("b");

// Activity

// fetchQuotes() // returns the JSON Quotes
// display those quotes on the screen

function addQuoteToDOM(quote) {
  // create your card here ....

  const divcontainer = document.createElement("div");
  divcontainer.innerHTML = `
    <div class="abc">
      <h1></h1>

    </div>
  
  `;

  const h1elemtn = document.createElement("h1");
  h1elemtn.innerText = quote;
  h1elemtn.className = "";

  // const h1Element = document.getElementById("kayneQUote");
  // h1Element.innerText = quote;

  const body = document.body;

  // 1.append
  body.append(h1elemtn);

  // 2. inner html
  // body.innerHTML = body.innerHTML + quote;
}

// function fetchQuote() {
//   const url = "https://api.kanye.rest";

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const { quote } = data;
//       addQuoteToDOM(quote);
//     })
//     .catch((error) => {
//       //
//       console.log("ERROR occured");
//     });
// }

// fetchQuote();

// async  -> to any FUNCTIOn that function will always return a PROMSIE

// await -> looks like IT IS waiting ....

// async function getGithubApiUsers() {
//   try {
//     const url = "https://api.github.com/users sfsafsdfsfsd";
//     const reponse = await fetch(url);
//     const data = await reponse.json();

//     console.log("hello");
//     console.log(data);
//     console.log("abcd");
//   } catch (error) {
//     //
//     console.log("error occured");
//   }

//   // do soemthing
// }

// getGithubApiUsers();

// console.log("a");

// const fetchPromise = fetch("")
//   .then((response) => response.json()) // status code, other thing
//   .then((data) => console.log(data))
//   .then(() => console.log(fetchPromise))
//   .then(() => console.log("hello"));

// console.log("b");

// Fetch the quotes....

async function fetchQuote() {
  const url = "https://api.kanye.rest/";
  const response = await fetch(url);
  const data = await response.json();

  const { quote } = data;

  console.log(quote, "fetchQuote");

  return quote;
}

// WAY 1 to consume (Which is not preferable)
// async function quoteKanye() {
//   fetchQuote().then((data) => console.log(data, "hey there then catch "));
// }

// Way 2 -> to consume (preferable)

// async function quoteKanye() {
//   const quote = await fetchQuote();
//   console.log(quote, "quoteKanye");

//   addQuoteToDOM(quote);
// }

// const promise = quoteKanye();
// console.log("promise quote kanye", promise);

// OUTPUT QUESTION  PRMISE

// console.log("a")

// fetch().then(console.log("c")) // many many time

// console.log("b")

// OUTPUT question ASYNC AWAIT

async function abc() {
  console.log("a");
  const res = await anyPromise();

  console.log(res); // 12

  console.log("b");
}
