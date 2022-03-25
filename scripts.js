var canvas = document.getElementById("matter-window");

$("#matter-window").one("inview", function (event, isInView) {
  if (isInView) {
    // module aliases
    var w = window.innerWidth;
    var h = window.innerHeight;
    var canvasWidth = canvas.clientWidth;
    var canvasHeight = canvas.clientHeight;

    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Body = Matter.Body,
      Composite = Matter.Composite,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse;

    // create an engine
    var engine = Engine.create();
    //engine.gravity.y = 1;

    // create a renderer
    var render = Render.create({
      element: canvas,
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: "transparent"
      }
    });

    var circA = Bodies.circle(window.innerWidth * 0.3, 10, 50, {
      render: {
        fillStyle: "#e65300"
      },
      //density: 0.1,
      restitution: 0.9
      //frictionAir: 0.001
    });
    var wall1 = Bodies.rectangle(
      -500,
      canvasHeight / 2,
      1000,
      canvasHeight * 2,
      {
        isStatic: true,
        render: { opacity: 0 }
      }
    );
    var wall2 = Bodies.rectangle(
      canvasWidth + 500,
      canvasHeight / 2,
      1000,
      canvasHeight * 2,
      { isStatic: true, render: { opacity: 0 } }
    );
    //window.wall2 = wall2;
    var ground = Bodies.rectangle(
      canvasWidth / 2,
      canvasHeight + 50,
      canvasWidth,
      100,
      {
        isStatic: true,
        render: { opacity: 0 }
      }
    );
    var ceil = Bodies.rectangle(canvasWidth / 2, -50, canvasWidth, 100, {
      isStatic: true,
      render: { opacity: 0 }
    });

    window.addEventListener("resize", (e) => {
      canvasWidth = canvas.clientWidth;
      canvasHeight = canvas.clientHeight;

      Matter.Body.setPosition(
        wall2,
        Matter.Vector.create(canvasWidth + 500, canvasHeight / 2)
      );
      Matter.Body.setPosition(
        ground,
        Matter.Vector.create(canvasWidth / 2, canvasHeight + 50)
      );
    });

    // add all of the bodies to the world
    Composite.add(engine.world, [circA, wall1, wall2, ceil, ground]);

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    //Make interactive
    var mouseConstraint = Matter.MouseConstraint.create(engine, {
      //Create Constraint
      element: canvas,
      constraint: {
        render: {
          visible: false
        },
        stiffness: 0.8
      }
    });
    Matter.World.add(engine.world, mouseConstraint);

    // Events.on(mouseConstraint, "mousedown", function (event) {
    //   let ball = mouseConstraint.body;

    //   Body.applyForce(
    //     ball,
    //     { x: ball.position.x, y: ball.position.y },
    //     { x: 500, y: -500 }
    //   );
    //   console.log("force applied");
    // });

    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );
  }
});
