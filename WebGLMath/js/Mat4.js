/**
 * @file WebGLMath {@link Mat4} class
 * @copyright Laszlo Szecsi 2017
 */
"use strict";
/**
 * Four-by-four matrix of 32-bit floats. May reflect an GLSL mat4 uniform variable.
 * <BR> Uses column-major internal representation for WebGL compatibility but offers a row-major external interface through constructor parametrization and element indexes.
 * Transformation methods [translate]{@link Mat4#translate} and [rotate]{@link Mat4#rotate} assume row vectors and multiplication with the matrix from the right.
 */
class Mat4 { 
  /**
   * Creates a matrix.
   * @description  Without parameters, initializes the vector to (0, 0, 0, 1).
   * @param {Mat4 | Array | number} [m=identity] - Matrix to copy elements from, or array of elements in row-major format, or matrix element in row 0, column 0.
   * @param {number} [m01=0] - Matrix element in the row 0, column 1.
   * @param {number} [m02=0] - Matrix element in the row 0, column 2.
   * @param {number} [m03=0] - Matrix element in the row 0, column 3.
   * @param {number} [m10=0] - Matrix element in the row 1, column 0. 
   * @param {number} [m11=1] - Matrix element in the row 1, column 1.
   * @param {number} [m12=0] - Matrix element in the row 1, column 2.
   * @param {number} [m13=0] - Matrix element in the row 1, column 3.
   * @param {number} [m20=0] - Matrix element in the row 2, column 0. 
   * @param {number} [m21=0] - Matrix element in the row 2, column 1.
   * @param {number} [m22=1] - Matrix element in the row 2, column 2.
   * @param {number} [m23=0] - Matrix element in the row 2, column 3.
   * @param {number} [m30=0] - Matrix element in the row 3, column 0. 
   * @param {number} [m31=0] - Matrix element in the row 3, column 1.
   * @param {number} [m32=0] - Matrix element in the row 3, column 2.
   * @param {number} [m33=1] - Matrix element in the row 3, column 3.
   */
  constructor(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m15){
    /**
     * @name Mat4#storage
     * @description 16-element typed array for matrix storage.
     * @type Float32Array
     */
    /*jshint unused:false*/
    this.storage = new Float32Array(16);
    this.set.apply(this, arguments);
  };

  /**
   * @method clone
   * @memberof Mat4 
   * @description Creates a copy.
   * @return {Mat4} A new instance with identical contents.
   */
  clone() {
    const copy = Object.create(Mat4.prototype);
    copy.storage = new Float32Array(this.storage);
    return copy;
  };

