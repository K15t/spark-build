var gulp = require('gulp');
var del = require('del');
var mkdirp = require('mkdirp');
var isDir = require('is-directory').sync;
var path = require('path');
var gutil = require('gulp-util');
var join = path.join;

module.exports = function(config) {
    gulp.task('dist:clean', function() {
        var folderToClean = join(config.distDir, '/**');
        gutil.log('Start to clean folder "' + folderToClean + '"');
        // let's start fresh and delete/re-create prod target
        if (config.distDir && config.distDir.length && isDir(config.distDir)) {
            del(folderToClean, {'force': true});
        }
        mkdirp.sync(config.distDir);

        // return pipeline, so that gulp will wait for completion before running other tasks.
        return gulp.src('**/*', {'read': false});
    });
};
