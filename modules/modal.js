modules.modal = function (title, content, buttons) {
  let modalID = Math.floor(Math.random() * 100000000);
  let modalHTML = `<div class="modalTitle" id="modalTitle${modalID}">${title}</div><div id="modalText${modalID}">${content}</div><div class="modalButtons" id="modalButtons${modalID}"></div>`;
  let backBlur = createElement("backBlur", "div", "body");
  backBlur.id = "backBlur" + modalID;
  let newModal = createElement("modal", "div", backBlur);
  newModal.innerHTML = modalHTML;
  let modalButtons = findI("modalButtons" + modalID);

  for (let i in buttons) {
    let thisButton = createElement("modalButton", "button", modalButtons);
    thisButton.textContent = buttons[i][0];
    thisButton.classList.add("modalButton");
    if (buttons[i][1] != null) {
      thisButton.style.background = buttons[i][1];
    }
    if (i == 0) {
      thisButton.focus();
    }
    thisButton.addEventListener("click", function () {
      if (typeof buttons[i][2] == "function") {
        buttons[i][2]();
      }
      if (buttons[i][3] != true) {
        backBlur.style.opacity = 1;
        newModal.style.transform = "scale(0.9)";
        setTimeout(function () {
          backBlur.remove();
        }, 199);
      }
    });
  }
  backBlur.style.opacity = 1;
  newModal.style.transform = "scale(1)";
  return modalID;
};

// 1 Button
// (await getModule("modal"))("Coming Soon", "We're working on implementing this feature. Thanks!", [["Close", "var(--themeColor)", function(a) { console.log(a); }]]);

// 2 Buttons
// (await getModule("modal"))("Coming Soon", "We're working on implementing this feature. Thanks!", [["Button 1", "var(--themeColor)", function(a) { console.log(a); }],["Button 2", "var(--themeColor)", function(a) { console.log(a); }]])
