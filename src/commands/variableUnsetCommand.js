const config = require('../config/config');
const unset = require('lodash/unset');
const path = require('path');
const fs = require('fs');
const homeDir = require('os').homedir();
const configPath = path.join(homeDir, '.unfold', 'config.json');
require('../functions/helpers/index')();

module.exports = function (variable) {
    unset(config.variables, variable);

    fs.writeFileSync(configPath, JSON.stringify(config, null, 4), err => {
        if (err) {
            throw err;
        }
    });

    console.log(`"${variable}" value unset.`);
};
