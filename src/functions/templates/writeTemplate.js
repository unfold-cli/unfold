// const resolve = require("../util/resolve");
const fs = require('fs');
const includes = require('lodash/includes');
const path = require('path');
const walkSync = require('walk-sync');
const render = require("./render");
const skip = ['unfold.js'];

module.exports = function (template, buildPath, context, replacements) {
  walkSync.entries(template.path).forEach((entry) => {
    if (!includes(skip, entry.relativePath)) {
      let filePath = path.normalize(path.join(buildPath, entry.relativePath));
      let newPath = render(filePath, context, replacements);

      if (entry.isDirectory()) {
        if (!fs.existsSync(newPath)) {
          fs.mkdirSync(newPath);
        }
      } else {
        fs.writeFileSync(newPath, render(fs.readFileSync(path.join(template.path, entry.relativePath)).toString(), context, replacements));
      }
    }
  });
};