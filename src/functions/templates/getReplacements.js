const render = require('../templates/render');
const resolve = require('../util/resolve');

module.exports = function (template, context) {
    let replacements = resolve(template, 'config.replacements');

    return replacements.map(item => {
        return { replace: item.replace, with: render(item.with, context) };
    });
};
