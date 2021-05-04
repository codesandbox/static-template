// ================================================================================================= //
//                                              Storage                                              //
// ================================================================================================= //

var db = {
  history: [],
  prev: new Object()
};

// ================================================================================================= //
//                                             Listening                                             //
// ================================================================================================= //

function bot() {
  const users = getUsers();
  const [result, change] = process(users);
  // console.log("Users to display:", change);
  // console.log("Result:", result);
  display(change);
  db.prev = result;
}

function getUsers() {
  const userList = document.getElementsByClassName("KV1GEc");
  const names = new Array();
  if (userList.length === 0) {
    error("Can't find any user");
  }
  return Object.values(userList).map((user) => {
    let name = user.querySelector(".ZjFb7c").innerText;
    if (names.indexOf(name) !== -1) {
      name = name + " (copy)";
      error(
        "There are 2 users with the same name, the name has been changed to " +
          name
      );
      user.querySelector(".ZjFb7c").innerText = name;
      console.log(user.querySelector(".ZjFb7c"));
    }
    const muted = !!user.querySelector(".FTMc0c");
    names.push(name);
    return { name: name, muted: muted, att: [] };
  });
}

function process(users) {
  const result = new Object();
  const change = new Array();

  users.map((user) => {
    const id = user.name.replace(/[^\w\s]/gi, "").replace(/\s/g, "-");
    if (!(id in db.prev)) {
      {
        !user.muted && user.att.push("unmuted");
      }
      user.att.push("new");
    } else if (db.prev[id].muted !== user.muted) {
      if (user.muted) {
        user.att.push("muted");
      } else {
        user.att.push("unmuted");
      }
    }
    delete db.prev[id];
    // console.log(user.name, ":", ...user.att);
    if (user.att.length > 0) {
      change.push(user);
    }
    result[id] = user;
  });

  for (const [key, user] of Object.entries(db.prev)) {
    user.att.push("leave");
    // console.log(user.name, ":", ...user.att);
    change.push(user);
    result[key] = user;
  }

  return [result, change];
}

// ================================================================================================= //
//                                              Assets                                               //
// ================================================================================================= //

function error(msg, err) {
  console.warn("Error message:", msg);
  if (err) {
    console.warn(err);
  }
}

// ================================================================================================= //
//                                              Display                                              //
// ================================================================================================= //

function display(change) {
  const attColors = {
    unmuted: "unmuted",
    muted: "muted",
    leave: "leave",
    new: "new"
  };
  change.forEach((user) => {
    console.log(user.name, ":", user.att);
  });
}

console.clear();
bot();
bot();
