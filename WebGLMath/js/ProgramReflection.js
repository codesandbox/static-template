"use strict"; 
/* exported ProgramReflection */
/**
 * Manages data obtained from a WebGL program's using the shader reflection API.
 * It is also able to create properties in target objects, with the type of the properties matching the uniforms.
 * Furthermore, it can set the values of the uniforms from a set of objects with corresponding properties.
 */ 
class ProgramReflection {
  /**
   * Extracts descriptions of uniform inputs from a WebGL program. The inputs should be organized in uniform structs,
   * the names of which indicate where the member fields should be set from. 
   * @param {WebGL2RenderingContext} gl - The WebGL context.
   * @param {WebGLProgram} glProgram - The WebGL program.
   */
  constructor(gl, glProgram) { 
    this.gl = gl; 
    this.glProgram = glProgram;

    this.uniformDescriptors = {};

  	// for all uniforms used in glProgram
  	const nUniforms = gl.getProgramParameter(this.glProgram, gl.ACTIVE_UNIFORMS);
  	for(let i=0; i<nUniforms; i++){ 
  	  const glUniform = gl.getActiveUniform(this.glProgram, i); 
  	  // separate struct name (if exists) and unqualified uniform name
  	  const nameParts = glUniform.name.split('.');
  	  const uniformName = nameParts[nameParts.length - 1];
  	  const structName = nameParts[nameParts.length - 2];

      if(!structName) { continue; }

      this.uniformDescriptors[structName] = this.uniformDescriptors[structName] || [];
      this.uniformDescriptors[structName].push({
        name: uniformName,
        type: glUniform.type,
        size: glUniform.size,
        location: gl.getUniformLocation(this.glProgram, glUniform.name)
      });
    }
  }
  
  /**
   * Creates properties into a target object, or verifies their types if they already exist. The properties have types matching the uniform inputs used in the program. Only those uniforms are reflected what are declared in a struct, whose name is in target.glslStructNames.
   * @param {UniformProvider} target - An object that should gain new properties. It must have the glslStructNames property, which must be an array of string names for the uniform structs to be reflected.
   */  
  definePropertiesMatchingUniforms(target){
    for(const structName of target.glslStructNames) {
      // Skip GLSL struct provided by the target if the program does not need it.
      if(this.uniformDescriptors[structName] === undefined){
        continue;
      }
      for(const uniformDesc of this.uniformDescriptors[structName]) {
        let reflectionVariable = ProgramReflection.makeVar(this.gl, uniformDesc.type, uniformDesc.size);

        if(uniformDesc.name in target){ // if reflection property already exists, check compatibility
          const existingVariable = target[uniformDesc.name];
          if(existingVariable.constructor !== reflectionVariable.constructor ||
            (existingVariable.storage && existingVariable.storage.length) !== 
            (reflectionVariable.storage && reflectionVariable.storage.length)){
            throw new Error(`Trying to reflect uniform ${uniformDesc.name} as a ${reflectionVariable.constructor.name} with element count ${reflectionVariable.storage.length}, but it already exists in the target object as a ${(existingVariable.constructor && existingVariable.constructor.name || "UNKNOWN")} with element count ${(existingVariable.storage && existingVariable.storage.length || "UNKNOWN")}.`);
          }
        }
        Object.defineProperty(target, uniformDesc.name, {
          get: () => reflectionVariable,
          set: arg => {
            if(typeof reflectionVariable !== "number") {
              reflectionVariable.set(arg); 
            } else {
              reflectionVariable = Number(arg);
            }
          },
          configurable : true
        } );
      }
    }
  }
  
  /**
   * Sets values of all uniforms from the properties of the given objects.
   * @param {...UniformProvider} uniformProviders - Objects with properties matching the names and the types of the uniforms to be set. Their glslStructNames property must list uniform struct names they are responsible for setting.
   */
  draw(...uniformProviders) { 
    const gl = this.gl;
    gl.useProgram(this.glProgram);
    let textureUnitCount = 0;

    for(const provider of uniformProviders){
      for(const structName of provider.glslStructNames) {
        if(this.uniformDescriptors[structName] === undefined) { continue; }
        for(const uniformDesc of this.uniformDescriptors[structName]) {
          if(typeof provider[uniformDesc.name] !== "number"){
            provider[uniformDesc.name].commit(gl, uniformDesc.location, textureUnitCount);
          } else {
            gl.uniform1f(uniformDesc.location, provider[uniformDesc.name]);
          }
          //  keep track of texture units used
          if( ProgramReflection.isSampler(gl, uniformDesc.type) ){ 
            textureUnitCount += uniformDesc.size;
          }
        }
      }
    }
  }

