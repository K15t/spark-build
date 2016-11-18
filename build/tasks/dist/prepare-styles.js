var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

module.exports = function(config) {
    gulp.task('dist:styles', function() {
        gulp.src(config.paths.app.styles, {'base': 'src'})
            .pipe(concat('all.css'))
            .pipe(minifyCSS())
            .pipe(gulp.dest(config.distDir));
        return gulp.src(config.paths.lib.styles.prod, {'base': config.nodeModulesDir})
            .pipe(gulp.dest(config.distDir));
    });
};
