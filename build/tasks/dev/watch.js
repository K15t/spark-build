var gulp = require('gulp');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');
var karma = require('karma').server;

module.exports = function(config) {
    gulp.task('dev:watch', ['dev:clean', 'dev:copy-local-libs'], function() {
        runSequence(
            ['dev:prepare-unit', 'dev:scripts', 'dev:partials', 'dev:styles', 'dev:assets'],
            'dev:index',
            function() {
                karma.start({
                    'configFile': config.karmaConfigFile,
                    'singleRun': false
                });
                livereload.listen();
                gulp.watch(config.paths.app.index, ['dev:index']);
                gulp.watch(config.paths.app.libs).on('change', function(file) {
                    gulp.src(file.path, {'base': '.'})
                    .pipe(gulp.dest(config.rootDir + '/src/libs/dummy'))
                });
                gulp.watch(config.paths.app.scripts, ['dev:scripts', 'dev:tests']);
                gulp.watch(config.paths.app.tests, ['dev:test-scripts', 'dev:tests']);
                gulp.watch(config.paths.app.styles, ['dev:styles']);
                gulp.watch(config.paths.app.partials, ['dev:partials']);
                gulp.watch(config.paths.app.assets, ['dev:assets']);
            });
    });
};
