Shader.source[document.currentScript.src.split('js/shaders/')[1]] = `#version 300 es
  in vec4 vertexPosition;
  in vec4 vertexTexCoord;

  uniform struct {
  	mat4 viewProjMatrixInverse;
  	} camera;
  out vec4 texCoord;

  void main(void) {
    gl_Position = vertexPosition;
    texCoord = (vertexPosition * camera.viewProjMatrixInverse);
    texCoord.xy *= 0.02;
  }
`;