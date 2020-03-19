/**
 * @file WebGLMath Vec1Array class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/**
 * Array of 32-bit floats. May reflect an GLSL array-of-floats uniform variable.
 * <BR> Individual [Vec1]{@link Vec1} elements are available through the [at]{@link Vec1Array#at} method.
 * Methods are available for optimized bulk processing.
 * @extends VecArray
 */
class Vec1Array extends VecArray {
  /**
   * Creates an array of vectors.
   * @param {Number | Array} size - The number of Vec1 elements in the array, or an array of n elements. 
   */
  constructor(size){
    super();
    this.length = size.length || size;
    this.storage = new Float32Array(size);
  }

  /**
   * @method at
   * @memberof Vec1Array  
   * @description Returns a new Vec1 object that captures an element of the array. The new vector is a view on the original data, not a copy.
   * @param index {Number} - Index of the element.
   * @return {Vec1} new view on one of the array's elements
   */
  at(index){
    const result = Object.create(Vec1.prototype);
    result.storage = this.storage.subarray(index, index+1);
    result.length  = result.storage.length/4;
    return result;  
  }

  /**
   * @method subarray
   * @memberof Vec1Array  
   * @description Returns a new Vec1Array object that captures a subrange of the array. The new array is a view on the original data, not a copy.
   * @param {Number} [begin=0] - Element to begin at. The offset is inclusive. The whole array will be cloned if this value is not specified.
   * @param {Number} [end=length] - Element to end at. The offset is exclusive. If not specified, all elements from the one specified by begin to the end of the array are included in the new view.
   * @return {Vec1Array} new view on some of the array's elements
   */
  subarray(begin, end){
    const result = Object.create(Vec1Array.prototype);
    result.storage = this.storage.subarray(begin, end);
    return result;
  }

