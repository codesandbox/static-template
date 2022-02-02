const promiseGreeting = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Rohan!";

    resolve(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

console.log("Greetings Start");

promiseGreeting

  .then((greeting) => console.log(greeting))

  .catch((err) => console.log(err));

console.log("Greetings End");

const greetRohan = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Rohan!";
    resolve(greeting);
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

console.log("Greetings Start");

greetRohan
  .then((greeting) => console.log(greeting))
  .catch((err) => console.log(err));

greetShyam
  .then((greeting) => console.log(greeting))
  .catch((err) => console.log(err));

console.log("Greetings End");
