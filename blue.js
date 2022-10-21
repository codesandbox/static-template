console.log("blue.js");

// 1. 建立共享 worker
const worker = new SharedWorker("shared-worker.js");

// 2. handler for message
worker.port.onmessage = (evt) => {
  console.log("= Event =", evt.data);
};

const postMessage = (msgObj) => {
  worker.port.postMessage(JSON.stringify(msgObj));
};
