const get = require('lodash/get');
const isFunction = require('lodash/isFunction');

module.exports = function (object, dot, defaultVal = []) {
    return isFunction(get(object, dot)) ? get(object, dot)() : get(object, dot, defaultVal);
};
