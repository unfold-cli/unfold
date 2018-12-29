const forEach = require("lodash/forEach");
const templates = require("../functions/templates/getTemplates")();

module.exports = function () {

  forEach(templates, template => {
    console.log(`${template.config.name} : ${template.path}`);
  })

};