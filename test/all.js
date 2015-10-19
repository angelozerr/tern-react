exports['test React completion'] = require('./completion/React');
exports['test JSX completion'] = require('./completion/JSX');

if (require.main === module) require("test").run(exports);