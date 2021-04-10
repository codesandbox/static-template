var task = document.getElementById("todo-input");
var category = document.getElementById("categories-option");
var taskWrapper = document.getElementById("tasks-container");

//This function takes data from the user
function addTask() {
  //Cannot Add Empty value
  if (task.value === "" && category.value === "") {
    alert("Please enter task along with category");
    return;
  } else if (task.value === "") {
    alert("Please enter task");
    return;
  } else if (category.value === "") {
    alert("Please enter category");
    return;
  }

  //to save data in the database

  countTasks();
  saveData();
  countTasks();
}

//taking data from user on pressing enter key
task.onkeyup = function (e) {
  //if "Enter button is pressed"
  if (e.key === "Enter") {
    //takes data from the user
    addTask();
    countTasks();
  }
};

//To create Task Card to display on the page
function createTaskCard(categories, taskMsg, status, date, keys, id) {
  // <div class="task-card sales-task">
  //   <div>
  //     <h4 class="sales-category work-category">Sales</h4>
  //   </div>
  //   <p class="task">Finalize the sales plan for new Product marketing</p>
  //   <div class="del-edit">
  //     <i class="fas fa-trash edit-icon"></i>
  //     <i class="far fa-edit edit-icon"></i>
  //   </div>
  // </div>
  var cardBody = document.createElement("div");
  cardBody.classList.add("task-card", categories + "-task");

  //creating task header
  var headerContainer = document.createElement("div");
  var taskHeader = document.createElement("h4");
  taskHeader.classList.add(categories + "-category", "work-category");
  taskHeader.innerHTML = categories;
  headerContainer.appendChild(taskHeader);
  cardBody.appendChild(headerContainer);

  //Creating Status label
  let statusLabel = document.createElement("p");
  statusLabel.className = "task-status";

  cardBody.appendChild(statusLabel);
  if (status == false) {
    statusLabel.innerHTML = "incomplete";
    statusLabel.classList.add("incomplete");
  } else {
    statusLabel.innerHTML = "completed";
    statusLabel.classList.add("complete");
  }

  //creating task message section
  var msg = document.createElement("p");
  msg.classList.add("task");
  msg.innerHTML = taskMsg;
  cardBody.appendChild(msg);

  //Date of Creating

  let dateContainer = document.createElement("p");
  dateContainer.className = "created-on";
  let createdDate = date;
  dateContainer.innerHTML = "Created on : " + createdDate;
  cardBody.appendChild(dateContainer);

  //Creating Task Status section
  let checkStatus = document.createElement("input");
  checkStatus.type = "checkbox";
  checkStatus.className = "check-status";
  checkStatus.id = id;
  if (status == true) {
    checkStatus.checked = true;
  }
  checkStatus.onchange = function () {
    if (checkStatus.checked == true) {
      const xhr = new XMLHttpRequest();

      xhr.open(
        "PATCH",
        "https://todo-app-edyoda-default-rtdb.firebaseio.com/todo-tasks/" +
          keys +
          ".json",
        true
      );

      xhr.onreadystatechange = function () {};

      xhr.send(
        JSON.stringify({
          isCompleted: true
        })
      );

      statusLabel.classList.remove("incomplete");
      statusLabel.classList.add("complete");
      statusLabel.innerHTML = "completed";

      completed.innerHTML = parseInt(completed.innerHTML) + 1;
      incomplete.innerHTML = parseInt(incomplete.innerHTML) - 1;
    } else {
      const xhr = new XMLHttpRequest();

      xhr.open(
        "PATCH",
        "https://todo-app-edyoda-default-rtdb.firebaseio.com/todo-tasks/" +
          keys +
          ".json",
        true
      );

      xhr.onreadystatechange = function () {};

      xhr.send(
        JSON.stringify({
          isCompleted: false
        })
      );

      statusLabel.innerHTML = "incomplete";
      statusLabel.classList.remove("complete");
      statusLabel.classList.add("incomplete");

      incomplete.innerHTML = parseInt(incomplete.innerHTML) + 1;
      completed.innerHTML = parseInt(completed.innerHTML) - 1;
    }
  };
  cardBody.append(checkStatus);

  let editStatus = document.createElement("p");
  editStatus.classList.add("edit-status");
  editStatus.innerHTML = "Completed";
  cardBody.append(editStatus);

  //creating delete and edit icon
  var editContainer = document.createElement("div");
  editContainer.className = "del-edit";

  var del = document.createElement("i");
  del.classList.add("fas", "fa-trash", "edit-icon");
  del.onclick = function () {
    let confirmation = confirm(
      'Are you Sure you want to delete the " ' +
        taskMsg +
        ' " task from ' +
        categories +
        " category"
    );

    if (confirmation == true) {
      const xhr = new XMLHttpRequest();

      xhr.open(
        "DELETE",
        "https://todo-app-edyoda-default-rtdb.firebaseio.com/todo-tasks/" +
          keys +
          ".json",
        true
      );

      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          var allTasks = document.getElementById("all-tasks");
          allTasks.innerHTML = parseInt(allTasks.innerHTML) - 1;
          if (statusLabel.innerHTML === "completed")
            completed.innerHTML = parseInt(completed.innerHTML) - 1;
          if (statusLabel.innerHTML === "incomplete")
            incomplete.innerHTML = parseInt(incomplete.innerHTML) - 1;
          if (categories === "management")
            management.innerHTML = parseInt(management.innerHTML) - 1;
          if (categories === "sales")
            sales.innerHTML = parseInt(sales.innerHTML) - 1;
          if (categories === "operations")
            operations.innerHTML = parseInt(operations.innerHTML) - 1;
          if (categories === "marketing")
            marketing.innerHTML = parseInt(marketing.innerHTML) - 1;
          taskWrapper.removeChild(cardBody);
        }
      };

      xhr.send();
    }
  };

  var edit = document.createElement("i");
  edit.classList.add("far", "fa-edit", "edit-icon");

  //Editing task onclick
  edit.onclick = function () {
    //Showing the input box
    let editBox = document.getElementById("edit-tasks");
    let editText = document.getElementById("edit-task");
    editBox.style.display = "block";

    editText.value = msg.innerHTML;

    editText.onkeyup = function (e) {
      //if "Enter button is pressed"
      if (e.key === "Enter") {
        console.log(keys);
        const xhr = new XMLHttpRequest();

        xhr.open(
          "PATCH",
          "https://todo-app-edyoda-default-rtdb.firebaseio.com/todo-tasks/" +
            keys +
            ".json",
          true
        );

        xhr.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            editText.value = editText.value;
            editBox.style.display = "none";
            msg.innerHTML = editText.value;
          }
        };

        xhr.send(
          JSON.stringify({
            taskMsg: editText.value
          })
        );
      }
    };
  };

  editContainer.appendChild(del);
  editContainer.appendChild(edit);
  cardBody.appendChild(editContainer);

  //append to the card section
  return cardBody;
  // taskWrapper.appendChild(cardBody)
  // taskWrapper.insertBefore(cardBody, taskWrapper.children[1]);
}

