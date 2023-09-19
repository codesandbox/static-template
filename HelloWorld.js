var vertexShaderSource;
var fragmentShaderSource;

function main() {
  var canvas = document.querySelector("#c");
  var gl = canvas.getContext("webgl2");
  if (!gl) {
    // no webgl2 for you!
    return;
  }

  var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  var fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );

  var program = createProgram(gl, vertexShader, fragmentShader);

  var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

  var resolutionUniformLocation = gl.getUniformLocation(
    program,
    "u_resolution"
  );

  var positionBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  var positions = [10, 20, 80, 20, 10, 30, 10, 30, 80, 20, 80, 30];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  gl.enableVertexAttribArray(positionAttributeLocation);

  var size = 2;
  var type = gl.FLOAT;
  var normalize = false;
  var stride = 0;
  var offset = 0;
  gl.vertexAttribPointer(
    positionAttributeLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);

  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

  gl.bindVertexArray(vao);

  var primitiveType = gl.TRIANGLES;
  offset = 0;
  var count = 6;
  gl.drawArrays(primitiveType, offset, count);

  return;
}

function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

fetch("helloWorld.vs")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text();
  })
  .then((vsSource) => {
    vertexShaderSource = vsSource;

    fetch("helloWorld.fs")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.text();
      })
      .then((fsSource) => {
        fragmentShaderSource = fsSource;
        main();
      });
  });
