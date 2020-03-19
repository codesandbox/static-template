"use strict";
/* exported Shader */
class Shader {
  constructor(gl, shaderType, sourceFileName) {
    this.sourceFileName = sourceFileName;
    const source = Shader.source[sourceFileName];
    if(source) {
      const marked = source.replace(/[^\x00-\x7F]/g, (match) => '\x1b[46m' + match + '\x1b[30m');
      if(marked !== source) {
        console.error('\x1b[46mNON-ASCII:\x1b[30m\n' + marked);
        throw new Error(`Shader source file ${sourceFileName} has non-ASCII characters.`);
      }    
      this.glShader = gl.createShader(shaderType);
      gl.shaderSource(this.glShader, source);
    } else {
      throw new Error(`Shader ${sourceFileName} not found. Check spelling, and whether the essl file is embedded into the html file.`);
    }
    gl.compileShader(this.glShader);
    if (!gl.getShaderParameter(this.glShader, gl.COMPILE_STATUS)) {
      console.error(
        `Error in shader ${sourceFileName}:
        ${gl.getShaderInfoLog(this.glShader).replace(/ERROR: 0/g, Shader.sourcePathURL + sourceFileName)}`
      );
      throw new Error(`Shader ${sourceFileName} had compilation errors.`);
    }
  }
}

Shader.sourcePathURL = document.currentScript.src.split('Shader.js')[0] + 'shaders/';
Shader.source = {};
