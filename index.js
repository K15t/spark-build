var extend = require('node.extend');
var gutil = require('gulp-util');
var stringify = require('stringify-object');

extendedConfig = {};

module.exports = function(opts) {
    // ... initialize the configuration based on the default and
    //     customized configuration. The below list of attributes
    //     can be customized in the project gulp file if needed.
    extendedConfig = extend({
        buildProjectRoot: __dirname,
        karmaPort: '9876',
        karmaConfigFile: __dirname + '/build/karma.conf.js',
        karmaConfigFileTemplate: __dirname + '/build/karma.conf.tpl.js',
        jscsrc: __dirname + '/build/.jscsrc'
    }, opts);

    gutil.log("Using the following configuration");
    gutil.log("-------------------------------------------------------------------");
    gutil.log(stringify(extendedConfig, {
        indent: '  ',
        singleQuotes: false
    }));
    gutil.log("-------------------------------------------------------------------");
};

module.exports.getConfig = function() {
    return extendedConfig;
};

require('require-dir')('./build', {recurse: true});
