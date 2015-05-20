var gulp = require('gulp');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var series = require('stream-series');
var config = require('../../../index');
var utils = require('../utils');

gulp.task('dev:prepare-unit', function(done) {
    // combine all js files paths to be run in karma
    var testJsStream = series(
        gulp.src(config.getConfig().paths.lib.scripts.prod.concat(config.getConfig().paths.lib.scripts.test), {read: false}),
        gulp.src(config.getConfig().paths.app.scripts, {read: false}),
        gulp.src(config.getConfig().paths.app.tests, {read: false})
    );

    // rewrite karma.conf.js to have all js sources included
    return gulp.src(config.getConfig().karmaConfigFileTemplate)
        .pipe(inject(testJsStream, {
            starttag: 'files: [',
            endtag: ']',
            transform: function(filepath, file, i, length) {
                return '  "' + filepath.substring(1) + '"' + (i + 1 < length ? ',' : '');
            }
        }))
        .pipe(rename(config.getConfig().karmaConfigFile))
        .pipe(gulp.dest('.'));
});