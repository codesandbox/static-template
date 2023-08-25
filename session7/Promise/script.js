// const Fetch = new Promise((res, rej) => {

//   try {
//     //  const url
//     // xMlhttpRequest -> this is the basic thing thaat calls the serve // data

//     // wrap data in response

//     // res(response)
//   } catch(error) {
//     rej("thro the error error message")
//   }
// })

const myFetch = new Promise((resolve, reject) => {
  try {
    // some
    resolve(10000000000);
  } catch (error) {
    reject("Hey there is error");
  }
});

// fetch("asdasd").then().catch()

myFetch.then((data) => console.log(data, "my promise data"));

// ACTIVITY

// const team = [
//   {
//     id: "anna",
//     fullName: "Anna Kendrick",
//     jobTitle: "Front-end Ninja"
//   },
//   {
//     id: "harry",
//     fullName: "Harry Fawn",
//     jobTitle: "Illustrator"
//   },
//   {
//     id: "sofia",
//     fullName: "Sofia Sultan",
//     jobTitle: "Backend Engineer"
//   }
// ];

// const getDataRow = (dataObj) => {
//   const tableRow = document.createElement("tr");
//   const tableData = `
//   <td>${dataObj.id}</td>
//   <td>${dataObj.fullName}</td>
//   <td>${dataObj.jobTitle}</td>
//   `;
//   tableRow.innerHTML = tableData;
//   return tableRow;
// };

// const addDataToTable = (data) => {
//   const tableData = document.getElementById("table-data");
//   data.forEach((item) => {
//     const row = getDataRow(item);
//     tableData.appendChild(row);
//   });
// };

// console.log(document.body);

// SOLUTION ...

// Promise creation
// const promise = new Promise((res, rej) => {
//   res(team);
// });

// // Promise consumption way1
// // promise.then((data) => addDataToTable(data));

// // WAY 2
// async function abcd() {
//   const data = await promise;
//   addDataToTable(data);
//   console.log(data, "data");
// }

// abcd();

// ACTIVITY -  Greet Both or Greet Shyam

const greetRohan = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Rohan!";
    reject(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

const greetShyam = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Shyam!";
    resolve(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

function abc() {
  console.log("hello ");
  //  return undefined;
}

greetRohan
  .then((data) => {
    console.log(data, "1");

    return greetShyam;
  })
  .then((data) => {
    console.log("2", data);
  })

  .catch((error) => console.log("I dont want to greet anyone"));
