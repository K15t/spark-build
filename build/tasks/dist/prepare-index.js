var gulp = require('gulp');
var inject = require('gulp-inject');
var utils = require('../utils');
var path = require('path');
var config = require('../../../index');
var join = path.join;

gulp.task('dist:index', function() {
    gulp.src(config.getConfig().paths.app.index, {'base': 'src'})
        .pipe(inject(gulp.src(config.getConfig().paths.lib.styles.prod, {'read': false}), {
            'ignorePath': 'bower_components',
            'addRootSlash': false,
            name: 'lib'
        }))
        .pipe(inject(gulp.src(join(utils.getDistDir(), '/all.css'), {'read': false}), {'ignorePath': utils.getDistDir(), 'addRootSlash': false}))
        .pipe(inject(gulp.src(join(utils.getDistDir(), '/all.js'), {'read': false}), {'ignorePath': utils.getDistDir(), 'addRootSlash': false}))
        .pipe(gulp.dest(utils.getDistDir()))
});
