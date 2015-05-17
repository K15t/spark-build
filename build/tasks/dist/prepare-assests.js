var gulp = require('gulp');
var utils = require('../utils');
var config = require('../config');

gulp.task('dist:assets', function() {
    gulp.src(config.paths.lib.assets, {'base': 'bower_components'})
        .pipe(gulp.dest(utils.getDistDir()));
    gulp.src(config.paths.app.assets, {'base': 'src'})
        .pipe(gulp.dest(utils.getDistDir()));
});
