const fs = require('fs');
const path = require('path');
const merge = require('lodash/merge');
const extend = require('lodash/extend');
const reduce = require('lodash/reduce');
const globalConfig = require('../../config/config');
const templateDir = path.join(__dirname, '../../../templates');
const defaultTemplateConfig = require('../../config/default-template-config');
const homeDir = require('os').homedir();
const globalTemplateDir = path.join(homeDir, '/.unfold/templates');
const dirs = p =>
    fs
        .readdirSync(p)
        .filter(f => fs.statSync(path.join(p, f)).isDirectory())
        .map(it => path.join(p, it));

module.exports = function () {
    if (!fs.existsSync(globalTemplateDir)) {
        fs.mkdirSync(globalTemplateDir);
    }

    let directories = globalConfig.templates.concat(dirs(templateDir));
    directories = directories.concat(dirs(globalTemplateDir));

    return reduce(
        directories,
        (filtered, item) => {
            let itemConfigFile = path.join(item, 'unfold.js');

            if (fs.existsSync(itemConfigFile)) {
                let loadedConfig = require(itemConfigFile);
                let templateName = loadedConfig.name ? loadedConfig.name : path.basename(item);
                let templateConfig = merge({}, defaultTemplateConfig, loadedConfig);

                filtered[templateName] = {};
                filtered[templateName].path = item;
                filtered[templateName].config = templateConfig;
            }

            return filtered;
        },
        {},
    );
};
