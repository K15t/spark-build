var gulp = require('gulp');
var inject = require('gulp-inject');
var path = require('path');
var join = path.join;

module.exports = function(config) {
  gulp.task('dist:index', function() {
      gulp.src(config.paths.app.index, {'base': 'src'})
          .pipe(inject(gulp.src(config.paths.lib.styles.prod, {'read': false}), {
              'ignorePath': 'bower_components',
              'addRootSlash': false,
              name: 'lib'
          }))
          .pipe(inject(gulp.src(join(config.distDir, '/all.css'), {'read': false}), {'ignorePath': config.distDir, 'addRootSlash': false}))
          .pipe(inject(gulp.src(join(config.distDir, '/all.js'), {'read': false}), {'ignorePath': config.distDir, 'addRootSlash': false}))
          .pipe(gulp.dest(config.distDir))
  });
};
