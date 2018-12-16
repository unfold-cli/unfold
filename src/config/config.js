/**
 * Loads / writes config files.
 */
const defaultConfig = require("./default-config");
const fs = require('fs');
const homeDir = require('os').homedir();
const path = require('path');
const configPath = path.join(homeDir, '.unfold', 'config.json');

if (!fs.existsSync(path.dirname(configPath))) {
  fs.mkdirSync(path.dirname(configPath), {recursive: true}, (err) => {
    if (err) throw err;
  });
}

if (!fs.existsSync(configPath)) {
  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 4), (err) => {
    if (err) throw err;
  });
}

const config = JSON.parse(fs.readFileSync(configPath));

module.exports = config;