"use strict";
/* exported UniformProvider */ 
/**
 * A Component base class using the Composite pattern.
 * [ProgramReflection]{ProgramReflection.html} can be used to add properties to UniformProvider-subclass-instances, reflecting uniform inputs of shader programs. 
 */
class UniformProvider {
  /**
   * Should be called by subclass constructors. Creates a UniformProvider without any subcomponents.
   * @param {...String} glslStructNames - The names of the uniform structs in the shaders that should be reflected in ---and their values provided by--- this object.   
   */
  constructor(...glslStructNames){
    this.glslStructNames = glslStructNames;
    this.components = new Set();
  }

  /**
   * Adds subcomponents and calls [addComponentsAndGatherUniforms]{addComponentsAndGatherUniforms}. 
   * [ProgramReflection]{ProgramReflection.html} instances at the leaves of the component hierarchy can then create properties matching the programs' uniforms in this object.
   * @param {...UniformProvider} components - Subcomponents to add.
   */
  addComponentsAndGatherUniforms(...components){
    for(const component of components){
      this.components.add(component);
    }
    this.definePropertiesMatchingUniforms(this);
  }

  /**
   * Recursively calls definePropertiesMatchingUniforms on subcomponents. 
   * [ProgramReflection]{ProgramReflection.html} instances at the leaves of the component hierarchy can then create properties matching the programs' uniforms in the target object.
   * @param {UniformProvider} target - The target object.
   */
  definePropertiesMatchingUniforms(target){
    for(const component of this.components){
      if('definePropertiesMatchingUniforms' in component){
        component.definePropertiesMatchingUniforms(target);
      }
    }
  }

  /**
   * Recursively calls draw on subcomponents, inserting all providers along the call path into the parameter list.
   * [ProgramReflection]{ProgramReflection.html} instances at the leaves of the component hierarchy can then set uniform values from all providers in the parent chain.
   * Other drawable objects (notably geometries) at the leaves of the node hierarchy can draw contents.
   */
  draw(...uniformProviders){
    for(const component of this.components){
      component.draw(this, ...uniformProviders);
    }
  }

  /**
   * Constructs a map of overrides from the overrider list,
   * and returns an object that implements the draw method to
   * call [drawWithOverrides]{UniformProvider.js#drawWithOverrides} with it.
   */
  using(...overriders){
    const overrides = {};
    for(const overrider of overriders) {
      overrides[overrider.constructor.name] = overrider;
    }    
    return {
      target : this,
      draw : function(...uniformProviders){

        this.target.drawWithOverrides(overrides, ...uniformProviders);
      },
      drawWithOverrides : function(overrides, ...uniformProviders){
        overrides[overrider.constructor.name] = overrider;
        this.target.drawWithOverrides(overrides, ...uniformProviders);
      }        
    };
  }

  /**
   * Recursively calls drawWithOverrides on subcomponents, but if there is
   * an object of matching type in overrides, drawWithOverrides is called
   * on it instead of the subcomponent.
   */
  drawWithOverrides(overrides, ...uniformProviders){
    for(let component of this.components){
      if(component.constructor.name in overrides){
        component = overrides[component.constructor.name];
      }
      if('drawWithOverrides' in component) {
        component.drawWithOverrides(overrides, this, ...uniformProviders);
      } else {
        component.draw(this, ...uniformProviders);
      }
    }
  }  
  
}

