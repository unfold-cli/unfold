const render = require('./render');
const resolve = require('../util/resolve');

module.exports = function (template, context, replacements) {
    let output = resolve(template, 'config.output', false);
    if (output) {
        console.log(render(output, context, replacements));
    }
};
