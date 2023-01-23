// // POST
// var data = JSON.stringify({
//   location: {
//     lat: -38.383494,
//     lng: 33.427362
//   },
//   accuracy: 50,
//   name: "Utkarsh house 222",
//   phone_number: "(+91) 880 247 3369",
//   address: "ranibagh delhi",
//   types: ["shoe park", "shop"],
//   website: "https://utkarsh.in",
//   language: "French-IN"
// });

// fetch("https://rahulshettyacademy.com/maps/api/place/add/json?key=qaclick123", {
//   method: "POST",
//   body: data
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data, "posted the address"));

// // fetch(
// //   "http://rahulshettyacademy.com/maps/api/place/get/json?key=qaclick123&place_id=0a7e233f27f2c3502e36222b64ad05dc"
// // )
// //   .then((response) => response.text())
// //   .then((data) => console.log(JSON.stringify(data)))
// //   .catch((err) => console.log(err));

// Activity 1
// function addPostToServer(dataObject) {
//   return fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(dataObject)
//   }).then((response) => response.json());
// }

// addPostToServer({
//   title: "foo",
//   body: "bar",
//   userId: 1
// }).then((data) => console.log(data, "data is here"));

// const addPostToServer = async (dataObject) => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(dataObject)
//   });
//   const data = await response.json();
//   console.log(data);
// };

// addPostToServer({
//   title: "utakrsh ",
//   body: "hey there",
//   userId: 1
// });

// fetch(); // good data 200 ok
// bad data  error

// let myFetch = new Promise((resolve, reject) => {
// xHttpreques
// let data = { quote: "this is a quote", status: 500 };
// resolve(data);
// if (data.status === 200) {
//   resolve(data);
// } else {
//   reject({
//     status: 500,
//     message: "hey there was some server error"
//   });
// }
// });

// myFetch.then((data) => console.log(data)).catch((err) => console.log(err));

// curious cat-------------
// const greetRohan = new Promise((resolve, reject) => {
//   try {
//     const greeting = "Hello Rohan!";
//     reject(greeting);
//   } catch {
//     reject(new Error("Cannot Greet!"));
//   }
// });

// const greetShyam = new Promise((resolve, reject) => {
//   try {
//     const greeting = "Hello Shyam!";
//     resolve(greeting);
//   } catch {
//     reject(new Error("Cannot Greet!"));
//   }
// });

// console.log("Greetings Start"); // 1

// greetRohan
//   .then((greeting) => console.log(greeting)) //2
//   .catch((err) => console.log(err)); //3

// greetShyam
//   .then((greeting) => console.log(greeting)) // 4
//   .catch((err) => console.log(err)); // 5

// console.log("Greetings End"); // 6

// ----- activiy 4

const greetShyam = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Shyam!";
    resolve(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

const greetRohan = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Rohan!";
    resolve(greeting);
    // reject(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

greetRohan
  .then((data) => {
    throw new Error("asdasdasdasdasdasd");
    console.log(data, "1");
    return greetShyam;
  })
  .then((data) => {
    console.log(data, "2");
  })
  .catch((error) => console.log(error, "I wont greet anyone"));
