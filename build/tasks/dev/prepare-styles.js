var gulp = require('gulp');
var utils = require('../utils');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var config = require('../../../index');

gulp.task('dev:styles', function() {
    gulp.src(config.getConfig().paths.app.styles, {'base': 'src'})
        .pipe(plumber())
        .pipe(gulp.dest(utils.devDir()))
        .pipe(livereload());

    gulp.src(config.getConfig().paths.lib.styles.dev, {'base': '.'})
        .pipe(gulp.dest(utils.devDir()));
});