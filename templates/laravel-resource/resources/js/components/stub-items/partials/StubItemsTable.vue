<template>
  <div>
    <slot name="beforeTable" :table="this">
      <div class="row table-filters">
        <div class="col my-1">
          <b-form-group :horizontal="!!texts.searchLabel" :label="texts.searchLabel" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" :placeholder="texts.searchPlaceholder"/>
              <b-input-group-append>
                <b-btn :disabled="!filter" @click="filter=''">\{{ texts.searchClear }}</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </div>
        <div class="col my-1">
          <b-form-group :horizontal="!!texts.sortLabel" :label="texts.sortLabel" class="mb-0" v-if="sortOptions && sortDropdown">
            <b-input-group>
              <b-form-select v-model="sortBy" :options="sortOptions">
                <option slot="first" :value="null">-- none --</option>
              </b-form-select>
              <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                <option :value="false">Asc</option>
                <option :value="true">Desc</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </div>
        <div class="col my-1">
          <b-form-group :horizontal="!!texts.perPageLabel" :label="texts.perPageLabel" class="mb-0">
            <b-form-select :options="pageOptions" v-model="rowsPerPage"/>
          </b-form-group>
        </div>
      </div>
    </slot>
    <b-table show-empty
             stacked="md"
             :fields="fields"
             :items="dataProvider"
             :current-page="currentPage"
             :per-page="rowsPerPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             @filtered="onFiltered">
      <template v-for="field in fields" :slot="field.key" slot-scope="row">
        <slot :name="field.key" :row="row"></slot>
      </template>
      <template slot="row-details" slot-scope="row">
        <slot name="row-details" :row="row"></slot>
      </template>
    </b-table>
    <slot name="afterTable" :table="this">
      <b-row class="table-pagination">
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="rowsPerPage" v-model="currentPage" class="my-0"/>
        </b-col>
      </b-row>
    </slot>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';

  export default {
    props: {
      url: {
        type: String
      },
      fields: {
        default: null
      },
      perPage: {
        default() {
          return 5;
        }
      },
      sortDropdown: {
        default: false
      },
      pageOptions: {
        default() {
          return [5, 10, 15];
        }
      },
      texts: {
        default() {
          return {
            searchLabel: '',
            searchPlaceholder: 'Search',
            perPageLabel: '',
            searchClear: 'Clear',
            sortLabel: 'Sort',
          };
        }
      }
    },
    data() {
      return {
        totalRows: 0,
        currentPage: 1,
        sortDesc: false,
        rowsPerPage: this.perPage,
        sortBy: null,
        filter: null,
        modalInfo: { title: '', content: '' }
      };
    },
    computed: {
      sortOptions() {
        return this.fields ? this.fields
          .filter(f => f.sortable)
          .map(f => {
            let label = "label" in f ? f.label : f.key;
            return { text: label, value: f.key };
          }) : false;
      }
    },
    methods: {
      dataProvider(ctx) {
        let _this = this;
        return axios.get(this.url, { params: this.requestAdapter(ctx) })
          .then((response) => {
            _this.$emit("dataReceived", response);
            return _this.responseAdapter(response.data);
          }).catch(function (error) {
            _this.$emit("dataError", error);
          });
      },
      requestAdapter(ctx) {
        return {
          page: ctx.currentPage,
          limit: ctx.perPage,
          filter: this.filter,
          orderBy: this.sortBy,
          sortDesc: this.sortDesc,
        };
      },
      responseAdapter(data) {
        Vue.set(this, "totalRows", parseInt(data.total));
        Vue.set(this, "rowsPerPage", parseInt(data.per_page));
        Vue.set(this, "currentPage", parseInt(data.current_page));
        return (data.data || []);
      },
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length;
        this.currentPage = 1;
      }
    }
  };
</script>

<style lang="scss">
  .card {
    .table-pagination,
    .table-filters {
      padding: 1.25rem;
    }
  }

  .table {
    .row-actions {
      width: 235px;
    }
  }
</style>