  /**
   * @method set
   * @memberof Mat4  
   * @description Sets the matrix elements from another matrix or array, given in row-major format. Without parameters, sets the indentity matrix.
   * @param {Mat4 | Array | number} [m=identity] - Matrix to copy elements from, or array of elements in row-major format, or matrix element in row 0, column 0.
   * @param {number} [m01=0] - Matrix element in the row 0, column 1.
   * @param {number} [m02=0] - Matrix element in the row 0, column 2.
   * @param {number} [m03=0] - Matrix element in the row 0, column 3.
   * @param {number} [m10=0] - Matrix element in the row 1, column 0. 
   * @param {number} [m11=1] - Matrix element in the row 1, column 1.
   * @param {number} [m12=0] - Matrix element in the row 1, column 2.
   * @param {number} [m13=0] - Matrix element in the row 1, column 3.
   * @param {number} [m20=0] - Matrix element in the row 2, column 0. 
   * @param {number} [m21=0] - Matrix element in the row 2, column 1.
   * @param {number} [m22=1] - Matrix element in the row 2, column 2.
   * @param {number} [m23=0] - Matrix element in the row 2, column 3.
   * @param {number} [m30=0] - Matrix element in the row 3, column 0. 
   * @param {number} [m31=0] - Matrix element in the row 3, column 1.
   * @param {number} [m32=0] - Matrix element in the row 3, column 2.
   * @param {number} [m33=1] - Matrix element in the row 3, column 3.
   * @return {Mat4} this
   */
  set(m, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    /*jshint unused:false*/  
    this.storage[ 0]  =  dft(m !== 0 && m && m[ 0],   arguments[ 0] ,  1);
    this.storage[ 4]  =                 m && m[ 1] || arguments[ 1] || 0;
    this.storage[ 8]  =                 m && m[ 2] || arguments[ 2] || 0;
    this.storage[12]  =                 m && m[ 3] || arguments[ 3] || 0;
    this.storage[ 1]  =                 m && m[ 4] || arguments[ 4] || 0;
    this.storage[ 5]  =  dft(m !== 0 && m && m[ 5],   arguments[ 5] ,  1);
    this.storage[ 9]  =                 m && m[ 6] || arguments[ 6] || 0;
    this.storage[13]  =                 m && m[ 7] || arguments[ 7] || 0;
    this.storage[ 2]  =                 m && m[ 8] || arguments[ 8] || 0;
    this.storage[ 6]  =                 m && m[ 9] || arguments[ 9] || 0;
    this.storage[10]  =  dft(m !== 0 && m && m[10],   arguments[10] ,  1);
    this.storage[14]  =                 m && m[11] || arguments[11] || 0;
    this.storage[ 3]  =                 m && m[12] || arguments[12] || 0;
    this.storage[ 7]  =                 m && m[13] || arguments[13] || 0;
    this.storage[11]  =                 m && m[14] || arguments[14] || 0;
    this.storage[15]  =  dft(m !== 0 && m && m[15],   arguments[15] ,  1);
    return this;
  }

  /**
   * @method premul
   * @memberof Mat4  
   * @description Multiplies the matrix with another matrix from the left, overwriting this matrix with the result.
   * @param {Mat4} m - Matrix to multiply with.
   * @return {Mat4} this
   */
  premul(m) {
    const n00 = this.storage[0];
    const n01 = this.storage[4];
    const n02 = this.storage[8];
    const n03 = this.storage[12];
    const n10 = this.storage[1];
    const n11 = this.storage[5];
    const n12 = this.storage[9];
    const n13 = this.storage[13];
    const n20 = this.storage[2];
    const n21 = this.storage[6];
    const n22 = this.storage[10];
    const n23 = this.storage[14];
    const n30 = this.storage[3];
    const n31 = this.storage[7];
    const n32 = this.storage[11];
    const n33 = this.storage[15];
    const m00 = m.storage[0];
    const m01 = m.storage[4];
    const m02 = m.storage[8];
    const m03 = m.storage[12];
    const m10 = m.storage[1];
    const m11 = m.storage[5];
    const m12 = m.storage[9];
    const m13 = m.storage[13];
    const m20 = m.storage[2];
    const m21 = m.storage[6];
    const m22 = m.storage[10];
    const m23 = m.storage[14];
    const m30 = m.storage[3];
    const m31 = m.storage[7];
    const m32 = m.storage[11];
    const m33 = m.storage[15];
    this.storage[0] = (m00 * n00) + (m01 * n10) + (m02 * n20) + (m03 * n30);
    this.storage[1] = (m10 * n00) + (m11 * n10) + (m12 * n20) + (m13 * n30);
    this.storage[2] = (m20 * n00) + (m21 * n10) + (m22 * n20) + (m23 * n30);
    this.storage[3] = (m30 * n00) + (m31 * n10) + (m32 * n20) + (m33 * n30);
    this.storage[4] = (m00 * n01) + (m01 * n11) + (m02 * n21) + (m03 * n31);
    this.storage[5] = (m10 * n01) + (m11 * n11) + (m12 * n21) + (m13 * n31);
    this.storage[6] = (m20 * n01) + (m21 * n11) + (m22 * n21) + (m23 * n31);
    this.storage[7] = (m30 * n01) + (m31 * n11) + (m32 * n21) + (m33 * n31);
    this.storage[8] = (m00 * n02) + (m01 * n12) + (m02 * n22) + (m03 * n32);
    this.storage[9] = (m10 * n02) + (m11 * n12) + (m12 * n22) + (m13 * n32);
    this.storage[10] = (m20 * n02) + (m21 * n12) + (m22 * n22) + (m23 * n32);
    this.storage[11] = (m30 * n02) + (m31 * n12) + (m32 * n22) + (m33 * n32);
    this.storage[12] = (m00 * n03) + (m01 * n13) + (m02 * n23) + (m03 * n33);
    this.storage[13] = (m10 * n03) + (m11 * n13) + (m12 * n23) + (m13 * n33);
    this.storage[14] = (m20 * n03) + (m21 * n13) + (m22 * n23) + (m23 * n33);
    this.storage[15] = (m30 * n03) + (m31 * n13) + (m32 * n23) + (m33 * n33);
    return this;
  };

