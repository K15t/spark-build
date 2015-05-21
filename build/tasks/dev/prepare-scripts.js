var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');

module.exports = function(config) {
    gulp.task('dev:scripts', function() {
        gulp.src(config.paths.app.scripts, {'base': 'src'})
            .pipe(plumber())
            .pipe(jscs({
                configPath: config.jscsrc
            }))
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(jshint.reporter('fail').on('error', function(err) {
                console.log(err)
            })) // fail build if jshint finds problems
            .pipe(gulp.dest(config.devDir))
            .pipe(livereload());
        // TODO: make sure to reload the whole page: livereload.changed(indexPath);
        gulp.src(config.paths.lib.scripts.dev, {'base': '.'})
            .pipe(gulp.dest(config.devDir));
    });

    gulp.task('dev:test-scripts', function() {
        gulp.src(paths.app.tests, {'base': 'src'})
            //.pipe(plumber())
            .pipe(jscs())
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(jshint.reporter('fail').on('error', function(err) {
                console.log(err)
            })); // fail build if jshint finds problems
    });
};