var gulp = require('gulp');
var inject = require('gulp-inject');
var utils = require('../utils');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var config = require('../config');
var path = require('path');

var join = path.join;

gulp.task('dev:index', function() {
    gulp.src(config.paths.app.index, {'base': 'src'})
        .pipe(plumber())
        .pipe(inject(gulp.src(config.paths.lib.styles.dev, {'read': false}), {'ignorePath': '', 'addRootSlash': false, name: 'lib'}))
        .pipe(inject(gulp.src(config.paths.lib.scripts.dev, {'read': false}), {'ignorePath': '', 'addRootSlash': false, name: 'lib'}))
        .pipe(inject(gulp.src(config.paths.app.styles, {'read': false}), {'ignorePath': 'src', 'addRootSlash': false}))
        .pipe(inject(gulp.src(config.paths.app.scripts, {'read': false}), {'ignorePath': 'src', 'addRootSlash': false}))
        .pipe(inject(gulp.src([join(utils.devDir() + 'app/js/partials.js')], {'read': false}), {
            'ignorePath': utils.devDir(),
            'addRootSlash': false,
            name: 'partials'
        }))
        .pipe(gulp.dest(utils.devDir()))
        .pipe(livereload());
});