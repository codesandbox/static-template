const { createApp, h } = Vue;
const app = createApp({
  template: `<h1>Hello World!</h1>`,
  render: () => {
    return h("h1", {}, "Hello Vue3!");
  }
}).mount("#app");
