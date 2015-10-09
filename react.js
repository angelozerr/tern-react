(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"), require("acorn/dist/acorn"), require("acorn-jsx"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern", "acorn/dist/acorn", "acorn-jsx" ], mod);
    mod(tern, tern, acorn, acornJSX);
})(function(infer, tern, acorn, acornJSX) {
  "use strict";
    
  tern.registerPlugin("react", function(server, options) {
	  acornJSX(acorn);
	  server.on("preParse", preParse);	  
  });
  
  function preParse(text, options) {
	var plugins = options.plugins;
	if (!plugins) plugins = options.plugins = {};	
    plugins["jsx"] = true;
  }
    
})