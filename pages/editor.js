/* TODO: Visiually differentiate between numerical and boolean blocks */

wireframes.editor = `
  <div class="sidebar">
    <div class="sidebarContent">
      <div class="projectInfo">
        <div class="projNameHolder">
          <img class="projNameLogo" src="./images/projectname.svg">
          <input class="projectNameProj">
        </div> 
        <div class="projInteract">
          <div class="editorButton" id="dropdownButtonFile">
            <img class="dropdownBIcon" src="./images/dropdown.svg">
            <span>File</span>
          </div>
          <div class="editorButton" id="dropdownButtonInvite" style="margin: 0px 6px">
            <img class="dropdownBIcon" src="./images/plus.svg">
            <span>Invite</span>
          </div>
          <div class="activeUsersHolder"></div>
        </div>  
      </div>
      <div class="blockStorageContainer">
        <div class="blockStorage"></div>
      </div>
    </div> 
  </div>
  <div class="cursorContainer"></div>
  <div class="codeContainer"></div>
  <svg width="0" height="0">
    <clipPath id="notchClip">
      <path d="M5 0H0V30H31V0H25V4C25 6.76142 22.7614 9 20 9H10C7.23858 9 5 6.76142 5 4V0Z"/>
    </clipPath>
  </svg>
`;

//height of blocks is slightly off
// flash red border when typing letters into a number block or dragging a boolean block into a numerical input
//iff statement previws off

//credit: https://www.geeksforgeeks.org/how-to-force-input-field-to-enter-numbers-only-using-javascript/

