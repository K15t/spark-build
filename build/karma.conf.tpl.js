module.exports = function (config) {
    var cfg = {
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        autoWatch: false,
        files: [
        ]
    };

    config.set(cfg);
};
