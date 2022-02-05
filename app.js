const leafAmount = document.querySelector(".leaf-amount");
const leaf = document.querySelector(".leaf-and-amount-div img");
const leafDiv = document.querySelector(".leaf-and-amount-div");
const notification = document.querySelector(".notification-center");
const modalText = document.querySelector(".modal-amount");
const modalCloser = document.querySelector(".modal-btn");

let count = 0;

leaf.addEventListener("click", () => {
  count += 1;
  leafAmount.innerHTML = count;
  leafAmountFunc();

  leafDiv.style.background = "limegreen";
  setTimeout((leafDiv.style.background = "transparent"), 1000);
});

const leafAmountFunc = () => {
  if (count === 50) {
    notification.style.display = "block";
    modalText.innerHTML = "50 Leaves Clicked!";

    modalCloser.addEventListener("click", () => {
      notification.style.display = "none";
    });
  }

  if (count === 100) {
    notification.style.display = "block";
    modalText.innerHTML = "100 Leaves Clicked!";

    modalCloser.addEventListener("click", () => {
      notification.style.display = "none";
    });
  }

  if (count === 500) {
    notification.style.display = "block";
    modalText.innerHTML = "500 Leaves Clicked!";

    modalCloser.addEventListener("click", () => {
      notification.style.display = "none";
    });
  }

  if (count === 1000) {
    notification.style.display = "block";
    modalText.innerHTML = "1000 Leaves Clicked!";

    modalCloser.addEventListener("click", () => {
      notification.style.display = "none";
    });
  }

  if (count === 5000) {
    notification.style.display = "block";
    modalText.innerHTML = "5000 Leaves Clicked!";

    modalCloser.addEventListener("click", () => {
      notification.style.display = "none";
    });
  }

  if (count === 10000) {
    notification.style.display = "block";
    modalText.innerHTML = "10000 Leaves Clicked!";

    modalCloser.addEventListener("click", () => {
      notification.style.display = "none";
    });
  }

  if (count === 100000) {
    notification.style.display = "block";
    modalText.innerHTML = "100000 Leaves Clicked!";

    modalCloser.addEventListener("click", () => {
      notification.style.display = "none";
    });
  }

  if (count === 500000) {
    notification.style.display = "block";
    modalText.innerHTML = "500000 Leaves Clicked!";

    modalCloser.addEventListener("click", () => {
      notification.style.display = "none";
    });
  }
};
