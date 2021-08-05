<template>
  <div
    class="bg-white py-3 flex items-center justify-between border-t border-gray-200"
  >
    <div class="flex-1 flex justify-between sm:hidden">
      <a
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
        :class="{ 'pointer-events-none opacity-50': value === 1 }"
        @click="changePage(value - 1)"
      >
        Previous
      </a>
      <a
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
        :class="{ 'pointer-events-none opacity-50': value === totalPages }"
        @click="changePage(value + 1)"
      >
        Next
      </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ fromCount }}</span>
          to
          <span class="font-medium">{{ toCount }}</span>
          of
          <span class="font-medium">{{ total }}</span>
          results
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            class="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            :class="{ 'pointer-events-none opacity-50': value === 1 }"
            @click="changePage(value - 1)"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            v-for="pageItem of totalPages"
            :key="pageItem"
            class="cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            :class="
              pageItem === value
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 pointer-events-none'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            "
            @click="changePage(pageItem)"
          >
            {{ pageItem }}
          </a>
          <a
            class="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            :class="{ 'pointer-events-none opacity-50': value === totalPages }"
            @click="changePage(value + 1)"
          >
            <span class="sr-only">Next</span>

            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    total: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 1,
    },
    count: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    totalPages() {
      if (!this.itemsPerPage) {
        return 0;
      }
      return Math.ceil(this.total / this.itemsPerPage);
    },
    fromCount() {
      if (!this.count) {
        return '-';
      }

      if (this.value === 1) {
        return this.count ? 1 : 0;
      }

      return this.previousPagesItems + 1;
    },
    toCount() {
      if (!this.count) {
        return '-';
      }
      return this.count + this.previousPagesItems;
    },
    previousPagesItems() {
      return (this.value - 1) * this.itemsPerPage;
    },
  },

  methods: {
    changePage(page) {
      this.$emit('input', page);
    },
  },
};
</script>