//Saving Data to the database
function saveData() {
  let d = new Date();
  let m = d.getMonth() + 1;
  let date = d.getDate();
  let y = d.getFullYear();
  let tDate = date + "-" + m + "-" + y;
  const data = {
    taskMsg: task.value,
    categories: category.value,
    isCompleted: false,
    DOC: tDate
  };

  const xhr = new XMLHttpRequest();

  xhr.open(
    "POST",
    "https://todo-app-edyoda-default-rtdb.firebaseio.com/todo-tasks.json",
    true
  );

  xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
      // let response = JSON.parse(this.responseText)
      // // console.log(category.value, task.value, false,tDate)
      const allTasks = Object.values(JSON.parse(this.response));
      console.log(allTasks);
      // const allKeys =Object.keys(JSON.parse(this.response))
      // console.log(allKeys)
      // console.log(allKeys[13])
      taskWrapper.insertBefore(
        createTaskCard(category.value, task.value, false, tDate, allTasks),
        taskWrapper.children[1]
      );
      (task.value = ""), (category.value = "");
      // getData()
    }
  };

  xhr.send(JSON.stringify(data));
}

function getData() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://todo-app-edyoda-default-rtdb.firebaseio.com/todo-tasks.json",
    true
  );

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const allTasks = Object.values(JSON.parse(this.response));
      const allKeys = Object.keys(JSON.parse(this.response));
      for (let i = 0; i < allTasks.length; i++) {
        // createTaskCard(
        //   allTasks[i].categories,
        //   allTasks[i].taskMsg,
        //   allTasks[i].isCompleted,
        //   allTasks[i].DOC,
        //   allKeys[i],
        //   i
        // );
        taskWrapper.insertBefore(
          createTaskCard(
            allTasks[i].categories,
            allTasks[i].taskMsg,
            allTasks[i].isCompleted,
            allTasks[i].DOC,
            allKeys[i],
            i
          ),
          taskWrapper.children[1]
        );
        console.log(allKeys[i]);
      }
    }
  };
  xhr.send();
}

