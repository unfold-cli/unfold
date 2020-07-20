const plural = require('plural');

module.exports = {
    studly_case: function (value) {
        return value
            .split('_')
            .join(' ')
            .split('-')
            .join(' ')
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join('');
    },

    title_case(value) {
        return value
            .split('_')
            .join(' ')
            .split('-')
            .join(' ')
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
            .replace(/(.)(?=[A-Z])/gu, '$1' + ' ');
    },

    inline_case(value) {
        return value
            .split('_')
            .join(' ')
            .split('-')
            .join(' ')
            .replace(/(.)(?=[A-Z])/gu, '$1' + ' ')
            .toLowerCase();
    },

    snake_case(value) {
        return value
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
            .replace(/\s+/gu, '')
            .replace(/(.)(?=[A-Z])/gu, '$1' + '_')
            .toLowerCase();
    },

    camel_case(value) {
        value = value
            .split('_')
            .join(' ')
            .split('-')
            .join(' ')
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join('');

        return value.charAt(0).toLowerCase() + value.substring(1);
    },

    kebab_case(value) {
        return value
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
            .replace(/\s+/gu, '')
            .replace(/(.)(?=[A-Z])/gu, '$1' + '-')
            .toLowerCase();
    },

    pluralize(value, num = 2) {
        return plural(value, num);
    },

    eq() {
        const args = Array.prototype.slice.call(arguments, 0, -1);
        return args.every(function (expression) {
            return args[0] === expression;
        });
    },
};
