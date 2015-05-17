var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var config = require('../config');
var utils = require('../utils');

gulp.task('dist:styles', function() {
    gulp.src(config.paths.app.styles, {'base': 'src'})
        .pipe(concat('all.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(utils.getDistDir()));
    return gulp.src(config.paths.lib.styles.prod, {'base': 'bower_components'})
        .pipe(gulp.dest(utils.getDistDir()));
});