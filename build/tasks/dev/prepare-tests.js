var gulp = require('gulp');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var series = require('stream-series');
var config = require('../config');
var utils = require('../utils');

gulp.task('dev:prepare-unit', function(done) {
    // combine all js files paths to be run in karma
    var testJsStream = series(
        gulp.src(config.paths.lib.scripts.prod.concat(paths.lib.scripts.test), {read: false}),
        gulp.src(config.paths.app.scripts, {read: false}),
        gulp.src(config.paths.app.tests, {read: false})
    );

    // rewrite karma.conf.js to have all js sources included
    return gulp.src(config.karmaConfigFileTemplate)
        .pipe(inject(testJsStream, {
            starttag: 'files: [',
            endtag: ']',
            transform: function(filepath, file, i, length) {
                return '  "' + filepath.substring(1) + '"' + (i + 1 < length ? ',' : '');
            }
        }))
        .pipe(rename(config.karmaConfigFile))
        .pipe(gulp.dest('.'));
});