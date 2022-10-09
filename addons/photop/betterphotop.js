var storage = window.localStorage,
currentPost = '',
allowedNotifs = [],
version = 1.1
notifs = [];

const wireframeCode = `
    <div class="settingsHolder-account">
        <div class="settingsSection" id="keybindChange">
            <div class="settingsTitle">
                Home Keybind
            </div>
            <input class="settingsInput" id="homesKeybindInput" style="margin-bottom:8px;" placeholder="shift + ${JSON.parse(storage.betterPhotop).keybinds.home}">
            <div class="settingsTitle">
                Groups Keybind
            </div>
            <input class="settingsInput" id="groupsKeybindInput" style="margin-bottom:8px;" placeholder="shift + ${JSON.parse(storage.betterPhotop).keybinds.groups}">
            <div class="settingsTitle">
                Profile Keybind
            </div>
            <input class="settingsInput" id="profileKeybindInput" placeholder="shift + ${JSON.parse(storage.betterPhotop).keybinds.profile}">
            <div class="settingsSaveHolder"><button class="settingsSave" id="saveKeybinds" onclick="saveKeybinds()">Save</button></div>
        </div>
        <div class="settingsSection" id="themeColorAndOther">
            <div class="settingsTitle">
                Theme Color
            </div>
            <input class="settingsInput" id="themeColorInput" placeholder="${document.documentElement.style.getPropertyValue('--themeColor')}">
            <div class="settingsSaveHolder"><button class="settingsSave" id="saveThemeColor" onclick="saveTheme()">Save</button></div>
            <div class="settingsTitle">
                Notifications
            </div>
            <div class="settingsSaveHolder">
                <button class="settingsSave" id="enableNotifs" onclick="notif()" style="margin-bottom:3px;">
                    Toggle
                </button>
            </div>
            <input class="settingsInput" id="newNotifInput" placeholder="Postid (/Post_ID and ID are allowed)">
            <div class="settingsSaveHolder"><button class="settingsSave" id="saveThemeColor" onclick="newNotif()">Add</button></div>
        </div>
        <div class="settingsSection" id="credits">
            <a class="settingsLink" href="https://app.photop.live/?from=launchpage&user=6154f0d0a8d6d106c5b869b6#profile">Creator</a>
            <a class="settingsLink" href="https://app.photop.live/?from=launchpage&user=61998d154ef0457408274fd6#profile">Publisher</a>
            <a class="settingsLink" href="https://app.photop.live/?from=launchpage&user=621cf9c163790d5ac3c2f938#profile">Contributor</a>
        </div>
    </div>`

function getRandomInt(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
function saveKeybinds() {
    var data = JSON.parse(storage.betterPhotop).keybinds
    data = {
        home: findI('homesKeybindInput').value ? findI('homesKeybindInput').value.toUpperCase():data.home,
        groups: findI('groupsKeybindInput').value ? findI('groupsKeybindInput').value.toUpperCase():data.groups,
        profile: findI('profileKeybindInput').value ? findI('profileKeybindInput').value.toUpperCase():data.profile
    }
    showPopUp('Keybinds Saved!', 'Your keybinds have been saved!', [
        [
            'Close',
            'grey',
            null
        ]
    ])
    storage.betterPhotop = JSON.stringify({
        version: JSON.parse(storage.betterPhotop).version,
        keybinds: data,
        themeColor: JSON.parse(storage.betterPhotop).themeColor
    })
    findI('homesKeybindInput').value = ''
    findI('groupsKeybindInput').value = ''
    findI('profileKeybindInput').value = ''

    findI('homesKeybindInput').placeholder = `shift + ${JSON.parse(storage.betterPhotop).keybinds.home}`
    findI('groupsKeybindInput').placeholder = `shift + ${JSON.parse(storage.betterPhotop).keybinds.groups}`
    findI('profileKeybindInput').placeholder = `shift + ${JSON.parse(storage.betterPhotop).keybinds.profile}`
    wireframes['betterphotop'] = wireframeCode
}

function saveTheme() {
    setCSSVar('--themeColor', findI('themeColorInput').value ? findI('themeColorInput').value:'#5AB7FA')
    showPopUp('Theme Color Saved!', 'Your theme color has been set and saved!', [
        [
            'Close',
            'grey',
            null
        ]
    ])
    storage.betterPhotop = JSON.stringify({
        version: JSON.parse(storage.betterPhotop).version,
        keybinds: JSON.parse(storage.betterPhotop).keybinds,
        themeColor: findI('themeColorInput').value ? findI('themeColorInput').value:JSON.parse(storage.betterPhotop).themeColor,
        notifications: JSON.parse(storage.betterPhotop).notifications
    })
    findI('themeColorInput').placeholder = `${findI('themeColorInput').value ? findI('themeColorInput').value:'#5AB7FA'}`
    findI('themeColorInput').value = ''
    wireframes['betterphotop'] = wireframeCode
}
function notif() {
    var data = JSON.parse(storage.betterPhotop).notifications
    switch (data) {
        case false:
            data = true
            showPopUp('Notification Settings Saved', 'You will now get notifications on the notification bar whenever someone chats on one of your new posts!', [
                [
                    'Close',
                    'grey',
                    null
                ]
            ])
            break;
        case true:
            data = false
            showPopUp('Notification Settings Saved', 'You will now not get any notifications on the notification bar. Only on chats.', [
                [
                    'Close',
                    'grey',
                    null
                ]
            ])
            break;
    }
    storage.betterPhotop = JSON.stringify({
        version: JSON.parse(storage.betterPhotop).version,
        keybinds: JSON.parse(storage.betterPhotop).keybinds,
        themeColor: JSON.parse(storage.betterPhotop).themeColor,
        notifications: data
    })
}