pages.editor = async function () {
  let blocks = await getModule("blocks");
  let saving = await getModule("saving");

  let projectID = getParam("project");
  if (projectID == null) {
    setPage("home");
    return;
  }

  let collabHolder = pageHolder.querySelector(".activeUsersHolder");

  // Join / Leave callbacks MUST go before constructor!
  saving.joinCallback = function (newUser) {
    let existingCollabTile = collabHolder.querySelector(
      ".activeUser[userid='" + newUser._id + "']"
    );
    if (existingCollabTile == null) {
      let newUserIndicator = createElement("activeUser", "img", collabHolder);
      newUserIndicator.setAttribute("userid", newUser._id);
      newUserIndicator.src = profilePic(newUser);
      newUserIndicator.title = newUser.user;
      newUserIndicator.style.borderColor = profileColor(newUser);
    }
  };
  saving.leaveCallback = function (userid) {
    let existingCollabTile = collabHolder.querySelector(
      ".activeUser[userid='" + userid + "']"
    );
    if (existingCollabTile) {
      existingCollabTile.remove();
    }
  };

  let projLoad = await saving.constructor(projectID); // projLoad.blocks gives a list of all of the blocks
  //console.log(projLoad);

  let projectName = pageHolder.querySelector(".projectNameProj");
  projectName.value = projLoad.info.name;
  projectName.placeholder = projLoad.info.name;
  projectName.addEventListener("click", function () {
    projectName.value = "";
  });
  projectName.addEventListener("blur", function () {
    if (projectName.value == "") {
      projectName.value = projLoad.info.name;
    }
  });
  projectName.addEventListener("change", async function () {
    if (projectName.value == "" || projectName.value == projLoad.info.name) {
      return;
    }
    let [code] = await sendRequest(
      "POST",
      "project/save/name?projectid=" + modules.saving.projectID,
      projectName.value
    );
    if (code != 200) {
      projectName.value = projLoad.info.name;
    }
  });
  /*
  let hoveredCursor;
  pageHolder.addEventListener("mouseover", async function (e) {
    if (e.target.className == "cursorName") {
      return;
    }
    let cursor = e.target.closest(".cursor");
    if (hoveredCursor) {
      if (hoveredCursor == cursor) {
        return;
      }
      let revertCursor = hoveredCursor.querySelector(".cursorName");
      hoveredCursor = null;
      revertCursor.parentNode.style.width = "22px";
      revertCursor.parentNode.style.zIndex = 9;
      revertCursor.style.opacity = 0;
    }
    if (cursor) {
      hoveredCursor = cursor;
      let user =
        saving.collaborators[
          hoveredCursor.id.substring(hoveredCursor.id.indexOf("_") + 1)
        ];
      if (user) {
        let usernameDetail = hoveredCursor.querySelector(".cursorName");
        if (usernameDetail == null) {
          usernameDetail = createElement("cursorName", "div", hoveredCursor);
        }
        usernameDetail.textContent = user.user.user;
        hoveredCursor.style.width = usernameDetail.clientWidth + "px";
        hoveredCursor.style.zIndex = 10;
        usernameDetail.style.opacity = 1;
      }
    }
  });
  */
  /*
  pageHolder
    .querySelector(".codeContainer")
    .addEventListener("mouseout", async function (e) {
      if (
        e.target.className == "cursorName" &&
        e.target.hasAttribute("closing") == false
      ) {
        e.target.setAttribute("closing", "");
        e.target.parentNode.style.width = "22px";
        e.target.style.opacity = 0;
        await sleep(300);
        e.target.remove();
      }
    });
  */

  //variables
  let snapThreshold = 20;

  tempListen(window, "keypress", function (e) {
    //console.log(e);
    //prevent non-numerical values in the inputs, ALL inputs for now (change in the future though);
    //not all inputs
    if (!e.target.closest(".block")) return; //if this isn't in a block, return (so we can name the project to be something not a number)
    var ASCIICode = e.which ? e.which : e.keyCode;
    let decimalAlreadyThere = e.target
      ? e.target.innerHTML
        ? e.target.innerHTML.includes(".")
        : false
      : false; //get whether or not a decimal point is already in the input. If there's not already one, then the user can type one
    if (
      (ASCIICode > 31 &&
        (ASCIICode < 48 || ASCIICode > 57) &&
        (decimalAlreadyThere || ASCIICode != 46)) ||
      ASCIICode == 13 //13 is the enter key
    )
      e.preventDefault(); //prevent non-numbers
  });

  const fileDropdown = `<div class="dropdownItem">
      <img class="dropdownButtonImg" src="./images/undo.svg">
      Undo
    </div>
    <div class="dropdownItem" onclick="setPage('files')">
      <img class="dropdownButtonImg" src="./images/backarrow.svg">
      Back to Files
    </div>
    <div class="dropdownItem">
      <img class="dropdownButtonImg" src="./images/copyfile.svg">
      Create Copy
    </div>
    <div class="dropdownItem">
      <img class="dropdownButtonImg" src="./images/trashbin.svg">
      Delete File
    </div>`;
  let currentDropdown;
  let dropdown;
  async function openDropdown(name, html) {
    if (name === currentDropdown && dropdown !== null) {
      currentDropdown = null;
      dropdown.style.height = "0px";
      await sleep(150);
      dropdown.remove();
      dropdown = null;
      return;
    }
    if (dropdown == null) {
      dropdown = createElement("dropdownMenu", "div", "projectInfo");
    } else {
      dropdown.style.height = "0px";
      await sleep(150);
    }
    currentDropdown = name;
    dropdown.innerHTML = '<div class="dropdownContent">' + html + "</div>";
    dropdown.style.height =
      dropdown.querySelector(".dropdownContent").clientHeight + 8 + "px";
  }
  tempListen(findI("dropdownButtonFile"), "mousedown", async (e) => {
    openDropdown("file", fileDropdown);
  });

  let placedBlocks = {
    /*
    this defines the format for a placed block
    the name is the unique id of the block, saved id
    the id property is the source id, the type of block
    the "a" property is the id of the block that comes after this block
    the x and y properties specify the positions of the blocks relative to the viewport
    the "in" property is the id of the block that is inside of this block
    the "on" property is an array of the id of the blocks that are "on" this block (think walk (5 + 6) steps, where the block (5 + 6) is on the walk X steps block)
    for "on", "#2554756756768" indicates a block id and "254345" indicates a numerical value
    "top" is true if and only if the block is not a child of any other block
    "382373827327": {
      //Saved ID
      id: 1, //Source ID
      x: 300,
      y: 300,
      a: "382373827327",
      in: "589359283049",
      on: ["2o48540934305", "40359348509"]
      top: false
    }*/
  };

  //helper function
  function p(s) {
    findC("projectName").value = s;
  }

  //code to make blocks appear in the side bar
  let blockStorage = findC("blockStorage");

  //loop through each block and display it
  let currentHeight = 40; // keep track of height
  let blockHeights = [];
  let generatingBlocksInit = true; //keep track of whether we are generating blocks for the first time

  let objKeys = Object.keys(blocks);
  for (let i = 0; i < objKeys.length; i++) {
    generateBlock(objKeys[i]);
  }

  generatingBlocksInit = false;

  function generateBlock(id) {
    //generates a source block in the side bar using html elements and the such
    if (!blocks[id]) return;
    if (blocks[id].html == null) {
      return;
    }

    let blockData = blocks[id];
    let block = createElement("block", "div", blockStorage);
    block.id = "source-block-" + id;
    block.setAttribute("blockid", id);

    if (blockData.type === "number" || blockData.type === "boolean") {
      block.innerHTML =
        `<div class="blockCoverInput">` + blockData.html + "</div>";
      block.style.background = blockData.color;
      block.style.padding = "4px";
      if (blockData.type === "number") {
        block.style.borderRadius = "20px";
      } else {
        block.style.borderRadius = "6px";
      }
      block.style["box-shadow"] = "0px 0px 0px 2px white"; //UNDO (just for testing)
    } else {
      block.innerHTML = `<div class="blockCover">` + blockData.html + "</div>";
    }

    let childDivs = block.querySelectorAll("[back]");
    for (let i = 0; i < childDivs.length; i++) {
      childDivs[i].style.background = blockData.color;
    }

    if (blockData.type === "event") {
      block.querySelector(".notchCutout").style.clipPath = "unset";
      block.querySelector(".notchCutout").style.borderTopLeftRadius = "12px";
    }

    if (block.querySelector(".notchCutout") != null) {
      //block.querySelector(
      //  ".notchCutout"
      //).innerHTML = `<svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H0V27H27V0H23V4C23 6.20914 21.2091 8 19 8H8C5.79086 8 4 6.20914 4 4V0Z" /></svg>`;
    }

    block.style.position = "relative";
    block.style.margin = "16px 8px 8px 8px";

    if (!generatingBlocksInit) {
      blockStorage.insertBefore(
        block,
        findC("blockStorage").querySelectorAll(".block")[id]
      );
    }
    return block;
  }

  //drag and drop code
  let dragPreview; //variable to store the html element that previews the dragging element
  let dragging = ""; //id of the element that we are dragging currently. If we are not dragging something, then it's ""
  let dragOffset = { x: 0, y: 0 }; //dragging offset of the block
  let snapPoints = []; //keep track of points that we can snap to
  let prevSnapPoint; //keep track of the last snap Point
  let notchHeight = 6; //keep track of the height of the notch in the blocks, used to get actual height of a block
  let parentHorizontalOffset = 31.7; //the horizontal offset of an if or repeat block
  let verticalBlockMargin = 2;
  let scrollOffset = { x: 0, y: 0 }; //keep track of the scroll offset

  tempListen(
    window,
    "scroll",
    async () => {
      scrollOffset.x = findC("codeContainer").getBoundingClientRect().left;
      scrollOffset.y = findC("codeContainer").getBoundingClientRect().top;
    },
    { passive: true }
  );

  /*
  ____  _      ____   _____ _  __ _____ 
 |  _ \| |    / __ \ / ____| |/ // ____|
 | |_) | |   | |  | | |    | ' /| (___  
 |  _ <| |   | |  | | |    |  <  \___ \ 
 | |_) | |___| |__| | |____| . \ ____) |
 |____/|______\____/ \_____|_|\_\_____/ 
                                      
*/

  tempListen(pageHolder, "mousedown", async (e) => {
    if (e.target.closest(".block") == null) return; //did we click on a block?
    if (e.target.hasAttribute("contenteditable") && e.target.nodeName != "DIV")
      return; //did we click on a block but are editing it so this function is not necessary?

    //when we click on a block, set the dragging variable to reflect that and get the mouse offset from the top left corner of the block
    dragging = e.target.closest(".block");
    let rect = dragging.getBoundingClientRect();

    dragOffset = {
      // store the offset of the mouse relative to the block for smooth dragging
      x: e.clientX - rect.left + scrollOffset.x,
      y: e.clientY - rect.top + scrollOffset.y
    };

    //do some styling
    dragging.style.zIndex = 99;
    dragging.style.cursor = "grabbing";
    dragging.style.transition = "transform .15s";
    dragging.style.margin = "0px";
    let i0 = 0;

    //if the block is a source block, then move it from the sidebar to the main page. can't move it to the code container yet UPDATE: we do
    if (dragging.id.includes("source-block-")) {
      //then, replenish the source block if it was a source block that was dragged
      i0 = parseInt(dragging.id.substring(13, dragging.id.length), 10); //get id of block
      generateBlock(i0);
    } else {
      //also we need to unparent the block we are dragging, but only if it's not a source block
      let parentID = dragging.parentNode.closest(".block");

      if (parentID) {
        parentID = parentID.id; //prevents reading id from null

        //update the placedBlocks array to remove the dragging block from where it was before.
        if (placedBlocks[parentID].a == dragging.id) {
          placedBlocks[parentID].a = null;
        } else {
          if (placedBlocks[parentID].in == dragging.id) {
            placedBlocks[parentID].in = null;
          } else {
            if (placedBlocks[parentID].else == dragging.id) {
              placedBlocks[parentID].else = null;
            } else {
              if (placedBlocks[parentID].on) {
                if (placedBlocks[parentID].on.length == 2) {
                  if (
                    placedBlocks[parentID].on[0].substring(1) == dragging.id
                  ) {
                    placedBlocks[parentID].on[0] = "";
                  } else if (
                    placedBlocks[parentID].on[1].substring(1) == dragging.id
                  ) {
                    placedBlocks[parentID].on[1] = "";
                  }
                } else if (placedBlocks[parentID].on.length == 1) {
                  if (
                    placedBlocks[parentID].on[0].substring(1) == dragging.id
                  ) {
                    placedBlocks[parentID].on[0] = "";
                  }
                }
              }
            }
          }
        }

        //reset the block css
        if (placedBlocks[dragging.id]) {
          if (blocks[placedBlocks[dragging.id].id].type == "number") {
            dragging.parentNode.style.removeProperty("padding");
            dragging.parentNode.innerHTML = "5";
          }
          if (blocks[placedBlocks[dragging.id].id].type == "boolean") {
            dragging.parentNode.style.removeProperty("padding");
            dragging.parentNode.innerHTML = "true";
          }
        }
      }
    }

    //these lines set the initial position to where it already is lol
    dragging.style.position = "absolute";
    dragging.style.top = rect.top - scrollOffset.y + "px";
    dragging.style.left = rect.left - scrollOffset.x + "px";

    //then move the dragging element to the codecontainer
    findC("codeContainer").appendChild(dragging);
    dragging.style.display = "none"; //redraw block
    dragging.style.display = "block";

    //as a last thing, make sure to get the snapPoints array for snapping while we are dragging this block
    if (dragging.id.includes("source-block-")) {
      //adjust to work with either source blocks or normal ones
      snapPoints = getSnapPoints(blocks[i0].type); //i0 is the type id of the source block
    } else {
      snapPoints = getSnapPoints(blocks[placedBlocks[dragging.id].id].type);
    }
  });

  tempListen(pageHolder, "mousemove", (e) => {
    //collaboration
    //format of the block array:
    // [mouseX, mouseY, blockID, dragOffsetX, dragOffsetY]
    let block = [e.clientX, e.clientY];
    if (dragging) {
      //send extra data if the block is new
      /*
      if (dragging.id.includes("source-block-")) {
        block.push(placedBlocks[dragging.id]);
      } else {
        block.push(dragging.id);
      }*/
      //nevermind, just save the html of the block
      block.push(dragging.outerHTML);

      block.push(dragOffset.x);
      block.push(dragOffset.y);
      //block.push(dragging.outerHTML);
    }

    saving.mouseMove(block);

    if (!dragging) return;
    //if we are currently dragging a block, set that block's position to the cursor minus the offset
    //but it's different for source blocks because they have an offset

    //update position
    dragging.style.left = -dragOffset.x + e.clientX + "px";
    dragging.style.top = -dragOffset.y + e.clientY + "px";

    //rotate it if it's about to be deleted
    let rect = dragging.getBoundingClientRect();
    if (rect.left < 300 && dragging.id.includes("source-block-") == false) {
      //side bar is 300px wide
      dragging.style.transform = "rotate(-20deg)";
    } else {
      dragging.style.transform = "rotate(0deg)";
    }

    //now check if we need to snap the block's position to another block
    let snapPoint = findSnapPoint(dragging);

    if (snapPoint) {
      //display a preview at the snap point

      if (dragPreview) {
        //if we changed the snapPoint since last time, reflect that
        if (dragPreview.snapID != snapPoint.id) {
          updateBlockPreview(prevSnapPoint, true);
          updateBlockPreview(snapPoint, false);
          dragPreview.snapID = snapPoint.id; //save this for later
        }

        //the dragPreview already exists, simply update it's position
        dragPreview.style.left = snapPoint.x - scrollOffset.x + "px";
        dragPreview.style.top = snapPoint.y - scrollOffset.y + "px";
      } else {
        //otherwise, create the dragPreview object and snap it.
        dragPreview = dragging.cloneNode(true);
        dragPreview.id = "dragPreview";
        dragPreview.snapID = snapPoint.id; //save this for later
        dragPreview.style.opacity = 0.4;
        dragPreview.style.left = snapPoint.x - scrollOffset.x + "px";
        dragPreview.style.top = snapPoint.y - scrollOffset.y + "px";
        dragPreview.style.position = "absolute";
        dragPreview.style.zIndex = 100;
        dragPreview.style.transform = "rotate(0deg)"; //fixed the issue where the preview got rotated
        findC("codeContainer").appendChild(dragPreview);
        //convertBlock(dragPreview, snapPoint);
        //placeBlock(dragPreview, snapPoint, true);

        //update the position of the first child of the rebound element
        updateBlockPreview(snapPoint, false);
      }

      prevSnapPoint = snapPoint;
      dragging.style.zIndex = 101;
    } else if (dragPreview) {
      //if we didn't snap the block, get rid of the block preview
      //redo preview spacing first
      updateBlockPreview(prevSnapPoint, true);
      dragPreview.remove();
      dragPreview = null;
    }
  });

  tempListen(pageHolder, "mouseup", async (e) => {
    if (!dragging) return; //make sure we have a current block selected

    let snapPoint = findSnapPoint(dragging); //get the snap point
    convertBlock(dragging, snapPoint, null);
    setBlockDown(dragging, snapPoint, false);
    updateBlockPreview(prevSnapPoint, true);

    dragging.style.cursor = "grab";
    dragging = null;
    //console.log(placedBlocks);
    //convertBlockData();
    //saving.save(data);
  });

  function updateBlockPreview(snapPoint, reset) {
    if (!snapPoint) return; //get rid of an error
    if (!placedBlocks[snapPoint.id]) return; //get rid of another error
    //take in a snapPoint and make space for the preview after that snapPoint
    //reset is true if the space should be reset.
    let margin =
      (reset
        ? 0
        : dragging.clientHeight +
          verticalBlockMargin * (snapPoint.pos == "a" ? 2 : 1)) + "px";
    //account for the bug where if statements resize under the preview too short
    if (!placedBlocks[snapPoint.id][snapPoint.pos] && !reset)
      margin = removePX(margin) + 6.5 + "px";
    if (snapPoint.pos == "a")
      findI(snapPoint.id).firstElementChild.style.marginBottom = margin;
    if (snapPoint.pos == "in")
      findI(
        snapPoint.id
      ).firstElementChild.lastElementChild.children[1].firstElementChild.style.marginBottom = margin;
    if (snapPoint.pos == "else")
      findI(
        snapPoint.id
      ).firstElementChild.lastElementChild.lastElementChild.firstElementChild.style.marginBottom = margin;
  }

  //small but useful helper function
  function removePX(string) {
    return parseInt(string.substring(0, string.length - 2), 10);
  }

  function convertBlock(block, snapPoint, newID) {
    //given a block, check if it is a source block and convert it to a normal block if it is, updating the placedBlocks array as necessary
    //now go ahead and give the block it's new id, date.now
    //but only do this if it is a source block
    //newID is null most of the time, but is the proper id when loading blocks in
    if (block && (block.id.includes("source-block-") || newID != null)) {
      //parse the id of this block from the html element id before we change the id
      let tempID = parseInt(block.id.substring(13, block.id.length), 10);

      //now change the id
      if (newID) {
        block.id = newID; //date.now and a little random variation to avoid collisions
      } else {
        block.id = Date.now() + Math.round(Math.random() * 1000).toString(); //date.now and a little random variation to avoid collisions
      }

      //lets also create the new block in the array
      placedBlocks[block.id] = {};
      placedBlocks[block.id].x = block.style.left;
      placedBlocks[block.id].y = block.style.top;
      placedBlocks[block.id].id = newID ? block.blockType : tempID;

      console.log(placedBlocks);

      //go through the format array of each block and add a snap point to each number slot
      let format = null;
      if (newID) {
        format = blocks[block.blockType].format;
      } else {
        format = blocks[tempID].format;
      }
      placedBlocks[block.id].on = []; //keep track of the position of the input. 0 is the first numerical spot, 1 is the second, and so on. The result is stored in the spot variable in the snappoints
      for (let i = 0; i < format.length; i++) {
        if (format[i] == "number") {
          placedBlocks[block.id].on.push("");
        } else if (format[i] == "boolean") {
          placedBlocks[block.id].on.push("");
        }
      }

      //publish that the block is placed
      socket.publish([
        "place",
        [placedBlocks[block.id], snapPoint],
        getEpoch()
      ]);
    }
  }

  function findSnapPoint(element) {
    //given an element (that is a block), see if it can snap to a snap point and return the first one it can snap to.
    //return null if it can't snap to anything
    //assume the snapPoints have already been checked to be the right type (simple, number, boolean)

    for (let i = 0; i < snapPoints.length; i++) {
      //make sure this snapPoint is not a child of the current block
      if (
        element.id == snapPoints[i].id ||
        element.querySelector(`[id="${snapPoints[i].id}"]`)
      )
        continue;

      //now get the position of the element
      let rect = element.getBoundingClientRect();
      //check if the snapPoint is close enough to the block to snap to the
      if (
        (rect.left - snapPoints[i].x) * (rect.left - snapPoints[i].x) +
          (rect.top - snapPoints[i].y) * (rect.top - snapPoints[i].y) <
        snapThreshold * snapThreshold
      ) {
        return snapPoints[i];
      }
    }

    return null; //if no snap points were found by now, then return null
  }

  function deleteBlock(id) {
    //don't just delete the one block but also all of it's children
    let array = getAllChildren(id, []);
    for (let i = 0; i < array.length; i++) {
      delete placedBlocks[array[i]]; //delete from array
    }
    findI(id).remove(); //deleting the parent block should delete all of the children html elements too
  }

  async function setBlockDown(block, snapPoint, isLoading) {
    //this function is called whenever we set a block down
    //snap block if it is close enough to a snap point
    //delete block if it was dragged into the side bar
    //isLoading is whether or not the block is being loaded in

    //get rid of dragging previews
    if (dragPreview) dragPreview.remove();
    dragPreview = null;

    if (!block) return; //return if there is no block element
    block.style.zIndex = 1; //reset z-index

    //delete the block if it was draged into the side bar
    let rect = block.getBoundingClientRect();
    if (rect.left < 300 && !isLoading) {
      //side bar is 300px wide
      block.style.transform = "rotate(20deg) scale(0)";
      await sleep(150);
      //delete the block in the placedBlock area
      deleteBlock(block.id);
      return;
    }

    //now handle the snapping / placement of the new block

    //first check if we need to snap the block's position to another block
    if (snapPoint) {
      //update the html to match the new block structure
      placeBlock(block, snapPoint, false, isLoading);

      //update the placedBlocks array to reflect the new block structure
      if (!isLoading) {
        if (snapPoint.pos == "a") {
          placedBlocks[snapPoint.id].a = block.id;
        } else if (snapPoint.pos == "in") {
          placedBlocks[snapPoint.id].in = block.id;
        } else if (snapPoint.pos == "else") {
          placedBlocks[snapPoint.id].else = block.id;
        } else if (snapPoint.pos == "number") {
          placedBlocks[snapPoint.id].on[snapPoint.spot] = "#" + block.id; //change this in the future
        } else if (snapPoint.pos == "boolean") {
          placedBlocks[snapPoint.id].on[snapPoint.spot] = "#" + block.id; //change this in the future
        } else if (snapPoint.pos == "before") {
          placedBlocks[getLastBlock(block.id)].a = snapPoint.id;
        }

        //update the top variable for all of the blocks in the new block structure
        if (snapPoint.pos != "before") {
          placedBlocks[block.id].top = false; //this block is no longer at the top
        } else {
          placedBlocks[block.id].top = true; //the block is at the top because it snapped to the top
          placedBlocks[snapPoint.id].top = false; //the old top is no longer at the top
        }
      }
    } else {
      //if we didn't snap to anything, then this block is at the top of it's chain; the alpha male; the emperor; the king
      block.style.position = "absolute";
      placedBlocks[block.id].top = true; //this block is now at the top of it's own block chain
      block.style.left = placedBlocks[block.id].x + "px";
      block.style.top = placedBlocks[block.id].y + "px";
    }
  }

  function placeBlock(block, snapPoint, isPreview, isLoading) {
    //given a block, and a snapPoint, position the html of the block correctly
    //this function does NOT update the placedBlocks array at all--it only deals with the HTML
    //the isPreview is true if this block is a preview

    if (snapPoint.pos == "a") {
      //snap the block to after
      //do some styling
      block.style.margin = "0px";
      block.style["margin-top"] = verticalBlockMargin + "px";
      block.style.position = "relative";
      block.style.left = "0px";
      block.style.top = "0px";

      //SUPRISE: we also have to account for when there is already a block here;
      //we have to move the block already here down a little
      if (placedBlocks[snapPoint.id]) {
        //prevent null errors
        if (placedBlocks[snapPoint.id].a && !isLoading) {
          //find the last block at the end of the block chain we are block in
          let currentEnd = block.id;
          while (placedBlocks[currentEnd].a) {
            currentEnd = placedBlocks[currentEnd].a;
          }
          //set the block after this blockchain to be after the last block in the chain
          placedBlocks[currentEnd].a = placedBlocks[snapPoint.id].a;
          findI(currentEnd).appendChild(findI(placedBlocks[snapPoint.id].a));
        }
      }

      findI(snapPoint.id).appendChild(block); //append the block as a child of the previous block
    } else if (snapPoint.pos == "in") {
      //do some styling
      block.style.position = "relative";
      block.style.margin = "0px";
      block.style.left = "0px";
      block.style.top = "0px";
      block.style["margin-top"] = "-7.5px";
      block.style["margin-left"] = "1.8px";

      //SUPRISE (again): we also have to account for when there is already a block here;
      //we have to move the block already here down a little
      if (placedBlocks[snapPoint.id].in && !isLoading) {
        //find the last block at the end of the block chain we are block in
        let currentEnd = block.id;
        while (placedBlocks[currentEnd].a) {
          currentEnd = placedBlocks[currentEnd].a;
        }

        //set the block after this blockchain to be after the last block in the chain
        placedBlocks[currentEnd].a = placedBlocks[snapPoint.id].in;

        //update html
        findI(currentEnd).appendChild(findI(placedBlocks[snapPoint.id].in));
        findI(placedBlocks[snapPoint.id].in).style.top = "0px";
        findI(placedBlocks[snapPoint.id].in).style.left = "0px";
        findI(placedBlocks[snapPoint.id].in).style["margin-left"] = "0px";
        findI(placedBlocks[snapPoint.id].in).style["margin-top"] =
          verticalBlockMargin + "px";
      }

      findI(snapPoint.id)
        .querySelector(".blockIfContainer")
        .insertBefore(
          block,
          findI(snapPoint.id).querySelector(".blockIfContainer").children[1]
        ); //append the child in the right spot
    } else if (snapPoint.pos == "else") {
      //do some styling
      block.style.position = "relative";
      block.style.margin = "0px";
      block.style["margin-top"] = "-7.5px";
      block.style["margin-left"] = "1.8px";
      block.style.left = "0px";
      block.style.top = "0px";

      //SUPRISE (again again): we also have to account for when there is already a block here;
      //we have to move the block already here down a little
      if (placedBlocks[snapPoint.id].else && !isLoading) {
        //find the last block at the end of the block chain we are block in
        let currentEnd = block.id;
        while (placedBlocks[currentEnd].a) {
          currentEnd = placedBlocks[currentEnd].a;
        }
        //set the block after this blockchain to be after the last block in the chain
        placedBlocks[currentEnd].a = placedBlocks[snapPoint.id].else;
        findI(currentEnd).appendChild(findI(placedBlocks[snapPoint.id].else));
        findI(placedBlocks[snapPoint.id].else).style.top = "0px";
        findI(placedBlocks[snapPoint.id].else).style.left = "0px";

        findI(placedBlocks[snapPoint.id].else).style["margin-top"] =
          verticalBlockMargin + "px";
        findI(placedBlocks[snapPoint.id].else).style["margin-left"] = "0px";
      }

      findI(snapPoint.id)
        .querySelector(".blockHolder")
        .lastElementChild.insertBefore(
          block,
          findI(snapPoint.id).querySelector(".blockHolder").lastElementChild
            .lastElementChild
        ); //append the child
    } else if (snapPoint.pos == "number") {
      //snap the block to the inside of an else statement;
      block.style.position = "relative";
      block.style.margin = "0px";
      block.style.left = "0px";
      block.style.top = "0px";

      //set the innerHTML to blank to get rid of any numbers in the block
      //actually it's more complicated because parenting
      //find which spot to snap to and snap to that one
      if (snapPoint.spot == 0) {
        findI(snapPoint.id).querySelectorAll(".input")[0].innerHTML = "";
        findI(snapPoint.id).querySelectorAll(".input")[0].style.padding = "0px";
        findI(snapPoint.id).querySelectorAll(".input")[0].appendChild(dragging);
      } else if (snapPoint.spot == 1) {
        findI(snapPoint.id).firstChild.firstChild.lastElementChild.innerHTML =
          "";
        findI(
          snapPoint.id
        ).firstChild.firstChild.lastElementChild.style.padding = "0px";
        findI(snapPoint.id).firstChild.firstChild.lastElementChild.appendChild(
          dragging
        );
      }

      //set the positions to be correct
      dragging.style.position = "unset";
      dragging.style.display = "inline-block";
    } else if (snapPoint.pos == "boolean") {
      block.style.position = "relative";
      block.style.margin = "0px";
      block.style.left = "0px";
      block.style.top = "0px";
      //snap the block to the inside of an else statement;

      //set the innerHTML to blank to get rid of any blocks in the block
      //actually it's more complicated because parenting
      if (snapPoint.spot == 0) {
        findI(snapPoint.id).querySelectorAll(".input")[0].innerHTML = "";
        findI(snapPoint.id).querySelectorAll(".input")[0].style.padding = "0px";
        findI(snapPoint.id).querySelectorAll(".input")[0].appendChild(dragging);
      } else if (snapPoint.spot == 1) {
        findI(snapPoint.id).firstChild.firstChild.lastElementChild.innerHTML =
          "";
        findI(
          snapPoint.id
        ).firstChild.firstChild.lastElementChild.style.padding = "0px";
        findI(snapPoint.id).firstChild.firstChild.lastElementChild.appendChild(
          dragging
        );
      } else {
      }

      dragging.style.position = "unset";
      dragging.style.display = "inline-block";
    } else if (snapPoint.pos == "before") {
      findI(getLastBlock(block.id)).appendChild(findI(snapPoint.id));

      block.style.position = "absolute";
      block.style.left = placedBlocks[block.id].x + "px";
      block.style.top = placedBlocks[block.id].y + "px";
      block.style.margin = "0px";

      findI(snapPoint.id).style.position = "relative";
      findI(snapPoint.id).style.margin = "0px";
      findI(snapPoint.id).style.left = "0px";
      findI(snapPoint.id).style.top = "0px";
      findI(snapPoint.id).style["margin-top"] = verticalBlockMargin + "px";
    }
  }

  /*
     _____ _   _          _____         _____   ____ _____ _   _ _______ _____ 
  / ____| \ | |   /\   |  __ \       |  __ \ / __ \_   _| \ | |__   __/ ____|
 | (___ |  \| |  /  \  | |__) |      | |__) | |  | || | |  \| |  | | | (___  
  \___ \| . ` | / /\ \ |  ___/       |  ___/| |  | || | | . ` |  | |  \___ \ 
  ____) | |\  |/ ____ \| |           | |    | |__| || |_| |\  |  | |  ____) |
 |_____/|_| \_/_/    \_\_|           |_|     \____/_____|_| \_|  |_| |_____/ 
                                                                             
 */

  function getSnapPoints(type) {
    //gets a list of "snap points" which are places where this block can snap to
    //boolean blocks, number blocks, and simple blocks are treated differently
    //we'll make the "snap points" just a list of the block positions for now

    //UPDATE: now snap to the top of blocks as well, only if they are at the top of their script
    //added a "pos" property to the object
    //pos is "a" if the snap point is after the block, "i" if the snap point is in the block (think if statement), and "b" if the snap point is before the block
    let array = [];

    for (let i = 0; i < Object.keys(placedBlocks).length; i++) {
      getSnapPoint(type, i, array, dragging.clientHeight);
    }
    //console.log(array);
    return array;
  }

  function getSnapPoint(type, i, array, height) {
    //given a type of snapPoint, i (the Object.keys() indexed position of the block; in the placedBlock array), and an array, add the list of potential snap points to the array
    //also given a height of the block that is dragging out
    let block = Object.keys(placedBlocks)[i];
    if (!findI(block)) return;
    //if (!block) continue;
    let rect = findI(block).getBoundingClientRect();
    if (!rect) return;

    if (
      type == "simple" ||
      type == "parent" ||
      type == "if-else" ||
      type == "event"
    ) {
      if (
        (blocks[placedBlocks[block].id].type == "event" ||
          blocks[placedBlocks[block].id].type == "simple" ||
          blocks[placedBlocks[block].id].type == "parent" ||
          blocks[placedBlocks[block].id].type == "if-else") &&
        type != "event"
      ) {
        array.push({
          id: Object.keys(placedBlocks)[i],
          pos: "a",
          x: rect.left,
          y:
            findI(block).firstChild.getBoundingClientRect().bottom +
            verticalBlockMargin //this may have to change, the block itself includes blocks below it, so get the y position of the blockcover element
        });
      }

      //snap to the inside of the block if it's a parent
      if (
        (blocks[placedBlocks[block].id].type == "parent" ||
          blocks[placedBlocks[block].id].type == "if-else") &&
        type != "event"
      ) {
        array.push({
          id: Object.keys(placedBlocks)[i],
          pos: "in",
          x: rect.left + parentHorizontalOffset,
          y:
            rect.top +
            findI(block).querySelector(".blockContent").clientHeight +
            verticalBlockMargin //the 2 is extra spacing to make the notch line up
        });
      }

      if (blocks[placedBlocks[block].id].type == "if-else" && type != "event") {
        array.push({
          id: Object.keys(placedBlocks)[i],
          pos: "else",
          x: rect.left + parentHorizontalOffset,
          y:
            findI(
              block
            ).firstElementChild.lastElementChild.lastElementChild.previousElementSibling.getBoundingClientRect()
              .bottom + verticalBlockMargin //the 64 will have to change, it's the height of the top and middle sections of the if-else block
        });
      }

      //snap to the top
      if (
        blocks[placedBlocks[block].id].type == "simple" ||
        blocks[placedBlocks[block].id].type == "parent" ||
        blocks[placedBlocks[block].id].type == "if-else"
      ) {
        if (placedBlocks[block].top == true) {
          array.push({
            id: Object.keys(placedBlocks)[i],
            pos: "before",
            x: rect.left,
            y:
              findI(block).getBoundingClientRect().top -
              height -
              verticalBlockMargin //this may have to change, the block itself includes blocks below it, so get the y position of the blockcover element
          });
        }
      }
    } else if (type == "number") {
      //go through the format array of each block and add a snap point to each number slot
      // format: ["walk", "number", "steps"],
      let format = blocks[placedBlocks[block].id].format;
      let count = 0; //keep track of the position of the input. 0 is the first numerical spot, 1 is the second, and so on. The result is stored in the spot variable in the snappoints
      for (let i = 0; i < format.length; i++) {
        if (format[i] == "number") {
          //if there is already a block in this numerical slot, then don't let other blocks snap to this block
          if (
            placedBlocks[block].on[count] != "" &&
            placedBlocks[block].on[count].charAt(0) == "#"
          ) {
            count++;
            continue;
          }

          if (count == 0) {
            //if it's in the first spot, then get the right element
            array.push({
              id: block,
              pos: "number",
              x: findI(block)
                .querySelectorAll(".input")[0]
                .getBoundingClientRect().left,
              y:
                findI(block)
                  .querySelectorAll(".input")[0]
                  .getBoundingClientRect().top -
                height / 2.1 +
                10,
              spot: count
            });
          } else if (count == 1) {
            //since there are blocks inside blocks we have to find the second input differently
            array.push({
              id: block,
              pos: "number",
              x: findI(
                block
              ).firstChild.firstChild.lastElementChild.getBoundingClientRect()
                .left,
              //DANGER; we subtract half of the height of the current block (dragging) from y to make it line up, but this assumes that is the block that is being snapped
              y:
                findI(
                  block
                ).firstChild.firstChild.lastElementChild.getBoundingClientRect()
                  .top -
                height / 2.1 +
                10,
              spot: count
            });
          } else {
          }

          count++;
        }
      }
    } else if (type == "boolean") {
      //go through the format array of each block and add a snap point to each number slot
      // format: ["walk", "number", "steps"],
      let format = blocks[placedBlocks[block].id].format;
      let count = 0; //keep track of the position of the input. 0 is the first numerical spot, 1 is the second, and so on. The result is stored in the spot variable in the snappoints
      for (let i = 0; i < format.length; i++) {
        if (format[i] == "boolean") {
          //if there is already a block in this numerical slot, then don't let other blocks snap to this block
          if (
            placedBlocks[block].on[count] != "" &&
            placedBlocks[block].on[count].charAt(0) == "#"
          ) {
            count++;
            continue;
          }

          if (count == 0) {
            //if it's in the first spot, then get the right element
            array.push({
              id: block,
              pos: "boolean",
              x: findI(block)
                .querySelectorAll(".input")[0]
                .getBoundingClientRect().left,
              y:
                findI(block)
                  .querySelectorAll(".input")[0]
                  .getBoundingClientRect().top -
                height / 2.1 +
                10,
              spot: count
            });
          } else if (count == 1) {
            //since there are blocks inside blocks we have to find the second input differently
            array.push({
              id: block,
              pos: "boolean",
              x: findI(
                block
              ).firstChild.firstChild.lastElementChild.getBoundingClientRect()
                .left,
              //DANGER; we subtract half of the height of the current block (dragging) from y to make it line up, but this assumes that is the block that is being snapped
              y:
                findI(
                  block
                ).firstChild.firstChild.lastElementChild.getBoundingClientRect()
                  .top -
                height / 2.1 +
                10,
              spot: count
            });
          } else {
          }

          count++;
        }
      }
    }

    return;
  }

  /*
    _    _ ______ _      _____  ______ _____           ______ _    _ _   _  _____ _______ _____ ____  _   _  _____ 
 | |  | |  ____| |    |  __ \|  ____|  __ \         |  ____| |  | | \ | |/ ____|__   __|_   _/ __ \| \ | |/ ____|
 | |__| | |__  | |    | |__) | |__  | |__) |        | |__  | |  | |  \| | |       | |    | || |  | |  \| | (___  
 |  __  |  __| | |    |  ___/|  __| |  _  /         |  __| | |  | | . ` | |       | |    | || |  | | . ` |\___ \ 
 | |  | | |____| |____| |    | |____| | \ \         | |    | |__| | |\  | |____   | |   _| || |__| | |\  |____) |
 |_|  |_|______|______|_|    |______|_|  \_\        |_|     \____/|_| \_|\_____|  |_|  |_____\____/|_| \_|_____/ 
                                                                                                                 
  */

  function getAllParents(id) {
    //get all of the parents of a given block with id of id, and put their ids in the array
    for (let k = 0; k < Object.keys(placedBlocks).length; k++) {
      //check if this block is a top block
      if (placedBlocks[Object.keys(placedBlocks)[k]].top == true) {
        //if we found the block, return the list with all of it's parents

        let a = getAllParentsRecursion(id, Object.keys(placedBlocks)[k]);
        if (a.found == true) {
          return a.array;
        }
      }
    }

    return [];
  }

  function getAllParentsRecursion(searchID, startID) {
    //helper function for getAllParents
    //searchID is the block we are looking for.
    //startID is the block we start at
    //the goal is to return a list of the parent objects of the searchID block

    //first of all, check if we have the desired block right now, base case
    if (searchID == startID) {
      return { found: true, array: [] };
    }

    if (!placedBlocks[startID]) return { found: false };
    //if not, then investigate both the block in and after this one
    if (placedBlocks[startID].a) {
      let a = getAllParentsRecursion(searchID, placedBlocks[startID].a);
      //if the search was a sucess, then send the result on up the recursion chain
      if (a.found == true) return a;
    }
    //now investigating the block inside this one is a little more tricky
    if (placedBlocks[startID].in) {
      let a = getAllParentsRecursion(searchID, placedBlocks[startID].in);
      //since there was a parent involved, add this parent to the parent array and then return
      if (a.found == true) {
        a.array.push(startID);
        return a;
      }
    }
    //now investigating the else portion of the if-else block
    if (placedBlocks[startID].else) {
      let a = getAllParentsRecursion(searchID, placedBlocks[startID].else);
      //since there was a parent involved, add this parent to the parent array and then return
      if (a.found == true) {
        a.array.push(startID);
        return a;
      }
    }

    //otherwise, nothing was found, so return false
    return { found: false };
  }

  function getAllChildren(id, array) {
    //gets all of the children of a certain block using recursion, including the original block
    //and then add it to the array

    //base case, this block does not exist
    if (!placedBlocks[id]) return [];
    array.push(id);

    if (placedBlocks[id].a) {
      array.concat(getAllChildren(placedBlocks[id].a, array));
    }
    if (placedBlocks[id].in) {
      array.concat(getAllChildren(placedBlocks[id].in, array));
    }
    if (placedBlocks[id].else) {
      array.concat(getAllChildren(placedBlocks[id].else, array));
    }
    if (placedBlocks[id].on) {
      if (placedBlocks[id].on[0])
        array.concat(
          getAllChildren(placedBlocks[id].on[0].substring(1), array)
        );
      if (placedBlocks[id].on.length > 1) {
        if (placedBlocks[id].on[1])
          array.concat(
            getAllChildren(placedBlocks[id].on[1].substring(1), array)
          );
      }
    }

    //otherwise, nothing was found, so return false
    return array;
  }

  function getLastBlock(id) {
    //given the id of a block, return the id of the last block in that block chain
    let currentID = id;
    while (placedBlocks[currentID].a) {
      currentID = placedBlocks[currentID].a;
    }
    return currentID;
  }

  /*
   _____ ____  _      _               ____   ____  _____         _______ _____ ____  _   _ 
  / ____/ __ \| |    | |        /\   |  _ \ / __ \|  __ \     /\|__   __|_   _/ __ \| \ | |
 | |   | |  | | |    | |       /  \  | |_) | |  | | |__) |   /  \  | |    | || |  | |  \| |
 | |   | |  | | |    | |      / /\ \ |  _ <| |  | |  _  /   / /\ \ | |    | || |  | | . ` |
 | |___| |__| | |____| |____ / ____ \| |_) | |__| | | \ \  / ____ \| |   _| || |__| | |\  |
  \_____\____/|______|______/_/    \_\____/ \____/|_|  \_\/_/    \_\_|  |_____\____/|_| \_|
  */

  let lastDraggingData = null;

  saving.draggingCallback = function (task, userid, data) {
    //This data is the same as what is sent from the block dragging function
    switch (task) {
      case "move":
        console.log(data);
        // Mouse movement, includes block if one is being dragged
        if (data && data[2]) {
          // Block is being dragged
          let cursorObj = pageHolder.querySelector("#moveCursor_" + userid);
          let currentDraggingBlock = cursorObj.querySelector(".block");
          if (currentDraggingBlock) {
            // Block is already attached to cursor
          } else {
            // Get a new block
            //let foundBlock = pageHolder.querySelector(
            //  ".block[blockid='" + data[2]._id + "']"
            //);
            // if (foundBlock) {
            // Block already exists - then parent block to cursor
            //} else {
            // Create a new block - then parent block to cursor
            //}
            //block is not already attached to cursor, so make the element with the HTML and attach it
            var div = document.createElement("DIV");
            div.innerHTML = data[2];
            div.firstChild.style.left = data[3] * -1 + "px";
            div.firstChild.style.top = data[4] * -1 + "px";
            div.firstChild.style.zIndex = -3;
            cursorObj.style.zIndex = "unset";
            cursorObj.appendChild(div.firstChild);
          }

          lastDraggingData = data;
        } else {
          if (data && data.length < 3 && lastDraggingData) {
            //they are no longer dragging a block, delete it
            let cursorObj = pageHolder.querySelector("#moveCursor_" + userid);
            cursorObj.lastElementChild.remove();
          }
          lastDraggingData = null;
        }
        break;
      default:
    }
  };

  //port block data over to a structure
  function convertBlockData() {
    //convert the block data to a more slim format that we can send to the robot
    let data = {};
    for (let i = 0; i < Object.keys(placedBlocks).length; i++) {
      let block = placedBlocks[Object.keys(placedBlocks)[i]];
      //console.log(block);

      //every block has this
      data[Object.keys(placedBlocks)[i]] = {};
      data[Object.keys(placedBlocks)[i]].id = block.id;
      data[Object.keys(placedBlocks)[i]].top = block.top;

      //only save position if it is the top block
      if (block.top) {
        data[Object.keys(placedBlocks)[i]].x = removePX(
          findI(Object.keys(placedBlocks)[i]).style.left
        );
        data[Object.keys(placedBlocks)[i]].y = removePX(
          findI(Object.keys(placedBlocks)[i]).style.top
        );
      }

      //add positions if the block has them
      if (block.a) data[Object.keys(placedBlocks)[i]].a = block.a;
      if (block.in) data[Object.keys(placedBlocks)[i]].in = block.in;
      if (block.else) data[Object.keys(placedBlocks)[i]].else = block.else;

      //now go through and parse numerical / boolean values from the blocks
      data[Object.keys(placedBlocks)[i]].on = block.on.slice();

      if (block.on.length > 0) {
        if (block.on[0] == "" || block.on[0].charAt(0) != "#") {
          //this works with any block type; simple, boolean, numerical
          data[Object.keys(placedBlocks)[i]].on[0] = findI(
            Object.keys(placedBlocks)[i]
          ).querySelectorAll(".input")[0].innerHTML; //copy numerical value
        }
      }
      if (block.on.length > 1) {
        if (block.on[1] == "" || block.on[1].charAt(0) != "#") {
          //this works with just boolean, numerical blocks, because only those ones can have two inputs
          data[Object.keys(placedBlocks)[i]].on[1] = findI(
            Object.keys(placedBlocks)[i]
          ).firstChild.firstChild.lastElementChild.innerHTML; //copy numerical value
        }
      }
    }

    return data;
    //loadBlocks(data);
  }

  function loadBlocks(data) {
    //given block data in format output by the function above, load the actual blocks into the code container.
    for (let i = 0; i < Object.keys(data).length; i++) {
      let block = data[Object.keys(data)[i]];
      if (block.top) {
        loadBlockRecursive(data, Object.keys(data)[i]);
      }
    }
  }

  function loadBlockRecursive(data, id) {
    //given the full list of blocks (data) and the id of a specific block, load in the html of that block and all of its children
    //we can use this recursively by calling the top block first to then load in every block
    console.log(id);
    if (!data[id]) return;
    console.log(data);
    //first, get the html of the source block of this type
    let block = findC("blockStorage").querySelector(
      '[blockid="' + data[id].id + '"]'
    );
    //console.log(block);

    //then, replenish the source block if it was a source block that was dragged
    let i0 = parseInt(block.id.substring(13, block.id.length), 10); //get id of block
    generateBlock(i0);

    //these lines set the initial position to where it already is lol
    if (data[id].top) {
      block.style.position = "absolute";
      block.style.top = data[id].y + "px";
      block.style.left = data[id].x + "px";
    }

    //then move the dragging element to the codecontainer
    findC("codeContainer").appendChild(block);
    block.style.display = "none"; //redraw block
    block.style.display = "block";
    block.id = id;
    block.blockType = data[id].id; //save this for the convertBlock function

    //if this isn't the top block, get the snap point that it needs to snap to
    if (!data[id].top) {
      //go through each block already in the placedBlocks array, see if it's the direct parent of this block
      //then get the list of snapPoints and use that to snap to the block

      let parentPos = null;
      let index = -1;
      //console.log("placed blocks");
      //console.log(placedBlocks);

      for (let i = 0; i < Object.keys(placedBlocks).length; i++) {
        let testBlock = placedBlocks[Object.keys(placedBlocks)[i]];
        //console.log("testBlock");
        //console.log(testBlock);

        parentPos = null; //store whether or not this block is the direct parent of the block we are currently adding; UPDATE; store the position instead

        for (let k = 0; k < Object.keys(testBlock).length; k++) {
          if (testBlock[Object.keys(testBlock)[k]] == id)
            parentPos = Object.keys(testBlock)[k];
          if (testBlock.on) {
            if (testBlock.on[0] == id) parentPos = "on0"; //shows that this is on the block, in the first spot
            if (testBlock.on.length > 1) {
              if (testBlock.on[1] == id) parentPos = "on1"; //shows that this is on the block, in the second spot
            }
          }
        }

        if (parentPos != null) {
          index = i;
          break; //exit now if this is the parent block
        }
      }

      //console.log(parentPos);

      if (parentPos != null && index != -1) {
        let potentialSnapPoints = [];

        getSnapPoint(blocks[data[id].id].type, index, potentialSnapPoints, 0);

        console.log("snap points:");
        console.log(potentialSnapPoints);

        //now snap the block to the snap point
        //now put the block in the array and update html and the placedBlocks array
        let snapPoint = null;
        for (let k = 0; k < potentialSnapPoints.length; k++) {
          if (potentialSnapPoints[k].pos == parentPos) {
            snapPoint = potentialSnapPoints[k];
          }
          if (potentialSnapPoints[k].pos == "on") {
            if (parentPos == "on0" && potentialSnapPoints[k].spot == 0) {
              snapPoint = potentialSnapPoints[k];
              console.log(snapPoint);
            }
            if (parentPos == "on1" && potentialSnapPoints[k].spot == 1) {
              snapPoint = potentialSnapPoints[k];
            }
          }
        }

        convertBlock(block, snapPoint, id);
        setBlockDown(block, snapPoint, true);
      }
    } else {
      block.style.top = data[id].y + "px";
      block.style.left = data[id].x + "px";

      convertBlock(block, null, id);
      setBlockDown(block, null, true);
    }

    //now load in the children blocks of this one

    if (data[id].a) {
      placedBlocks[id].a = data[id].a;
      loadBlockRecursive(data, data[id].a);
    }
    if (data[id].in) {
      placedBlocks[id].in = data[id].in;
      loadBlockRecursive(data, data[id].in);
    }
    if (data[id].else) {
      placedBlocks[id].else = data[id].else;
      loadBlockRecursive(data, data[id].else);
    }
    if (data[id].on) {
      if (data[id].on[0] && data[id].on[0].charAt(0) == "#") {
        placedBlocks[id].on[0] = data[id].on[0];
        loadBlockRecursive(data, data[id].on[0].substring(1)); //make sure its an id and not just a number
      }

      if (data[id].on.length > 1) {
        if (data[id].on[1] && data[id].on[1].charAt(0) == "#") {
          placedBlocks[id].on[1] = data[id].on[1];
          loadBlockRecursive(data, data[id].on[1].substring(1));
        }
      }

      if (data[id].on[0] && data[id].on[0].charAt(0) != "#") {
        block.querySelectorAll(".input")[0].innerHTML = data[id].on[0]; //copy numerical value
      }
      if (data[id].on.length > 1) {
        if (data[id].on[1] && data[id].on[1].charAt(0) != "#") {
          block.firstChild.firstChild.lastElementChild.innerHTML =
            data[id].on[1]; //copy numerical value
        }
      }
    }
  }

  /*loadBlocks({
    "1677078223702903": {
      x: "626px",
      y: "687.333px",
      id: 1,
      on: ["#167707822628621"],
      top: true
    },
    "167707822628621": {
      x: "704px",
      y: "688.083px",
      id: 19,
      on: ["", ""],
      top: false
    }
  });*/
};

