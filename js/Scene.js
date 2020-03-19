"use strict";
/* exported Scene */
class Scene extends UniformProvider {
  constructor(gl) {
    super("scene");
    this.programs = [];

    this.vsTextured = new Shader(gl, gl.VERTEX_SHADER, "textured-vs.glsl");
    this.fsTextured = new Shader(gl, gl.FRAGMENT_SHADER, "textured-fs.glsl");
    this.programs.push(
      (this.texturedProgram = new TexturedProgram(
        gl,
        this.vsTextured,
        this.fsTextured
      ))
    );
    this.vsBackground = new Shader(gl, gl.VERTEX_SHADER, "background-vs.glsl");
    this.programs.push(
      (this.backgroundProgram = new TexturedProgram(
        gl,
        this.vsBackground,
        this.fsTextured
      ))
    );

    this.texturedQuadGeometry = new TexturedQuadGeometry(gl);

    this.gameObjects = [];
    this.backgroundMaterial = new Material(this.backgroundProgram);
    this.backgroundMaterial.colorTexture.set(
      new Texture2D(gl, "media/background.jpg")
    );

    this.backgroundMesh = new Mesh(
      this.backgroundMaterial,
      this.texturedQuadGeometry
    );
    this.background = new GameObject(this.backgroundMesh);
    this.background.update = function() {};
    this.gameObjects.push(this.background);

    this.raiderMaterial = new Material(this.texturedProgram);
    this.raiderMaterial.colorTexture.set(new Texture2D(gl, "media/raider.png"));
    this.raiderMesh = new Mesh(this.raiderMaterial, this.texturedQuadGeometry);
    this.avatar = new GameObject(this.raiderMesh);
    this.avatar.position.set(-13, -13);
    this.gameObjects.push(this.avatar);

    this.asteroidMaterial = new Material(this.texturedProgram);
    this.asteroidMaterial.colorTexture.set(
      new Texture2D(gl, "media/asteroid.png")
    );
    this.asteroidMesh = new Mesh(
      this.asteroidMaterial,
      this.texturedQuadGeometry
    );

    const genericMove = function(t, dt) {
      // PRACTICAL TODO
    };

    for (let i = 0; i < 64; i++) {
      const asteroid = new GameObject(this.asteroidMesh);
      asteroid.position.setRandom(new Vec3(-12, -12, 0), new Vec3(12, 12, 0));
      asteroid.velocity.setRandom(new Vec3(-2, -2, 0), new Vec3(2, 2, 0));
      asteroid.angularVelocity = Math.random(-2, 2);
      this.gameObjects.push(asteroid);
      asteroid.move = genericMove;
    }

    this.avatar.backDrag = 0.9;
    this.avatar.sideDrag = 0.5;
    this.avatar.angularDrag = 0.5;
    this.avatar.control = function(t, dt, keysPressed, colliders) {
      //PRACTICAL TODO
    };
    this.avatar.move = genericMove;

    this.timeAtFirstFrame = new Date().getTime();
    this.timeAtLastFrame = this.timeAtFirstFrame;

    this.camera = new OrthoCamera(...this.programs);
    this.addComponentsAndGatherUniforms(...this.programs);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  }

  resize(gl, canvas) {
    gl.viewport(0, 0, canvas.width, canvas.height);
    this.camera.setAspectRatio(canvas.width / canvas.height);
  }

  update(gl, keysPressed) {
    //jshint bitwise:false
    //jshint unused:false
    const timeAtThisFrame = new Date().getTime();
    const dt = (timeAtThisFrame - this.timeAtLastFrame) / 1000.0;
    const t = (timeAtThisFrame - this.timeAtFirstFrame) / 1000.0;
    this.timeAtLastFrame = timeAtThisFrame;

    this.camera.position = this.avatar.position;
    this.camera.update();

    // clear the screen
    gl.clearColor(0.3, 0.0, 0.3, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    for (const gameObject of this.gameObjects) {
      gameObject.control(t, dt, keysPressed, this.gameObjects);
    }

    for (const gameObject of this.gameObjects) {
      gameObject.move(t, dt);
    }

    for (const gameObject of this.gameObjects) {
      gameObject.update();
    }
    for (const gameObject of this.gameObjects) {
      gameObject.draw(this, this.camera);
    }
  }
}
