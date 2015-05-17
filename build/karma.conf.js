module.exports = function (config) {
    var cfg = {
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        autoWatch: false,
        files: [
          "bower_components/angular/angular.js",
          "bower_components/angular-resource/angular-resource.js",
          "bower_components/angular-route/angular-route.js",
          "bower_components/ng-lodash/build/ng-lodash.js",
          "bower_components/angular-mocks/angular-mocks.js",
          "src/app/app.js",
          "src/app/languages/languages-module.js"
        ]
    };

    config.set(cfg);
};
