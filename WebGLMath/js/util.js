"use strict";

/* exported dft */

/** 
 * @function dft
 * @description Returns the first parameter that is truthy or 0. Used to get the first valid value from a chain of possible defaults.
 * @param {...*} a - A list of possible values.
 * @return {*} The first of the parameters that is truthy or 0, or undefined if there are no such parameters.
 */
const dft = (...a) => {
  let v;
  for(let i=0; i<a.length; i++){
    v = a[i];
    if(v || v === 0){
      return v;
    }
  }
  return undefined;
};

/**
 * A Proxy object that absorbs any chain of method calls and property accesses without effect.
 */
const missingPropertyDummy = new Proxy(() => false, { 
  get: function(){ 
    return missingPropertyDummy; 
  }, 
  apply: function(){ 
    return missingPropertyDummy; 
  }
});

/* exported onlyWarnOnMissingPropertyAccess */

/** 
 * @function onlyWarnOnMissingPropertyAccess
 * @description Hides an object behind a proxy that only gives a warning if a non-existant property is accessed, not an error. This is useful for [UniformProvider]{@link UniformProvider} subclasses with dynamically added properties. If a property is removed or optimized out from GLSL code during a testing change, code setting it still works.
 * @param {...*} a - A list of possible values.
 * @return {*} The first of the parameters that is truthy or 0, or undefined if there are no such parameters.
 */
const onlyWarnOnMissingPropertyAccess =
  target => new Proxy(target, { 
    get : function(target, name){ 
      if(name === "splice"){ return undefined; }
      if(name === "proxyTarget"){ return target; }
      if(!(name in target)){
        console.error(`WARNING: Ignoring attempt to access property ${name}. Is ${name} an unused uniform?` ); 
        return missingPropertyDummy;
      }
      return target[name];
    }
  });

// CommonJS style export to allow file to be required in server side node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = dft;
}
