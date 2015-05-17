var gulp = require('gulp');
var karmaRunner = require('karma').runner;
var config = require('../config');

gulp.task('dev:tests', function() {
    karmaRunner.run({port: config.karmaPort}, function(exitCode) {
        //do nothing
    });
    //return null;
});
