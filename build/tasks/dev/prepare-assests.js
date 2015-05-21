var gulp = require('gulp');

module.exports = function(config) {
    gulp.task('dev:assets', function() {
        gulp.src(config.paths.app.assets, {'base': 'src'})
            .pipe(gulp.dest(config.devDir));
        gulp.src(config.paths.lib.assets, {'base': '.'})
            .pipe(gulp.dest(config.devDir));
    });
};