  /**
   * @method mul
   * @memberof Mat4  
   * @description Multiplies the matrix with another matrix from the right, overwriting this matrix with the result.
   * @param {Mat4} m - Matrix to multiply with.
   * @return {Mat4} this
   */
  mul(m) {
    const m00 = this.storage[0];
    const m01 = this.storage[4];
    const m02 = this.storage[8];
    const m03 = this.storage[12];
    const m10 = this.storage[1];
    const m11 = this.storage[5];
    const m12 = this.storage[9];
    const m13 = this.storage[13];
    const m20 = this.storage[2];
    const m21 = this.storage[6];
    const m22 = this.storage[10];
    const m23 = this.storage[14];
    const m30 = this.storage[3];
    const m31 = this.storage[7];
    const m32 = this.storage[11];
    const m33 = this.storage[15];
    const n00 = m.storage[0];
    const n01 = m.storage[4];
    const n02 = m.storage[8];
    const n03 = m.storage[12];
    const n10 = m.storage[1];
    const n11 = m.storage[5];
    const n12 = m.storage[9];
    const n13 = m.storage[13];
    const n20 = m.storage[2];
    const n21 = m.storage[6];
    const n22 = m.storage[10];
    const n23 = m.storage[14];
    const n30 = m.storage[3];
    const n31 = m.storage[7];
    const n32 = m.storage[11];
    const n33 = m.storage[15];
    this.storage[0] = (m00 * n00) + (m01 * n10) + (m02 * n20) + (m03 * n30);
    this.storage[1] = (m10 * n00) + (m11 * n10) + (m12 * n20) + (m13 * n30);
    this.storage[2] = (m20 * n00) + (m21 * n10) + (m22 * n20) + (m23 * n30);
    this.storage[3] = (m30 * n00) + (m31 * n10) + (m32 * n20) + (m33 * n30);
    this.storage[4] = (m00 * n01) + (m01 * n11) + (m02 * n21) + (m03 * n31);
    this.storage[5] = (m10 * n01) + (m11 * n11) + (m12 * n21) + (m13 * n31);
    this.storage[6] = (m20 * n01) + (m21 * n11) + (m22 * n21) + (m23 * n31);
    this.storage[7] = (m30 * n01) + (m31 * n11) + (m32 * n21) + (m33 * n31);
    this.storage[8] = (m00 * n02) + (m01 * n12) + (m02 * n22) + (m03 * n32);
    this.storage[9] = (m10 * n02) + (m11 * n12) + (m12 * n22) + (m13 * n32);
    this.storage[10] = (m20 * n02) + (m21 * n12) + (m22 * n22) + (m23 * n32);
    this.storage[11] = (m30 * n02) + (m31 * n12) + (m32 * n22) + (m33 * n32);
    this.storage[12] = (m00 * n03) + (m01 * n13) + (m02 * n23) + (m03 * n33);
    this.storage[13] = (m10 * n03) + (m11 * n13) + (m12 * n23) + (m13 * n33);
    this.storage[14] = (m20 * n03) + (m21 * n13) + (m22 * n23) + (m23 * n33);
    this.storage[15] = (m30 * n03) + (m31 * n13) + (m32 * n23) + (m33 * n33);
    return this;
  }

