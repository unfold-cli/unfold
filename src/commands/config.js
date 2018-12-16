const homeDir = require('os').homedir();
const path = require('path');
const exec = require('child_process').exec;

module.exports = function () {
  const configPath = path.join(homeDir, '.unfold', 'config.js');

  exec(`open ${configPath}`, function (err, stdout, stderr) {
    if (err) {
      throw err;
    }
  });
};