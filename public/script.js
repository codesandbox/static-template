const quoteElement = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");
const author = document.getElementById("author");
const twitterBtn = document.getElementById("twitter-share");
const instagramBtn = document.getElementById("instagram-share");

let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  quoteElement.innerText = quote.text;
  author.innerText = `~${quote.author}~`;
  console.log(quote.text.length);
  if (quote.text.length >= 100) {
    quoteElement.classList.add("long-text");
  } else {
    quoteElement.classList.remove("long-text");
  }

  quoteElement.classList.remove("text-animation");
  author.classList.remove("text-animation");
  void quoteElement.offsetWidth;
  void author.offsetWidth;
  quoteElement.classList.add("text-animation");
  author.classList.add("text-animation");
}
async function getQuotes() {
  try {
    const apiUrl =
      "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
  } catch (error) {}
}
getQuotes();

newQuoteBtn.addEventListener("click", () => {
  newQuote();
});

twitterBtn.addEventListener("click", () => {
  twitterBtn.addEventListener("click", () => {
    const quoteText = quoteElement.innerText;
    const authorText = author.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText}`;
    window.open(twitterUrl, "_blank");
  });
});
