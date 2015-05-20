var gulp = require('gulp');
var karma = require('karma').server;
var config = require('../../../index');

gulp.task('dist:tests', function(done) {
    // execute single run
    karma.start({
        'configFile': config.getConfig().karmaConfigFile,
        'singleRun': true
    }, done);
});