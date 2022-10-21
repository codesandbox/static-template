// 1. 用於 debug 的 隨機ID
const ID = Math.floor(Math.random() * 999999);
console.log(`shared-worker.js`, ID);

// 2. port 的 singleton 序列
const ports = new Set();

// 3. 連接事件的 handler
self.onconnect = (evt) => {
  const port = evt.ports[0];
  ports.add(port);
  console.log("CONN", ID, ports.size);

  // 4. listenr
  port.onmessage = (evt) => {
    console.log("MSG", ID, evt.data);

    for (let p of ports) {
      // 5. post message to each window.
      p.postMessage([ID, evt.data]);
    }
  };
};
