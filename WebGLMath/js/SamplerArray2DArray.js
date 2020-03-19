/**
 * @file WebGLMath SamplerArray2DArray class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/* exported SamplerArray2DArray */

/**
 * @class SamplerArray2DArray
 * @classdesc Array of Texture Array samplers. May reflect a GLSL array-of-sampler2DArrays uniform variable.
 * <BR> Individual [Sampler2DArray]{@link Sampler2DArray} elements are available through the index operator [].
 */
class SamplerArray2DArray{
  /**
   * Creates object.
   * @param {Number} size - The number of Sampler2DArray elements in the array.
   */
  constructor(size){
    this.length = size;
    this.storage = new Int32Array(size);
    for(let i=0; i<size; i++){
      const element = Object.create(Sampler2DArray.prototype);
      element.glTexture = null;
      element.storage = this.storage.subarray(i, (i+1));
      Object.defineProperty(this, i, {value: element} );
    }
  }

  /**
   * @method at
   * @memberof SamplerArray2DArray  
   * @description Returns a Sampler2D object that captures an element of the array. The sampler is a view on the original data, not a copy.
   * @param index {Number} - Index of the element.
   * @return {SamplerCube} view on one of the array's elements
   */
  at(index){
    return this[index];
  }

  /**
   * @method set
   * @memberof SamplerArray2DArray  
   * @description Assigns textures.
   * @param {Object[] | WebGLTexture[]} textureArray - An array of WebGL textures, or of objects with the `glTexture` property that stores a WebGL texture.
   */
  set(textureArray){
    for(let i=0; i<this.size; i++){
      this[i].set(textureArray[ Math.min(i, textureArray.length) ]);
    }
  }

  /**
   * @method commit
   * @memberof SamplerArray2DArray  
   * @description Specifies, to WebGL, the texture unit indices of all samplers in the array, and binds textures of the array elements.
   * @param {WebGLRenderingContext} gl - rendering context
   * @param {WebGLUniformLocation} uniformLocation - location of the uniform variable in the currently used WebGL program
   * @param {Number} baseTextureUnit - The texture unit index of the first element. Other elements are assigned to texture units contiguously.
   */
  commit(gl, uniformLocation, baseTextureUnit){
    for(let i=0; i<this.length; i++) {
      this.storage[i] = baseTextureUnit + i;
      gl.activeTexture(gl.TEXTURE0 + baseTextureUnit + i);
      gl.bindTexture(gl.TEXTURE_2D_ARRAY, this[i].glTexture);
    }
    gl.uniform1iv(uniformLocation, this.storage);
  }
}
