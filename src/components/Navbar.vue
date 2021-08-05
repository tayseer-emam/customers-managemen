<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-show="!isMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-show="isMenuOpen"
              class=" h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <router-link
                to="/customers"
                custom
                #default="{ href, isActive, navigate }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  :class="isActive ? 'bg-gray-900 text-white' : 'text-gray-300'"
                  >Customers</a
                >
              </router-link>

              <router-link
                to="/categories"
                custom
                #default="{ href, isActive, navigate }"
              >
                <a
                  :href="href"
                  @click="navigate"
                  class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  :class="isActive ? 'bg-gray-900 text-white' : 'text-gray-300'"
                  >Categories</a
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:hidden" id="mobile-menu" v-show="isMenuOpen">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          to="/customers"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          active-class="bg-gray-900 text-white"
          >Customers</router-link
        >

        <router-link
          to="/categories"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          active-class="bg-gray-900 text-white"
          >Categories</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    isMenuOpen: false,
  }),
};
</script>
