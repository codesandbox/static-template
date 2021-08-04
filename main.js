//getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");

inputBox.onkeyup = () => {
    let userData = inputBox.value; //getting user entered value
    if (userData.trim() != 0) { //if values aren't only spaces
        addBtn.classList.add("active");//active the add buttton
    } else {
        addBtn.classList.remove("active");//unactive the add buttton

    }
}