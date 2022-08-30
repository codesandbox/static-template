/**
 * Displays a list of elements after sorting the input array
 * @param {Array} arr
 */
function generateSortedList(arr) {
  if (arr == "") {
    // console.log("check");
    let fetchByID = document.getElementById("list-section");
    let elementLi = document.createElement("li");

    elementLi.innerHTML = "Array is Empty";
    fetchByID.append(elementLi);
  } else {
    arr.sort();
    let fetchByID = document.getElementById("list-section");
    arr.forEach((element) => {
      let elementLi = document.createElement("li");
      elementLi.innerHTML = element;
      fetchByID.append(elementLi);
    });
  }
}

generateSortedList([]);

// Displays a list with 1, 2, 3, 4 on screen
// generateSortedList([1, 2, 3]);
// generateSortedList([]);

// for (let i = 0; i < arr.length; i++) {
//   let elemLI = document.createElement("li");
//   elemLI.innerHTML = arr[i];
//   console.log(elemLI);
// }
