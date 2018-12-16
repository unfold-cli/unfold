const fs = require('fs');
const path = require('path');
const isObject = require("lodash/isObject");
const Handlebars = require('handlebars');
const forEach = require('lodash/forEach');
const set = require('lodash/set');
const get = require('lodash/get');
const resolve = require("../util/resolve");

module.exports = function (template, buildPath, context) {
  let templateAppends = resolve(template, "appends");

  forEach(templateAppends, (content, file) => {
    let extension = path.extname(file);
    let filePath = path.isAbsolute(file) ? file : path.join(buildPath, file);

    if (extension === '.json') {
      appendJson(content, context, filePath);
    } else if (extension === '.yaml' || extension === '.yml') {
    } else {
      appendGeneral(content, context, filePath);
    }
  });
};

function appendGeneral(content, context, filePath) {
  let handleAppend = Handlebars.compile(content);
  fs.appendFileSync(filePath, handleAppend(context));
}

function appendJson(content, context, filePath) {
  let fileContent = JSON.parse(fs.readFileSync(filePath));

  if (isObject(content)) {
    forEach(content, (value, key) => {
      let handleAppend = Handlebars.compile(value);
      let array = get(fileContent, key, []);
      array.push(handleAppend(context));
      set(fileContent, key, array);
    });
  } else {
    let handleAppend = Handlebars.compile(value);
    fileContent.push(handleAppend(context));
  }

  fs.writeFileSync(filePath, JSON.stringify(fileContent));
}