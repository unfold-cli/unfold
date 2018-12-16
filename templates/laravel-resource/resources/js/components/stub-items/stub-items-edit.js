Vue.component('stub-items-edit', {
  props: {
    stubItem: {
      required: true
    }
  },
  data() {
    return {
      form: new SparkForm({
      {{#each fields}}
        {{this.name}}: this.stubItem.{{this.name}},
      {{/each}}
      })
    };
  },
  methods: {
    submit() {
      const _this = this;
      Spark.put(route('stub-items.update', this.stubItem.id), this.form).then(response => {
        _this.$toasted.show(trans.stub_items.edited_stub_item, { type: "success" });
      });
    }
  }
});
