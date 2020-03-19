"use strict"; 
/* exported GameObject */
class GameObject extends UniformProvider {
  constructor(mesh) { 
    super("gameObject");

    this.position = new Vec3(0, 0, 0); 
    this.orientation = 0; 
    this.scale = new Vec3(1, 1, 1); 

    this.parent = null; 

    this.move = function(){};
    this.control = function(){};
    this.force = new Vec3();
    this.torque = 0;
    this.velocity = new Vec3();
    this.invMass = 1;
    this.backDrag = 1;
    this.sideDrag = 1;
    this.invAngularMass = 1;
    this.angularVelocity = 0;
    this.angularDrag = 1;

    this.addComponentsAndGatherUniforms(mesh); // defines this.modelMatrix
  }

  update() {
  	this.modelMatrix.set().
  		scale(this.scale).
  		rotate(this.orientation).
  		translate(this.position);

    if (this.parent) {
      this.parent.update();
      this.modelMatrix.mul(this.parent.modelMatrix);
    }
  }
}