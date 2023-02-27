wireframes.files = `
  <div class="homeContentHolder">
    <div class="homeContent">
      <div class="homeGeneral">
        <div class="homeTopBar">
          <img class="appLogo" src="./images/blockifylogo.svg"></img>
          <div class="signedInAccount buttonAnim hoverHighlight">
            <img class="signedInPicture">
            <div class="signedInNameHolder"><div class="signedInName">Loading...</div></div>
          </div>
        </div>
      </div>
      <div class="homeHolder">
        <div class="projectFilterHolder">
          <div class="filterHolder">
            <div class="filterOptionsHolder">
              <button class="filterButton buttonAnim" filter="all" style="background: var(--themeColorSec)">All</button>
              <button class="filterButton buttonAnim" filter="mine">Mine</button>
              <button class="filterButton buttonAnim" filter="shared">Shared</button>
            </div>
            <button class="createProject buttonAnim">New Project</button>
          </div>
          <div class="projectHolder"></div>
          <button class="projectLoadMore buttonAnim">Load More</button>
        </div>
        <div class="resourcesHolder">
          <div class="templateHolder">
            <div class="templateTitleHolder">
              <div class="templateTitle">Example Projects</div>
              <button class="templateViewMore buttonAnim">View More</button>
            </div>
            <button class="templateTile buttonAnim hoverHighlight">
              <img class="templateTileImg" src="./images/spotmicro.jpg">
              <div class="templateName">Easy Mover</div>
            </button>
            <button class="templateTile buttonAnim hoverHighlight">
              <img class="templateTileImg" src="./images/spotmicro.jpg">
              <div class="templateName">Remote Control</div>
            </button>
            <button class="templateTile buttonAnim hoverHighlight">
              <img class="templateTileImg" src="./images/spotmicro.jpg">
              <div class="templateName">Simple Walk</div>
            </button>
            <button class="templateTile buttonAnim hoverHighlight">
              <img class="templateTileImg" src="./images/spotmicro.jpg">
              <div class="templateName">Dog Simulator</div>
            </button>
            <button class="templateTile buttonAnim hoverHighlight">
              <img class="templateTileImg" src="./images/spotmicro.jpg">
              <div class="templateName">Example Name</div>
            </button>
            <button class="templateTile buttonAnim hoverHighlight">
              <img class="templateTileImg" src="./images/spotmicro.jpg">
              <div class="templateName">Example Name</div>
            </button>
          </div>
          <div class="templateHolder tutorialHolder">
            <div class="templateTitleHolder">
              <div class="templateTitle">Tutorials</div>
              <button class="templateViewMore buttonAnim">View More</button>
            </div>
            <button class="tutorialTile buttonAnim">Getting Started with Blockify</button>
            <button class="tutorialTile buttonAnim">Invite Team Members</button>
            <button class="tutorialTile buttonAnim">Send Code to Robot</button>
            <button class="tutorialTile buttonAnim">Connect a Controller</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

pages.files = async function () {
  modifyParams("project");

  if (userID == null) {
    promptLogin();
  }

  let dropdown = await getModule("dropdown");

  let manageAccountButton = pageHolder.querySelector(".signedInAccount");
  manageAccountButton.addEventListener("click", function () {
    dropdown.openDropdown(manageAccountButton, [
      [
        "Settings",
        "#000",
        function () {
          openWindow("https://exotek.co/account?userid=" + account.account);
        }
      ],
      [
        "Logout",
        "var(--error)",
        async function () {
          let [code] = await sendRequest("PUT", "auth/logout");
          if (code == 200) {
            removeLocalStore("userID");
            removeLocalStore("token");
            promptLogin();
          }
        }
      ]
    ]);
  });

  let projectHolder = pageHolder.querySelector(".projectHolder");

  function appendActiveUser(projID, user) {
    let existingTile = projectHolder.querySelector(
      ".activeUser[userid='" + user._id + "']"
    );
    if (existingTile) {
      if (
        existingTile.closest(".projectTile").getAttribute("projid") != projID
      ) {
        existingTile.remove();
      } else {
        return;
      }
    }
    let existingProjTile = projectHolder.querySelector(
      ".projectTile[projid='" + projID + "']"
    );
    if (existingProjTile) {
      let newUserIndicator = createElement(
        "activeUser",
        "img",
        existingProjTile.querySelector(".projectCollab")
      );
      newUserIndicator.setAttribute("userid", user._id);
      newUserIndicator.src = profilePic(user);
      newUserIndicator.title = user.user;
      newUserIndicator.style.borderColor = profileColor(user);
    }
  }
  let projectFilter;
  let projectSocket;
  function updateProjectSocket() {
    let projectTiles = projectHolder.children;
    let projectIDs = [];
    for (let i = 0; i < projectTiles.length; i++) {
      projectIDs.push(projectTiles[i].getAttribute("projid"));
    }
    if (projectSocket) {
      projectSocket.edit({
        type: "project",
        id: userID,
        token: account.realtime,
        project: projectIDs
      });
    } else {
      projectSocket = socket.subscribe(
        {
          type: "project",
          id: userID,
          token: account.realtime,
          project: projectIDs
        },
        function (data) {
          console.log(data);
          let existingTile;
          switch (data.task) {
            case "join":
              appendActiveUser(data.project, data.user);
              break;
            case "leave":
              existingTile = projectHolder.querySelector(
                ".activeUser[userid='" + data.userID + "']"
              );
              if (existingTile) {
                if (
                  existingTile.closest(".projectTile").getAttribute("projid") ==
                  data.project
                ) {
                  existingTile.remove();
                }
              }
              break;
            case "set":
              existingTile = projectHolder.querySelector(
                ".projectTile[projid='" + data.project + "']"
              );
              if (existingTile && data.data.name) {
                existingTile.querySelector(".projectName").textContent =
                  data.data.name;
              }
            default:
          }
        }
      );
      subscribes.push(projectSocket);
    }
  }
  window.newRealtime = updateProjectSocket;

  let loadMoreB = pageHolder.querySelector(".projectLoadMore");
  let loadingProjects = false;
  async function loadProjectTiles(sort, before) {
    if (loadingProjects) {
      return;
    }
    loadingProjects = true;
    let endpoint = "project?sort=" + sort;
    if (before) {
      endpoint += "&before=" + before;
    }
    let [code, response] = await sendRequest(
      "GET",
      endpoint + "&ss=" + socket.secureID
    );
    loadingProjects = false;
    if (code == 200) {
      let data = JSON.parse(response);
      if (before == null) {
        projectHolder.innerHTML = "";
      }
      if (data.projects.length < 15) {
        loadMoreB.remove();
        if (data.projects.length < 1) {
          if (sort != "shared") {
            projectHolder.textContent = "No Projects, Create One Above!";
          } else {
            projectHolder.textContent = "No Shared Projects";
          }
        }
      } else {
        loadMoreB.style.display = "none";
      }
      for (let i = 0; i < data.projects.length; i++) {
        let proj = data.projects[i];
        let newTile = createElement(
          "projectTile buttonAnim hoverHighlight",
          "button",
          projectHolder
        );
        newTile.innerHTML = `<img class="projectTileImg" src="./images/blockify.svg">
        <div class="projectName"></div>
        <div class="projectCollab"></div>`;
        newTile.querySelector(".projectName").textContent = proj.name;
        newTile.setAttribute("projid", proj._id);
        newTile.setAttribute("time", proj.edited || proj.created);
      }
      for (let u = 0; u < data.users.length; u++) {
        appendActiveUser(data.users[u].editing, data.users[u]);
      }
      updateProjectSocket();
    }
  }
  loadMoreB.addEventListener("click", function () {
    if (projectHolder.lastElementChild) {
      loadProjectTiles(
        "all",
        projectHolder.lastElementChild.getAttribute("time")
      );
    }
  });
  loadProjectTiles("all");

  pageHolder
    .querySelector(".createProject")
    .addEventListener("click", async function () {
      let [code, response] = await sendRequest("POST", "project/new");
      if (code == 200) {
        modifyParams("project", response);
        setPage("editor");
      }
    });
  let filterButtonHolder = pageHolder.querySelector(".filterOptionsHolder");
  filterButtonHolder.addEventListener("click", async function (e) {
    if (e.target.closest(".filterButton")) {
      projectFilter = e.target.closest(".filterButton").getAttribute("filter");
      loadProjectTiles(projectFilter);
      for (let i = 0; i < filterButtonHolder.children.length; i++) {
        if (
          filterButtonHolder.children[i].getAttribute("filter") != projectFilter
        ) {
          filterButtonHolder.children[i].style.background = "var(--themeColor)";
        } else {
          filterButtonHolder.children[i].style.background =
            "var(--themeColorSec)";
        }
      }
    }
  });

  projectHolder.addEventListener("click", function (e) {
    if (e.target.closest(".projectTile")) {
      modifyParams(
        "project",
        e.target.closest(".projectTile").getAttribute("projid")
      );
      setPage("editor");
    }
  });

  pageHolder.querySelector(".signedInPicture").src = profilePic();
  pageHolder.querySelector(".signedInName").textContent = account.user;
};
