var gulp = require('gulp');
var del = require('del');
var mkdirp = require('mkdirp');
var utils = require('../utils');
var path = require('path');
var gutil = require('gulp-util');
var join = path.join;

gulp.task('dev:clean', function() {
    var folderToClean = join(utils.devDir(), '/**');
    gutil.log('Start to clean folder "' + folderToClean + '"');
    // let's start fresh and delete/re-create dev target
    if (utils.devDir() && utils.devDir().length && utils.isDir(utils.devDir())) {
        del(folderToClean, {'force': true});
        mkdirp.sync(utils.devDir());
    }

    // return a pipeline, so that gulp will wait for completion before running other tasks.
    return gulp.src('**/*', {'read': false});
});
