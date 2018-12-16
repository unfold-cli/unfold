import StubItemsTable from "./partials/StubItemsTable";
import ActionsCell from "./partials/stub-items-table/ActionsCell";

Vue.component('stub-items-index', {
  components: { StubItemsTable, ActionsCell },
  data() {
    return {
      tableFields: [
        {{#each fields}}
        { key: '{{this.name}}', sortable: true },
        {{/each}}
        { key: 'actions', sortable: false, class: 'row-actions', label: '' }
      ]
    };
  }
});
