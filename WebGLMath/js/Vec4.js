/**
 * @file WebGLMath {@link Vec4} class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/**
 * Four-element vector of 32-bit floats. May reflect an GLSL vec4 uniform variable.
 * Low-performance convenience methods reproduce operator behaviour.
 * <table><tr><th>operator</th><th>method</th></tr>
 * <tr><td>+=</td><td>[add]{@link Vec4#add}</td></tr>
 * <tr><td>-=</td><td>[sub]{@link Vec4#sub}</td></tr>
 * <tr><td>*=</td><td>[mul]{@link Vec4#mul}</td></tr>
 * <tr><td>/=</td><td>[div]{@link Vec4#div}</td></tr> 
 * <tr><td>+</td><td>[plus]{@link Vec4#plus}</td></tr>
 * <tr><td>-</td><td>[minus]{@link Vec4#minus}</td></tr>
 * <tr><td>*</td><td>[times]{@link Vec4#times}</td></tr>
 * <tr><td>/</td><td>[over]{@link Vec4#over}</td></tr>
 * <tr><td>&middot;</td><td>[dot]{@link Vec4#dot}</td></tr> 
 * </table>
 * <BR> <code>a = b + c</code> can be computed as <code>var a = b.plus(c)</code>, when <code>a</code> does not yet exist, and performance does not matter. It is not required that <code>c</code> is a {@link Vec4}: it can be a vector of different length, an object literal, or its coordinates given as separate arguments.
 * <BR> <code>a.set(b).add(c)</code> is about three times faster. Variable <code>a</code> needs to exist, and be a {@link Vec4}. Neither b nor c are required to be {@link Vec4}s: they can be vectors of different length, object literals, or its coordinates given as separate arguments.
 * <BR> If <code>a</code>, <code>b</code> and <code>c</code> are {@link Vec4} instances, <code>a.setSum(b, c)</code> can be used for optimum performance. It is seven times faster than <code>a.set(b).add(c)</code>, or twenty times faster than <code>a = b.plus(c)</code>.
 * <BR> It is recommended to use optimized methods for time-critical per-frame tasks, while programmer-friendly interfaces are useful for one-time initializations, e.g. when constructing a scene.
 */
class Vec4{
  /**
   * Creates a vecotr. Without parameters, initializes the vector to (0, 0, 0, 1).
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [u=0] - Any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @param {Number} [s=0] - Ignored if u.z is defined. Otherwise, the value for coordinate z.
   * @param {Number} [t=1] - Ignored if u.w is defined. Otherwise, the value for coordinate w.
   */
  constructor(u, v, s, t){
    /**
     * @name Vec4#storage
     * @description 4-element typed array for coordinate storage.
     * @type Float32Array
     */  
    this.storage = new Float32Array([
      u && u.x || Number(u).valueOf() || 0,
      u && u.y || Number(v).valueOf() || 0,
      u && u.z || Number(s).valueOf() || 0,
      dft(u !== 0 && u && u.w, Number(t).valueOf(), 1)
    ]);
  }

  /**
   * @method clone
   * @memberof Vec4 
   * @description Creates a copy.
   * @return {Vec4} A new instance with identical contents.
   */
  clone() {
    const result = Object.create(Vec4.prototype);
    result.storage = new Float32Array(this.storage);
    return result;
  }

  /**
   * @method set
   * @memberof Vec4  
   * @description Simulates operator <code>=</code>. Sets the coordinates from another vector, or number values. Without parameters, sets (0, 0, 0, 1).
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [u=0] - Any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @param {Number} [s=0] - Ignored if u.z is defined. Otherwise, the value for coordinate z.
   * @param {Number} [t=1] - Ignored if u.w is defined. Otherwise, the value for coordinate w.
   * @return {Vec4} this
   */
  set(u, v, s, t) {
    this.storage[0] = u && u.x || Number(u).valueOf() || 0;
    this.storage[1] = u && u.y || Number(v).valueOf() || 0;
    this.storage[2] = u && u.z || Number(s).valueOf() || 0;
    this.storage[3] = dft(u !== 0 && u && u.w, Number(t).valueOf(), 1);
    return this;  
  }

