var gulp = require('gulp');
var del = require('del');
var mkdirp = require('mkdirp');
var isDir = require('is-directory').sync;
var path = require('path');
var gutil = require('gulp-util');
var join = path.join;

module.exports = function(config) {
    gulp.task('dev:clean', function() {
        var folderToClean = join(config.devDir, '/**');
        gutil.log('Start to clean folder "' + folderToClean + '"');
        // let's start fresh and delete/re-create dev target
        if (config.devDir && config.devDir.length && isDir(config.devDir)) {
            del(folderToClean, {'force': true});
            mkdirp.sync(config.devDir);
        }

        // return a pipeline, so that gulp will wait for completion before running other tasks.
        return gulp.src('**/*', {'read': false});
    });
};
