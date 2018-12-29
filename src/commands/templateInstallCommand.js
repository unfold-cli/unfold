const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const homeDir = require('os').homedir();
require("../functions/helpers/index")();

module.exports = function (template) {

  /*
  |--------------------------------------------------------------------------
  | Temporary
  |--------------------------------------------------------------------------
  */
  let tmpPath = path.join(homeDir, "/.unfold/tmp");
  if (fs.existsSync(tmpPath)) {
    execSync(`rm -r ${tmpPath}`);
  }

  fs.mkdirSync(tmpPath);


  /*
  |--------------------------------------------------------------------------
  | Clone
  |--------------------------------------------------------------------------
  */
  let gitClone = exec(`git clone ${template} ${tmpPath}`);

  gitClone.on('close', (code) => {
    if (code !== 0) {
      console.log("Something went wrong");
      process.exit(0);
    }

    let unfoldFile = path.join(tmpPath, "unfold.js");

    if (fs.existsSync(unfoldFile)) {


      let loadedConfig = require(unfoldFile);
      let templateName = loadedConfig.name ? loadedConfig.name : path.basename(template);
      let templatePath = path.join(homeDir, '/.unfold/templates');

      if (!fs.existsSync(templatePath)) {
        fs.mkdirSync(templatePath);
      }

      let newTemplatePath = path.join(homeDir, '/.unfold/templates', templateName);
      let cpTemplate = exec(`mv ${tmpPath} ${newTemplatePath}`);

      cpTemplate.on('close', (code) => {
        console.log(`Template "${templateName}" installed.  Use template with command: "unfold new ${templateName}"`);
      });

    } else {
      console.log("This is not an unfold template. unfold.js not found.");
      execSync(`rm -r ${tmpPath}`);
      process.exit(0);
    }

  });


};