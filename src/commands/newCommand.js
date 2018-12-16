const templates = require("../functions/templates/getTemplates")();
const path = require('path');
const fs = require('fs');
const defaultTo = require('lodash/defaultTo');
const getContext = require("../functions/templates/getContext");
const writeAppends = require("../functions/templates/writeAppends");
const writeTemplate = require("../functions/templates/writeTemplate");
const writeOutput = require("../functions/templates/writeOutput");
const registerHelpers = require("../functions/templates/registerHelpers");
const getReplacements = require("../functions/templates/getReplacements");

require("../functions/helpers/index")();

module.exports = function (template, buildPath) {
  if (template in templates) {
    let chosenTemplate = templates[template];
    buildPath = defaultTo(buildPath, path.join(process.cwd(), template));
    buildPath = path.isAbsolute(buildPath) ? buildPath : path.join(process.cwd(), buildPath);

    if (!fs.existsSync(buildPath)) {
      fs.mkdirSync(buildPath);
    }

    getContext(chosenTemplate, buildPath).then(context => {
      let replacements = getReplacements(chosenTemplate, context);

      registerHelpers(chosenTemplate);
      writeTemplate(chosenTemplate, buildPath, context, replacements);
      writeAppends(chosenTemplate, buildPath, context);
      writeOutput(chosenTemplate, context, replacements);
    });
  } else {
    console.log("Template not found.");
  }
};