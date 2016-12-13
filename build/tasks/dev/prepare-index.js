var gulp = require('gulp');
var inject = require('gulp-inject');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var path = require('path');
var jsonTransform = require('../../utils/json-transform');
var join = path.join;

module.exports = function(config) {
    gulp.task('dev:index', function() {
        gulp.src(config.paths.app.index, {'base': 'src'})
            .pipe(plumber())
            .pipe(inject(gulp.src(config.paths.lib.styles.dev, {'read': false}), {'ignorePath': ['..', '.'], 'addRootSlash': false, 'name': 'lib'}))
            .pipe(inject(gulp.src(config.paths.lib.scripts.dev, {'read': false}), {'ignorePath': ['..', '.'], 'addRootSlash': false, 'name': 'lib'}))
            .pipe(inject(gulp.src(config.paths.app.styles, {'read': false}), {'ignorePath': 'src', 'addRootSlash': false}))
            .pipe(inject(gulp.src(config.paths.app.scripts, {'read': false}), {'ignorePath': 'src', 'addRootSlash': false}))
            .pipe(inject(gulp.src([join(config.devDir, 'app/js/partials.js')], {'read': false}), { 'ignorePath': config.devDir, 'addRootSlash': false, 'name': 'partials'}))

            .pipe(inject(gulp.src(config.paths.lib.scripts.dev, {'read': false}), jsonTransform('libSrc', {'ignorePath': ['..', '.'], 'addRootSlash': false})))
            .pipe(inject(gulp.src(config.paths.app.scripts, {'read': false}), jsonTransform('appSrc', {'ignorePath': 'src', 'addRootSlash': false})))
            .pipe(inject(gulp.src([join(config.devDir, 'app/js/partials.js')], {'read': false}), jsonTransform('partialSrc', {'ignorePath': config.devDir, 'addRootSlash': false})))

            .pipe(gulp.dest(config.devDir))
            .pipe(livereload());
    });
};
