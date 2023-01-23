// async- await

// async function promiseHello() {
//   return "hello world";
// }

// promiseHello().then(data => console.log(data));

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

// ----- -- - - - - -async await kanye ACTIVITY -3 - - - - - - -

// async function fetchQuotes() {
//   try {
//     const url = "https://api.kanye.rest/";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data, "hey there i am palying very effeciently");
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchQuotes();

// console.log(promiseHello().then((data) => console.log(data)));

// ACTIVITY -1
// function getUsers() {
//   const url = "https://api.github.com/users";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// getUsers();

// const getUsersAsync = async () => {
//   try {
//     const url = "https://api.github.com/users";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUsersAsync();

// ACTIVITY2

// function getUsers() {
//   const url = "https://api.github.com/users";
//   return fetch(url).then((response) => response.json());
// }

// function createListItem(text) {
//   const element = document.createElement("li");
//   element.innerText = text;

//   document.body.append(element);
// }

// function addUsersToDom() {
//   const userPromise = getUsers();

//   userPromise.then((dataArray) => {
//     let modifiedArr = dataArray.map((item) => item.login);
//     console.log(modifiedArr);

//     for (let i = 0; i < modifiedArr.length; i++) {
//       let userName = modifiedArr[i];
//       createListItem(userName);
//     }
//   });
// }

// addUsersToDom();

//  fetch  ----- ... post TODO: ....

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   location: {
//     lat: -38.383494,
//     lng: 33.427362
//   },
//   accuracy: 50,
//   name: "Utkarsh house",
//   phone_number: "(+91) 880 247 3369",
//   address: "ranibagh delhi",
//   types: ["shoe park", "shop"],
//   website: "https://utkarsh.in",
//   language: "French-IN"
// });

// var requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };

// fetch(
//   "https://rahulshettyacademy.com/maps/api/place/add/json?key=qaclick123",
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result, "results of posting utkarsh's house"))
//   .catch((error) => console.log("error", error));

const utkarshPlaceId = "f08ef529bc7cb348a386f61930aae4a4";

// get the whole information about utkarshplace
var requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch(
  `http://rahulshettyacademy.com/maps/api/place/get/json?key=qaclick123&place_id=f08ef529bc7cb348a386f61930aae4a4`
)
  .then((response) => response.json())
  .then((result) =>
    console.log(result, "hey i got the result of the utakrsh place")
  )
  .catch((error) => console.log("error", error));
