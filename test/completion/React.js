var util = require("./../util");

exports['test React completion'] = function() {
  
  // Completion for tween
  util.assertCompletion("Rea", {
    "start":{"line":0,"ch":0},
    "end":{"line":0,"ch":3},
    "isProperty":false,
    "isObjectKey":false,
    "completions":[{"name":"React","type":"React","origin":"react"}]
  });  
}

exports['test React#createClass methods completion'] = function() {  

  util.assertCompletion("React.createCl", {
    "start":{"line":0,"ch":6},
    "end":{"line":0,"ch":14},
    "isProperty":true,
    "isObjectKey":false,
    "completions":[{"name":"createClass","type":"fn(specification: {}) -> {}","origin":"react"}]
  });
  
}
