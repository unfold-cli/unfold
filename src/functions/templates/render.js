const Handlebars = require('handlebars');

module.exports = function (string, context, replacements = []) {
    let resolved = Handlebars.compile(string)(context);

    if (replacements.length) {
        replacements.forEach(replacement => {
            resolved = resolved.replace(new RegExp(replacement.replace, 'g'), replacement.with);
        });
    }

    return resolved;
};
