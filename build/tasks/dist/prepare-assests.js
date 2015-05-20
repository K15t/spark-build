var gulp = require('gulp');
var utils = require('../utils');
var config = require('../../../index');

gulp.task('dist:assets', function() {
    gulp.src(config.getConfig().paths.lib.assets, {'base': 'bower_components'})
        .pipe(gulp.dest(utils.getDistDir()));
    gulp.src(config.getConfig().paths.app.assets, {'base': 'src'})
        .pipe(gulp.dest(utils.getDistDir()));
});