  /**
   * @method makeVar
   * @memberof ProgramReflection
   * @static 
   * @description Returns a new reflection variable based on a numerical WebGL type ID.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   * @param {Number} type - The numeric type of the uniform, i.e. a value of a type identifier property in the rendering context.
   * @param {Number} arraySize - The number of elements in the uniform, if it is an array. Otherwise, it must be 1.
   * @return {Vec1 | Vec1Array | Vec2 | Vec2Array | Vec3 | Vec3Array | Vec4 | Vec4Array | Mat4 | Mat4Array | Sampler2D | Sampler2DArray | SamplerCube | SamplerCubeArray | Sampler3D | Sampler3DArray | Sampler2DArrayTexture | Sampler2DArrayTextureArray} The new reflection object.
   */  
  static makeVar(gl, type, arraySize) {
    if(arraySize === 1) {
      switch(type) {
        case gl.FLOAT        : return Number();
        case gl.FLOAT_VEC2   : return new Vec2();
        case gl.FLOAT_VEC3   : return new Vec3();
        case gl.FLOAT_VEC4   : return new Vec4();
        case gl.FLOAT_MAT4   : return new Mat4();
        case gl.UNSIGNED_INT_SAMPLER_2D: 
        case gl.INT_SAMPLER_2D:
        case gl.SAMPLER_2D_SHADOW:
        case gl.SAMPLER_2D   : return new Sampler2D();
        case gl.UNSIGNED_INT_SAMPLER_CUBE: 
        case gl.INT_SAMPLER_CUBE:
        case gl.SAMPLER_CUBE_SHADOW:
        case gl.SAMPLER_CUBE : return new SamplerCube();
        case gl.UNSIGNED_INT_SAMPLER_3D: 
        case gl.INT_SAMPLER_3D:
        case gl.SAMPLER_3D   : return new Sampler3D();
        case gl.UNSIGNED_INT_SAMPLER_2D_ARRAY: 
        case gl.INT_SAMPLER_2D_ARRAY:
        case gl.SAMPLER_2D_SHADOW_ARRAY:
        case gl.SAMPLER_2D_ARRAY   : return new Sampler2DArrayTexture();
      }
    } else {
      switch(type) {
        case gl.FLOAT        : return new Vec1Array(arraySize);
        case gl.FLOAT_VEC2   : return new Vec2Array(arraySize);
        case gl.FLOAT_VEC3   : return new Vec3Array(arraySize);
        case gl.FLOAT_VEC4   : return new Vec4Array(arraySize);
        case gl.FLOAT_MAT4   : return new Mat4Array(arraySize);
        case gl.UNSIGNED_INT_SAMPLER_2D: 
        case gl.INT_SAMPLER_2D:
        case gl.SAMPLER_2D_SHADOW:
        case gl.SAMPLER_2D   : return new Sampler2DArray(arraySize);
        case gl.UNSIGNED_INT_SAMPLER_CUBE: 
        case gl.INT_SAMPLER_CUBE:
        case gl.SAMPLER_CUBE_SHADOW:
        case gl.SAMPLER_CUBE : return new SamplerCubeArray(arraySize);
        case gl.UNSIGNED_INT_SAMPLER_3D: 
        case gl.INT_SAMPLER_3D:
        case gl.SAMPLER_3D   : return new Sampler3DArray(arraySize);
        case gl.UNSIGNED_INT_SAMPLER_2D_ARRAY: 
        case gl.INT_SAMPLER_2D_ARRAY:
        case gl.SAMPLER_2D_SHADOW_ARRAY:
        case gl.SAMPLER_2D_ARRAY   : return new Sampler2DArrayTextureArray(arraySize);
      }
    }
  }

  /**
   * @method isSampler
   * @memberof ProgramReflection
   * @static 
   * @description Returns true if type is a numerical WebGL type ID of a sampler uniform.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   * @param {Number} type - The numeric type of the uniform, i.e. a value of a type identifier property in the rendering context.
   */
  static isSampler(gl, type){
    return  type === gl.SAMPLER_2D ||
            type === gl.SAMPLER_3D ||
            type === gl.SAMPLER_CUBE ||
            type === gl.SAMPLER_2D_SHADOW ||
            type === gl.SAMPLER_2D_ARRAY ||
            type === gl.SAMPLER_2D_ARRAY_SHADOW ||
            type === gl.SAMPLER_CUBE_SHADOW ||
            type === gl.INT_SAMPLER_2D ||
            type === gl.INT_SAMPLER_3D ||
            type === gl.INT_SAMPLER_CUBE ||
            type === gl.INT_SAMPLER_2D_ARRAY ||
            type === gl.UNSIGNED_INT_SAMPLER_2D ||
            type === gl.UNSIGNED_INT_SAMPLER_3D ||
            type === gl.UNSIGNED_INT_SAMPLER_CUBE ||
            type === gl.UNSIGNED_INT_SAMPLER_2D_ARRAY;
  }
}