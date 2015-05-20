var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var path = require('path');
var utils = require('../utils');
var config = require('../../../index');
var join = path.join;

gulp.task('dist:scripts', function() {
    gulp.src(config.getConfig().paths.app.scripts, {'base': 'src'})
        .pipe(jscs({
            configPath: config.getConfig().jscsrc
        }).on('error', function(err) {
            console.log('JSCS error detected... aborting build process\n' + err.message);
            process.exit(1); // exit with error code
        }))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail')); // fail build if jshint finds problems
    //now we add the libs and partials for the minification
    return gulp.src(config.getConfig().paths.lib.scripts.prod.concat(
        config.getConfig().paths.app.scripts).concat(join(utils.getDistDir(), '/partials.js')), {'base': 'src'})
        .pipe(concat('all.js'))
        .pipe(ngAnnotate())
        .pipe(uglify('fail'))
        .pipe(gulp.dest(utils.getDistDir()));
});