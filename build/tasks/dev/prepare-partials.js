var gulp = require('gulp');
var ngTemplates = require('gulp-angular-templatecache');
var path = require('path');
var livereload = require('gulp-livereload');
var join = path.join;

module.exports = function(config) {
    gulp.task('dev:partials', function() {
        return gulp.src(config.paths.app.partials)
            .pipe(ngTemplates({
                base: function(file) {
                    return join('app/partials', path.basename(file.path));
                },
                module: config.moduleName,
                filename: 'app/js/partials.js' // delete this file after build process?
            }))
            .pipe(gulp.dest(config.devDir))
            .pipe(livereload());
    });
};
