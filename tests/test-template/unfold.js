module.exports = {
  name: 'unfold-template',
  variables() {
    return [
      'first_name'
    ];
  },
  appends() {
    return {
      "append.json": {
        "templates": '{{ __absolutePath__ }}'
      }
    };
  },
};