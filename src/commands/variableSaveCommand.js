const config = require('../config/config');
const set = require('lodash/set');
const path = require('path');
const fs = require('fs');
const homeDir = require('os').homedir();
const configPath = path.join(homeDir, '.unfold', 'config.json');
require('../functions/helpers/index')();

module.exports = function (variable, value) {
    set(config.variables, variable, value);

    fs.writeFileSync(configPath, JSON.stringify(config, null, 4), err => {
        if (err) throw err;
    });

    console.log(`"${variable}" value saved.`);
};
