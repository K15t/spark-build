exports.buildProjectRoot = __dirname + "/../..";

// ---------------------------------------------------------------------------------------------
// Required project specific configuration
// ---------------------------------------------------------------------------------------------

exports.resourcePath = RESOURCE_PATH;
exports.moduleName = MODULE_NAME;
exports.paths = PATHS;

// ---------------------------------------------------------------------------------------------
// Customizable values which will be initialized by the corresponding global variable or the
// defined default.
// ---------------------------------------------------------------------------------------------

try {
    exports.karmaPort = KARMA_PORT;
} catch (error) {
    exports.karmaPort = '9876';
}

try {
    exports.karmaConfigFile = KARMA_CONFIG_FILE;
} catch (error) {
    exports.karmaConfigFile = this.buildProjectRoot + '/build/karma.conf.js';
}

try {
    exports.karmaConfigFileTemplate = KARMA_CONFIG_FILE_TPL;
} catch (error) {
    exports.karmaConfigFileTemplate = this.buildProjectRoot + '/build/karma.conf.tpl.js';
}

try {
    exports.jscsrc = JSCSRC_FILE;
} catch (error) {
    exports.jscsrc = this.buildProjectRoot + '/build/.jscsrc';
}
