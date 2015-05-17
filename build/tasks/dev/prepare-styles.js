var gulp = require('gulp');
var utils = require('../utils');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var config = require('../config');

gulp.task('dev:styles', function() {
    gulp.src(config.paths.app.styles, {'base': 'src'})
        .pipe(plumber())
        .pipe(gulp.dest(utils.devDir()))
        .pipe(livereload());

    gulp.src(config.paths.lib.styles.dev, {'base': '.'})
        .pipe(gulp.dest(utils.devDir()));
});