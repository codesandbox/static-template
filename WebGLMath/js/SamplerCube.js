/**
 * @file WebGLMath {@link SamplerCube} class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/* exported SamplerCube */
/**
 * Stores a WebGL texture unit index, and a WebGL texture to be bound to it. May reflect an ESSL samplerCube uniform variable.
 */
class SamplerCube{
  /**
   * Creates object.
   */
  constructor(){
    this.glTexture = null;
    this.storage = new Int32Array(1);
  }

  /**
   * @method set
   * @memberof SamplerCube  
   * @description Assigns a texture.
   * @param {Object | WebGLTexture} texture - A WebGL texture, or any object with the `glTexture` property that stores a WebGL texture.
   */
  set(texture){
    this.glTexture = texture && texture.glTexture || texture || null;
  }

  /**
   * @method commit
   * @memberof SamplerCube  
   * @description Sets the value of the texture unit index to the WebGL samplerCube uniform variable, and binds the texture to the corresponding texture unit.
   * @param {WebGLRenderingContext} gl - rendering context
   * @param {WebGLUniformLocation} uniformLocation - location of the uniform variable in the currently used WebGL program
   * @param {Number} textureUnit - The texture unit index. This should be different for every texture used in the same program, and less than the maximum texture unit count, which is at least 8 in WebGL.
   */
  commit(gl, uniformLocation, textureUnit){
    this.storage[0] = textureUnit;
    if(this.glTexture) {
      gl.uniform1iv(uniformLocation, this.storage);
      gl.activeTexture(gl.TEXTURE0 + textureUnit);
      gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.glTexture);
    } else {
    	throw new Error("No texture bound to uniform SamplerCube.");
    }
  }
}