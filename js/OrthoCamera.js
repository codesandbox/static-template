"use strict";
/* exported OrthoCamera */
class OrthoCamera extends UniformProvider {
  constructor(...programs) { 
    super("camera");
    this.position = new Vec2(0, 0); 
    this.rotation = 0; 
    this.windowSize = new Vec2(20, 20);  
    
    this.viewProjMatrix = new Mat4();
    this.viewProjMatrixInverse = new Mat4(); 

    this.addComponentsAndGatherUniforms(...programs);
    this.update();  
  }

  update() { 
    this.viewProjMatrixInverse.set(). 
      scale(0.5). 
      scale(this.windowSize). 
      rotate(this.rotation). 
      translate(this.position);
    this.viewProjMatrix.set().
      scale(0.5). 
      scale(this.windowSize). 
      rotate(this.rotation). 
      translate(this.position).
      invert();
  }

  setAspectRatio(ar) { 
    this.windowSize.x = this.windowSize.y * ar;
    this.update();
  } 
}