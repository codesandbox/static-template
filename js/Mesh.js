"use strict"; 
/* exported Mesh */
class Mesh extends UniformProvider {
  constructor(material, geometry) {
    super("mesh");
    this.addComponentsAndGatherUniforms(material, geometry);
  }
}