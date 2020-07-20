const forEach = require('lodash/forEach');
const templates = require('../functions/templates/getTemplates')();
const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');

module.exports = function () {
    forEach(templates, template => {
        let gitPath = path.join(template.path, '.git');

        if (fs.existsSync(gitPath)) {
            let update = exec(`cd ${template.path} && git fetch --all && git reset --hard origin/master`);

            update.stderr.on('data', data => {
                console.log(`${data}`);
            });

            update.on('close', function () {
                console.log(`"${template.config.name}" updated.`);
            });
        }
    });
};
