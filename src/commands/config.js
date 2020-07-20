const homeDir = require('os').homedir();
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

module.exports = function () {
    const configFolder = path.join(homeDir, '.unfold');
    const configPath = path.join(configFolder, 'config.json');

    if (!fs.existsSync(configFolder)) {
        fs.mkdirSync(configFolder);
    }

    exec(`open ${configPath}`, function (err, stdout, stderr) {
        if (err) {
            throw err;
        }
    });
};
