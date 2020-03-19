/**
 * @file WebGLMath VecArray class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/**
 * A base class for all vector arrays, gathering methods that share the same implementation in all array subclasses.
 */
class VecArray{
  /**
   * Creates empty object.
   */
  constructor(){
  }

  /**
   * @method set
   * @memberof VecArray  
   * @description Sets the value of the vector array from another WebGLMath vector, vector array, matrix, or matrix array object, or an array of numbers.
   * @param {number[] | Object } data - Input data.
   */
  set(data){
    this.storage.set(data.storage || data);
  }

  /**
   * @method add
   * @memberof VecArray  
   * @description Adds vectors from the two argument arrays, storing the result in this array.
   * @param {VecArray} b - Array of first terms. Its length must be identical to this array's length.
   * @param {VecArray} c - Array of second terms. Its length must be identical to this array's length.
   * @return {VecArray} this
   */
  add(b, c) {
    for(let i=0; i<this.storage.length; i++) {
    	this.storage[i] = b.storage[i] + c.storage[i];
    }
    return this;  
  }

  /**
   * @method addScaled
   * @memberof VecArray  
   * @description Adds vectors from the two argument arrays, scaling the second arguments, storing the result in this array.
   * @param {VecArray} b - Array of first terms. Its length must be identical to this array's length.
   * @param {VecArray} c - Array of second terms. Its length must be identical to this array's length.
   * @param {Number} dt - Single scalar scaling factor.
   * @return {VecArray} this
   */
  addScaled(b, c, dt) {
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = b.storage[i] + c.storage[i] * dt;
    }
    return this;  
  }

  /**
   * @method sub
   * @memberof VecArray  
   * @description Subtracts vectors from the two argument arrays, storing the result in this array.
   * @param {VecArray} b - Array of minuends. Its length must be identical to this array's length.
   * @param {VecArray} c - Array of subtrahends. Its length must be identical to this array's length.
   * @return {VecArray} this
   */
  sub(b, c) {
    for(let i=0; i<this.storage.length; i++) {
    	this.storage[i] = b.storage[i] - c.storage[i];
    }
    return this;  
  }

  /**
   * @method mul
   * @memberof VecArray  
   * @description Multipies, elementwise, vectors from the two argument arrays, storing the result in this array.
   * @param {VecArray} b - Array of factors. Its length must be identical to this array's length.
   * @param {VecArray} c - Array of factors. Its length must be identical to this array's length.
   * @return {VecArray} this
   */
  mul(b, c) {
    for(let i=0; i<this.storage.length; i++) {
   	  this.storage[i] = b.storage[i] * c.storage[i];
    }
    return this;  
  }


  /**
   * @method mulWithVec1s
   * @memberof VecArray  
   * @description Multipies, elementwise, vectors from the two argument arrays, repeating individual values of the second one to produce the same number of elements as in the output array. For scaling with a single scalar factor, see [scale]{@link VecArray#scale}.
   * @param {VecArray} b - Array of factors. Its length must be identical to this array's length.
   * @param {Vec1Array} c - Array of factors. Its length must be identical to this array's length.
   * @return {VecArray} this
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

  /**
   * @method div
   * @memberof VecArray  
   * @description Divides, elementwise, vectors from the two argument arrays, storing the result in this array.
   * @param {VecArray} b - Array of dividends.
   * @param {VecArray} c - Array of divisors.
   * @return {VecArray} this
   */
  div(b, c) {
    for(let i=0; i<this.storage.length; i++) {
    	this.storage[i] = b.storage[i] / c.storage[i];
    }
    return this;  
  }

  /**
   * @method divWithVec1s
   * @memberof VecArray  
   * @description Divides, elementwise, vectors from the two argument arrays, repeating individual values of the second one to produce the same number of values as in the output array.
   * @param {VecArray} b - Array of dividends. Its length must be identical to this array's length.
   * @param {Vec1Array} c - Array of divisors. Its length must be identical to this array's length.
   * @return {VecArray} this
   */
  divWithVec1s(b, c) {
    const stretchFactor = this.storage.length / c.storage.length; 
    let i=0;
    for(let j=0; j<c.storage.length; j++) { 
      for(let k=0; k<stretchFactor; k++, i++ ) {
        this.storage[i] = b.storage[i] / c.storage[j];
      }
    }
    return this;  
  }

  /**
   * @method addAll
   * @memberof VecArray  
   * @description Adds a vector to all argument array elements, storing the result in this array.
   * @param {VecArray} b - Array of first operands. Same length as this.
   * @param {Vec} c - Second operand.
   * @return {VecArray} this
   */
  addAll(b, c) {
    for(let i=0; i<this.storage.length;) {
      for(let k=0; k<c.storage.length; i++, k++) {
        this.storage[i] = b.storage[i] + c.storage[k];
      }
    }
    return this;  
  }

  /**
   * @method subAll
   * @memberof VecArray  
   * @description Subtracts a vector from all argument array elements, storing the result in this array.
   * @param {VecArray} b - Array of first operands. Same length as this.
   * @param {Vec} c - Second operand.
   * @return {VecArray} this
   */
  subAll(b, c) {
    for(let i=0; i<this.storage.length;) {
      for(let k=0; k<c.storage.length; i++, k++) {
        this.storage[i] = b.storage[i] - c.storage[k];
      }
    }
    return this;  
  }

  /**
   * @method mulAll
   * @memberof VecArray  
   * @description Multiplies (elementwise) a vector with all argument array elements, storing the result in this array.
   * @param {VecArray} b - Array of first operands. Same length as this.
   * @param {Vec} c - Second operand.
   * @return {VecArray} this
   */
  mulAll(b, c) {
    for(let i=0; i<this.storage.length;) {
      for(let k=0; k<c.storage.length; i++, k++) {
        this.storage[i] = b.storage[i] * c.storage[k];
      }
    }
    return this;  
  }

  /**
   * @method divAll
   * @memberof VecArray  
   * @description Divides (elementwise) all argument array elements with a vector, storing the result in this array.
   * @param {VecArray} b - Array of first operands. Same length as this.
   * @param {Vec} c - Second operand.
   * @return {VecArray} this
   */
  divAll(b, c) {
    for(let i=0; i<this.storage.length;) {
      for(let k=0; k<c.storage.length; i++, k++) {
        this.storage[i] = b.storage[i] / c.storage[k];
      }
    }
    return this;  
  }

  /**
   * @method scale
   * @memberof VecArray  
   * @description Multipies vectors from an array with a scalar, storing the result in this array. For scaling with factors stored in an array, see [mulAll]{@link VecArray#mulAll}.
   * @param {VecArray} b - Array of vectors to scale. Its length must be identical to this array's length.
   * @param {VecArray} c - Scale factor.
   * @return {VecArray} this
   */
  scale(b, s) {
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = b.storage[i] * s;
    }
    return this;  
  }

  /**
   * @method exp
   * @memberof VecArray  
   * @description Exponentiates vectors from an array with a scalar, storing the result in this array. For scaling with factors stored in an array, see [mulAll]{@link VecArray#mulAll}.
   * @param {VecArray} b - Array of vectors to scale. Its length must be identical to this array's length.
   * @param {VecArray} c - Exponent.
   * @return {VecArray} this
   */
  exp(b, s) {
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = Math.pow(b.storage[i], s);
    }
    return this;  
  }

  /**
   * @method random
   * @memberof VecArray  
   * @description Fills the array with random values between 0 and 1.
   * @return {VecArray} this
   */
  random() {
    for(let i=0; i<this.storage.length; i++) {
      this.storage[i] = Math.random();
    }
    return this;  
  }

  /**
   * @method clamp
   * @memberof VecArray  
   * @description Constrains values in the array to the [0,1) interval.
   * @return {VecArray} this
   */
  clamp() {
    for(let i=0; i<this.storage.length; i++) {
      if(this.storage[i] < 0) {
        this.storage[i] = 0;
      }
      if(this.storage[i] > 1) {
        this.storage[i] = 1;
      }
    }
    return this;  
  }
}

// CommonJS style export to allow file to be required in server side node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = VecArray;
}