var sales = document.getElementById("sales");

var remainingTasks = document.getElementById("all-tasks");

var management = document.getElementById("management");

var operations = document.getElementById("operations");

var marketing = document.getElementById("marketing");

var incomplete = document.getElementById("incomplete-tasks");

var completed = document.getElementById("completed-tasks");

function sort(categoryName) {
  console.log(categoryName);
}

function countTasks() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://todo-app-edyoda-default-rtdb.firebaseio.com/todo-tasks.json",
    true
  );

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const allTasks = Object.values(JSON.parse(this.response));

      var managementCount = 0;
      var salesCount = 0;
      var operationsCount = 0;
      var marketingCount = 0;
      completedCount = 0;
      var incompleteCount = 0;
      for (let i = 0; i < allTasks.length; ++i) {
        if (allTasks[i].isCompleted == true) completedCount++;
        if (allTasks[i].isCompleted == false) incompleteCount++;
        if (allTasks[i].categories === "management") managementCount++;
        if (allTasks[i].categories === "sales") salesCount++;
        if (allTasks[i].categories === "operations") operationsCount++;
        if (allTasks[i].categories === "marketing") marketingCount++;
      }
      completed.innerHTML = completedCount;
      incomplete.innerHTML = incompleteCount;
      management.innerHTML = managementCount;
      sales.innerHTML = salesCount;
      operations.innerHTML = operationsCount;
      marketing.innerHTML = marketingCount;
      document.getElementById("all-tasks").innerHTML = allTasks.length;
    }
  };
  xhr.send();
}

function clearCategories() {
  category.value = "";
  countTasks();
  getData();
}

function grid() {
  let grid = document.getElementsByClassName("task-card");

  for (let i = 0; i < grid.length; i++) {
    grid[i].style.width = "calc(25% - 30px)";
  }
}

function line() {
  let grid = document.getElementsByClassName("task-card");
  console.log(grid);

  for (let i = 0; i < grid.length; i++) {
    grid[i].style.width = "100%";
  }
}

function sortCategory(category) {
  let allCards = document.getElementsByClassName("task-card");
  for (let i = 0; i < allCards.length; i++) {
    if (allCards[i].classList.contains(category)) {
      allCards[i].style.display = "block";
      continue;
    }
    allCards[i].style.display = "none";
  }
}
let sortManagement = document.getElementById("management-");
sortManagement.onclick = function () {
  sortCategory("management-task");
};

let sortSales = document.getElementById("sales-");
sortSales.onclick = function () {
  sortCategory("sales-task");
};

let sortOperations = document.getElementById("operations-");
sortOperations.onclick = function () {
  sortCategory("operations-task");
};

let sortMarketing = document.getElementById("marketing-");
sortMarketing.onclick = function () {
  sortCategory("marketing-task");
};

let sortAll = document.getElementById("all");
sortAll.onclick = function () {
  let allCards = document.getElementsByClassName("task-card");
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.display = "block";
  }
};

let pendingTasks = document.getElementById("pendingTasks");
pendingTasks.onclick = function () {
  sortByStatus("incomplete");
};

let completedTasks = document.getElementById("completedTasks");
completedTasks.onclick = function () {
  sortByStatus("complete");
};

function sortByStatus(status) {
  let allCards = document.getElementsByClassName("task-card");
  for (let i = 0; i < allCards.length; i++) {
    if (allCards[i].childNodes[1].classList.contains(status)) {
      allCards[i].style.display = "block";
      continue;
    }
    allCards[i].style.display = "none";
  }
}
