console.log("red.js");

// 1. 建立共享 worker
const worker = new SharedWorker("shared-worker.js");

// 2. handler for message
worker.port.onmessage = (evt) => {
  console.log("= Event =", evt.data);

  const msgContent = document.createTextNode(evt.data[1]),
    latestMsg = document.createElement("p");
  latestMsg.appendChild(msgContent);

  const history = document.getElementById("msgHistory"),
    currentHistoryAmount = history.childNodes.length;

  if (currentHistoryAmount >= 10) {
    history.removeChild(history.lastChild);
  }
  history.prepend(latestMsg);
};
