var storage = window.localStorage;
function saveKeybinds() {
  var data = JSON.parse(storage.betterPhotop).keybinds;
  data = {
    home: findI("homesKeybindInput").value
      ? findI("homesKeybindInput").value
      : data.home,
    groups: findI("groupsKeybindInput").value
      ? findI("groupsKeybindInput").value
      : data.groups,
    profile: findI("profileKeybindInput").value
      ? findI("profileKeybindInput").value
      : data.profile
  };
  showPopUp("Keybinds Saved!", "Your keybinds have been saved!", [
    ["Close", "grey", null]
  ]);
  storage.betterPhotop = JSON.stringify({
    version: JSON.parse(storage.betterPhotop).version,
    keybinds: data,
    themeColor: JSON.parse(storage.betterPhotop).themeColor
  });
  findI("homesKeybindInput").value = "";
  findI("groupsKeybindInput").value = "";
  findI("profileKeybindInput").value = "";

  findI("homesKeybindInput").placeholder = `shift + ${
    JSON.parse(storage.betterPhotop).keybinds.home
  }`;
  findI("groupsKeybindInput").placeholder = `shift + ${
    JSON.parse(storage.betterPhotop).keybinds.groups
  }`;
  findI("profileKeybindInput").placeholder = `shift + ${
    JSON.parse(storage.betterPhotop).keybinds.profile
  }`;
}

function saveTheme() {
  setCSSVar(
    "--themeColor",
    findI("themeColorInput").value ? findI("themeColorInput").value : "#5AB7FA"
  );
  showPopUp("Theme Color Saved!", "Your theme color has been set and saved!", [
    ["Close", "grey", null]
  ]);
  storage.betterPhotop = JSON.stringify({
    version: JSON.parse(storage.betterPhotop).version,
    keybinds: JSON.parse(storage.betterPhotop).keybinds,
    themeColor: findI("themeColorInput").value
      ? findI("themeColorInput").value
      : JSON.parse(storage.betterPhotop).themeColor
  });
  findI("themeColorInput").placeholder = `${
    findI("themeColorInput").value ? findI("themeColorInput").value : "#5AB7FA"
  }`;
  findI("themeColorInput").value = "";
}

setTimeout(async function () {
  if (!storage.betterPhotop) {
    storage.betterPhotop = JSON.stringify({
      version: 1,
      keybinds: {
        home: "H",
        groups: "G",
        profile: "P"
      },
      themeColor: "#5AB7FA"
    });
  }
  setCSSVar(
    "--themeColor",
    JSON.parse(storage.betterPhotop).themeColor
      ? JSON.parse(storage.betterPhotop).themeColor
      : "#5AB7FA"
  );
  document.onkeyup = function (e) {
    const data = JSON.parse(storage.betterPhotop).keybinds;
    if (e.key == data.home) {
      setPage("home");
    }
    if (e.key == data.groups) {
      setPage("groups");
    }
    if (e.key == data.profile) {
      setPage("profile");
    }
  };
  const sideBarButton = await createElement(
    "sidebarButton",
    "button",
    findI("sidebarButtons")
  );
  sideBarButton.innerHTML =
    '<div class="sidebarButtonImg"><svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M126.5 149C138.374 149 148 139.374 148 127.5C148 115.626 138.374 106 126.5 106C114.626 106 105 115.626 105 127.5C105 139.374 114.626 149 126.5 149Z" fill="var(--themeColor)"></path><path d="M101 64L108.972 12.846C109.048 12.3591 109.467 12 109.96 12H144.04C144.533 12 144.952 12.3591 145.028 12.846L153 64" stroke="var(--themeColor)" stroke-width="20"></path><path d="M153 192L145.028 243.154C144.952 243.641 144.533 244 144.04 244H109.96C109.467 244 109.048 243.641 108.972 243.154L101 192" stroke="var(--themeColor)" stroke-width="20"></path><path d="M84.5744 182.517L36.2877 201.19C35.8281 201.367 35.3074 201.184 35.061 200.757L18.0211 171.243C17.7747 170.816 17.876 170.274 18.2598 169.964L58.5744 137.483" stroke="var(--themeColor)" stroke-width="20"></path><path d="M169.426 73.4833L217.712 54.8103C218.172 54.6326 218.693 54.8162 218.939 55.243L235.979 84.757C236.225 85.1838 236.124 85.7265 235.74 86.0357L195.426 118.517" stroke="var(--themeColor)" stroke-width="20"></path><path d="M195.426 137.483L235.74 169.964C236.124 170.274 236.225 170.816 235.979 171.243L218.939 200.757C218.693 201.184 218.172 201.367 217.712 201.19L169.426 182.517" stroke="var(--themeColor)" stroke-width="20"></path><path d="M58.5744 118.517L18.2598 86.0357C17.876 85.7265 17.7747 85.1838 18.0211 84.757L35.061 55.243C35.3074 54.8162 35.8281 54.6326 36.2877 54.8103L84.5744 73.4833" stroke="var(--themeColor)" stroke-width="20"></path><path d="M194 128C194 165.003 164.003 195 127 195C89.9969 195 60 165.003 60 128C60 90.9969 89.9969 61 127 61C164.003 61 194 90.9969 194 128Z" stroke="var(--themeColor)" stroke-width="20"></path></svg></div> BetterPhotop ';
  wireframes["betterphotop"] = `
    <div>
        <div class="settingsSection" id="keybindChange">
            <div class="settingsTitle">
                Home Keybind
            </div>
            <input class="settingsInput" id="homesKeybindInput" style="margin-bottom:8px;" placeholder="shift + ${
              JSON.parse(storage.betterPhotop).keybinds.home
            }">
            <div class="settingsTitle">
                Groups Keybind
            </div>
            <input class="settingsInput" id="groupsKeybindInput" style="margin-bottom:8px;" placeholder="shift + ${
              JSON.parse(storage.betterPhotop).keybinds.groups
            }">
            <div class="settingsTitle">
                Profile Keybind
            </div>
            <input class="settingsInput" id="profileKeybindInput" placeholder="shift + ${
              JSON.parse(storage.betterPhotop).keybinds.profile
            }">
            <div class="settingsSaveHolder"><button class="settingsSave" id="saveKeybinds" onclick="saveKeybinds()">Save</button></div>
        </div>
        <div class="settingsSection" id="themeColor">
            <div class="settingsTitle">
                Theme Color
            </div>
            <input class="settingsInput" id="themeColorInput" placeholder="${document.documentElement.style.getPropertyValue(
              "--themeColor"
            )}">
            <div class="settingsSaveHolder"><button class="settingsSave" id="saveThemeColor" onclick="saveTheme()">Save</button></div>
        </div>
        <div class="settingsSection" id="betterPhotopLinks">
            <a class="settingsLink" href="https://app.photop.live/?from=launchpage&user=6154f0d0a8d6d106c5b869b6#profile">Creator</a>
            <a class="settingsLink" href="https://app.photop.live/?from=launchpage&user=61998d154ef0457408274fd6#profile">Publisher</a>
        </div>
    </div>`;
  showPopUp("All ready!", "Theme and keybinds are ready!", [
    ["Close", "gray", null]
  ]);
}, 2500);