  /**
   * @method scale
   * @memberof Mat4  
   * @description Multiplies the matrix with a scaling transformation matrix from the right, overwriting this matrix with the result.
   * @param {Vec3 | Object | Number} [u=1] - Any object (properties x, y, z are interpreted as scaling factors along the respective axes, if given), or a numerical value for scaling factor along x.
   * @param {Number} [v=1] - Ignored if u.y is defined. Otherwise, the value for the scaling factor along y. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [s=1] - Ignored if u.z is defined. Otherwise, the value for the scaling factor along z. Defaults to the value of parameter u, if it is a number.
   * @return {Mat4} this
   */
  scale(u, v, s) {
    const sx = dft(u !== 0 && u && u.x, Number(u).valueOf(), 1);
    const sy = dft(u !== 0 && u && u.y, Number(v).valueOf(), Number(u).valueOf(), 1);
    const sz = dft(u !== 0 && u && u.z, Number(s).valueOf(), Number(u).valueOf(), 1);
    this.storage[ 0] *= sx;
    this.storage[ 1] *= sx;
    this.storage[ 2] *= sx;
    this.storage[ 3] *= sx;
    this.storage[ 4] *= sy;
    this.storage[ 5] *= sy;
    this.storage[ 6] *= sy;
    this.storage[ 7] *= sy;
    this.storage[ 8] *= sz;
    this.storage[ 9] *= sz;
    this.storage[10] *= sz;
    this.storage[11] *= sz;
    return this;  
  }

  /**
   * @method rotate
   * @memberof Mat4  
   * @description Multiplies the matrix with a scaling transformation matrix from the right, overwriting this matrix with the result. Rotates around z if no axis is given.
   * @param {Number} angle - Rotation angle in radians. A right-handed coordinate system is assumed, meaning positive rotation around axis z rotates counterclockwise in the plane where x points right and y points up.
   * @param {Vec3 | Object | Number} [u=0] - Any object (properties x, y, z are interpreted as rotation axis elements, if given), or a numerical value for rotation axis element x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for rotation axis element y. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [s=0] - Ignored if u.z is defined. Otherwise, the value for rotation axis element z. Defaults to the value of parameter u, if it is a number.
   * @return {Mat4} this
   */
  rotate(angle, u, v, s) {
    let x = u && u.x || Number(u).valueOf() || 0;
    let y = u && u.y || Number(v).valueOf() || 0;
    let z = u && u.z || Number(s).valueOf() || 0;
    const axisLength2 = x*x + y*y + z*z;
    if(axisLength2 < 0.0001){
      x=0; y=0; z=1;
    } else if(axisLength2 < 0.999 || axisLength2 > 1.001) {
      const axisLength = Math.sqrt(axisLength2);
      x /= axisLength;
      y /= axisLength;
      z /= axisLength;
    }
    const cosa = Math.cos(angle);
    const sina = Math.sin(angle);
    const C = 1.0 - cosa;
    const m11 = x * x * C + cosa;
    const m21 = x * y * C - z * sina;
    const m31 = x * z * C + y * sina;
    const m12 = y * x * C + z * sina;
    const m22 = y * y * C + cosa;
    const m32 = y * z * C - x * sina;
    const m13 = z * x * C - y * sina;
    const m23 = z * y * C + x * sina;
    const m33 = z * z * C + cosa;
    const t0  = this.storage[ 0] * m11 + this.storage[ 4] * m21 + this.storage[ 8] * m31;
    const t4  = this.storage[ 0] * m12 + this.storage[ 4] * m22 + this.storage[ 8] * m32;
    const t8  = this.storage[ 0] * m13 + this.storage[ 4] * m23 + this.storage[ 8] * m33;
    const t1  = this.storage[ 1] * m11 + this.storage[ 5] * m21 + this.storage[ 9] * m31;
    const t5  = this.storage[ 1] * m12 + this.storage[ 5] * m22 + this.storage[ 9] * m32;
    const t9  = this.storage[ 1] * m13 + this.storage[ 5] * m23 + this.storage[ 9] * m33;
    const t2  = this.storage[ 2] * m11 + this.storage[ 6] * m21 + this.storage[10] * m31;
    const t6  = this.storage[ 2] * m12 + this.storage[ 6] * m22 + this.storage[10] * m32;
    const t10 = this.storage[ 2] * m13 + this.storage[ 6] * m23 + this.storage[10] * m33;
    const t3  = this.storage[ 3] * m11 + this.storage[ 7] * m21 + this.storage[11] * m31;
    const t7  = this.storage[ 3] * m12 + this.storage[ 7] * m22 + this.storage[11] * m32;
    const t11 = this.storage[ 3] * m13 + this.storage[ 7] * m23 + this.storage[11] * m33;
    this.storage[ 0] = t0 ;
    this.storage[ 4] = t4 ;
    this.storage[ 8] = t8 ;
    this.storage[ 1] = t1 ;
    this.storage[ 5] = t5 ;
    this.storage[ 9] = t9 ;
    this.storage[ 2] = t2 ;
    this.storage[ 6] = t6 ;
    this.storage[10] = t10;
    this.storage[ 3] = t3 ;
    this.storage[ 7] = t7 ;
    this.storage[11] = t11;
    return this;  
  }

