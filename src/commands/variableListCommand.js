const config = require('../config/config');
const forEach = require('lodash/forEach');

module.exports = function (variable, value) {
    forEach(config.variables, (variable, key) => {
        console.log(`${key} : ${variable}`);
    });
};
