var fs = require('fs');
var config = require('./config');

// ---------------------------------------------------------------------------------------------
// Overall utility function for dev and dist build execution
// ---------------------------------------------------------------------------------------------

exports.isDir = function(path) {
    return fs.existsSync(path) && fs.lstatSync(path).isDirectory();
};

exports.getDistDir = function() {
    return "../../../../target/classes/" + config.resourcePath;
};

exports.devDir = function() {
    return "../../../../target/spark/" + config.resourcePath;
};