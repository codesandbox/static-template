wireframes.files = `
  <div class="homeContentHolder">
    <div class="homeContent">
      <div class="homeGeneral">
        <img class="appLogo" src="./images/blockifylogo.svg"></img>
        <div class="signedInAccount">
          <img class="signedInPicture">
          <div class="signedInNameHolder"><div class="signedInName">Loading...</div></div>
        </div>
      </div>
      <div class="homeTemplate">

      </div>
      <div class="homeProjects">
        <div class="projectFilter">
          <div class="sortOption" style="background: var(--themeColorSec); border-radius: 20px; color: #fff">All Projects</div>
          <div class="sortOption">Your Projects</div>
          <div class="sortOption">Shared Projects</div>
          <input class="sortSearch" placeholder="Search"></input>
          <div class="sortFilter"></div>
        </div>
        <div class="projectsHolder">
          <div class="projectTile">
            <div class="projectTileImageHolder">
              <img class="projectTileImage" src="./images/demo.png">
              <div class="projectTileImageNub"></div>
            </div>
            <div class="projectTileInfoHolder">
              <div class="projectTileTitle">My Project</div>
              <div class="projectTileOwner">Robot_Engine</div>
              <div class="projectTileInfoNub"></div>
            </div>
          </div>
          <div class="projectTile">
            <div class="projectTileImageHolder">
              <img class="projectTileImage" src="./images/demo.png">
              <div class="projectTileImageNub"></div>
            </div>
            <div class="projectTileInfoHolder">
              <div class="projectTileTitle">My Project</div>
              <div class="projectTileOwner">Robot_Engine</div>
              <div class="projectTileInfoNub"></div>
            </div>
          </div>
          <div class="projectTile">
            <div class="projectTileImageHolder">
              <img class="projectTileImage" src="./images/demo.png">
              <div class="projectTileImageNub"></div>
            </div>
            <div class="projectTileInfoHolder">
              <div class="projectTileTitle">My Project</div>
              <div class="projectTileOwner">Robot_Engine</div>
              <div class="projectTileInfoNub"></div>
            </div>
          </div>
          <div class="projectTile">
            <div class="projectTileImageHolder">
              <img class="projectTileImage" src="./images/demo.png">
              <div class="projectTileImageNub"></div>
            </div>
            <div class="projectTileInfoHolder">
              <div class="projectTileTitle">My Project</div>
              <div class="projectTileOwner">Robot_Engine</div>
              <div class="projectTileInfoNub"></div>
            </div>
          </div>
          <div class="projectTile">
            <div class="projectTileImageHolder">
              <img class="projectTileImage" src="./images/demo.png">
              <div class="projectTileImageNub"></div>
            </div>
            <div class="projectTileInfoHolder">
              <div class="projectTileTitle">My Project</div>
              <div class="projectTileOwner">Robot_Engine</div>
              <div class="projectTileInfoNub"></div>
            </div>
          </div>
          <div class="projectTile">
            <div class="projectTileImageHolder">
              <img class="projectTileImage" src="./images/demo.png">
              <div class="projectTileImageNub"></div>
            </div>
            <div class="projectTileInfoHolder">
              <div class="projectTileTitle">My Project</div>
              <div class="projectTileOwner">Robot_Engine</div>
              <div class="projectTileInfoNub"></div>
            </div>
          </div>
          <div class="projectTile">
            <div class="projectTileImageHolder">
              <img class="projectTileImage" src="./images/demo.png">
              <div class="projectTileImageNub"></div>
            </div>
            <div class="projectTileInfoHolder">
              <div class="projectTileTitle">My Project</div>
              <div class="projectTileOwner">Robot_Engine</div>
              <div class="projectTileInfoNub"></div>
            </div>
          </div>
          <div class="projectTile">
            <div class="projectTileImageHolder">
              <img class="projectTileImage" src="./images/demo.png">
              <div class="projectTileImageNub"></div>
            </div>
            <div class="projectTileInfoHolder">
              <div class="projectTileTitle">My Project</div>
              <div class="projectTileOwner">Robot_Engine</div>
              <div class="projectTileInfoNub"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

pages.files = async function () {
  if (userID == null) {
    promptlogin();
  }

  pageHolder.querySelector(".signedInPicture").src = profilePic();
  pageHolder.querySelector(".signedInName").textContent = account.user;
};
