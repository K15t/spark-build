var extend = require('node.extend');
var gutil = require('gulp-util');
var stringify = require('stringify-object');
var requireDir = require('require-dir');
var path = require('path');

// require all tasks and invoke them with a config
var initializeTasks = function(dir, config) {
    var tasks = requireDir(dir);
    Object.keys(tasks).forEach(function(path) {
        if(typeof tasks[path] === 'function') {
            tasks[path](config);
        }
    });
};

module.exports = function(opts) {
    // ... initialize the configuration based on the default and
    //     customized configuration. The below list of attributes
    //     can be customized in the project gulp file if needed.
    var extendedConfig = extend({
        buildTargetDir: '../../../../target',
        buildProjectRoot: __dirname,
        karmaPort: '9876',
        karmaConfigFile: path.join(__dirname, '/build/karma.conf.js'),
        karmaConfigFileTemplate: path.join(__dirname, '/build/karma.conf.tpl.js'),
        jscsrc: path.join(__dirname, '/build/.jscsrc'),
        distDir: path.join('../../../../target/classes', opts.resourcePath || ''),
        devDir: path.join('../../../../target/spark', opts.resourcePath || '')
    }, opts);

    gutil.log("Using the following configuration");
    gutil.log("-------------------------------------------------------------------");
    gutil.log(stringify(extendedConfig, {
        indent: '  ',
        singleQuotes: false
    }));
    gutil.log("-------------------------------------------------------------------");

    // initialize tasks
    initializeTasks('./build/tasks', extendedConfig);
    initializeTasks('./build/tasks/dev', extendedConfig);
    initializeTasks('./build/tasks/dist', extendedConfig);

    return {
      getConfig: function() {
        return extendedConfig;
      }
    };
};
