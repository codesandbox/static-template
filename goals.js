var goalListenerAdded = false;
const goalPlaceholder = "Enter a goal name...";

async function addGoal() {
  const { data, error } = await _supabase.from("Goals").insert([
    {
      name: goalPlaceholder,
      user_id: user.id
    }
  ]);
  var addedGoal = true;
  getGoals(addedGoal);
}

async function deleteGoal(goalid) {
  const { data, error } = await _supabase
    .from("Goals")
    .delete()
    .eq("id", goalid);

  if (!error) {
    showToast(`Goal deleted`);
    getGoals();
  }
}

function displayGoals(data) {
  let contents =
    "<div class='heading'><h2>Goals for week</h2><br />" +
    currentWeek() +
    "<br /><br/></div>";
  data.forEach(function (item) {
    var tick = item.complete ? "<div class='tick'>&#10003;</div>" : "";

    contents +=
      `<div class="goal"><a href="#" class="noUnderline"><div class="goalcheckbox${item.complete}" onClick="goalComplete(${item.id},${item.complete})">` +
      tick +
      `</div></a><div class="goallabel"><input type="text" class="goalinput" placeholder="${item.name}" value="${item.name}" id="${item.id}"></div>` +
      `<a href="#"><div class="deletegoal" onClick="deleteGoal(${item.id})"></div></a></div><br>`;
  });
  contents += '<div onClick="addGoal()"><a href="#">Add a goal</a></div>';
  document.getElementById("goals").innerHTML = contents;

  if (!goalListenerAdded) {
    document.getElementById("goals").addEventListener("focusout", function (e) {
      if (e.target.tagName === "INPUT" && e.target.type === "text") {
        if (e.target.value == "") {
          e.target.value = goalPlaceholder;
        }
        updateGoal(e.target.id, e.target.value);
      }
    });
    document.getElementById("goals").addEventListener("focusin", function (e) {
      if (e.target.value == goalPlaceholder) {
        e.target.value = "";
      }
    });

    document
      .getElementById("goals")
      .addEventListener("mouseover", function (e) {
        //console.log("Mouse is hovering over a task called : " + e.target.value);

        if (e.target.querySelector(".goal")) {
          /*console.log(
            "Mouse is hovering over a goal called :" + e.target.value
          );
          /*  
          
          // display the div with the delete icon
        console.log("div = " + e.target.querySelector(".deletetask"));
        var div = e.target.querySelector(".deletetask");
        div.classList.remove("hidden");

        //.classList.remove("hidden");
        */
        }
      });

    goalListenerAdded = true;
  }
}

async function getGoals(addedNewGoal) {
  const { data, error } = await _supabase
    .from("Goals")
    .select()
    .order("id", { ascending: true });

  if (!error) {
    displayGoals(data);

    // if we've just added a goal then set the focus on it
    if (addedNewGoal != undefined) {
      selectLatestGoal();
    }
  }
}

async function goalComplete(goalid, complete) {
  const { data, error } = await _supabase
    .from("Goals")
    .update([
      {
        complete: !complete
      }
    ])
    .eq("id", goalid);

  if (!error) {
    getGoals();
  }
}

function selectLatestGoal() {
  var goals = document.querySelectorAll(".goal");
  // Set the focus on the latest goal
  goals[goals.length - 1].querySelector(".goalinput").focus();
}

async function updateGoal(goalid, name) {
  const { data, error } = await _supabase
    .from("Goals")
    .update([
      {
        name: name
      }
    ])
    .eq("id", goalid);

  if (!error) {
    getGoals();
  }
}
