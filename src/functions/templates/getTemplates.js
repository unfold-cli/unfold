const fs = require('fs');
const path = require("path");
// todo load template from elsewhere and cache them in ~/.unfold
const merge = require("lodash/merge");
const reduce = require("lodash/reduce");
const set = require("lodash/set");
const globalConfig = require("../../config/config");
const templateDir = path.join(__dirname, '../../../templates');
const defaultTemplateConfig = require("../../config/default-template-config");
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory()).map(it => path.join(templateDir, it));

module.exports = function () {
  let directories = globalConfig.templates.concat(dirs(templateDir));
  return reduce(directories, (filtered, item) => {
    let itemConfigFile = path.join(item, "unfold.js");

    if (fs.existsSync(itemConfigFile)) {
      let loadedConfig = require(itemConfigFile);
      let templateName = loadedConfig.name ? loadedConfig.name : path.basename(item);
      let templateConfig = merge({}, defaultTemplateConfig, loadedConfig);

      filtered[templateName] = {};
      filtered[templateName].path = item;
      filtered[templateName].config = templateConfig;
    }

    return filtered;
  }, {});
};