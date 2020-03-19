/**
 * @file WebGLMath Vec3Array class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/**
 * Array of three-element vectors of 32-bit floats. May reflect an GLSL array-of-vec3s uniform variable.
 * <BR> Individual [Vec3]{@link Vec3} elements are available through the [at]{@link Vec3Array#at} method.
 * Methods are available for optimized bulk processing.
 * @extends VecArray
 */
class Vec3Array extends VecArray {
  /**
   * Creates an array of vectors.
   * @param {Number} size - The number of Vec3 elements in the array, or an array of 3n elements.
   */
  constructor(size){
    super();
    this.length = size.length/3 || size;
    this.storage = new Float32Array(size.length && size || size * 3);
  }

  /**
   * @method at
   * @memberof Vec3Array  
   * @description Returns a new Vec3 object that captures an element of the array. The new vector is a view on the original data, not a copy.
   * @param index {Number} - Index of the element.
   * @return {Vec3} new view on one of the array's elements
   */
  at(index){
    const result = Object.create(Vec3.prototype);
    result.storage = this.storage.subarray(index*3, index*3+3);
    return result;  
  }

  /**
   * @method subarray
   * @memberof Vec3Array  
   * @description Returns a new Vec3Array object that captures a subrange of the array. The new array is a view on the original data, not a copy.
   * @param {Number} [begin=0] - Element to begin at. The offset is inclusive. The whole array will be cloned if this value is not specified.
   * @param {Number} [end=length] - Element to end at. The offset is exclusive. If not specified, all elements from the one specified by begin to the end of the array are included in the new view.
   * @return {Vec3Array} new view on some of the array's elements
   */
  subarray(begin, end){
    const result = Object.create(Vec3Array.prototype);
    result.storage = this.storage.subarray(begin*3, end*3);
    result.length  = result.storage.length/4;  
    return result;
  }

  /**
   * @method mulWithVec1s
   * @memberof Vec3Array  
   * @description Multipies, elementwise, vectors from the two argument arrays, repeating individual values of the second one to produce the same number of elements as in the output array. For scaling with a single scalar factor, see [scale]{@link VecArray#scale}.
   * @param {Vec3Array} b - Array of factors. Its length must be identical to this array's length.
   * @param {Vec1Array} c - Array of factors. Its length must be identical to this array's length.
   * @return {Vec3Array} this
   */
  mulWithVec1s(b, c) {
    const stretchFactor = this.storage.length / c.storage.length; 
    let i=0;
    for(let j=0; j<c.storage.length; j++) {	
      for(let k=0; k<stretchFactor; k++, i++ ) {
    	  this.storage[i] = b.storage[i] * c.storage[j];
      }
    }
    return this;  
  }

  subarray(begin, end){
    const result = Object.create(Vec3Array.prototype);
    result.storage = this.storage.subarray(begin*3, end*3);
    return result;
  }

  /**
   * @method normalize
   * @memberof Vec3Array  
   * @description Fills this vector with the unit length versions of vectors in the argument vector.
   * @param {Vec3Array} b - Array of vectors to normalize. Its length must be identical to this array's length. 
   * @return {Vec3Array} this
   */
  normalize(b) {
    for(let i=0; i<this.storage.length; i+=3) {
    	const l2 =
    	  b.storage[i  ] * b.storage[i  ] +
    	  b.storage[i+1] * b.storage[i+1] +
    	  b.storage[i+2] * b.storage[i+2] ;
      const linv = 1 / Math.sqrt(l2);
      this.storage[i  ] = b.storage[i  ] * linv;
      this.storage[i+1] = b.storage[i+1] * linv;
      this.storage[i+2] = b.storage[i+2] * linv;
    }
  }

  /**
   * @method cross
   * @memberof Vec3Array
   * @description Computes the cross products of the vectors from the argument array, storing the results in this array.
   * @param {Vec3Array} b - Array of left operands. Its length must be identical to this array's length.
   * @param {Vec3Array} c - Array of right operands. Its length must be identical to this array's length.
   * @return {Vec3Array} the cross products
   */
  cross(b, c) {
    let j=0;
    for(let i=0; i<this.storage.length;) {
      const b0 = b.storage[j];
      const c0 = c.storage[j++];    
      const b1 = b.storage[j];
      const c1 = c.storage[j++];    
      const b2 = b.storage[j];
      const c2 = c.storage[j++];
      this.storage[i++] = b1 * c2 - b2 * c1;
      this.storage[i++] = b2 * c0 - b0 * c2;
      this.storage[i++] = b0 * c1 - b1 * c0;
    }
    return this;
  }

  /**
   * @method xyz1mul
   * @memberof Vec3Array
   * @description Fills this array with vectors from the argument array, augmented by a 1 to get a homogeneous position vector, transformed by the argument 4x4 matrix. The vectors are cosidered row vectors, multiplied from the right with a matrix laid out in column-major order.
   * @param {Vec3Array} v - Array of vectors to transform. Its length must be identical to this array's length. 
   * @return {Vec3Array} this
   */
  xyz1mul(v, m) {
    for(let i=0; i<this.storage.length; i+=3) {
      this.storage[i+0] =
         v.storage[i+0] * m.storage[ 0] +
         v.storage[i+1] * m.storage[ 1] +
         v.storage[i+2] * m.storage[ 2] +
                          m.storage[ 3] ;
      this.storage[i+1] =
         v.storage[i+0] * m.storage[ 4] +
         v.storage[i+1] * m.storage[ 5] +
         v.storage[i+2] * m.storage[ 6] +
                          m.storage[ 7] ;
      this.storage[i+2] =
         v.storage[i+0] * m.storage[ 8] +
         v.storage[i+1] * m.storage[ 9] +
         v.storage[i+2] * m.storage[10] +
                          m.storage[11] ;
    }
    return this;  
  }

  /**
   * @method xyz0mul
   * @memberof Vec3Array
   * @description Fills this array with vectors from the argument array, augmented by a 0 to get a homogeneous direction vector, transformed by the argument 4x4 matrix. The vectors are cosidered row vectors, multiplied from the right with a matrix laid out in column-major order.
   * @param {Vec3Array} v - Array of vectors to transform. Its length must be identical to this array's length. 
   * @return {Vec3Array} this
   */
  xyz0mul(v, m) {
    for(let i=0; i<this.storage.length; i+=3) {
      this.storage[i+0] =
         v.storage[i+0] * m.storage[ 0] +
         v.storage[i+1] * m.storage[ 1] +
         v.storage[i+2] * m.storage[ 2] ;
      this.storage[i+1] =
         v.storage[i+0] * m.storage[ 4] +
         v.storage[i+1] * m.storage[ 5] +
         v.storage[i+2] * m.storage[ 6] ;
      this.storage[i+2] =
         v.storage[i+0] * m.storage[ 8] +
         v.storage[i+1] * m.storage[ 9] +
         v.storage[i+2] * m.storage[10] ;
    }
    return this;  
  }

  /**
   * @method commit
   * @memberof Vec3Array  
   * @description Sets the value of the vector array to a WebGL vec3 array uniform variable.
   * @param {WebGLRenderingContext} gl - rendering context
   * @param {WebGLUniformLocation} uniformLocation - location of the uniform variable in the currently used WebGL program
   */
  commit(gl, uniformLocation){
    gl.uniform3fv(uniformLocation, this.storage);
  }
}

// CommonJS style export to allow file to be required in server side node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Vec3Array;
}