  /**
   * @method translate
   * @memberof Mat4  
   * @description Multiplies the matrix with a transation transformation matrix from the right, overwriting this matrix with the result.
   * @param {Vec3 | Object | Number} [u=0] - Any object (properties x, y, z are interpreted as trnalstion vector elmeents, if given), or a numerical value for translation along x.
   * @param {Number} [v=0] - Ignored if u.y is defined. Otherwise, the value for translation along y. Defaults to the value of parameter u, if it is a number.
   * @param {Number} [s=0] - Ignored if u.z is defined. Otherwise, the value for translation along z. Defaults to the value of parameter u, if it is a number.
   * @return {Mat4} this
   */
  translate(u, v, s) {
    const x = u && u.x || Number(u).valueOf() || 0;
    const y = u && u.y || Number(v).valueOf() || 0;
    const z = u && u.z || Number(s).valueOf() || 0;
    this.storage[ 0] += this.storage[12] * x;
    this.storage[ 4] += this.storage[12] * y;
    this.storage[ 8] += this.storage[12] * z;
    this.storage[ 1] += this.storage[13] * x;
    this.storage[ 5] += this.storage[13] * y;
    this.storage[ 9] += this.storage[13] * z;
    this.storage[ 2] += this.storage[14] * x;
    this.storage[ 6] += this.storage[14] * y;
    this.storage[10] += this.storage[14] * z;  
    this.storage[ 3] += this.storage[15] * x;
    this.storage[ 7] += this.storage[15] * y;
    this.storage[11] += this.storage[15] * z;
    return this;      
  }

  /**
   * @method transpose
   * @memberof Mat4  
   * @description Transposes the matrix in place, overwriting this matrix with the result.
   * @return {Mat4} this
   */
  transpose() {
    let temp = this.storage[4];
    this.storage[4] = this.storage[1];
    this.storage[1] = temp;
    temp = this.storage[8];
    this.storage[8] = this.storage[2];
    this.storage[2] = temp;
    temp = this.storage[12];
    this.storage[12] = this.storage[3];
    this.storage[3] = temp;
    temp = this.storage[9];
    this.storage[9] = this.storage[6];
    this.storage[6] = temp;
    temp = this.storage[13];
    this.storage[13] = this.storage[7];
    this.storage[7] = temp;
    temp = this.storage[14];
    this.storage[14] = this.storage[11];
    this.storage[11] = temp;
    return this;  
  }

