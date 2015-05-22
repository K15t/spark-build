var gulp = require('gulp');

// ---------------------------------------------------------------------------------------------
// Default tasks setup for dist or dev build execution
// ---------------------------------------------------------------------------------------------

module.exports = function() {
    gulp.task('default', ['dist:default']);
    gulp.task('watch', ['dev:watch']);
};
