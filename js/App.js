"use strict";
/* exported App */
class App {
  constructor(canvas, overlay) {
    this.canvas = canvas;
    this.overlay = overlay;

    // obtain WebGL context
    this.gl = canvas.getContext("webgl2", { alpha: false });
    if (this.gl === null) {
      throw new Error("Browser does not support WebGL2");
    }

    this.keysPressed = {};

    // serves as a registry for textures or models being loaded
    this.gl.pendingResources = {};
    // create a simple scene
    this.scene = new Scene(this.gl);

    this.resize();
  }

  // match WebGL rendering resolution and viewport to the canvas size
  resize() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.scene.resize(this.gl, this.canvas);
  }

  registerEventHandlers() {
    document.onkeydown = event => {
      //jshint unused:false
      this.keysPressed[keyNames[event.keyCode]] = true;
    };
    document.onkeyup = event => {
      //jshint unused:false
      this.keysPressed[keyNames[event.keyCode]] = false;
    };
    this.canvas.onmousedown = event => {
      //jshint unused:false
    };
    this.canvas.onmousemove = event => {
      //jshint unused:false
      event.stopPropagation();
    };
    this.canvas.onmouseout = event => {
      //jshint unused:false
    };
    this.canvas.onmouseup = event => {
      //jshint unused:false
    };
    window.addEventListener("resize", () => this.resize());
    window.requestAnimationFrame(() => this.update());
  }

  // animation frame update
  update() {
    const pendingResourceNames = Object.keys(this.gl.pendingResources);
    if (pendingResourceNames.length === 0) {
      // animate and draw scene
      this.scene.update(this.gl, this.keysPressed);
      this.overlay.innerHTML = "Ready.";
    } else {
      this.overlay.innerHTML = `<font color="red">Loading: ${pendingResourceNames}</font>`;
    }

    // refresh
    window.requestAnimationFrame(() => this.update());
  }
}

// entry point from HTML
window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas");
  const overlay = document.getElementById("overlay");
  overlay.innerHTML = "WebGL";

  const app = new App(canvas, overlay);
  app.registerEventHandlers();
});
