const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;
const homeDir = require('os').homedir();
require('../functions/helpers/index')();

module.exports = function (template) {
    let unfoldFile = path.resolve(path.join(template, 'unfold.js'));

    if (fs.existsSync(unfoldFile)) {
        let loadedConfig = require(unfoldFile);
        let templateName = loadedConfig.name ? loadedConfig.name : path.basename(template);
        let templatePath = path.join(homeDir, '/.unfold/templates');

        if (!fs.existsSync(templatePath)) {
            fs.mkdirSync(templatePath);
        }

        let newTemplatePath = path.join(homeDir, '/.unfold/templates', templateName);
        let linkTemplate = exec(`ln -s ${template} ${newTemplatePath}`);

        linkTemplate.on('close', code => {
            console.log(`Template "${templateName}" linked.  Use template with command: "unfold new ${templateName}"`);
        });
    } else {
        console.log('This is not an unfold template. unfold.js not found.');
        process.exit(0);
    }
};
