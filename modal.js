const dispPopUp = () => {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
};

const restartfn = () => {
  location.reload();
};

const closefn = () => {
  window.close();
};

// const popupOver = () => {
//   let modalContent = document.getElementById("modal-content");
//   let modalText = document.createElement("div");
//   modalText.classList.add("modalText");
//   modalText.innerHTML = `GAME OVER!!!`;
//   modalContent.appendChild(modalText);

//   let modalBtn = document.createElement("div");
//   modalBtn.classList.add("modalBtn");
//   modalContent.appendChild(modalBtn);

//   let restart = document.createElement("button");
//   restart.innerHTML = `RESTART`;
//   restart.classList.add("btn");
//   restart.addEventListener("click", restartfn);
//   let close = document.createElement("button");
//   close.innerHTML = `EXIT`;
//   close.addEventListener("click", closefn);
//   close.classList.add("btn");
//   modalBtn.appendChild(restart);
//   modalBtn.appendChild(close);

//   dispPopUp();
//   // setTimeout(() => {
//   //   dispPopUp();
//   // }, 500);
// };

const popup = (text) => {
  let modalContent = document.getElementById("modal-content");
  let modalText = document.createElement("div");
  modalText.classList.add("modalText");
  modalText.innerHTML = `${text}!!!`;
  modalContent.appendChild(modalText);

  let modalBtn = document.createElement("div");
  modalBtn.classList.add("modalBtn");
  modalContent.appendChild(modalBtn);

  let restart = document.createElement("button");
  restart.innerHTML = `RESTART`;
  restart.classList.add("btn");
  restart.addEventListener("click", restartfn);
  let close = document.createElement("button");
  close.innerHTML = `EXIT`;
  close.addEventListener("click", closefn);
  close.classList.add("btn");
  modalBtn.appendChild(restart);
  modalBtn.appendChild(close);

  dispPopUp();
  // setTimeout(() => {
  //   dispPopUp();
  // }, 500);
};
