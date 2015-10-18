(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("acorn/dist/acorn"), require("acorn/dist/walk"), require("acorn-jsx"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern", "acorn/dist/acorn", "acorn/dist/walk", "acorn-jsx" ], mod);
    mod(tern, tern, acorn, acorn.walk, acornJSX); // Plain browser env
})(function(infer, tern, acorn, walk, acornJSX) {
  "use strict";
  
  tern.registerPlugin("react", function(server, options) {
    acornJSX(acorn);
    overrideWalkBase();
    overrideTernScopeGatherer();
    overrideTernInferWrapper();
    server.on("preParse", preParse);    
  });
  
  function preParse(text, options) {
    var plugins = options.plugins;
    if (!plugins) plugins = options.plugins = {};	
    plugins["jsx"] = true;
  }

  // Override acorn.walk with JSX
  // see https://github.com/chtefi/acorn-jsx-walk/blob/master/index.js
  function overrideWalkBase() {
    var base = walk.base;
    base.JSXElement = function (node, st, c) {
     // node.openingElement.name
     node.children.forEach(function (n) {
       c(n, st);
     });
     // node.closingElement.name
    };

    base.JSXExpressionContainer = function (node, st, c) {
      c(node.expression, st);
    };
  }
  
  function overrideTernScopeGatherer() {
    if (infer.scopeGatherer) {
      infer.scopeGatherer = walk.make({
        JSXElement: function(node, scopes, c) {
          console.log(node)
        }
      }, infer.scopeGatherer);
    }
  }
  
  function overrideTernInferWrapper() {
    if (infer.inferWrapper) {
      infer.inferWrapper = walk.make({
        JSXElement: function(node, scopes, c) {
          console.log(node)
        }
      }, infer.inferWrapper);
    }    
  }
  
})