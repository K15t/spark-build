var gulp = require('gulp');
var checker = require('license-checker');
var fs = require('fs');
var extend = require('node.extend');

module.exports = function(config) {
    gulp.task('dist:licenses', function() {

        var defaults = extend({
            licenseChecker: {
                start: './',
                production: true,
                licenseFinalDestDir: '/META-INF/LICENSES'
            }
        }, config);

        checker.init(defaults.licenseChecker,
            function(err, json) {
                if (err) {
                    throw err;
                } else {
                    // ... copy existing license files to the desired target directoy
                    checker.asFiles(json, config.buildTargetDir + defaults.licenseChecker.licenseFinalDestDir);
                    // ... consolidate json e.g. remove all entries from K15t and update license file info to the new location
                    Object.keys(json).forEach(function(moduleName) {
                        if (json[moduleName].publisher && json[moduleName].publisher.toLowerCase() === 'k15t') {
                            delete json[moduleName];
                        } else {
                            if (json[moduleName].licenseFile) {
                                json[moduleName].licenseFile
                                    = defaults.licenseChecker.licenseFinalDestDir + '/' + moduleName + "-LICENSE.txt";
                            }
                        }
                    });
                    // ... write summary file to the root directory of the final artifact
                    fs.writeFileSync(config.buildTargetDir + '/classes/' + config.moduleName + '-THIRD-PARTY.txt',
                        JSON.stringify(json, null, 2));
                }
            });
    });
};
