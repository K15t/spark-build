var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');

module.exports = function(config) {
    gulp.task('dev:scripts', function() {
        gulp.src(config.paths.app.scripts, {'base': 'src'})
            .pipe(plumber())
            .pipe(gulp.dest(config.devDir))
            .pipe(livereload())
            .pipe(jscs({
                configPath: config.jscsrc
            }))
            .on('error', function(err) {
                console.log('JSCS error detected... aborting build process\n' + err.message);
            })
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(jshint.reporter('fail')); // fail build if jshint finds problems

        gulp.src(config.paths.lib.scripts.dev, {'base': '.'})
            .pipe(gulp.dest(config.devDir));
    });

    gulp.task('dev:test-scripts', function() {
        gulp.src(config.paths.app.tests, {'base': 'src'})
            .pipe(plumber())
            .pipe(jscs({
                configPath: config.jscsrc
            }))
            .on('error', function(err) {
                console.log('JSCS error detected... aborting build process\n' + err.message);

            })
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(jshint.reporter('fail')); // fail build if jshint finds problems
    });
};
