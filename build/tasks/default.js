var gulp = require('gulp');

// ---------------------------------------------------------------------------------------------
// Default tasks setup for dist or dev build execution
// ---------------------------------------------------------------------------------------------

gulp.task('default', ['dist:default']);
gulp.task('watch', ['dev:watch']);