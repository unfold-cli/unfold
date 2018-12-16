Vue.component('stub-items-create', {
  data() {
    return {
      form: new SparkForm({
      {{#each fields}}
        {{this.name}}: null,
      {{/each}}
      })
    };
  },
  methods: {
    submit() {
      const _this = this;
      Spark.post(route('stub-items.store'), this.form).then(response => {
        if (_this.form.successful) {
          this.$toasted.show(trans.stub_items.stub_item_created, { type: "success" });
          window.location = route('stub-items.edit', response.data.id);
        }
      });
    }
  }
});