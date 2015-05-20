var gulp = require('gulp');
var karmaRunner = require('karma').runner;
var config = require('../../../index');

gulp.task('dev:tests', function() {
    karmaRunner.run({port: config.getConfig().karmaPort}, function(exitCode) {
        //do nothing
    });
    //return null;
});
