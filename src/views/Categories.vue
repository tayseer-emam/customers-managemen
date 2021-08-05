<template>
  <div>
    <h1 class="text-5xl mb-10">Categories</h1>
    <ListingScreen resource="categories">
      <template #filters="{ filter }">
        <TextField label="Name" name="name" @input="filter" />
        <TextField label="Reference" name="reference" @input="filter" />
      </template>
      <template #header>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Name
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Reference
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Created Date
        </th>
      </template>
      <template #body="{ list: categories }">
        <tr v-for="category of categories" :key="category.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ category.name }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ category.reference }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ category.created_at | date }}
          </td>
        </tr>
      </template>
    </ListingScreen>
  </div>
</template>

<script>
import ListingScreen from '../components/ListingScreen.vue';
import TextField from '../components/TextField.vue';

export default {
  name: 'Categories',

  components: {
    ListingScreen,
    TextField,
  },
};
</script>
