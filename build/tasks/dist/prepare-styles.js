var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var config = require('../../../index');
var utils = require('../utils');

gulp.task('dist:styles', function() {
    gulp.src(config.getConfig().paths.app.styles, {'base': 'src'})
        .pipe(concat('all.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(utils.getDistDir()));
    return gulp.src(config.getConfig().paths.lib.styles.prod, {'base': 'bower_components'})
        .pipe(gulp.dest(utils.getDistDir()));
});