const cubes = new Zdog.Illustration({
  element: ".cubes",
  resize: "fullscreen",
  dragRotate: true
});

new Zdog.Box({
  addTo: cubes,
  width: 100,
  height: 100,
  depth: 100,
  stroke: false,
  leftFace: "#da0",
  rightFace: "#e62",
  topFace: "#E62",
  bottomFace: "#636"
});
const cubeTwo = new Zdog.Box({
  addTo: cubes,
  width: 50,
  height: 50,
  depth: 50,
  stroke: false,
  leftFace: "#da0",
  rightFace: "#e62",
  topFace: "#ed0",
  bottomFace: "#636",
  frontFace: "#ed0",
  translate: { x: 100 }
});

cubeTwo.copy({
  translate: { x: -100 }
});

new Zdog.Ellipse({
  addTo: cubes,
  diameter: 80,
  translate: { z: 100, y: 100, x: 100 },
  stroke: 20,
  color: "#636"
});

new Zdog.Rect({
  addTo: cubes,
  width: 80,
  height: 80,
  translate: { z: -100, y: -100, x: -100 },
  stroke: 12,
  color: "#E62",
  fill: true
});

const animateCubes = () => {
  cubes.rotate.y += 0.01;
  // cubes.rotate.x += 0.01;
  cubes.updateRenderGraph();
  requestAnimationFrame(animateCubes);
};
animateCubes();
cubes.updateRenderGraph();
