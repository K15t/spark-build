var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var path = require('path');
var join = path.join;

module.exports = function(config) {
    gulp.task('dist:scripts', function() {
        gulp.src(config.paths.app.scripts, {'base': 'src'})
            .pipe(jscs({
                configPath: config.jscsrc
            }).on('error', function(err) {
                console.log('JSCS error detected... aborting build process\n' + err.message);
                process.exit(1); // exit with error code
            }))
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(jshint.reporter('fail')); // fail build if jshint finds problems
        //now we add the libs and partials for the minification
        return gulp.src(config.paths.lib.scripts.prod.concat(
            config.paths.app.scripts).concat(join(config.distDir, '/partials.js')), {'base': 'src'})
            .pipe(concat('all.js'))
            .pipe(ngAnnotate())
            .pipe(uglify('fail'))
            .pipe(gulp.dest(config.distDir));
    });
};
