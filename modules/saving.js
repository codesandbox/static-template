const cursorIcon = `<svg viewBox="0 0 158 204" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_1246_2" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="158" height="204"> <rect width="158" height="204" fill="#C4C4C4"/> </mask> <g mask="url(#mask0_1246_2)"> <path d="M88.6882 119.764L65.5221 131.568C57.6486 135.58 54.5181 145.215 58.5298 153.088L75.9217 187.222C79.9334 195.095 89.5682 198.226 97.4417 194.214L120.608 182.41C128.481 178.398 131.612 168.764 127.6 160.89L110.208 126.757C106.196 118.883 96.5616 115.753 88.6882 119.764Z" fill="REPLACECOLOR" stroke="black" stroke-width="12"/> <path d="M143.355 90.0789L32.4076 9.87985C21.8414 2.24204 7.06594 9.77055 7.03442 22.8081L6.70347 159.706C6.67454 171.671 19.3071 179.433 29.9673 174.001L141.246 117.302C151.906 111.87 153.051 97.0878 143.355 90.0789Z" fill="REPLACECOLOR" stroke="black" stroke-width="12"/> <path d="M59.3521 141.446L100.325 120.569L119.16 157.535L78.1871 178.412L59.3521 141.446Z" fill="REPLACECOLOR"/> </g> </svg>`;

modules.saving = {
  draggingCallback: null, // Updates for a block being dragged (short-poll update)
  saveCallback: null, // Updates for a block being changed (number change, etc) (short-poll and long-poll updates)

  projectID: null,
  lastPublish: 0,
  collaborators: {},

  constructor: function (projectID) {
    modules.saving.projectID = projectID;
    subscribes.push(
      socket.subscribe(projectID + "_member", function (receive) {
        // Member join / leave / update
        console.log(receive);
        if (receive[0] == "leave") {
          let userData = modules.saving.collaborators[receive[2]];
          if (userData != null) {
            let elem = userData.element;
            if (elem != null) {
              elem.remove();
            }
            delete modules.saving.collaborators[receive[2]];
          }
        }
      })
    );
    subscribes.push(
      socket.subscribe(projectID + "_short", function (receive) {
        // Short-poll Update
        let [task, multiID, data] = receive;
        if (task === "move") {
          // Update Cursor
          if (modules.saving.collaborators[multiID] == null) {
            let newCursorElem = createElement("cursor", "div", "codeContainer");
            newCursorElem.id = "moveCursor_" + multiID;
            let cursorColor =
              "#" + Math.floor(Math.random() * 16777215).toString(16);
            newCursorElem.innerHTML = cursorIcon.replace(
              /REPLACECOLOR/g,
              cursorColor
            );
            modules.saving.collaborators[multiID] = {
              color: cursorColor,
              element: newCursorElem
            };
          }
          let cursorData = modules.saving.collaborators[multiID];
          cursorData.x = data[0];
          cursorData.y = data[1];
          cursorData.element.style.left = cursorData.x + "px";
          cursorData.element.style.top = cursorData.y + "px";
        }
        if (modules.saving.draggingCallback) {
          modules.saving.draggingCallback(task, multiID, data);
        }
      })
    );
    subscribes.push(
      socket.subscribe(projectID + "_long", function (receive) {
        // Short-poll Update
        let [task, data] = receive;
        if (modules.saving.saveCallback) {
          modules.saving.saveCallback(task, data);
        }
      })
    );
    socket.setDisconnectEvent(projectID + "_member", [
      "leave",
      null,
      socket.clientID
    ]);
  },
  mouseMove: function (data) {
    // Sends a block update WHILE DRAGING
    // mouse - { x: 0, y: 0 }
    // block - Block object containing the name and data of the block

    if (modules.saving.lastPublish < Date.now() - 80) {
      modules.saving.lastPublish = Date.now();
      socket.publish(modules.saving.projectID + "_short", [
        "move",
        socket.clientID,
        data
      ]);
    }
  },
  saveBlock: function (block) {
    // Saves a block - call for deleting or updating
    // block - Block object containing the name and data of the block

    // saveBlock
    socket.publish(modules.saving.projectID + "_long", ["place", block]);
  }
};
