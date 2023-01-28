// Welcome Page Fuctionality..
const visitorPage = document.querySelector(".welcomePage");
const visitorNameBtn = document.querySelector("#visitorNameBtn");
const visitorName = document.querySelector("#visitorName");
const formTitle = document.querySelector("#formTitle");

function showVistorPage() {
  setTimeout(() => (visitorPage.style.opacity = 1), 2000);
}
showVistorPage();

visitorName.onclick = function () {
  this.style.border = "2px solid #a7e9f5";
};

visitorNameBtn.addEventListener("click", enterName);
function enterName(e) {
  e.preventDefault();
  let visitorBtn = e.target;
  let vName = visitorBtn.parentElement.children[1].value;

  if (visitorName.value === "") {
    visitorPage.style.opacity = 1;
    visitorName.style.border = "2px solid red";
  } else {
    visitorPage.style.display = "none";
    formTitle.innerHTML = `Hey ${vName}, add your friends`;
  }
}

// selecting the dom ..................
const inputName = document.querySelector("#nameInput");
const inputNumber = document.querySelector("#numberInput");
const addBtn = document.querySelector("#addFriendBtn");
const friendList = document.querySelector(".friendList");
const msg = document.querySelector(".message");

inputNumber.addEventListener("click", function () {
  this.style.border = "2px solid #a6e9f5";
});
inputName.addEventListener("click", function () {
  this.style.border = "2px solid #a6e9f5";
});

// adding an eventlistener to the button ...........
addBtn.addEventListener("click", addFriendToList);
function addFriendToList(event) {
  // preventing the form to submit...
  event.preventDefault();
  let btn = event.target;
  let friendName = btn.parentElement[0].value;
  let friendNumber = btn.parentElement[1].value;

  // checking if the value is not put - to alert a warning message...
  if (inputName.value === "" || inputNumber.value === "") {
    msg.classList.add("active");
    setTimeout(() => msg.remove(), 3000);
    inputName.style.border = "2px solid red";
    inputNumber.style.border = "2px solid red";
  }
  //if the values/ the fields are filled, then add the information...
  else {
    let newFriend = document.createElement("div");
    newFriend.classList.add("friend");
    newFriend.innerHTML = `<span class="friendName">${friendName}</span>
        <span class="friendNumber">${friendNumber}</span>
        `;
    let deleteBtn = document.createElement("div");
    deleteBtn.classList.add("deleteFriend");
    deleteBtn.innerHTML = `<i class='bx bx-x'></i>`;
    newFriend.append(deleteBtn);
    // appending the new element to the main elemeny(friendList...
    friendList.append(newFriend);

    const newText = document.querySelector(".friendListTitle");
    newText.innerText = "Added friend(s)";

    deleteBtn.onclick = function () {
      newFriend.classList.add("fall");
      newFriend.addEventListener("transitionend", function () {
        newFriend.remove();
      });
    };

    // Clear the fields...
    inputName.value = "";
    inputNumber.value = "";
    inputName.style.border = "none";
    inputNumber.style.border = "none";
  }
}
