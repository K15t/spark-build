var gulp = require('gulp');
var del = require('del');
var mkdirp = require('mkdirp');
var utils = require('../utils');
var path = require('path');
var join = path.join;

gulp.task('dist:clean', function() {
    // let's start fresh and delete/re-create prod target
    if (utils.getDistDir() && utils.getDistDir().length && utils.isDir(utils.getDistDir())) {
        del(join(utils.getDistDir(), '/**'), {'force': true});
    }
    mkdirp.sync(utils.getDistDir());

    // return pipeline, so that gulp will wait for completion before running other tasks.
    return gulp.src('**/*', {'read': false});
});