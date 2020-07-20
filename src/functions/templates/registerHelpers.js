const forEach = require('lodash/forEach');
const Handlebars = require('handlebars');
const resolve = require('../util/resolve');

module.exports = function (template) {
    let templateHelpers = resolve(template, 'config.helpers');

    // register helpers
    forEach(templateHelpers, helper => {
        Handlebars.registerHelper(helper.name, helper);
    });
};
