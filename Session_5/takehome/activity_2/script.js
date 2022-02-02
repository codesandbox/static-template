/**
 * Displays a list of elements after sorting the input array
 * @param {Array} arr
 */
function generateSortedList(arr) {
  // 1. Sort the array
  arr.sort();
  console.log(arr);

  // 2. Get the parent <ul> element
  const parentElement = document.getElementById("sorted-list");
  console.log(parentElement);

  // 3. For each of the array elements
  arr.forEach((num) => {
    // 3.1 Create a new <li> element
    const li = document.createElement("li");

    // 3.2 Set text of the new <li> element as the current array element
    li.textContent = num;
    console.log(li);

    // 3.3 Append the new <li> element to the parent <ul> element
    parentElement.append(li);
  });
}

generateSortedList([2, 1, 4, 3]); // Displays a list with 1, 2, 3, 4 on screen
// generateSortedList([1, 2, 3]);
// generateSortedList([]);
