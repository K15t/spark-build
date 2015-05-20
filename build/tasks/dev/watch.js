var gulp = require('gulp');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');
var karma = require('karma').server;
var config = require('../../../index');

gulp.task('dev:watch', ['dev:clean'], function() {
    runSequence(
        ['dev:prepare-unit', 'dev:scripts', 'dev:partials', 'dev:styles', 'dev:assets'],
        'dev:index',
        function() {
            karma.start({
                'configFile': config.getConfig().karmaConfigFile,
                'singleRun': false
            });
            livereload.listen();
            gulp.watch(config.getConfig().paths.app.index, ['dev:index']);
            gulp.watch(config.getConfig().paths.app.scripts, ['dev:scripts', 'dev:tests']);
            gulp.watch(config.getConfig().paths.app.tests, ['dev:test-scripts', 'dev:tests']);
            gulp.watch(config.getConfig().paths.app.styles, ['dev:styles']);
            gulp.watch(config.getConfig().paths.app.partials, ['dev:partials']);
            gulp.watch(config.getConfig().paths.app.assets, ['dev:assets']);
        });
});