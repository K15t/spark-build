var extend = require('node.extend');

module.exports = function(variableName, opts) {
    return extend({}, opts || {}, {
        'name': 'json',
        'starttag': variableName + ': [',
        'endtag': ']',
        'transform': function(filepath, file, i, length) {
            return '  "' + filepath + '"' + (i + 1 < length ? ',' : '');
        }
    });
};