  /**
   * @method invert
   * @memberof Mat4  
   * @description Inverts the matrix in place, overwriting this matrix with the result.
   * @return {Mat4} this
   */
  invert() {
    const a00 = this.storage[0];
    const a01 = this.storage[1];
    const a02 = this.storage[2];
    const a03 = this.storage[3];
    const m000 = this.storage[4];
    const m001 = this.storage[5];
    const m002 = this.storage[6];
    const m003 = this.storage[7];
    const m100 = this.storage[8];
    const m101 = this.storage[9];
    const m102 = this.storage[10];
    const m103 = this.storage[11];
    const m200 = this.storage[12];
    const m201 = this.storage[13];
    const m202 = this.storage[14];
    const m203 = this.storage[15];
    const b00 = a00 * m001 - a01 * m000;
    const b01 = a00 * m002 - a02 * m000;
    const b02 = a00 * m003 - a03 * m000;
    const b03 = a01 * m002 - a02 * m001;
    const b04 = a01 * m003 - a03 * m001;
    const b05 = a02 * m003 - a03 * m002;
    const b06 = m100 * m201 - m101 * m200;
    const b07 = m100 * m202 - m102 * m200;
    const b08 = m100 * m203 - m103 * m200;
    const b09 = m101 * m202 - m102 * m201;
    const m010 = m101 * m203 - m103 * m201;
    const m011 = m102 * m203 - m103 * m202;
    const det =
        (b00 * m011 - b01 * m010 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06);
    if (det === 0.0) {
        return this;
    }
    const invDet = 1.0 / det;
    this.storage[0] = (m001 * m011 - m002 * m010 + m003 * b09) * invDet;
    this.storage[1] = (-a01 * m011 + a02 * m010 - a03 * b09) * invDet;
    this.storage[2] = (m201 * b05 - m202 * b04 + m203 * b03) * invDet;
    this.storage[3] = (-m101 * b05 + m102 * b04 - m103 * b03) * invDet;
    this.storage[4] = (-m000 * m011 + m002 * b08 - m003 * b07) * invDet;
    this.storage[5] = (a00 * m011 - a02 * b08 + a03 * b07) * invDet;
    this.storage[6] = (-m200 * b05 + m202 * b02 - m203 * b01) * invDet;
    this.storage[7] = (m100 * b05 - m102 * b02 + m103 * b01) * invDet;
    this.storage[8] = (m000 * m010 - m001 * b08 + m003 * b06) * invDet;
    this.storage[9] = (-a00 * m010 + a01 * b08 - a03 * b06) * invDet;
    this.storage[10] = (m200 * b04 - m201 * b02 + m203 * b00) * invDet;
    this.storage[11] = (-m100 * b04 + m101 * b02 - m103 * b00) * invDet;
    this.storage[12] = (-m000 * b09 + m001 * b07 - m002 * b06) * invDet;
    this.storage[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    this.storage[14] = (-m200 * b03 + m201 * b01 - m202 * b00) * invDet;
    this.storage[15] = (m100 * b03 - m101 * b01 + m102 * b00) * invDet;
    return this;
  }

  /**
   * @method commit
   * @memberof Mat4  
   * @description Sets the value of the matrix to a WebGL mat4 uniform variable.
   * @param {WebGLRenderingContext} gl - rendering context
   * @param {WebGLUniformLocation} uniformLocation - location of the uniform variable in the currently used WebGL program
   */
  commit(gl, uniformLocation){
    gl.uniformMatrix4fv(uniformLocation, false, this.storage);
  }

  /**
   * @method print
   * @memberof Mat4
   * @description Pretty prints the matrix contents on the console.
   */
  print(){
    console.table({
      row0:{column0:this.storage[ 0], column1:this.storage[ 4], column2:this.storage[ 8], column3:this.storage[12]},
      row1:{column0:this.storage[ 1], column1:this.storage[ 5], column2:this.storage[ 9], column3:this.storage[13]},
      row3:{column0:this.storage[ 2], column1:this.storage[ 6], column2:this.storage[10], column3:this.storage[14]},
      row4:{column0:this.storage[ 3], column1:this.storage[ 7], column2:this.storage[11], column3:this.storage[15]}
    }); 
  }
}

(function() {
  for(let i=0; i<4; i++){
    for(let j=0; j<4; j++){     
      const columnMajorIndex = j + 4*i;
      Object.defineProperty(Mat4.prototype, i + 4*j, {
        get: function() { return this.storage[columnMajorIndex]; },
        set: function(value) { this.storage[columnMajorIndex] = value; }
      });
    }
  }
})();

// CommonJS style export to allow file to be required in server side node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Mat4;
}
