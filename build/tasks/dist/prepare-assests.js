var gulp = require('gulp');

module.exports = function(config) {
    gulp.task('dist:assets', function() {
        gulp.src(config.paths.lib.assets, {'base': 'bower_components'})
            .pipe(gulp.dest(config.distDir));
        gulp.src(config.paths.app.assets, {'base': 'src'})
            .pipe(gulp.dest(config.distDir));
    });
};