//findC("block").innerHTML = blocks["0"].html;

// basic plan for blocks:
// JSON format of a basic block
/* var block1 = {
    id: 35,
    type: 3
    in: block2,
    a: block4
  }

  id is the id of the block. Each unique block has it's own id
  type is the type of the block.
  child is null if the block has no children. If the block
  has children, the first child as a variable is linked and it's "after" variable contains child #2
  after is the block immediantly after this block

  if the block is a source block, there will be an additional variable "source = true" at the end

  There will be a global list of "startBlocks" which defines the starting block in a sequence

  List of blocks:

  //starting blocks
  -on program start
  -on detect obstacle?

  //control blocks
  -if
  -if-else
  -repeat X
  -repeat until
  -wait
  -wait until
  -break

  //movement blocks (subject to change)
  -walk forward/backward X steps
  -turn X degrees
  -sit
  -jump

  //operator blocks
  +
  -
  *
  /
  %
  pick random X to Y
  round

  //boolean blocks
  <
  >
  =
  X and Y
  X or Y
  not X

  //variable blocks
  Set var to X
  Increase var by X

  Blocks will either be a full block, a numerical block, or a boolean block
  you can type directly into the numercal blocks to enter a value
  You cannot type directly into the boolean blocks 
  numerical blocks are circles or long rectangles with completely rounded corners
  boolean blocks are stacked and mirrored trapezoids (or elongated hexagons)


  */

