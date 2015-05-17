var gulp = require('gulp');
var karma = require('karma').server;
var config = require('../config');

gulp.task('dist:tests', function(done) {
    // execute single run
    karma.start({
        'configFile': config.karmaConfigFile,
        'singleRun': true
    }, done);
});