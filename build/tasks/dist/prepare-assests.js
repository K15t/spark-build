var gulp = require('gulp');
var gutil = require('gulp-util');
var filter = require('gulp-filter');
var path = require('path');
var join = path.join;

module.exports = function(config) {
    gulp.task('dist:assets', function() {

        var ignoreLibs = filter(['src/assets/**/*']);
        var onlyLibs = filter(['src/libs/**/*']);

        gulp.src(config.paths.lib.assets, {'base': 'bower_components'})
            .pipe(gulp.dest(config.distDir));

        // ... if local libraries defined we copy the assets of the libs to the
        //     common root assets folder.
        if (config.paths.app.libs) {
            gulp.src(config.paths.app.assets, {'cwd': '.'})
            .pipe(onlyLibs)
            .pipe(gulp.dest(join(config.distDir, '/assets')))
            .on('error', function(err){
                new gutil.PluginError('Copy assets', err, {showStack: true});
            });
        }

        return gulp.src(config.paths.app.assets, {'base': 'src'})
            .pipe(ignoreLibs)
            .pipe(gulp.dest(config.distDir))
            .on('error', function(err){
                new gutil.PluginError('Copy assets', err, {showStack: true});
            });
    });
};
