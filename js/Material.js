"use strict"; 
/* exported Material */
class Material extends UniformProvider {
  constructor(program) { 
    super("material");
    this.addComponentsAndGatherUniforms(program);
    return onlyWarnOnMissingPropertyAccess(this);
  }
}