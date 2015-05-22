var gulp = require('gulp');
var license = require('bower-license');
var fs = require('fs');

module.exports = function(config) {
    gulp.task('dist:licenses', function() {
        license.init('./', function(licenseMap) {
            fs.writeFileSync(config.buildTargetDir + '/classes/' + config.moduleName + '-THIRD-PARTY.txt',
                JSON.stringify(licenseMap, null, 2));
        });
    });
};
