module.exports = {

    // The name of your template
    name: '{{template_name}}',

    // just defines variables so search is not necessary
    // will ask for these variables first, defaults are global values but still ask.
    variables() {
        return [
            // list your template variables here
            'example_variable'
        ];
    },

    // Collect information and to context as variable.
    // Supports input, list, checkbox, editor, confirm, password
    prompts() {
        return [
            { type: 'input', name: 'name', message: "What's your name?" },
            // {type: 'list', name: 'letter', message: 'Which letter?', choices: ['A', 'B']},
            // {type: 'checkbox', message: 'Which numbers?', name: 'numbers', choices: ['1', '2']},
            // {type: 'editor', name: 'story', message: 'Write a short story.'},
            // {type: 'confirm', name: 'confirm', message: "Yes or no?"},
            // {type: 'password', name: 'password', message: "Password"},
        ];
    },

    // replace all instances of text with literal or variable text.
    // Supports variables in the "with" string
    replacements: [
        { replace: "Stub Items", with: '{{pluralize (title_case resource_name)}}' },
        { replace: "stub items", with: '{{pluralize (inline_case resource_name)}}' },
        { replace: "stub-items", with: '{{pluralize (kebab_case resource_name)}}' },
        { replace: "stub_items", with: '{{pluralize (snake_case resource_name)}}' },
        { replace: "Stub Item", with: '{{title_case resource_name}}' },
        { replace: "stub item", with: '{{inline_case resource_name}}' },
        { replace: "stub-item", with: '{{kebab_case resource_name}}' },
        { replace: "stub_item", with: '{{snake_case resource_name}}' },
        { replace: "stubItem", with: '{{camel_case resource_name}}' },
        { replace: "StubItem", with: '{{studly_case resource_name}}' },
    ],

    // handlebar helpers.
    helpers() {
        return {
            one() {
                return 1 + 1;
            }
        };
    },

    // After files written, append strings to files
    // Good for adding files to bootstrap files
    // Supports variables
    appends() {
        //json, yaml, csv, normal file
        return [
            // append string to end of file on new line.
            // {
            //   append: 'require("\{{ __absolutePath__ }}");',
            //   to: '/path/to/file.yaml'
            // },

            // append string to specific nested section of file
            // {
            //   append: 'require("\{{ __absolutePath__ }}");',
            //   to: {
            //     '/path/to/file.yaml': 'location.in.file'
            //   }
            // }
        ];
    },

    // run these.  Loads variables.
    scripts() {
        return {
            // 'before-unfold': [
            //   'ls -lha \{{ __absolutePath__ }}'
            // ],
            // 'after-unfold': [
            //   'ls -lha \{{ __absolutePath__ }}'
            // ]
        };
    }
};