//JSON format for the different types of blocks
//each of these describes the block type, not instances of that type
/*
  {
    id: 2,
    type: "full",
    color: "#ef342a",
    format: ["move", "number", "spaces"];
  }

  explanations:
  id is a unique id that links a block to it's block type
  for example, each rotate X degrees might have an id of 4
  type can be "event", "single", "parent", "if-else", "number", and "boolean"
  "event" is the starting block with no notch on the top
  "single" is a normal block like "walk X steps"
  "parent" can have blocks inside of it, like an if statement
  "if-else" is an if-else block, if elsa says so
  "number" is a numerical block, can only be nested inside other blocks
  "boolean" is a true or false statement, has to be nested
  color is the color in hexadecimal format
  format lists the format of the elements, as in the order of words and blanks
  so format = ["if", "boolean", "then"] would be an "if", then a spot for a boolean, then a "then"



  Now I would like to  explain how I want the format for a "script tree"
  the "script tree" refers to a series of blocks with a starting block at the top and subsequent blocks below


  devlog 10/6/22
  replaced all instances of clientHeight with scrollHeight




  Translation to JSON structure:

  var data = {
    //startEventScripts is an array of all of the block id's that are starting blocks
    metadata: {
      projectID: 425834535395
    },
    blocks: {
      //put placedBlocks in here
    }
  }

  when the data is transferred as JSON to spot micro, the python program will interperet it by running through each "tree" of blocks and converting that into python code.
  we will use the eval function to evaluate this code


  */
//<clipPath id="clipPath"><clipPath id="clipPath">
//placedBlocks[parentID].on[0] = null;
