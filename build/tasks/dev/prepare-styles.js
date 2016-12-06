var gulp = require('gulp');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var path = require('path');

module.exports = function(config) {
    gulp.task('dev:styles', function() {
        gulp.src(config.paths.app.styles, {'base': 'src'})
            .pipe(plumber())
            .pipe(gulp.dest(config.devDir))
            .pipe(livereload());

        gulp.src(config.paths.lib.styles.dev, {'base': '.'})
            .pipe(gulp.dest(path.join(config.devDir, config.moduleName)));
    });
};
