const numKids = Math.floor(Math.random() * 10) + 8;

// function numKids (min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }

// person who annoys Paula
const newPerson = Math.floor(Math.random() * 4) + 1;

let personName = newPerson;
switch (newPerson) {
  case 1:
    personName = "Mel";
    break;
  case 2:
    personName = "Sue";
    break;
  case 3:
    personName = "That bloody lazy Rachel";
    break;
  case 4:
    personName = "Abby";
    break;
  case 5:
    personName = "Debi";
    break;
  default:
    personName = "Whatcha ma call it";
}

const newStory = Math.floor(Math.random() * 7) + 1;

console.log("Person who annoyed Paula:" + personName);

// the person talking to the person who annoys Paula
const otherPerson = Math.floor(Math.random() * 4) + 1;
let otherName = otherPerson;
switch (otherPerson) {
  case 1:
    otherName = "Mel";
    break;
  case 2:
    otherName = "Sue";
    break;
  case 3:
    otherName = "That bloody lazy Rachel";
    break;
  case 4:
    otherName = "Abby";
    break;
  case 5:
    otherName = "Debi";
    break;
  default:
    otherName = "Whatcha ma call it";
}

console.log("Person talking to person who annoys Paula: " + otherName);
console.log("Person who annoys Paula " + personName);

// if person who annoys paula is the same as person who is talking to person who annoys paula use another name

if (personName === otherName) {
  otherName = "Thingy";
}

console.log("othername " + otherName);
let message = newStory;
switch (newStory) {
  case 1:
    message =
      " left me in a room with " +
      numKids +
      " kids, while she was sat on her arse talking to  " +
      otherName;
    break;
  case 2:
    message =
      " left me outside with " +
      numKids +
      " kids while she was sat on her arse talking to  " +
      otherName;
    break;
  case 3:
    message =
      " left me to deal with a load of shitty nappies, while she was sat on her arse in the book corner talking to " +
      otherName;
    break;
  case 4:
    message =
      " pissed off and left me to clean up the room, while she was doing her files";
    break;
  case 5:
    message =
      " left me on my own to clean up outside with " +
      numKids +
      " kids running round!";
    break;
  case 6:
    message =
      " sat on her arse in the office while I was left with a room full of screaming kids";
    break;
  case 7:
    message = " left me with Henry, Jessica, and Tommy, all the shite!";
    break;
  default:
    message = " I had a good day today";
}

document.getElementById("demo").innerHTML = personName + " " + message;

console.log(newStory);

console.log("kids: " + numKids);
