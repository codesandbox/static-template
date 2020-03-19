Shader.source[document.currentScript.src.split('js/shaders/')[1]] = `#version 300 es
  in vec4 vertexPosition;
  in vec4 vertexTexCoord;
  out vec4 texCoord; // passed to FS
  out vec4 modelPosition;

  uniform struct {
  	mat4 modelMatrix;
  } gameObject;

  uniform struct {
    mat4 viewProjMatrix;
  } camera;

  void main(void) {
  	texCoord = vertexTexCoord;
    modelPosition = vertexPosition;
    gl_Position = vertexPosition * gameObject.modelMatrix
     * camera.viewProjMatrix;
  }
`;