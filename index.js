//queryselectors

const addtaskbtn = document.querySelector(".addtaskbtn");
const removebtn = document.querySelector(".removebtn");
const addbtn = document.querySelector(".addbtn");
const progressbar = document.querySelector(".Progress-Bar");
const container = document.querySelector(".container");
const mybar = document.getElementById("text");
const innerprogressbar = document.querySelector("innerprogressbar");
const message = document.getElementById("message");

//variables
var servers = 0;
var taskcount = 0;
let startprocess = false;

const arr = [];

// functions;
const handleaddserver = () => {
  if (!startprocess) {
    startprocess = true;
    servers = servers + 1;
    serverprocess();
    move();
  } else {
    servers = servers < 10 ? servers + 1 : servers;
    if (arr.length > 0) {
      let item = arr.shift();
      item.remove();
      console.log(servers);
    }
  }
  message.innerText = `
    tasks are being operated.....Kindly be patient....!!!!`;
};

// progressbarfunction()
const move = () => {
  var elem = document.getElementById("innerbar");

  var width = 1;
  elem.style.width = 1 + "%";
  document.getElementById("text").innerHTML = width + "%";

  var id = setInterval(frame, 200);

  function frame() {
    //added

    //added
    if (arr.length === 0 || startprocess === false) {
      clearInterval(id);
    }
    for (let i = 0; i < servers; i++) {
      let item = arr[0];

      item.remove();
    }
    width++;
    if (width <= 100 && arr.length > 0 && startprocess === true) {
      elem.style.width = width + "%";
      document.getElementById("text").innerHTML = width + "%";
    }
    // let item = arr.shift();
    // item.remove();
  }
};

//other functions
const serverprocess = () => {
  const Manager = setInterval(() => {
    for (let i = 0; i < arr.length; i++) {
      move();
      if (arr.length === 0 || startprocess === false) {
        clearInterval(Manager);
        return;
      }
      arr.shift();
    }
  }, 20000);
};

const handledelete = (e) => {
  const item = e.target;
  if (item.classList[0] === "delete") {
    const tasklist = item.parentElement;
    console.log("delete");
    tasklist.remove();
    arr.shift();
  }
};

const handleaddtask = (e) => {
  //prevent form from submitting
  e.preventDefault();

  //managing task count
  let number = document.getElementById("number").value;

  taskcount = taskcount + number;
  if (number === "") {
    return;
  }

  for (let i = 0; i < number; i++) {
    const taskdiv = document.createElement("div");
    taskdiv.classList.add("task");
    const element = document.createElement("li");
    element.innerText = "Waiting....";
    element.classList.add("element");
    taskdiv.appendChild(element);

    //adding delete button

    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = "delete";
    deletebutton.classList.add("delete");
    taskdiv.appendChild(deletebutton);

    //append taskdiv to main list

    container.appendChild(taskdiv);
    //storing every taskdiv in an arry for further deletion

    arr.push(taskdiv);
  }
};

const handleremove = () => {
  servers = servers === 0 ? servers : servers - 1;
  if (servers === 0) {
    startprocess = false;
  }
};

//event Listeners

removebtn.addEventListener("click", handleremove);
addtaskbtn.addEventListener("click", handleaddtask);
addbtn.addEventListener("click", handleaddserver);
container.addEventListener("click", handledelete);
