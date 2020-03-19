"use strict";

window.devtoolsFormatters = [
  {
    header: function(x) {
      if (x.proxyTarget) {
//        return ["span", {"style": "background-color: #fcc"}, "Hello!"];
        return ["object", {"object": x.proxyTarget}];
      } else {
        return null;
      }
    },
    hasBody: function(x) {
      return x.constructor && x.constructor === Proxy;
    },
    body: function(x) {
      const targetRef = ["object", {"object": x.target}];
      return ["ol", {}, ["li", {}, "world!"], ["li", {}, targetRef]];
    }
  }
];