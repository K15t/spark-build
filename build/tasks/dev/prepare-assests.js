var gulp = require('gulp');
var config = require('../../../index');
var utils = require('../utils');

gulp.task('dev:assets', function() {
    gulp.src(config.getConfig().paths.app.assets, {'base': 'src'})
        .pipe(gulp.dest(utils.devDir()));
    gulp.src(config.getConfig().paths.lib.assets, {'base': '.'})
        .pipe(gulp.dest(utils.devDir()));
});