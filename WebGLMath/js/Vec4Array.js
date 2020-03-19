/**
 * @file WebGLMath Vec4Array class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/**
 * Array of four-element vectors of 32-bit floats. May reflect an GLSL array-of-vec4s uniform variable.
 * <BR> Individual [Vec4]{@link Vec4} elements are available through the [at]{@link Vec1Array#at} method.
 * Methods are available for optimized bulk processing.
 * @extends VecArray
 */
class Vec4Array extends VecArray {
  /**
   * Creates an array of vectors.
   * @param {Number | Array} size - The number of Vec4 elements in the array, or an array of 4n elements.
   */
  constructor(size){
    super();
    this.length = size.length/4 || size;
    this.storage = new Float32Array(size.length && size || size * 4);
  }

  /**
   * @method at
   * @memberof Vec4Array  
   * @description Returns a new Vec4 object that captures an element of the array. The new vector is a view on the original data, not a copy.
   * @param index {Number} - Index of the element.
   * @return {Vec4} new view on one of the array's elements
   */
  at(index){
    const result = Object.create(Vec4.prototype);
    result.storage = this.storage.subarray(index*4, index*4+4);
    return result;
  }


  /**
   * @method subarray
   * @memberof Vec4Array  
   * @description Returns a new Vec4Array object that captures a subrange of the array. The new array is a view on the original data, not a copy.
   * @param {Number} [begin=0] - Element to begin at. The offset is inclusive. The whole array will be cloned if this value is not specified.
   * @param {Number} [end=length] - Element to end at. The offset is exclusive. If not specified, all elements from the one specified by begin to the end of the array are included in the new view.
   * @return {Vec4Array} new view on some of the array's elements
   */
  subarray(begin, end){
    const result = Object.create(Vec4Array.prototype);
    result.storage = this.storage.subarray(begin*4, end*4);
    result.length  = result.storage.length/4;
    return result;
  }

  /**
   * @method normalize
   * @memberof Vec4Array  
   * @description Fills this vector with the unit length versions of vectors in the argument vector.
   * @param {Vec4Array} b - Array of vectors to normalize. Its length must be identical to this array's length. 
   * @return {Vec4Array} this
   */
  normalize(b) {
    for(let i=0; i<this.storage.length; i+=4) {
    	const l2 =
    	  b.storage[i  ] * b.storage[i  ] +
    	  b.storage[i+1] * b.storage[i+1] +
    	  b.storage[i+2] * b.storage[i+2] +
    	  b.storage[i+3] * b.storage[i+3] ;
    	  const linv = 1 / Math.sqrt(l2);
      this.storage[i  ] = b.storage[i  ] * linv;
      this.storage[i+1] = b.storage[i+1] * linv;
      this.storage[i+2] = b.storage[i+2] * linv;
      this.storage[i+3] = b.storage[i+3] * linv;
    }
  }

  /**
   * @method transform
   * @memberof Vec4Array
   * @description Fills this array with vectors from the argument array, transformed by the argument 4x4 matrix. The vectors are cosidered row vectors, multiplied from the right with a matrix laid out in column-major order.
   * @param {Vec4Array} v - Array of vectors to transform. Its length must be identical to this array's length. 
   * @return {Vec4Array} this
   */
  transform(v, m) {
    for(let i=0; i<this.storage.length; i+=4) {
      this.storage[i+0] =
         v.storage[i+0] * m.storage[ 0] +
         v.storage[i+1] * m.storage[ 1] +
         v.storage[i+2] * m.storage[ 2] +
         v.storage[i+3] * m.storage[ 3] ;
      this.storage[i+1] =
         v.storage[i+0] * m.storage[ 4] +
         v.storage[i+1] * m.storage[ 5] +
         v.storage[i+2] * m.storage[ 6] +
         v.storage[i+3] * m.storage[ 7] ;
      this.storage[i+2] =
         v.storage[i+0] * m.storage[ 8] +
         v.storage[i+1] * m.storage[ 9] +
         v.storage[i+2] * m.storage[10] +
         v.storage[i+3] * m.storage[11] ;
      this.storage[i+3] =
         v.storage[i+0] * m.storage[12] +
         v.storage[i+1] * m.storage[13] +
         v.storage[i+2] * m.storage[14] +
         v.storage[i+3] * m.storage[15] ;
    }
    return this;  
  }

  /**
   * @method commit
   * @memberof Vec4Array  
   * @description Sets the value of the vector array to a WebGL vec4 array uniform variable.
   * @param {WebGLRenderingContext} gl - rendering context
   * @param {WebGLUniformLocation} uniformLocation - location of the uniform variable in the currently used WebGL program
   */
  commit(gl, uniformLocation){
    gl.uniform4fv(uniformLocation, this.storage);
  }
}

// CommonJS style export to allow file to be required in server side node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Vec4Array;
}
