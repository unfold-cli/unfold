const Handlebars = require('handlebars');
const stringHelpers = require('./strings');

module.exports = function () {
    for (var k in stringHelpers) {
        Handlebars.registerHelper(k, stringHelpers[k]);
    }
};
