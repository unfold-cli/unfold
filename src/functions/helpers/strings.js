const plural = require('plural');

module.exports = {
    /**
     * FOO BAR
     * @param value
     * @returns {string}
     */
    uppercase: function (value) {
        return value.toUpperCase();
    },

    /**
     * foo bar
     * @param value
     * @returns {string}
     */
    lowercase: function (value) {
        return value.toLowerCase();
    },

    /**
     * Format: FooBar
     * @param value
     * @returns {string}
     */
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

    /**
     * Foo_Bar
     * @param value
     * @returns {string}
     */
    studly_snake_case: function (value) {
        return value
            .split('_')
            .join(' ')
            .split('-')
            .join(' ')
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join('_');
    },

    /**
     * Foo Bar
     * @param value
     * @returns {string}
     */
    title_case(value) {
        return value
            .split('_')
            .join(' ')
            .split('-')
            .join(' ')
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    },

    /**
     * foo bar
     * @param value
     * @returns {string}
     */
    inline_case(value) {
        return value.split('_').join(' ').split('-').join(' ').toLowerCase();
    },

    /**
     * foo_bar
     * @param value
     * @returns {string}
     */
    snake_case(value) {
        return value
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
            .replace(/\s+/gu, '')
            .replace(/(.)(?=[A-Z])/gu, '$1' + '_')
            .toLowerCase();
    },

    /**
     * Format: fooBar
     * @param value
     * @returns {string}
     */
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

    /**
     * foo-bar
     * @param value
     * @returns {string}
     */
    kebab_case(value) {
        return value
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
            .replace(/\s+/gu, '')
            .replace(/(.)(?=[A-Z])/gu, '$1' + '-')
            .toLowerCase();
    },

    /**
     * Foo Bars
     * @param value
     * @param num
     * @returns {string}
     */
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
