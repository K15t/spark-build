var gulp = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(config) {
    gulp.task('dev:assets', function() {
        gulp.src(config.paths.app.assets, {'base': 'src'})
            .pipe(gulp.dest(config.devDir))
            .pipe(livereload());

        return gulp.src(config.paths.lib.assets, {'base': '.'})
            .pipe(gulp.dest(config.devDir));
    });
};
