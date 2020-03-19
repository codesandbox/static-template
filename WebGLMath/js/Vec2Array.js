/**
 * @file WebGLMath Vec2Array class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/**
 * Array of two-element vectors of 32-bit floats. May reflect an GLSL array-of-vec2s uniform variable.
 * <BR> Individual [Vec2]{@link Vec2} elements are available through the [at]{@link Vec2Array#at} method.
 * Methods are available for optimized bulk processing.
 * @extends VecArray
 */
class Vec2Array extends VecArray{
  /**
   * Creates an array of vectors.
   * @param {Number | Array} size - The number of Vec2 elements in the array, or an array of 2n elements.
   */  
  constructor(size){
    super();
    this.length = size.length/2 || size;
    this.storage = new Float32Array(size.length && size || size * 2);
  }

  /**
   * @method at
   * @memberof Vec2Array  
   * @description Returns a new Vec2 object that captures an element of the array. The new vector is a view on the original data, not a copy.
   * @param index {Number} - Index of the element.
   * @return {Vec2} new view on one of the array's elements
   */
  at(index){
    const result = Object.create(Vec2.prototype);
    result.storage = this.storage.subarray(index*2, index*2+2);
    return result;  
  }

  /**
   * @method subarray
   * @memberof Vec2Array  
   * @description Returns a new Vec2Array object that captures a subrange of the array. The new array is a view on the original data, not a copy.
   * @param {Number} [begin=0] - Element to begin at. The offset is inclusive. The whole array will be cloned if this value is not specified.
   * @param {Number} [end=length] - Element to end at. The offset is exclusive. If not specified, all elements from the one specified by begin to the end of the array are included in the new view.
   * @return {Vec2Array} new view on some of the array's elements
   */
  subarray(begin, end){
    const result = Object.create(Vec2Array.prototype);
    result.storage = this.storage.subarray(begin*2, end*2);
    result.length  = result.storage.length/4;
    return result;
  }

  /**
   * @method normalize
   * @memberof Vec2Array  
   * @description Fills this vector with the unit length versions of vectors in the argument vector.
   * @param {Vec2Array} b - Array of vectors to normalize. Its length must be identical to this array's length. 
   * @return {Vec2Array} this
   */
  normalize(b) {
    for(let i=0; i<this.storage.length; i+=2) {
    	const l2 =
    	  b.storage[i  ] * b.storage[i  ] +
    	  b.storage[i+1] * b.storage[i+1] ;
      const linv = 1 / Math.sqrt(l2);
      this.storage[i  ] = b.storage[i  ] * linv;
      this.storage[i+1] = b.storage[i+1] * linv;
    }
  }

  /**
   * @method xy01mul
   * @memberof Vec2Array
   * @description Fills this array with vectors from the argument array, augmented by a 1 to get a homogeneous position vector, transformed by the argument 4x4 matrix. The vectors are cosidered row vectors, multiplied from the right with a matrix laid out in column-major order.
   * @param {Vec2Array} v - Array of vectors to transform. Its length must be identical to this array's length. 
   * @return {Vec2Array} this
   */
  xy01mul(v, m) {
    for(let i=0; i<this.storage.length; i+=2) {
      this.storage[i+0] =
         v.storage[i+0] * m.storage[ 0] +
         v.storage[i+1] * m.storage[ 1] +
                          m.storage[ 3] ;
      this.storage[i+1] =
         v.storage[i+0] * m.storage[ 4] +
         v.storage[i+1] * m.storage[ 5] +
                          m.storage[ 7] ;
    }
    return this;  
  }

  /**
   * @method xy00mul
   * @memberof Vec2Array
   * @description Fills this array with vectors from the argument array, augmented by a 0 to get a homogeneous direction vector, transformed by the argument 4x4 matrix. The vectors are cosidered row vectors, multiplied from the right with a matrix laid out in column-major order.
   * @param {Vec2Array} v - Array of vectors to transform. Its length must be identical to this array's length. 
   * @return {Vec2Array} this
   */
  xy00mul(v, m) {
    for(let i=0; i<this.storage.length; i+=2) {
      this.storage[i+0] =
         v.storage[i+0] * m.storage[ 0] +
         v.storage[i+1] * m.storage[ 1] ;
      this.storage[i+1] =
         v.storage[i+0] * m.storage[ 4] +
         v.storage[i+1] * m.storage[ 5] ;
    }
    return this;  
  }

  /**
   * @method cossin
   * @memberof Vec2Array
   * @description Fills this array with (cos alpha, sin alpha) vectors, where alpha comes from the argument array.
   * @param {Vec1Array} alphas - Array of angles.
   * @return {Vec2Array} this
   */
  cossin(alphas) {
    for(let i=0; i<this.storage.length; i++) {
      this.storage[2*i+0] = Math.cos(alphas.storage[i]);
      this.storage[2*i+1] = Math.sin(alphas.storage[i]);
    }
    return this;  
  }

  /**
   * @method commit
   * @memberof Vec2Array  
   * @description Sets the value of the vector array to a WebGL vec2 array uniform variable.
   * @param {WebGLRenderingContext} gl - rendering context
   * @param {WebGLUniformLocation} uniformLocation - location of the uniform variable in the currently used WebGL program
   */
  commit(gl, uniformLocation){
    gl.uniform2fv(uniformLocation, this.storage);
  }
}

// CommonJS style export to allow file to be required in server side node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Vec2Array;
}
