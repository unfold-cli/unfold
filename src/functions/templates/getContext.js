const config = require('../../config/config');
const _ = require('lodash');
const inquirer = require('inquirer');
const resolveString = require('../util/resolve');

inquirer.registerPrompt('recursive', require('inquirer-recursive'));

function variablesToPrompts(templateVars, context) {
    return templateVars
        .filter(item => !_.get(context, item))
        .map(item => {
            let prompt = { type: 'input', name: item, message: item };
            if (_.get(context, item.name)) {
                prompt['default'] = _.get(context, item.name);
            }
            return prompt;
        });
}

module.exports = function (template, buildPath) {
    return new Promise((resolve, reject) => {
        // Get template variables.
        let context = _.merge(_.get(config, 'variables', {}), {
            __absolutePath__: buildPath,
        });
        let templateVars = resolveString(template, 'config.variables');

        // Ask prompts
        let templatePrompts = resolveString(template, 'config.prompts');

        templatePrompts = templatePrompts.map(item => {
            if (!_.get(item, 'default')) {
                if (_.get(context, item.name)) {
                    item['default'] = _.get(context, item.name);
                }
            }
            return item;
        });

        if (templatePrompts.length) {
            inquirer.prompt(templatePrompts).then(answers => {
                context = _.merge(context, answers);

                let remaining_prompts = variablesToPrompts(templateVars, context);
                if (remaining_prompts.length) {
                    inquirer.prompt(remaining_prompts).then(remaining_answers => {
                        resolve(Object.assign(context, remaining_answers));
                    });
                } else {
                    resolve(context);
                }
            });
        } else {
            let remaining_prompts = variablesToPrompts(templateVars, context);
            inquirer.prompt(remaining_prompts).then(remaining_answers => {
                resolve(Object.assign(context, remaining_answers));
            });
        }
    });
};
