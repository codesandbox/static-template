/**
 * @file WebGLMath {@link Vec2} class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/**
 * Two-element vector of 32-bit floats. May reflect an GLSL vec2 uniform variable.
 * Low-performance convenience methods reproduce operator behaviour.
 * <table><tr><th>operator</th><th>method</th></tr>
 * <tr><td>+=</td><td>[add]{@link Vec2#add}</td></tr>
 * <tr><td>-=</td><td>[sub]{@link Vec2#sub}</td></tr>
 * <tr><td>*=</td><td>[mul]{@link Vec2#mul}</td></tr>
 * <tr><td>/=</td><td>[div]{@link Vec2#div}</td></tr> 
 * <tr><td>+</td><td>[plus]{@link Vec2#plus}</td></tr>
 * <tr><td>-</td><td>[minus]{@link Vec2#minus}</td></tr>
 * <tr><td>*</td><td>[times]{@link Vec2#times}</td></tr>
 * <tr><td>/</td><td>[over]{@link Vec2#over}</td></tr>
 * <tr><td>&middot;</td><td>[dot]{@link Vec2#dot}</td></tr> 
 * </table>
 * <BR> <code>a = b + c</code> can be computed as <code>var a = b.plus(c)</code>, when <code>a</code> does not yet exist, and performance does not matter. It is not required that <code>c</code> is a {@link Vec2}: it can be a vector of different length, an object literal, or its coordinates given as separate arguments.
 * <BR> <code>a.set(b).add(c)</code> is about three times faster. Variable <code>a</code> needs to exist, and be a {@link Vec2}. Neither b nor c are required to be {@link Vec2}s: they can be vectors of different length, object literals, or its coordinates given as separate arguments.
 * <BR> If <code>a</code>, <code>b</code> and <code>c</code> are {@link Vec2} instances, <code>a.setSum(b, c)</code> can be used for optimum performance. It is seven times faster than <code>a.set(b).add(c)</code>, or twenty times faster than <code>a = b.plus(c)</code>.
 * <BR> It is recommended to use optimized methods for time-critical per-frame tasks, while programmer-friendly interfaces are useful for one-time initializations, e.g. when constructing a scene.
 */
class Vec2{
  /**
   * Creates a vector. Without parameters, initializes the vector to (0, 0).
   * @param {Vec2 | Vec2 | Object | Number} [u=0] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   */
  constructor(u, v){
    /**
     * @name Vec2#storage
     * @description 2-element typed array for coordinate storage.
     * @type Float32Array
     */  
    this.storage = new Float32Array([
      u && u.x || Number(u).valueOf() || 0,
      u && u.y || Number(v).valueOf() || 0
    ]);
  }

  /**
   * @method clone
   * @memberof Vec2 
   * @description Creates a copy.
   * @return {Vec2} A new instance with identical contents.
   */
  clone() {
    const result = Object.create(Vec2.prototype);
    result.storage = new Float32Array(this.storage);
    return result;
  }

  /**
   * @method set
   * @memberof Vec2  
   * @description Simulates operator <code>=</code>. Sets the coordinates from another vector, or number values. Without parameters, sets (0, 0, 0, 1).
   * @param {Vec2 | Vec2 | Object | Number} [u=0] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @return {Vec2} this
   */
  set(u, v) {
    this.storage[0] = u && u.x || Number(u).valueOf() || 0;
    this.storage[1] = u && u.y || Number(v).valueOf() || 0;
    return this;  
  }