  /**
   * @method dotVec2s
   * @memberof Vec1Array
   * @description Computes the dot products of two two-element vectors in arrays, and stores the result.
   * @param {Vec2Array} b - Array of first operands.
   * @param {Vec2Array} c - Array of second operands.
   * @return this
   */
  dotVec2s(b, c) {
    let j=0;
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = b.storage[j] * c.storage[j++] + b.storage[j] * c.storage[j++];
    }
    return this;
  }

  /**
   * @method dotVec3s
   * @memberof Vec1Array
   * @description Computes the dot products of two three-element vectors in arrays, and stores the result.
   * @param {Vec3Array} b - Array of first operands.
   * @param {Vec3Array} c - Array of second operands.
   * @return this
   */
  dotVec3s(b, c) {
    let j=0;
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = b.storage[j] * c.storage[j++] + b.storage[j] * c.storage[j++] + b.storage[j] * c.storage[j++];
    }
    return this;
  }

  /**
   * @method dotVec4s
   * @memberof Vec1Array
   * @description Computes the dot products of two four-element vectors in arrays, and stores the result.
   * @param {Vec4Array} b - Array of first operands.
   * @param {Vec4Array} c - Array of second operands.
   * @return this
   */
  dotVec4s(b, c) {
    let j=0;
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = b.storage[j] * c.storage[j++] + b.storage[j] * c.storage[j++] + b.storage[j] * c.storage[j++] + b.storage[j] * c.storage[j++];
    }
    return this;
  }

  /**
   * @method dotAllVec2s
   * @memberof Vec1Array  
   * @description Computes the dot product of two-element vectors from the two argument arrays, in every possible combination, storing the result in this array.
   * First all elements of `b` are paired with the first element in `c`, then with the second element in `c`, and so on.
   * 'a.length == b.length * c.length' is assumed. 'b' or 'c' can be vectors instead of arrays,
   * in which case all elements of the other array are paired with the same value, once.
   * @param {Vec2Array | Vec2} b - Array of first operands, or a single term.
   * @param {Vec2Array | Vec2} c - Array of operands, or a single term.
   * @return {Vec1Array} this
   */
  dotAllVec2s(b, c) {
    let j=0;
    let k=0;
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = b.storage[j++] * c.storage[k] + b.storage[j++] * c.storage[k+1];
      if(j === c.storage.length) {
      	j = 0; k+=2;
      }
    }
    return this;
  }

  /**
   * @method dotAllVec3s
   * @memberof Vec1Array  
   * @description Computes the dot product of three-element vectors from the two argument arrays, in every possible combination, storing the result in this array.
   * First all elements of `b` are paired with the first element in `c`, then with the second element in `c`, and so on.
   * 'a.length == b.length * c.length' is assumed. 'b' or 'c' can be vectors instead of arrays,
   * in which case all elements of the other array are paired with the same value, once.
   * @param {Vec3Array | Vec3} b - Array of first operands, or a single term.
   * @param {Vec3Array | Vec3} c - Array of operands, or a single term.
   * @return {Vec1Array} this
   */
  dotAllVec3s(b, c) {
    let j=0;
    let k=0;
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = b.storage[j++] * c.storage[k] + b.storage[j++] * c.storage[k+1] + b.storage[j++] * c.storage[k+2];
      if(j === c.storage.length) {
        j = 0; k+=3;
      }
    }
    return this;
  }

  /**
   * @method dotAllVec4s
   * @memberof Vec1Array  
   * @description Computes the dot product of three-element vectors from the two argument arrays, in every possible combination, storing the result in this array.
   * First all elements of `b` are paired with the first element in `c`, then with the second element in `c`, and so on.
   * 'a.length == b.length * c.length' is assumed. 'b' or 'c' can be vectors instead of arrays,
   * in which case all elements of the other array are paired with the same value, once.
   * @param {Vec4Array | Vec3} b - Array of first operands, or a single term.
   * @param {Vec4Array | Vec3} c - Array of operands, or a single term.
   * @return {Vec1Array} this
   */
  dotAllVec4s(b, c) {
    let j=0;
    let k=0;
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = b.storage[j++] * c.storage[k] + b.storage[j++] * c.storage[k+1] + b.storage[j++] * c.storage[k+2] + b.storage[j++] * c.storage[k+3];
      if(j === c.storage.length) {
        j = 0; k+=4;
      }
    }
    return this;
  }

  /**
   * @method lengthOfVec2
   * @memberof Vec1.prototype
   * @description Computes the length of a two-element vector, and stores the result.
   * @param {Vec2} b - The vector whose length must be stored.
   * @return this
   */
  lengthOfVec2(b) {
    let j=0;
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = Math.sqrt(b.storage[j] * b.storage[j++] + b.storage[j] * b.storage[j++]);
    }
    return this;
  }

  /**
   * @method lengthOfVec3
   * @memberof Vec1.prototype
   * @description Computes the length of a three-element vector, and stores the result.
   * @param {Vec3} b - The vector whose length must be stored.
   * @return this
   */
  lengthOfVec3(b) {
    let j=0;
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = Math.sqrt(b.storage[j] * b.storage[j++] + b.storage[j] * b.storage[j++] + b.storage[j] * b.storage[j++]);
    }
    return this;
  }

  /**
   * @method lengthOfVec4
   * @memberof Vec1.prototype
   * @description Computes the length of a four-element vector, and stores the result.
   * @param {Vec4} b - The vector whose length must be stored.
   * @return this
   */
  lengthOfVec4(b) {
    let j=0;
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = Math.sqrt(b.storage[j] * b.storage[j++] + b.storage[j] * b.storage[j++] + b.storage[j] * b.storage[j++] + b.storage[j] * b.storage[j++]);
    }
    return this;
  }

  /**
   * @method commit
   * @memberof Vec1Array  
   * @description Sets the value of the vector array to a WebGL vec1 array uniform variable.
   * @param {WebGLRenderingContext} gl - rendering context
   * @param {WebGLUniformLocation} uniformLocation - location of the uniform variable in the currently used WebGL program
   */
  commit(gl, uniformLocation){
    gl.uniform1fv(uniformLocation, this.storage);
  }
}

// CommonJS style export to allow file to be required in server side node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Vec1Array;
}