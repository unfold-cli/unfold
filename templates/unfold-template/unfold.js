module.exports = {
  name: 'unfold-template',
  prompts: [
    { type: 'input', name: 'template_name', message: "What is your new template name?" },
  ],
  replacements() {
    return [
      { replace: "DummyClasses", with: '{{pluralize (studly_case template_name)}}' },
      { replace: "DummyClass", with: '{{studly_case template_name}}' }
    ];
  }
};