  /**
   * @method random
   * @memberof Vec2
   * @static 
   * @description Return a new {@link Vec2} with random values that to lie between two values, elementwise.
   * @param {Vec2 | Vec2 | Object | Number} [minVal=0] - Specifies the lower end of the random range. If a scalar is given, it applies to all channels.
   * @param {Vec2 | Vec2 | Object | Number} [maxVal=1] - Specifies the upper end of the random range. If a scalar is given, it applies to all channels.
   * @return {Vec2} this
   */
  static random(minVal, maxVal) {
    const result = Object.create(Vec2.prototype);
    result.storage = new Float32Array(2);
    let mina = minVal && minVal.x || Number(minVal).valueOf() || 0;
    let maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);
    result.storage[0] = Math.random() * (maxa - mina) + mina;
    mina = minVal && minVal.y || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.y, Number(maxVal).valueOf(), 1);
    result.storage[1] = Math.random() * (maxa - mina) + mina;
    return result;
  }

  /**
   * @method setRandom
   * @memberof Vec2  
   * @description Fill the vector with random values that to lie between two further values, elementwise.
   * @param {Vec2 | Vec2 | Object | Number} [minVal=0] - Specifies the lower end of the random range. If a scalar is given, it applies to all channels.
   * @param {Vec2 | Vec2 | Object | Number} [maxVal=1] - Specifies the upper end of the random range. If a scalar is given, it applies to all channels.
   * @return {Vec2} this
   */
  setRandom(minVal, maxVal) {
    let mina = minVal && minVal.x || Number(minVal).valueOf() || 0;
    let maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);  
    this.storage[0] = Math.random() * (maxa - mina) + mina;
    mina = minVal && minVal.y || Number(minVal).valueOf() || 0;
    maxa = dft(maxVal !== 0 && maxVal && maxVal.y, Number(maxVal).valueOf(), 1);  
    this.storage[1] = Math.random() * (maxa - mina) + mina;
    return this;  
  }

  /**
   * @method clamp
   * @memberof Vec2
   * @description Constrains the value of this vector to lie between two further values, elementwise, overwriting the contents with the result.
   * @param {Vec2 | Vec2 | Object | Number} [minVal=0] - Specifies the lower end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @param {Vec2 | Vec2 | Object | Number} [maxVal=1] - Specifies the upper end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @return {Vec2} this
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
    let maxa = dft(maxVal !== 0 && maxVal && maxVal.x, Number(maxVal).valueOf(), 1);
    if(this.storage[0] > maxa){
      this.storage[0] = maxa;
    }
    maxa = dft(maxVal !== 0 && maxVal && maxVal.y, Number(maxVal).valueOf(), 1);
    if(this.storage[1] > maxa){
      this.storage[1] = maxa;
    }
    return this;  
  }

  /**
   * @method setClamped
   * @memberof Vec2  
   * @description Fast. Constrains a value to lie between two further values, elementwise, storing the result in this vector.
   * @param {Vec2} b - The value to constrain.
   * @param {Vec2 | Vec2 | Object | Number} [minVal=0] - Specifies the lower end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @param {Vec2 | Vec2 | Object | Number} [maxVal=1] - Specifies the upper end of the range into which to constrain the elements. If a scalar is given, it applies to all channels.
   * @return {Vec2} this
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
    return this;
  }

  /**
   * @method add
   * @memberof Vec2  
   * @description Simulates operator <code>+=</code>. Adds another vector to this vector, overwriting the contents with the result.
   * @param {Vec2 | Vec2 | Object | Number} [u=0] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @return {Vec2} this
   */
  add(u, v) {
    this.storage[0] += u && u.x || Number(u).valueOf() || 0;
    this.storage[1] += u && u.y || Number(v).valueOf() || 0;
    return this;  
  }

  /**
   * @method addScaled
   * @memberof Vec2  
   * @description Simulates <code>+= dt *</code>. Adds another vector, scaled by `dt`, to this vector, overwriting the contents with the result.
   * @param {Number} dt - Scaling factor.
   * @param {Vec2 | Object | Number} [u=0] - Any object (property x), or a numerical value.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y. 
   * @return {Vec2} this
   */
  addScaled(dt, u, v) {
    this.storage[0] += dt * (u && u.x || Number(u).valueOf() || 0);
    this.storage[1] += dt * (u && u.y || Number(v).valueOf() || 0);
    return this;  
  }

  /**
   * @method plus
   * @memberof Vec2  
   * @description Simulates operator <code>+</code>. Adds this vector and the parameter vector, and returns the result in a new instance.
   * @param {Vec2 | Vec2 | Object | Number} [u=0] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @return {Vec2} the sum of the two vectors
   */
  plus(u, v) {
    const result = Object.create(Vec2.prototype);
    result.storage = new Float32Array(2);
    result.storage[0] = this.storage[0] + (u && u.x || Number(u).valueOf() || 0);
    result.storage[1] = this.storage[1] + (u && u.y || Number(v).valueOf() || 0);
    return result;
  }

  /**
   * @method setSum
   * @memberof Vec2  
   * @description Fast. Adds the two argument vectors, storing the result in this vector.
   * @param {Vec2} b - Term 1.
   * @param {Vec2} c - Term 2. 
   * @return {Vec2} this
   */
  setSum(b, c) {
    this.storage[0] = b.storage[0] + c.storage[0];
    this.storage[1] = b.storage[1] + c.storage[1];
    return this;  
  }

  /**
   * @method sub
   * @memberof Vec2  
   * @description Simulates operator <code>-=</code>. Subtracts another vector from this vector, overwriting the contents with the result.
   * @param {Vec2 | Vec2 | Object | Number} [u=0] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @return {Vec2} this
   */
  sub(u, v) {
    this.storage[0] -= u && u.x || Number(u).valueOf() || 0;
    this.storage[1] -= u && u.y || Number(v).valueOf() || 0;
    return this;  
  }

  /**
   * @method minus
   * @memberof Vec2  
   * @description Simulates operator <code>-</code>. Subtracts the parameter vector from this vector, and returns the result in a new instance.
   * @param {Vec2 | Vec2 | Object | Number} [u=0] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @return {Vec2} the difference of the two vectors
   */
  minus(u, v) {
    const result = Object.create(Vec2.prototype);
    result.storage = new Float32Array(2);
    result.storage[0] = this.storage[0] - (u && u.x || Number(u).valueOf() || 0);
    result.storage[1] = this.storage[1] - (u && u.y || Number(v).valueOf() || 0);
    return result;
  }

  /**
   * @method setDifference
   * @memberof Vec2  
   * @description Fast. Subtracts the second argument vector from the first one, storing the result in this vector.
   * @param {Vec2} b - Minuend.
   * @param {Vec2} c - Subtrahend. 
   * @return {Vec2} this
   */
  setDifference(b, c) {
    this.storage[0] = b.storage[0] - c.storage[0];
    this.storage[1] = b.storage[1] - c.storage[1];
    return this;  
  }

  /**
   * @method mul
   * @memberof Vec2  
   * @description Simulates operator <code>*=</code>. Multiplies this vector with another vector elementwise, or scalar, overwriting the contents with the result.
   * @param {Vec2 | Vec2 | Object | Number} [u=1] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=1] - Ignored if u.y is defined. Otherwise, the value for coordinate y. Defaults to the value of parameter u, if it is a number.
   * @return {Vec2} this
   */
  mul(u, v) {
    this.storage[0] *= dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    this.storage[1] *= dft(u !== 0 && u && u.y, Number(v).valueOf(), Number(u).valueOf(), 1);
    return this;  
  }

  /**
   * @method times
   * @memberof Vec2
   * @description Simulates operator <code>*</code>. Multiplies this vector with another vector elementwise, or scalar, and returns the result in a new instance.
   * @param {Vec2 | Vec2 | Object | Number} [u=1] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=1] - Ignored if u.y is defined. Otherwise, the value for coordinate y. Defaults to the value of parameter u, if it is a number.
   * @return {Vec2} the elementwise product of the two vectors
   */
  times(u, v) {
    const result = Object.create(Vec2.prototype);
    result.storage = new Float32Array(2);
    result.storage[0] = this.storage[0] * dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    result.storage[1] = this.storage[1] * dft(u !== 0 && u && u.y, Number(v).valueOf(), Number(u).valueOf(), 1);
    return result;
  }

  /**
   * @method xy01times
   * @memberof Vec2
   * @description Simulates operator <code>*</code>. Multiplies this vector, augmented with 0, 1, to a homogeneous position vector, with a matrix from the right, and returns the result in a new instance.
   * @param {Mat4} m - A 4x4 transformation matrix.
   * @return {Vec2} the transformed vector
   */
  xy01times(m) {
    const result = Object.create(Vec2.prototype);
    result.storage = new Float32Array(2);
    result.setxy01Transformed(this, m);
    return result;
  }

  /**
   * @method xy00times
   * @memberof Vec2
   * @description Simulates operator <code>*</code>. Multiplies, this vector, augmented with two zeros, to a homogeneous direction vector, with a matrix from the right, and returns the result in a new instance.
   * @param {Mat4} m - A 4x4 transformation matrix.
   * @return {Vec2} the transformed vector
   */
  xy00times(m) {
    const result = Object.create(Vec2.prototype);
    result.storage = new Float32Array(2);
    result.setxy00Transformed(this, m);
    return result;
  }

  /**
   * @method setProduct
   * @memberof Vec2  
   * @description Fast. Multiplies, elementwise, the two argument vectors, storing the result in this vector.
   * @param {Vec2} b - Factor 1.
   * @param {Vec2} c - Factor 2. 
   * @return {Vec2} this
   */
  setProduct(b, c) {
    this.storage[0] = b.storage[0] * c.storage[0];
    this.storage[1] = b.storage[1] * c.storage[1];
    return this;  
  }

  /**
   * @method div
   * @memberof Vec2  
   * @description Simulates operator <code>/=</code>. Divides, elementwise, this vector with another vector, or scalar, overwriting the contents with the result.
   * @param {Vec2 | Vec2 | Object | Number} [u=1] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=1] - Ignored if u.y is defined. Otherwise, the value for coordinate y. Defaults to the value of parameter u, if it is a number.
   * @return {Vec2} this
   */
  div(u, v) {
    this.storage[0] /= dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    this.storage[1] /= dft(u !== 0 && u && u.y, Number(v).valueOf(), Number(u).valueOf(), 1);
    return this;  
  }

  /**
   * @method over
   * @memberof Vec2
   * @description Simulates operator <code>/</code>. Divides, elementwise, this vector with another vector, or scalar, and returns the result in a new instance.
   * @param {Vec2 | Vec2 | Object | Number} [u=1] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=1] - Ignored if u.y is defined. Otherwise, the value for coordinate y. Defaults to the value of parameter u, if it is a number.
   * @return {Vec2} the elementwise product of the two vectors
   */
  over(u, v) {
    const result = Object.create(Vec2.prototype);
    result.storage = new Float32Array(2);
    result.storage[0] = this.storage[0] / dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    result.storage[1] = this.storage[1] / dft(u !== 0 && u && u.y, Number(v).valueOf(), Number(u).valueOf(), 1);
    return result;
  }

  /**
   * @method setQuotient
   * @memberof Vec2  
   * @description Fast. Divides, elementwise, the two argument vectors, storing the result in this vector.
   * @param {Vec2} b - Dividend.
   * @param {Vec2} c - Divisor. 
   * @return {Vec2} this
   */
  setQuotient(b, c) {
    this.storage[0] = b.storage[0] / c.storage[0];
    this.storage[1] = b.storage[1] / c.storage[1];
    return this;  
  }

  /**
   * @method setScaled
   * @memberof Vec2  
   * @description Fast. Scales the vector by a scalar.
   * @param {Vec2} a - Vector to scale.
   * @param {Number} s - Scale factor. 
   * @return {Vec2} this
   */
  setScaled(a, s){
    this.storage[0] = a.x * s;
    this.storage[1] = a.y * s;
    return this;  
  }

  /**
   * @method setScaledByInverse
   * @memberof Vec2  
   * @description Fast. Scales the vector by the reciprocal of scalar.
   * @param {Vec2} a - Vector to scale.
   * @param {Number} s - Scale factor inverse.
   * @return {Vec2} this
   */
  setScaledByInverse(a, s){
    this.storage[0] = a.x / s;
    this.storage[1] = a.y / s;
    return this;  
  }

  /**
   * @method length2
   * @memberof Vec2  
   * @description Computes the length squared.
   * @return {Number} x*x + y*y + z*z + w*w
   */
  length2() {
    return this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1];
  }

  /**
   * @method length
   * @memberof Vec2  
   * @description Computes the vector length.
   * @return {Number}
   */
  length() {
    return Math.sqrt(this.length2());
  }

  /**
   * @method normalize
   * @memberof Vec2  
   * @description Scales the vector by the inverse of its length, overwriting the contents with the result.
   * @return {Vec2} this
   */
  normalize() {
    const l = this.length();
    this.storage[0] /= l;
    this.storage[1] /= l;
    return this;
  }

  /**
   * @method direction
   * @memberof Vec2  
   * @description Returns the vector scaled by the inverse of its length in a new instance.
   * @return {Vec2} A unit length vector with the same direction as this.
   */
  direction() {
    const result = Object.create(Vec2.prototype);
    result.storage = new Float32Array(2);
    const l = this.length();
    result.storage[0] = this.storage[0] / l;
    result.storage[1] = this.storage[1] / l;
    return result;
  }

  /**
   * @method setNormalized
   * @memberof Vec2  
   * @description Scales the argmument vector by the inverse of its length, storing the result in this vector.
   * @param {Vec2} b - The vector to normalize.
   * @return {Vec2} this
   */
  setNormalized(b) {
    const l = b.length();
    this.storage[0] = b.storage[0] / l;
    this.storage[1] = b.storage[1] / l;
    return this;
  }

  /**
   * @method dot
   * @memberof Vec2  
   * @description Computes the dot product with another vector.
   * @param {Vec2 | Vec2 | Object | Number} [u=0] - Any object (properties x, y are interpreted as coordinates, if given), or a numerical value for coordinate x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for coordinate y.
   * @return {Number}
   */
  dot(u, v) {
    return this.storage[0] * (u && u.x || Number(u).valueOf() || 0) +
           this.storage[1] * (u && u.y || Number(v).valueOf() || 0) ;
  }

  /**
   * @method xy01mul
   * @memberof Vec2
   * @description Multiplies the vector (considering it a row vector, augmented by 0, 1 to get a homogeneous position vector) with a matrix, from the right. The contents of this are overwritten with the transformed vector with the result. See [xy01times]{@link Vec2#xy01times} for a version creating a new vector instance.
   * @param m {Mat4} The 4x4 linear homogeneous transformation matrix using column-major representation.
   * @return {Vec2} this
   */
  xy01mul(m) {
    const x = this.storage[0];
    const y = this.storage[1];
    const w = 
      x * m.storage[12] +
      y * m.storage[13] +
          m.storage[15] ;
    this.storage[0] = (
      x * m.storage[ 0] +
      y * m.storage[ 1] +
          m.storage[ 3] ) / w;
    this.storage[1] = (
      x * m.storage[ 4] +
      y * m.storage[ 5] +
          m.storage[ 7] ) / w;
    return this;
  }

  /**
   * @method setxy01Transformed
   * @memberof Vec2
   * @description Multiplies the argument vector (considering it a row vector, augmented by 0, 1 to a homogeneous position vector) with the argument matrix, from the right. The contents of this are overwritten with the transformed vector with the result. See [xy01times]{@link Vec2#xy01times} for a version creating a new vector instance.
   * @param v {Vec2} The vector to be transformed. 
   * @param m {Mat4} The 4x4 linear homogeneous transformation matrix using column-major representation.
   * @return {Vec2} this
   */
  setxy01Transformed(v, m) {
    const x = v.storage[0];
    const y = v.storage[1];
    const w = 
      x * m.storage[12] +
      y * m.storage[13] +
          m.storage[15] ;
    this.storage[0] = (
      x * m.storage[ 0] +
      y * m.storage[ 1] +
          m.storage[ 3] ) / w;
    this.storage[1] = (
      x * m.storage[ 4] +
      y * m.storage[ 5] +
          m.storage[ 7] ) / w;
    return this;
  }

  /**
   * @method xy00mul
   * @memberof Vec2
   * @description Multiplies the vector (considering it a row vector, augmented by a 0 to get a homogeneous direction vector) with a matrix, from the right. The contents of this are overwritten with the transformed vector with the result. See [xy00times]{@link Vec2#xy00times} for a version creating a new vector instance.
   * @param m {Mat4} The 4x4 linear homogeneous transformation matrix using column-major representation.
   * @return {Vec2} this
   */
  xy00mul(m) {
    const x = this.storage[0];
    const y = this.storage[1];
    this.storage[0] =
      x * m.storage[ 0] +
      y * m.storage[ 1] ;
    this.storage[1] =
      x * m.storage[ 4] +
      y * m.storage[ 5] ;
    return this;
  }

  /**
   * @method setxy00Transformed
   * @memberof Vec2
   * @description Multiplies the argument vector (considering it a row vector, augmented by 0 to a homogeneous direction vector) with the argument matrix, from the right. The contents of this are overwritten with the transformed vector with the result. See [xy00times]{@link Vec2#xy00times} for a version creating a new vector instance.
   * @param v {Vec2} The vector to be transformed.  
   * @param m {Mat4} The 4x4 linear homogeneous transformation matrix using column-major representation.
   * @return {Vec2} this
   */
   setxy00Transformed(v, m) {
    const x = v.storage[0];
    const y = v.storage[1];
    this.storage[0] =
      x * m.storage[ 0] +
      y * m.storage[ 1] ;
    this.storage[1] =
      x * m.storage[ 4] +
      y * m.storage[ 5] ;
    return this;
  }

  /**
   * @method commit
   * @memberof Vec2  
   * @description Sets the value of the vector to a WebGL vec2 uniform variable.
   * @param {WebGLRenderingContext} gl - rendering context
   * @param {WebGLUniformLocation} uniformLocation - location of the uniform variable in the currently used WebGL program
   */
  commit(gl, uniformLocation){
    gl.uniform2fv(uniformLocation, this.storage);
  }
}

/**
 * @name Vec2#x
 * @description Alias for storage[0];
 * @type Number
 */
Object.defineProperty(Vec2.prototype, 'x', {
  get: function() { return this.storage[0]; },
  set: function(value) { this.storage[0] = value; }
});

/**
 * @name Vec2#y
 * @description Alias for storage[1]; 
 * @type Number
 */
Object.defineProperty(Vec2.prototype, 'y', {
  get: function() { return this.storage[1]; },
  set: function(value) { this.storage[1] = value; }
});


// CommonJS style export to allow file to be required in server side node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Vec2;
}
