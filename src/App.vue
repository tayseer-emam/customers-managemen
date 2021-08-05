<template>
  <div id="app">
    <Navbar />
    <main>
      <div class="max-w-7xl mx-auto py-6 px-6 lg:px-8">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',

  components: {
    Navbar,
  },
};
</script>
