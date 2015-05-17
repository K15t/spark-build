var gulp = require('gulp');
var config = require('../config');
var utils = require('../utils');

gulp.task('dev:assets', function() {
    gulp.src(config.paths.app.assets, {'base': 'src'})
        .pipe(gulp.dest(utils.devDir()));
    gulp.src(config.paths.lib.assets, {'base': '.'})
        .pipe(gulp.dest(utils.devDir()));
});