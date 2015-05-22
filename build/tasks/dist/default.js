var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function() {
    gulp.task('dist:default', ['dist:clean'], function() {
        runSequence(
            ['dist:assets', 'dist:partials', 'dist:styles'],
            'dist:scripts',
            'dist:index',
            'dist:licenses');
    });
};
