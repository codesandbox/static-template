/**
 * @file WebGLMath Vec1 class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/** A 32-bit float wrapped as a single-element vector. May reflect an GLSL float uniform variable. */
class Vec1{
  /**
   * Creates a vector. Without parameters, initializes the vector to 0.
   * @param {Vec1 | Number} u - Initial value.
   */  
  constructor(u){
    /**
     * @name Vec1#storage
     * @description 1-element typed array for coordinate storage.
     * @type Float32Array
     */  
    this.storage = new Float32Array([
      u && u.x || Number(u).valueOf() || 0
    ]);
  }

  /**
   * @method clone
   * @memberof Vec1 
   * @description Creates a copy.
   * @return {Vec1} A new instance with identical contents.
   */
  clone() {
    const result = Object.create(Vec1.prototype);
    result.storage = new Float32Array(this.storage);
    return result;
  }

  /**
   * @method set
   * @memberof Vec1  
   * @description Simulates operator <code>=</code>. Sets the coordinates from another vector, or number values. Without parameters, sets (0, 0, 0, 1).
   * @param {Vec1 | Object | Number} [u=0] - Any object (property x), or a numerical value.
   * @return {Vec1} this
   */
  set(u) {
    this.storage[0] = u && u.x || Number(u).valueOf() || 0;
    return this;  
  }

