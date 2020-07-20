module.exports = {
    name: '{{template_name}}',
    // just defines variables so search is not necessary
    // will ask for these variables first, defaults are global values but still ask.
    variables() {
        return [
            // list your template variables here
            'directory_name',
        ];
    },

    // collects info to variables.  Loads variables
    prompts() {
        return [
            { type: 'input', name: 'name', message: "What's your name" },
            // {type: 'list', name: 'letter', message: 'Which letter?', choices: ['A', 'B']},
            // {type: 'checkbox', message: 'Which numbers?', name: 'numbers', choices: ['1', '2']},
            // {type: 'editor', name: 'story', message: 'Write a short story.'},
            // {type: 'confirm', name: 'confirm', message: "Yes or no?"},
            // {type: 'password', name: 'password', message: "Password"},
        ];
    },

    // handlebar helpers.
    helpers() {
        return {
            one() {
                return 'hello';
            },
        };
    },

    // After files written.  Loads variables.
    appends() {
        //json, yaml, csv, normal file
        return {
            '/path/to/file': 'require("{{ val }}")',
            '/path/to/file.yaml': {
                'location.in.file': 'require("{{ val }}")',
            },
        };
    },

    // run these.  Loads variables.
    scripts() {
        return {
            // 'before-unfold': [
            //   'ls'
            // ],
            // 'after-unfold': [
            //   'ls'
            // ]
        };
    },
};