  /**
   * @method random
   * @memberof Vec4
   * @static 
   * @description Return a new {@link Vec4} with random values that to lie between two values, elementwise.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [minVal=0] - Specifies the lower end of the random range. If a scalar is given, it applies to all channels.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [maxVal=1] - Specifies the upper end of the random range. If a scalar is given, it applies to all channels.
   * @return {Vec4} this
   */
  static random(minVal, maxVal) {
    const result = Object.create(Vec4.prototype);
    result.storage = new Float32Array(4);
    let mina = minVal && minVal.x || Number(minVal).valueOf() || 0;
    let maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);  
    result.storage[0] = Math.random() * (maxa - mina) + mina;
    mina = minVal && minVal.y || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.y, Number(maxVal).valueOf(), 1);  
    result.storage[1] = Math.random() * (maxa - mina) + mina;
    mina = minVal && minVal.z || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.z, Number(maxVal).valueOf(), 1);  
    result.storage[2] = Math.random() * (maxa - mina) + mina;
    mina = minVal && minVal.w || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.w, Number(maxVal).valueOf(), 1);  
    result.storage[3] = Math.random() * (maxa - mina) + mina;
    return result;
  }

  /**
   * @method setRandom
   * @memberof Vec4  
   * @description Fill the vector with random values that to lie between two further values, elementwise.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [minVal=0] - Specifies the lower end of the random range. If a scalar is given, it applies to all channels.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [maxVal=1] - Specifies the upper end of the random range. If a scalar is given, it applies to all channels.
   * @return {Vec4} this
   */
  setRandom(minVal, maxVal) {
    let mina = minVal && minVal.x || Number(minVal).valueOf() || 0;
    let maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);  
    this.storage[0] = Math.random() * (maxa - mina) + mina;
    mina = minVal && minVal.y || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.y, Number(maxVal).valueOf(), 1);  
    this.storage[1] = Math.random() * (maxa - mina) + mina;
    mina = minVal && minVal.z || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.z, Number(maxVal).valueOf(), 1);  
    this.storage[2] = Math.random() * (maxa - mina) + mina;
    mina = minVal && minVal.w || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.w, Number(maxVal).valueOf(), 1);  
    this.storage[3] = Math.random() * (maxa - mina) + mina;
    return this;  
  }

  /**
   * @method clamp
   * @memberof Vec4
   * @description Constrains the value of this vector to lie between two further values, elementwise, overwriting the contents with the result.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [minVal=0] - Specifies the lower end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [maxVal=1] - Specifies the upper end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @return {Vec4} this
   */
  clamp(minVal, maxVal) {
    let mina = minVal && minVal.x || Number(minVal).valueOf() || 0;
    if(this.storage[0] < mina){
      this.storage[0] = mina;
    }
    mina = minVal && minVal.y || Number(minVal).valueOf() || 0;
    if(this.storage[1] < mina){
      this.storage[1] = mina;
    }
    mina = minVal && minVal.z || Number(minVal).valueOf() || 0;
    if(this.storage[2] < mina){
      this.storage[2] = mina;
    }  
    mina = minVal && minVal.w || Number(minVal).valueOf() || 0;
    if(this.storage[3] < mina){
      this.storage[3] = mina;
    }  
    let maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);
    if(this.storage[0] > maxa){
      this.storage[0] = maxa;
    }
    maxa = dft(maxVal !== 0 && maxVal && maxVal.y, Number(maxVal).valueOf(), 1);
    if(this.storage[1] > maxa){
      this.storage[1] = maxa;
    }
    maxa = dft(maxVal !== 0 && maxVal && maxVal.z, Number(maxVal).valueOf(), 1);
    if(this.storage[2] > maxa){
      this.storage[2] = maxa;
    }
    maxa = dft(maxVal !== 0 && maxVal && maxVal.w, Number(maxVal).valueOf(), 1);
    if(this.storage[3] > maxa){
      this.storage[3] = maxa;
    }
    return this;  
  }

  /**
   * @method setClamped
   * @memberof Vec4  
   * @description Fast. Constrains a value to lie between two further values, elementwise, storing the result in this vector.
   * @param {Vec4} b - The value to constrain.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [minVal=0] - Specifies the lower end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [maxVal=1] - Specifies the upper end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @return {Vec4} this
   */
  setClamped(b, minVal, maxVal) {
    let mina = minVal && minVal.x || Number(minVal).valueOf() || 0;
    let maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);  
    if(b.storage[0] < mina){
      this.storage[0] = mina;
    } else if(b.storage[0] > maxa){
      this.storage[0] = maxa;
    } else {
      this.storage[0] = b.storage[0];
    }
    mina = minVal && minVal.y || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.y, Number(maxVal).valueOf(), 1);  
    if(b.storage[1] < mina){
      this.storage[1] = mina;
    } else if(b.storage[1] > maxa){
      this.storage[1] = maxa;
    } else {
      this.storage[1] = b.storage[1];
    }
    mina = minVal && minVal.z || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.z, Number(maxVal).valueOf(), 1);  
    if(b.storage[2] < mina){
      this.storage[2] = mina;
    } else if(b.storage[2] > maxa){
      this.storage[2] = maxa;
    } else {
      this.storage[2] = b.storage[2];
    }
    mina = minVal && minVal.w || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.w, Number(maxVal).valueOf(), 1);
    if(b.storage[3] < mina){
      this.storage[3] = mina;
    } else if(b.storage[3] > maxa){
      this.storage[3] = maxa;
    } else {
      this.storage[3] = b.storage[3];
    }
    return this;
  }

  /**
   * @method add
   * @memberof Vec4  
   * @description Simulates operator <code>+=</code>. Adds another vector to this vector, overwriting the contents with the result.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [u=0] - Any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @param {Number} [s=0] - Ignored if u.z is defined. Otherwise, the value for coordinate z.
   * @param {Number} [t=0] - Ignored if u.w is defined. Otherwise, the value for coordinate w.
   * @return {Vec4} this
   */
  add(u, v, s, t) {
    this.storage[0] += u && u.x || Number(u).valueOf() || 0;
    this.storage[1] += u && u.y || Number(v).valueOf() || 0;
    this.storage[2] += u && u.z || Number(s).valueOf() || 0;
    this.storage[3] += u && u.w || Number(t).valueOf() || 0;
    return this;  
  }

  /**
   * @method addScaled
   * @memberof Vec4  
   * @description Simulates <code>+= dt *</code>. Adds another vector, scaled by `dt`, to this vector, overwriting the contents with the result.
   * @param {Number} dt - Scaling factor.
   * @param {Vec4 | Object | Number} [u=0] - Any object (property x), or a numerical value.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y. 
   * @param {Number} [s=0] - Ignored if u.z is defined. Otherwise, the value for coordinate z.
   * @param {Number} [t=0] - Ignored if u.w is defined. Otherwise, the value for coordinate w.
   * @return {Vec4} this
   */
  addScaled(dt, u, v, s, t) {
    this.storage[0] += dt * (u && u.x || Number(u).valueOf() || 0);
    this.storage[1] += dt * (u && u.y || Number(v).valueOf() || 0);
    this.storage[2] += dt * (u && u.z || Number(s).valueOf() || 0);
    this.storage[3] += dt * (u && u.w || Number(t).valueOf() || 0);
    return this;  
  }

  /**
   * @method plus
   * @memberof Vec4  
   * @description Simulates operator <code>+</code>. Adds this vector and the parameter vector, and returns the result in a new instance.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [u=0] - Any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @param {Number} [s=0] - Ignored if u.z is defined. Otherwise, the value for coordinate z.
   * @param {Number} [t=0] - Ignored if u.w is defined. Otherwise, the value for coordinate w.
   * @return {Vec4} the sum of the two vectors
   */
  plus(u, v, s, t) {
    const result = Object.create(Vec4.prototype);
    result.storage = new Float32Array(4);
    result.storage[0] = this.storage[0] + (u && u.x || Number(u).valueOf() || 0);
    result.storage[1] = this.storage[1] + (u && u.y || Number(v).valueOf() || 0);
    result.storage[2] = this.storage[2] + (u && u.z || Number(s).valueOf() || 0);
    result.storage[3] = this.storage[3] + (u && u.w || Number(t).valueOf() || 0);
    return result;
  }


  /**
   * @method setSum
   * @memberof Vec4  
   * @description Fast. Adds the two argument vectors, storing the result in this vector.
   * @param {Vec4} b - Term 1.
   * @param {Vec4} c - Term 2. 
   * @return {Vec4} this
   */
  setSum(b, c) {
    this.storage[0] = b.storage[0] + c.storage[0];
    this.storage[1] = b.storage[1] + c.storage[1];
    this.storage[2] = b.storage[2] + c.storage[2];
    this.storage[3] = b.storage[3] + c.storage[3];
    return this;  
  }

  /**
   * @method sub
   * @memberof Vec4  
   * @description Simulates operator <code>-=</code>. Subtracts another vector from this vector, overwriting the contents with the result.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [u=0] - Any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @param {Number} [s=0] - Ignored if u.z is defined. Otherwise, the value for coordinate z.
   * @param {Number} [t=0] - Ignored if u.w is defined. Otherwise, the value for coordinate w.
   * @return {Vec4} this
   */
  sub(u, v, s, t) {
    this.storage[0] -= u && u.x || Number(u).valueOf() || 0;
    this.storage[1] -= u && u.y || Number(v).valueOf() || 0;
    this.storage[2] -= u && u.z || Number(s).valueOf() || 0;
    this.storage[3] -= u && u.w || Number(t).valueOf() || 0;  
    return this;  
  }

  /**
   * @method minus
   * @memberof Vec4  
   * @description Simulates operator <code>-</code>. Subtracts the parameter vector from this vector, and returns the result in a new instance.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [u=0] - Any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @param {Number} [s=0] - Ignored if u.z is defined. Otherwise, the value for coordinate z.
   * @param {Number} [t=0] - Ignored if u.w is defined. Otherwise, the value for coordinate w.
   * @return {Vec4} the difference of the two vectors
   */
  minus(u, v, s, t) {
    const result = Object.create(Vec4.prototype);
    result.storage = new Float32Array(4);
    result.storage[0] = this.storage[0] - (u && u.x || Number(u).valueOf() || 0);
    result.storage[1] = this.storage[1] - (u && u.y || Number(v).valueOf() || 0);
    result.storage[2] = this.storage[2] - (u && u.z || Number(s).valueOf() || 0);
    result.storage[3] = this.storage[3] - (u && u.w || Number(t).valueOf() || 0);
    return result;
  }

  /**
   * @method setDifference
   * @memberof Vec4  
   * @description Fast. Subtracts the second argument vector from the first one, storing the result in this vector.
   * @param {Vec4} b - Minuend.
   * @param {Vec4} c - Subtrahend. 
   * @return {Vec4} this
   */
  setDifference(b, c) {
    this.storage[0] = b.storage[0] - c.storage[0];
    this.storage[1] = b.storage[1] - c.storage[1];
    this.storage[2] = b.storage[2] - c.storage[2];
    this.storage[3] = b.storage[3] - c.storage[3];
    return this;  
  }

  /**
   * @method mul
   * @memberof Vec4  
   * @description Simulates operator <code>*=</code>. Multiplies, this vector with another vector elementwise, matrix, or scalar, from the right, overwriting the contents with the result.
   * @param {Mat4 | Vec4 | Vec3 | Vec2 | Object | Number} [u=1] - A 4x4 matrix, or any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=1] - Ignored if u is a matrix, or u.y is defined. Otherwise, the value for coordinate y. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [s=1] - Ignored if u is a matrix, or u.z is defined. Otherwise, the value for coordinate z. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [t=1] - Ignored if u is a matrix, or u.w is defined. Otherwise, the value for coordinate w. Defaults to the value of parameter u, if it is a number.
   * @return {Vec4} this
   */
  mul(u, v, s, t) {
    if(u instanceof Mat4) {
      this.transform(u);
    } else {
      this.storage[0] *= dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
      this.storage[1] *= dft(u !== 0 && u && u.y, Number(v).valueOf(), Number(u).valueOf(), 1);
      this.storage[2] *= dft(u !== 0 && u && u.z, Number(s).valueOf(), Number(u).valueOf(), 1);
      this.storage[3] *= dft(u !== 0 && u && u.w, Number(t).valueOf(), Number(u).valueOf(), 1);
    }
    return this;  
  }

  /**
   * @method times
   * @memberof Vec4
   * @description Simulates operator <code>*</code>. Multiplies, this vector with another vector elementwise, matrix, or scalar, from the right, and returns the result in a new instance.
   * @param {Mat4 | Vec4 | Vec3 | Vec2 | Object | Number} [u=1] - A 4x4 matrix, or any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=1] - Ignored if u is a matrix, or u.y is defined. Otherwise, the value for coordinate y. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [s=1] - Ignored if u is a matrix, or u.z is defined. Otherwise, the value for coordinate z. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [t=1] - Ignored if u is a matrix, or u.w is defined. Otherwise, the value for coordinate w. Defaults to the value of parameter u, if it is a number.
   * @return {Vec4} the vector transformed by the matrix, or the elementwise product of the two vectors, or the scaled vector
   */
  times(u, v, s, t) {
    const result = Object.create(Vec4.prototype);
    result.storage = new Float32Array(4);
    if(u instanceof Mat4) {
      result.setTransformed(this, u);
    } else {
      result.storage[0] = this.storage[0] * dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
      result.storage[1] = this.storage[1] * dft(u !== 0 && u && u.y, Number(v).valueOf(), Number(u).valueOf(), 1);
      result.storage[2] = this.storage[2] * dft(u !== 0 && u && u.z, Number(s).valueOf(), Number(u).valueOf(), 1);
      result.storage[3] = this.storage[3] * dft(u !== 0 && u && u.w, Number(t).valueOf(), Number(u).valueOf(), 1);
    }
    return result;
  }

  /**
   * @method setProduct
   * @memberof Vec4  
   * @description Fast. Multiplies, elementwise, the two argument vectors, storing the result in this vector.
   * @param {Vec4} b - Factor 1.
   * @param {Vec4} c - Factor 2. 
   * @return {Vec4} this
   */
  setProduct(b, c) {
    this.storage[0] = b.storage[0] * c.storage[0];
    this.storage[1] = b.storage[1] * c.storage[1];
    this.storage[2] = b.storage[2] * c.storage[2];
    this.storage[3] = b.storage[3] * c.storage[3];
    return this;  
  }

  /**
   * @method div
   * @memberof Vec4  
   * @description Simulates operator <code>/=</code>. Divides, elementwise, this vector with another vector, or scalar, overwriting the contents with the result.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [u=1] - Any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=1] - Ignored if u.y is defined. Otherwise, the value for coordinate y. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [s=1] - Ignored if u.z is defined. Otherwise, the value for coordinate z. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [t=1] - Ignored if u.w is defined. Otherwise, the value for coordinate w. Defaults to the value of parameter u, if it is a number.
   * @return {Vec4} this
   */
  div(u, v, s, t) {
    this.storage[0] /= dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    this.storage[1] /= dft(u !== 0 && u && u.y, Number(v).valueOf(), Number(u).valueOf(), 1);
    this.storage[2] /= dft(u !== 0 && u && u.z, Number(s).valueOf(), Number(u).valueOf(), 1);
    this.storage[3] /= dft(u !== 0 && u && u.w, Number(t).valueOf(), Number(u).valueOf(), 1);
    return this;  
  }

  /**
   * @method over
   * @memberof Vec4
   * @description Simulates operator <code>/</code>. Divides, elementwise, this vector with another vector, or scalar, and returns the result in a new instance.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [u=1] - Any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=1] - Ignored if u.y is defined. Otherwise, the value for coordinate y. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [s=1] - Ignored if u.z is defined. Otherwise, the value for coordinate z. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [t=1] - Ignored if u.w is defined. Otherwise, the value for coordinate w. Defaults to the value of parameter u, if it is a number.
   * @return {Vec4} the elementwise product of the two vectors
   */
  over(u, v, s, t) {
    const result = Object.create(Vec4.prototype);
    result.storage = new Float32Array(4);
    result.storage[0] = this.storage[0] / dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    result.storage[1] = this.storage[1] / dft(u !== 0 && u && u.y, Number(v).valueOf(), Number(u).valueOf(), 1);
    result.storage[2] = this.storage[2] / dft(u !== 0 && u && u.z, Number(s).valueOf(), Number(u).valueOf(), 1);
    result.storage[3] = this.storage[3] / dft(u !== 0 && u && u.w, Number(t).valueOf(), Number(u).valueOf(), 1);
    return result;
  }

  /**
   * @method setQuotient
   * @memberof Vec4  
   * @description Fast. Divides, elementwise, the two argument vectors, storing the result in this vector.
   * @param {Vec4} b - Dividend.
   * @param {Vec4} c - Divisor. 
   * @return {Vec4} this
   */
  setQuotient(b, c) {
    this.storage[0] = b.storage[0] / c.storage[0];
    this.storage[1] = b.storage[1] / c.storage[1];
    this.storage[2] = b.storage[2] / c.storage[2];
    this.storage[3] = b.storage[3] / c.storage[3];
    return this;  
  }

  /**
   * @method setScaled
   * @memberof Vec4  
   * @description Fast. Scales the vector by a scalar.
   * @param {Vec4} a - Vector to scale.
   * @param {Number} s - Scale factor. 
   * @return {Vec4} this
   */
  setScaled(a, s){
    this.storage[0] = a.x * s;
    this.storage[1] = a.y * s;
    this.storage[2] = a.z * s;  
    this.storage[3] = a.w * s;
    return this;
  }

  /**
   * @method setScaledByInverse
   * @memberof Vec4  
   * @description Fast. Scales the vector by the reciprocal of scalar.
   * @param {Vec4} a - Vector to scale.
   * @param {Number} s - Scale factor inverse.
   * @return {Vec4} this
   */
  setScaledByInverse(a, s){
    this.storage[0] = a.x / s;
    this.storage[1] = a.y / s;
    this.storage[2] = a.z / s;  
    this.storage[3] = a.w / s;
    return this;  
  }

  /**
   * @method length2
   * @memberof Vec4  
   * @description Computes the length squared.
   * @return {Number} x*x + y*y + z*z + w*w
   */
  length2() {
    return this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1] + this.storage[2] * this.storage[2] + this.storage[3] * this.storage[3];
  }

  /**
   * @method length
   * @memberof Vec4  
   * @description Computes the vector length.
   * @return {Number}
   */
  length() {
    return Math.sqrt(this.length2());
  }

  /**
   * @method normalize
   * @memberof Vec4  
   * @description Scales the vector by the inverse of its length, overwriting the contents with the result.
   * @return {Vec4} this
   */
  normalize() {
    const l = this.length();
    this.storage[0] /= l;
    this.storage[1] /= l;
    this.storage[2] /= l;  
    this.storage[3] /= l;
    return this;
  }

  /**
   * @method direction
   * @memberof Vec4  
   * @description Scales the vector by the inverse of its length, and returns the result in a new instance.
   * @return {Vec4} A unit length vector with the same direction as this.
   */
  direction() {
    const result = Object.create(Vec4.prototype);
    result.storage = new Float32Array(4);
    const l = this.length();
    result.storage[0] = this.storage[0] / l;
    result.storage[1] = this.storage[1] / l;
    result.storage[2] = this.storage[2] / l;
    result.storage[3] = this.storage[3] / l;
    return result;
  }

  /**
   * @method setNormalized
   * @memberof Vec4  
   * @description Scales the argmument vector by the inverse of its length, storing the result in this vector.
   * @param b {Vec4} - The vector to normalize.
   * @return {Vec4} this
   */
  setNormalized(b) {
    const l = b.length();
    this.storage[0] = b.storage[0] / l;
    this.storage[1] = b.storage[1] / l;
    this.storage[2] = b.storage[2] / l;  
    this.storage[3] = b.storage[3] / l;
    return this;
  }

  /**
   * @method dot
   * @memberof Vec4  
   * @description Computes the dot product with another vector.
   * @param {Vec4 | Vec3 | Vec2 | Object | Number} [u=0] - Any object (properties x, y, z, w are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @param {Number} [s=0] - Ignored if u.z is defined. Otherwise, the value for coordinate z.
   * @param {Number} [t=0] - Ignored if u.w is defined. Otherwise, the value for coordinate w.
   * @return {Number}
   */
  dot(u, v, s, t) {
    return this.storage[0] * (u && u.x || Number(u).valueOf() || 0) +
           this.storage[1] * (u && u.y || Number(v).valueOf() || 0) +
           this.storage[2] * (u && u.z || Number(s).valueOf() || 0) +
           this.storage[3] * (u && u.w || Number(t).valueOf() || 0);
  }

  /**
   * @method transform
   * @memberof Vec4
   * @description Multiplies the vector (considering it a row vector) with a matrix, from the right. The contents of this are overwritten with the transformed vector with the result. See {@link Vec4#times} for a version creating a new vector instance.
   * @param m {Mat4} The 4x4 linear homogeneous transformation matrix using column-major representation.
   * @return {Vec4} this
   */
  transform(m) {
    const x = this.storage[0];
    const y = this.storage[1];
    const z = this.storage[2];
    const w = this.storage[3];
    this.storage[0] =
      x * m.storage[ 0] +
      y * m.storage[ 1] +
      z * m.storage[ 2] +
      w * m.storage[ 3] ;
    this.storage[1] =
      x * m.storage[ 4] +
      y * m.storage[ 5] +
      z * m.storage[ 6] +
      w * m.storage[ 7] ;
    this.storage[2] =
      x * m.storage[ 8] +
      y * m.storage[ 9] +
      z * m.storage[10] +
      w * m.storage[11] ;
    this.storage[3] =
      x * m.storage[12] +
      y * m.storage[13] +
      z * m.storage[14] +
      w * m.storage[15] ;
    return this;
  }

  /**
   * @method setTransformed
   * @memberof Vec4
   * @description Multiplies the argument vector (considering it a row vector) with the argument matrix, from the right. The contents of this are overwritten with the transformed vector with the result. See {@link Vec4#times} for a version creating a new vector instance.
   * @param m {Mat4} The 4x4 linear homogeneous transformation matrix using column-major representation.
   * @return {Vec4} this
   */
  setTransformed(v, m) {
    this.storage[0] =
      v.storage[0] * m.storage[ 0] +
      v.storage[1] * m.storage[ 1] +
      v.storage[2] * m.storage[ 2] +
      v.storage[3] * m.storage[ 3] ;
    this.storage[1] =
      v.storage[0] * m.storage[ 4] +
      v.storage[1] * m.storage[ 5] +
      v.storage[2] * m.storage[ 6] +
      v.storage[3] * m.storage[ 7] ;
    this.storage[2] =
      v.storage[0] * m.storage[ 8] +
      v.storage[1] * m.storage[ 9] +
      v.storage[2] * m.storage[10] +
      v.storage[3] * m.storage[11] ;
    this.storage[3] =
      v.storage[0] * m.storage[12] +
      v.storage[1] * m.storage[13] +
      v.storage[2] * m.storage[14] +
      v.storage[3] * m.storage[15] ;
    return this;
  }

  /**
   * @method commit
   * @memberof Vec4  
   * @description Sets the value of the vector to a WebGL vec4 uniform variable.
   * @param {WebGLRenderingContext} gl - rendering context
   * @param {WebGLUniformLocation} uniformLocation - location of the uniform variable in the currently used WebGL program
   */
  commit(gl, uniformLocation){
    gl.uniform4fv(uniformLocation, this.storage);
  }
}

/**
 * @name Vec4#x
 * @description Alias for storage[0];
 * @type Number
 */
Object.defineProperty(Vec4.prototype, 'x', {
  get: function() { return this.storage[0]; },
  set: function(value) { this.storage[0] = value; }
});

/**
 * @name Vec4#y
 * @description Alias for storage[1]; 
 * @type Number
 */
Object.defineProperty(Vec4.prototype, 'y', {
  get: function() { return this.storage[1]; },
  set: function(value) { this.storage[1] = value; }
});

/**
 * @name Vec4#z
 * @description Alias for storage[2]; 
 * @type Number
 */
Object.defineProperty(Vec4.prototype, 'z', {
  get: function() { return this.storage[2]; },
  set: function(value) { this.storage[2] = value; }
});

/**
 * @name Vec4#w
 * @description Alias for storage[3]; 
 * @type Number
 */
Object.defineProperty(Vec4.prototype, 'w', {
  get: function() { return this.storage[3]; },
  set: function(value) { this.storage[3] = value; }
});


// CommonJS style export to allow file to be required in server side node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Vec4;
}