  /**
   * @method random
   * @memberof Vec1
   * @static 
   * @description Return a new {@link Vec1} with random values that to lie between two values, elementwise.
   * @param {Vec1 | Object | Number} [minVal=0] - Specifies the lower end of the random range. If a scalar is given, it applies to all channels.
   * @param {Vec1 | Object | Number} [maxVal=1] - Specifies the upper end of the random range. If a scalar is given, it applies to all channels.
   * @return {Vec1} this
   */
  static random(minVal, maxVal) {
    const result = Object.create(Vec1.prototype);
    result.storage = new Float32Array(1);
    const mina = minVal && minVal.x || Number(minVal).valueOf() || 0;
    const maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);
    result.storage[0] = Math.random() * (maxa - mina) + mina;
    return result;
  }

  /**
   * @method setRandom
   * @memberof Vec1  
   * @description Fill the vector with random values that to lie between two further values, elementwise.
   * @param {Vec1 | Object | Number} [minVal=0] - Specifies the lower end of the random range. If a scalar is given, it applies to all channels.
   * @param {Vec1 | Object | Number} [maxVal=1] - Specifies the upper end of the random range. If a scalar is given, it applies to all channels.
   * @return {Vec1} this
   */
  setRandom(minVal, maxVal) {
    const mina = minVal && minVal.x || Number(minVal).valueOf() || 0;
    const maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);
    this.storage[0] = Math.random() * (maxa - mina) + mina;
    return this;  
  }

  /**
   * @method clamp
   * @memberof Vec1
   * @description Constrains the value of this vector to lie between two further values, elementwise, overwriting the contents with the result.
   * @param {Vec1 | Object | Number} [minVal=0] - Specifies the lower end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @param {Vec1 | Object | Number} [maxVal=1] - Specifies the upper end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @return {Vec1} this
   */
  clamp(minVal, maxVal) {
    const mina = minVal && minVal.x || Number(minVal).valueOf(0) || 0;
    if(this.storage[0] < mina){
      this.storage[0] = mina;
    }
    const maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);
    if(this.storage[0] > maxa){
      this.storage[0] = maxa;
    }
    return this;
  }

  /**
   * @method setClamped
   * @memberof Vec1  
   * @description Fast. Constrains a value to lie between two further values, elementwise, storing the result in this vector.
   * @param {Vec1} b - The value to constrain.
   * @param {Vec1 | Object | Number} [minVal=0] - Specifies the lower end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @param {Vec1 | Object | Number} [maxVal=1] - Specifies the upper end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @return {Vec1} this
   */
  setClamped(b, minVal, maxVal) {
    const mina = minVal && minVal.x || Number(minVal).valueOf(0) || 0;
    const maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);
    if(b.storage[0] < mina){
      this.storage[0] = mina;
    } else if(b.storage[0] > maxa){
      this.storage[0] = maxa;
    } else {
      this.storage[0] = b.storage[0];
    }
    return this;
  }

  /**
   * @method add
   * @memberof Vec1  
   * @description Simulates operator <code>+=</code>. Adds another vector to this vector, overwriting the contents with the result.
   * @param {Vec1 | Object | Number} [u=0] - Any object (property x), or a numerical value.
   * @return {Vec1} this
   */
  add(u) {
    this.storage[0] += u && u.x || Number(u).valueOf() || 0;
    return this;  
  }

  /**
   * @method addScaled
   * @memberof Vec1  
   * @description Simulates <code>+= dt *</code>. Adds another vector, scaled by `dt`, to this vector, overwriting the contents with the result.
   * @param {Number} dt - Scaling factor. 
   * @param {Vec1 | Object | Number} [u=0] - Any object (property x), or a numerical value.
   * @return {Vec1} this
   */
  addScaled(dt, u) {
    this.storage[0] += dt * (u && u.x || Number(u).valueOf() || 0);
    return this;  
  }

  /**
   * @method plus
   * @memberof Vec1  
   * @description Simulates operator <code>+</code>. Adds this vector and the parameter vector, and returns the result in a new instance.
   * @param {Vec1 | Object | Number} [u=0] - Any object (property x), or a numerical value.
   * @return {Vec1} the sum of the two vectors
   */
  plus(u) {
    const result = Object.create(Vec1.prototype);
    result.storage = new Float32Array(1);
    result.storage[0] = this.storage[0] + (u && u.x || Number(u).valueOf() || 0);
    return result;
  }

  /**
   * @method setSum
   * @memberof Vec1  
   * @description Fast. Adds the two argument vectors, storing the result in this vector.
   * @param {Vec1} b - Term 1.
   * @param {Vec1} c - Term 2. 
   * @return {Vec1} this
   */
  setSum(b, c) {
    this.storage[0] = b.storage[0] + c.storage[0];
    return this;  
  }

  /**
   * @method sub
   * @memberof Vec1  
   * @description Simulates operator <code>-=</code>. Subtracts another vector from this vector, overwriting the contents with the result.
   * @param {Vec1 | Object | Number} [u=0] - Any object (property x), or a numerical value.
   * @return {Vec1} this
   */
  sub(u) {
    this.storage[0] -= u && u.x || Number(u).valueOf() || 0;
    return this;  
  }

  /**
   * @method minus
   * @memberof Vec1  
   * @description Simulates operator <code>-</code>. Subtracts the parameter vector from this vector, and returns the result in a new instance.
   * @param {Vec1 | Object | Number} [u=0] - Any object (property x), or a numerical value.
   * @return {Vec1} the difference of the two vectors
   */
  minus(u) {
    const result = Object.create(Vec1.prototype);
    result.storage = new Float32Array(1);
    result.storage[0] = this.storage[0] - (u && u.x || Number(u).valueOf() || 0);
    return result;
  }

  /**
   * @method setDifference
   * @memberof Vec1  
   * @description Fast. Subtracts the second argument vector from the first one, storing the result in this vector.
   * @param {Vec1} b - Minuend.
   * @param {Vec1} c - Subtrahend. 
   * @return {Vec1} this
   */
  setDifference(b, c) {
    this.storage[0] = b.storage[0] - c.storage[0];
    return this;  
  }

  /**
   * @method mul
   * @memberof Vec1  
   * @description Simulates operator <code>*=</code>. Multiplies this vector with another vector elementwise, or scalar, overwriting the contents with the result.
   * @param {Vec1 | Object | Number} [u=1] - Any object (property x), or a numerical value.
   * @return {Vec1} this
   */
  mul(u) {
    this.storage[0] *= dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    return this;  
  }

  /**
   * @method times
   * @memberof Vec1
   * @description Simulates operator <code>*</code>. Multiplies this vector with another vector elementwise, or scalar, and returns the result in a new instance.
   * @param {Vec1 | Object | Number} [u=1] - Any object (property x), or a numerical value.
   * @return {Vec1} the elementwise product of the two vectors
   */
  times(u) {
    const result = Object.create(Vec1.prototype);
    result.storage = new Float32Array(1);
    result.storage[0] = this.storage[0] * dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    return result;
  }

  /**
   * @method setProduct
   * @memberof Vec1  
   * @description Fast. Multiplies, elementwise, the two argument vectors, storing the result in this vector.
   * @param {Vec1} b - Factor 1.
   * @param {Vec1} c - Factor 2. 
   * @return {Vec1} this
   */
  setProduct(b, c) {
    this.storage[0] = b.storage[0] * c.storage[0];
    return this;  
  }

  /**
   * @method div
   * @memberof Vec1  
   * @description Simulates operator <code>/=</code>. Divides, elementwise, this vector with another vector, or scalar, overwriting the contents with the result.
   * @param {Vec1 | Object | Number} [u=1] - Any object (property x), or a numerical value.
   * @return {Vec1} this
   */
  div(u) {
    this.storage[0] /= dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    return this;  
  }

  /**
   * @method over
   * @memberof Vec1
   * @description Simulates operator <code>/</code>. Divides, elementwise, this vector with another vector, or scalar, and returns the result in a new instance.
   * @param {Vec1 | Object | Number} [u=1] - Any object (property x), or a numerical value.
   * @return {Vec1} the elementwise product of the two vectors
   */
  over(u) {
    const result = Object.create(Vec1.prototype);
    result.storage = new Float32Array(1);
    result.storage[0] = this.storage[0] / dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    return result;
  }

  /**
   * @method setQuotient
   * @memberof Vec1  
   * @description Fast. Divides, elementwise, the two argument vectors, storing the result in this vector.
   * @param {Vec1} b - Dividend.
   * @param {Vec1} c - Divisor. 
   * @return {Vec1} this
   */
  setQuotient(b, c) {
    this.storage[0] = b.storage[0] / c.storage[0];
    return this;  
  }

  /**
   * @method setScaled
   * @memberof Vec1  
   * @description Fast. Scales the vector by a scalar.
   * @param {Vec1} a - Vector to scale.
   * @param {Number} s - Scale factor. 
   * @return {Vec1} this
   */
  setScaled(a, s){
    this.storage[0] = a.x * s;
    return this;
  }

  /**
   * @method setScaledByInverse
   * @memberof Vec1  
   * @description Fast. Scales the vector by the reciprocal of scalar.
   * @param {Vec1} a - Vector to scale.
   * @param {Number} s - Scale factor inverse.
   * @return {Vec1} this
   */
  setScaledByInverse(a, s){
    this.storage[0] = a.x / s;
    return this;  
  }

  /**
   * @method dot
   * @memberof Vec1  
   * @description Computes the dot product with another vector.
   * @param {Vec1 | Object | Number} [u=0] - Any object (property x), or a numerical value.
   * @return {Number}
   */
  dot(u) {
    return this.storage[0] * (u && u.x || Number(u).valueOf() || 0); 
  }

  /**
   * @method setDotProductOfVec2s
   * @memberof Vec1
   * @description Computes the dot product of two two-element vectors, and stores the result.
   * @param {Vec3} b - Operand 1.
   * @param {Vec3} c - Operand 2.
   * @return this
   */
  setDotProductOfVec2s(b, c) {
    this.storage[0] = b.storage[0] * c.storage[0] + b.storage[1] * c.storage[1];
    return this;
  }

  /**
   * @method setDotProductOfVec3s
   * @memberof Vec1
   * @description Computes the dot product of two three-element vectors, and stores the result.
   * @param {Vec3} b - Operand 1.
   * @param {Vec3} c - Operand 2.
   * @return this
   */
  setDotProductOfVec3s(b, c) {
    this.storage[0] = b.storage[0] * c.storage[0] + b.storage[1] * c.storage[1] + b.storage[2] * c.storage[2];
    return this;
  }

  /**
   * @method setDotProductOfVec4s
   * @memberof Vec1
   * @description Computes the dot product of two three-element vectors, and stores the result.
   * @param {Vec3} b - Operand 1.
   * @param {Vec3} c - Operand 2.
   * @return this
   */
  setDotProductOfVec4s(b, c) {
    this.storage[0] = b.storage[0] * c.storage[0] + b.storage[1] * c.storage[1] + b.storage[2] * c.storage[2] + b.storage[3] * c.storage[3];
    return this;
  }

  /**
   * @method setLengthOfVec2
   * @memberof Vec1
   * @description Computes the length of a two-element vector, and stores the result.
   * @param {Vec2} b - The vector whose length must be stored.
   * @return this
   */
  setLengthOfVec2(b) {
    this.storage[0] = Math.sqrt(b.storage[0] * b.storage[0] + b.storage[1] * b.storage[1]);
    return this;
  }

  /**
   * @method setLengthOfVec3
   * @memberof Vec1
   * @description Computes the length of a three-element vector, and stores the result.
   * @param {Vec3} b - The vector whose length must be stored.
   * @return this
   */
  setLengthOfVec3(b) {
    this.storage[0] = Math.sqrt(b.storage[0] * b.storage[0] + b.storage[1] * b.storage[1] + b.storage[2] * b.storage[2]);
    return this;
  }

  /**
   * @method setLengthOfVec4
   * @memberof Vec1
   * @description Computes the length of a four-element vector, and stores the result.
   * @param {Vec4} b - The vector whose length must be stored.
   * @return this
   */
  setLengthOfVec4(b) {
    this.storage[0] = Math.sqrt(b.storage[0] * b.storage[0] + b.storage[1] * b.storage[1] + b.storage[2] * b.storage[2] + b.storage[3] * b.storage[3]);
    return this;
  }

  /**
   * @method commit
   * @memberof Vec1  
   * @description Sets the value of the vector to a WebGL float uniform variable.
   * @param {WebGLRenderingContext} gl - rendering context
   * @param {WebGLUniformLocation} uniformLocation - location of the uniform variable in the currently used WebGL program
   */
  commit(gl, uniformLocation){
    gl.uniform1fv(uniformLocation, this.storage);
  }
}

/**
 * @name Vec1#x
 * @description Alias for storage[0];
 * @type Number
 */
Object.defineProperty(Vec1.prototype, 'x', {
  get: function() { return this.storage[0]; },
  set: function(value) { this.storage[0] = value; }
});


// CommonJS style export to allow file to be required in server side node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Vec1;
}
