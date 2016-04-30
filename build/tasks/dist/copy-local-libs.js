var gulp = require('gulp');
var del = require('del').sync;
var gutil = require('gulp-util');
var isDir = require('is-directory').sync;

/**
 * Copies all entries defined as part of 'app.libs' to the libs folder in the local project.
 * Before the copy process starts the whole libs folder will be deleted. It is not intended
 * to make any changes in the local libs folder!
 */
module.exports = function(config) {
    var folderToClean = config.rootDir + '/src/libs';
    gulp.task('dist:copy-local-libs', function() {

        if (config.paths.app.libs === undefined) {
            gutil.log('Skip task. No local libs are configured.');
            return;
        }

        if (isDir(folderToClean)) {
            gutil.log('Start to clean folder "' + folderToClean + '"');
            del(folderToClean, {'force': true});
        }

        // ... copy all to the local project libs folder to ensure the source code of the will be checked etc. ('libs/lib-folder-name')
        return gulp.src(config.paths.app.libs, {'base': '.'})
            .pipe(gulp.dest(config.rootDir + '/src/libs/dummy'))
            .on('error', function(err){
                new gutil.PluginError('Copy local libs', err, {showStack: true});
            });
    });
};
