var taskListenerAdded = false;
const taskPlaceholder = "Enter a title for this task...";

async function addTask() {
  const { data, error } = await _supabase.from("Tasks").insert([
    {
      name: taskPlaceholder,
      user_id: user.id
    }
  ]);
  var addedTask = true;
  getTasks(addedTask);
}

async function deleteTask(taskid) {
  const { data, error } = await _supabase
    .from("Tasks")
    .delete()
    .eq("id", taskid);

  if (!error) {
    getTasks();
  }
}

function displayTasks(data) {
  let contents = "<div class='heading'><h2>" + today() + "</h2></div><br />";
  data.forEach(function (item) {
    var tick = item.complete ? "<div class='tick'>&#10003;</div>" : "";

    contents +=
      `<div class="task"><a href="#" class="noUnderline"><div class="taskcheckbox${item.complete}" onClick="taskComplete(${item.id},${item.complete})">` +
      tick +
      `</div></a><div class="tasklabel"><input type="text" class="taskinput" placeholder="${item.name}" value="${item.name}" id="${item.id}"></div>` +
      `<a href="#"><div class="deletetask" onClick="deleteTask(${item.id})"></div></a></div><br>`;
  });
  contents +=
    '<div onClick="addTask()"><a href="#">Add a task</a></div><br><br><div><a href="#" onClick="showToast(`Slack notifications paused for 60 min.`);">Focus mode</a></div>';

  document.getElementById("tasks").innerHTML = contents;

  if (!taskListenerAdded) {
    document.getElementById("tasks").addEventListener("focusout", function (e) {
      if (e.target.tagName === "INPUT" && e.target.type === "text") {
        if (e.target.value == "") {
          e.target.value = taskPlaceholder;
        }
        updateTask(e.target.id, e.target.value);
      }
    });
    document.getElementById("tasks").addEventListener("focusin", function (e) {
      if (e.target.value == taskPlaceholder) {
        e.target.value = "";
      }
    });

    document
      .getElementById("tasks")
      .addEventListener("mouseover", function (e) {
        //console.log("Mouse is hovering over a task called : " + e.target.value);

        if (e.target.querySelector(".task")) {
          /*
          console.log(
            "Mouse is hovering over a task called :" + e.target.value
          );

          
          // display the div with the delete icon
        console.log("div = " + e.target.querySelector(".deletetask"));
        var div = e.target.querySelector(".deletetask");
        div.classList.remove("hidden");

        //.classList.remove("hidden");
        */
        }
      });

    taskListenerAdded = true;
  }
}

async function getTasks(addedNewTask) {
  const { data, error } = await _supabase
    .from("Tasks")
    .select()
    .order("id", { ascending: true });

  if (!error) {
    displayTasks(data);

    // if we've just added a task then set the focus on it
    if (addedNewTask != undefined) {
      selectLatestTask();
    }
  }
}

function selectLatestTask() {
  var tasks = document.querySelectorAll(".task");
  // Set the focus on the latest task
  tasks[tasks.length - 1].querySelector(".taskinput").focus();
}

async function taskComplete(taskid, complete) {
  const { data, error } = await _supabase
    .from("Tasks")
    .update([
      {
        complete: !complete
      }
    ])
    .eq("id", taskid);

  if (!error) {
    getTasks();
  }
}

async function updateTask(taskid, name) {
  const { data, error } = await _supabase
    .from("Tasks")
    .update([
      {
        name: name
      }
    ])
    .eq("id", taskid);

  if (!error) {
    getTasks();
  }
}
