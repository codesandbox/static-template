/* rellenar tabla de puntos */
let pisos = 10;

function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  var tabla = document.querySelector("#tabla-puntos");

  for (var i = 0; i < pisos; i++) {
    var tr = document.createElement("tr");
    var td = tr.appendChild(document.createElement("td"));
    td.className = "punto";
    tabla.appendChild(tr);
  }
});

/*eslint-disable*/
function positionAmmoBody(body, p) {
  const transform = new Ammo.btTransform();

  body.getMotionState().getWorldTransform(transform);

  const positionVec = new Ammo.btVector3(p.x, p.y, p.z);

  transform.setOrigin(positionVec);
  body.getMotionState().setWorldTransform(transform);
  body.setCenterOfMassTransform(transform);
  body.activate();

  // Clean up
  Ammo.destroy(transform);
  Ammo.destroy(positionVec);
}

function createBox(scene, pos) {
  const box = document.createElement("a-entity");
  box.setAttribute("gltf-model", "#piso");
  box.setAttribute("ammo-body", "type: dynamic; emitCollisionEvents: true;");
  box.setAttribute("position", `${pos.x} ${pos.y + 1.6} ${pos.z}`);
  box.setAttribute("scale", "0.1 0.1 0.1");
  box.setAttribute(
    "ammo-shape",
    "type: box; fit: manual; halfExtents:0.1 0.1 0.1"
  );

  box.setAttribute("id", "myBox");
  box.setAttribute("ammo-restitution", ".5");
  box.setAttribute("collision-detection", {});
  box.setAttribute("mass", "1000");

  scene.appendChild(box);

  box.addEventListener("body-loaded", () => {
    positionAmmoBody(box.body, box.object3D.position);
    const velocity = new Ammo.btVector3(0, 0, 0);
    box.body.setLinearVelocity(velocity);
    Ammo.destroy(velocity);
  });

  return box;
}

AFRAME.registerComponent("collision-detection", {
  init() {
    console.log("init");
    this.el.addEventListener("collidestart", function (e) {
      console.log(e);
    });
  }
});

AFRAME.registerSystem("hit-test-system", {
  schema: {
    reticle: { type: "selector" },
    target: { type: "selector" }
  },
  init: function () {
    this.cubes = [];
    this.cubes.push(document.querySelector("a-entity"));

    this.isPlaneInPlace = false;
    this.reticle = this.data.reticle;
    this.target = this.data.target;
    this.el.sceneEl.addEventListener("enter-vr", (e) => {
      const session = this.el.sceneEl.renderer.xr.getSession();
      this.el.sceneEl.renderer.xr.addEventListener(
        "sessionstart",
        async (ev) => {
          this.viewerSpace = await session.requestReferenceSpace("viewer");
          this.refSpace = this.el.sceneEl.renderer.xr.getReferenceSpace();
          this.xrHitTestSource = await session.requestHitTestSource({
            space: this.viewerSpace
          });
        }
      );
      session.addEventListener("select", (e) => {
        const pos = this.reticle.getAttribute("position");
        if (this.reticle.getAttribute("visible") && !this.isPlaneInPlace) {
          this.isPlaneInPlace = true;
          this.target.setAttribute("visible", "true");
          this.target.setAttribute("position", pos);
          //positionAmmoBody(this.target.body, pos);
        }

        if (this.isPlaneInPlace) {
          this.cubes.forEach((cube) =>
            cube.components["ammo-body"].syncToPhysics()
          );
          this.cubes.push(createBox(this.el.sceneEl, pos));
        }
      });
    });
  },

  tick: function (t) {
    this.reticle.setAttribute("visible", "false");
    const frame = this.el.sceneEl.frame;
    if (!frame) return;

    const viewerPose = this.el.sceneEl.renderer.xr.getCameraPose();
    if (!this.isPlaneInPlace && this.xrHitTestSource && viewerPose) {
      const hitTestResults = frame.getHitTestResults(this.xrHitTestSource);
      if (hitTestResults.length > 0) {
        const hitTestPose = hitTestResults[0].getPose(this.refSpace);
        ["x", "y", "z"].forEach((axis) => {
          this.reticle.object3D.position[axis] =
            hitTestPose.transform.position[axis];
        });
        this.reticle.object3D.quaternion.copy(
          hitTestPose.transform.orientation
        );
        this.reticle.setAttribute("visible", "true");
      }
    }
  }
});

AFRAME.registerComponent("ammo-restitution", {
  schema: { default: 0.5 },
  init() {
    const el = this.el;
    const restitution = this.data;
    el.addEventListener("body-loaded", function () {
      el.body.setRestitution(restitution);
    });
  }
});
