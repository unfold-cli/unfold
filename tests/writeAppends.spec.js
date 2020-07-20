const fs = require('fs');
const path = require('path');
const writeAppends = require('../src/functions/templates/writeAppends');
const _ = require('lodash');

describe('writeAppends', () => {
    // it('append to section of json file', () => {
    //   let before = JSON.parse(fs.readFileSync(__dirname + "/sandbox/append.json"));
    //   writeAppends({
    //     appends() {
    //       return {
    //         "../append.json": {
    //           "templates": '{{ __absolutePath__ }}',
    //         }
    //       };
    //     },
    //   }, path.join(__dirname, "sandbox", "testDeploy"), {
    //     "__absolutePath__": "/var/www/html"
    //   });
    //   before.templates.push('/var/www/html');
    //   expect(before).toEqual(JSON.parse(fs.readFileSync(__dirname + "/sandbox/append.json")));
    // });

    it('append to end of js file', () => {
        let before = _.toString(fs.readFileSync(__dirname + '/sandbox/append.js'));

        writeAppends({ appends: { '../append.js': "\nrequire('__absolutePath__');" } }, path.join(__dirname, 'sandbox', 'testDeploy'), {
            __absolutePath__: '/var/www/html',
        });

        // expect(_.toString(fs.readFileSync(__dirname + "/sandbox/append.js"))).toEqual(before + "require('/var/www/html')");
    });
});
