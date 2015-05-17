var gulp = require('gulp');
var license = require('bower-license');
var fs = require('fs');
var utils = require('../utils');
var config = require('../config');

gulp.task('dist:licenses', function() {

    license.init('./', function(licenseMap) {
        fs.writeFileSync(utils.getDistDir() + '/' + config.moduleName + '-THIRD-PARTY.txt', JSON.stringify(licenseMap, null, 2));
    });

});

