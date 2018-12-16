module.exports = {
  name: 'laravel-resource',
  variables() {
    return [];
  },
  prompts() {
    return [
      { type: 'input', name: 'resource_name', message: "What's your model name?" },
      {
        type: 'recursive',
        message: 'Add a new field?',
        name: 'fields',
        prompts: [
          {
            type: 'input',
            name: 'name',
            message: 'Field name?',
          }, {
            type: 'list',
            name: 'type',
            message: 'Field type?',
            choices: ['increments', 'bigInteger', 'integer', 'string', 'text', 'boolean', 'double', 'datetime', 'date', 'time', 'uuid']
          }, {
            type: 'confirm',
            name: 'unsigned',
            message: 'Unsigned?',
            when: function (answers) {
              return answers.type === 'integer' || answers.type === 'bigInteger';
            }
          }, {
            type: 'confirm',
            name: 'nullable',
            message: 'Nullable?',
            when: function (answers) {
              return answers.type !== 'increments' || answers.type === 'bigInteger';
            },
            default: false
          },
        ]
      },
    ];
  },
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
  helpers() {
    return {
      migration_date() {
        let m = new Date();
        return m.getFullYear() + "_" + m.getMonth() + "_" + m.getDate() + "_" + m.getHours() + m.getMinutes() + m.getSeconds();
      }
    };
  },
  output(){
    return "Add routes.  Register components."
  }
};