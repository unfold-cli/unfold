const fs = require('fs');
const startsWith = require('lodash/startsWith');
const includes = require('lodash/includes');
const path = require('path');
const walkSync = require('walk-sync');
const render = require('./render');

const starts_with = ['.git', 'unfold.js', 'README.md'];
const contains = ['.DS_Store'];

module.exports = function (template, buildPath, context, replacements) {
    walkSync.entries(template.path).forEach(entry => {
        let proceed = true;

        starts_with.forEach(v => {
            if (startsWith(entry.relativePath, v)) {
                proceed = false;
            }
        });

        contains.forEach(v => {
            if (includes(entry.relativePath, v)) {
                proceed = false;
            }
        });

        if (proceed) {
            let filePath = path.normalize(path.join(buildPath, entry.relativePath));
            try {
                let newPath = render(filePath, context, replacements);

                if (entry.isDirectory()) {
                    if (!fs.existsSync(newPath)) {
                        fs.mkdirSync(newPath);
                    }
                } else {
                    fs.writeFileSync(newPath, render(fs.readFileSync(path.join(template.path, entry.relativePath)).toString(), context, replacements));
                }
            } catch (error) {
                try {
                    // try with only processing file path.
                    let newPath = render(filePath, context, replacements);
                    fs.writeFileSync(newPath, fs.readFileSync(path.join(template.path, entry.relativePath)).toString());
                    console.log(`${filePath} content cannot not be processed.  It will be written as is.`);
                } catch (error) {
                    // try without any processing
                    fs.writeFileSync(filePath, fs.readFileSync(path.join(template.path, entry.relativePath)).toString());
                    console.log(`${filePath} cannot not be processed.  It will be written as is.`);
                }
            }
        }
    });
};
