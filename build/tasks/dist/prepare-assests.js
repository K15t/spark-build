var gulp = require('gulp');
var gutil = require('gulp-util');

module.exports = function(config) {
    gulp.task('dist:assets', function() {
        gulp.src(config.paths.lib.assets, {'base': 'bower_components'})
            .pipe(gulp.dest(config.distDir));

        return gulp.src(config.paths.app.assets, {'base': 'src'})
            .pipe(gulp.dest(config.distDir))
            .on('error', function(err){
                new gutil.PluginError('Copy assets', err, {showStack: true});
            });
    });
};
