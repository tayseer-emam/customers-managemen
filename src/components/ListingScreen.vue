<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-6 gap-6 py-5 bg-white sm:py-6">
      <slot name="filters" :filter="getFilter" />
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <TableLoader v-show="isLoading" />
          <table
            v-show="!isLoading"
            class="min-w-full divide-y divide-gray-200"
          >
            <thead class="bg-gray-50">
              <tr>
                <slot name="header" />
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <slot name="body" :list="list" />
            </tbody>
          </table>
          <Alert
            v-show="(!list.length && !isLoading) || error"
            :type="error ? 'error' : 'info'"
            :label="
              error
                ? 'Something went wrong, please try again later!'
                : 'No Data Found!'
            "
          />
        </div>
        <Pagination
          v-show="list.length && !error"
          v-model="page"
          :items-per-page="perPage"
          :count="count"
          :total="totalCount"
          @input="getItems"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TableLoader from '../components/TableLoader.vue';
import Pagination from '../components/Pagination.vue';
import Alert from '../components/Alert.vue';
import { debounce, objectToQueryString } from '../utilities';

export default {
  name: 'ListingScreen',

  props: {
    resource: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    list: [],
    count: 0,
    totalCount: 0,
    perPage: 0,
    page: 1,
    filters: {},
    isLoading: false,
    error: false,
  }),

  created() {
    this.getItems();
  },

  methods: {
    async getItems() {
      this.count = 0;
      const filtersString = objectToQueryString(this.filters);

      const queryString = `?page=${this.page}&${filtersString}`;

      this.isLoading = true;
      try {
        const response = await fetch(`${this.resource}${queryString}`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`,
          },
        });
        const data = await response.json();

        this.list = data.data;
        this.count = this.list.length;

        const { total, per_page, current_page } = data.meta;
        this.totalCount = total;
        this.perPage = per_page;
        this.page = current_page;
      } catch (error) {
        this.error = true;
      } finally {
        this.isLoading = false;
      }
    },
    getFilter(filter) {
      const { name, value } = filter.target;
      this.$set(this.filters, name, value);
      this.page = 1;
      this.debounceReq();
    },
    debounceReq: debounce(function() {
      this.getItems();
    }, 500),
  },

  components: {
    Pagination,
    TableLoader,
    Alert,
  },
};
</script>
