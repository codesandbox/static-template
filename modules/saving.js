modules.saving = {
  draggingCallback: null, // Updates for a block being dragged (short-poll update)
  saveCallback: null, // Updates for a block being changed (number change, etc) (short-poll and long-poll updates)
  joinCallback: null,
  leaveCallback: null,

  projectID: null,
  lastPublish: 0,
  collaborators: {},

  constructor: async function (projectID) {
    modules.saving.collaborators = {};
    let [code, response] = await sendRequest(
      "GET",
      "project/load?projectid=" + projectID + "&ss=" + socket.secureID
    );
    if (code != 200) {
      setPage("home");
    }
    let projectData = JSON.parse(response);
    function appendUser(newUser) {
      if (modules.saving.collaborators[newUser._id] == null) {
        modules.saving.collaborators[newUser._id] = { user: newUser };
      } else {
        modules.saving.collaborators[newUser._id].user = newUser;
      }
      if (modules.saving.joinCallback) {
        modules.saving.joinCallback(newUser);
      }
    }
    for (let i = 0; i < projectData.users.length; i++) {
      appendUser(projectData.users[i]);
    }
    modules.saving.projectID = projectID;
    subscribes.push(
      socket.subscribe(
        {
          type: "project",
          id: userID,
          token: account.realtime,
          project: projectID
        },
        function (data) {
          console.log(data);
          switch (data.task) {
            case "join":
              appendUser(data.user);
              break;
            case "leave":
              let userData = modules.saving.collaborators[data.userID];
              if (userData != null) {
                let elem = userData.element;
                if (elem != null) {
                  elem.remove();
                }
                delete modules.saving.collaborators[data.userID];
              }
              if (modules.saving.leaveCallback) {
                modules.saving.leaveCallback(data.userID);
              }
              break;
            case "set":
              let keys = Object.keys(data.data);
              for (let i = 0; i < keys.length; i++) {
                projectData.info[keys[i]] = data.data[keys[i]];
              }
              if (data.data.name) {
                let projNameTx = pageHolder.querySelector(".projectNameProj");
                projNameTx.value = data.data.name;
                projNameTx.placeholder = data.data.name;
              }
            default:
          }
        }
      )
    );
    socket.remotes.fast = function (receive) {
      // Short-poll Update
      let [task, userID, data] = receive;
      if (task === "move") {
        // Update Cursor
        let collabUser = modules.saving.collaborators[userID];
        if (collabUser == null) {
          return;
        }
        if (collabUser.element == null) {
          let newCursorElem = createElement("cursor", "div", "cursorContainer");
          newCursorElem.id = "moveCursor_" + userID;
          collabUser.element = newCursorElem;
          newCursorElem.style.background = profileColor(collabUser.user);
          let userDetail = createElement("cursorName", "div", newCursorElem);
          userDetail.textContent = collabUser.user.user;
          newCursorElem.style.setProperty(
            "--fullyExtendedWidth",
            userDetail.clientWidth + "px"
          );
          userDetail.style.width = "100%";
        }
        let cursorData = modules.saving.collaborators[userID];
        cursorData.x = data[0];
        cursorData.y = data[1];
        cursorData.element.style.left = cursorData.x + "px";
        cursorData.element.style.top = cursorData.y + "px";
      }
      if (modules.saving.draggingCallback) {
        modules.saving.draggingCallback(task, userID, data || {});
      }
    };
    socket.remotes.long = function (receive) {
      // Long-poll Update
      let [task, data] = receive;
      if (modules.saving.saveCallback) {
        modules.saving.saveCallback(task, data);
      }
    };
    return projectData;
  },
  mouseMove: function (data) {
    // Sends a block update WHILE DRAGING
    // mouse - { x: 0, y: 0 }
    // block - Block object containing the name and data of the block

    if (userID == null) {
      return;
    }
    if (Object.keys(modules.saving.collaborators).length < 2) {
      //return;
    }
    if (modules.saving.lastPublish < Date.now() - 80) {
      modules.saving.lastPublish = Date.now();
      socket.publish("fast_" + modules.saving.projectID, [
        "move",
        userID,
        data
      ]);
    }
  },
  saveBlock: async function (block) {
    // Saves a block - call for deleting or updating
    // block - Block object containing the name and data of the block

    // saveBlock
    socket.publish("long_" + modules.saving.projectID, ["preview", block]);

    let [code, response] = await sendRequest(
      "POST",
      "project/save/block?projectid=" + modules.saving.projectID,
      block
    );
  }
};
