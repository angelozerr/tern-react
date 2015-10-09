(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
  "use strict";
    
  tern.registerPlugin("react", function(server, options) {
	  server.on("preParse", preParse);
	  acornJSX(acorn);
  });
  
  function preParse(text, options) {
	var plugins = options.plugins;
	if (!plugins) plugins = options.plugins = {};	
    plugins["jsx"] = true;
  }
    
})