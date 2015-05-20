var gulp = require('gulp');
var ngTemplates = require('gulp-angular-templatecache');
var path = require('path');
var livereload = require('gulp-livereload');
var utils = require('../utils');
var config = require('../../../index');
var join = path.join;

gulp.task('dev:partials', function() {
    //gulp.src(paths.app.partials, {'base': 'src'})
    //  .pipe(gulp.dest(devDir()));
    return gulp.src(config.getConfig().paths.app.partials)
        .pipe(ngTemplates({
            base: function(file) {
                return join('app/partials', path.basename(file.path));
            },
            module: config.getConfig().moduleName,
            filename: 'app/js/partials.js' // delete this file after build process?
        }))
        .pipe(gulp.dest(utils.devDir()))
        .pipe(livereload());
});