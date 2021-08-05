<template>
  <div>
    <h1 class="text-5xl mb-10">Customers</h1>
    <ListingScreen resource="customers">
      <template #filters="{ filter }">
        <TextField label="Email" name="email" type="email" @input="filter" />
        <TextField label="Phone Number" name="phone" @input="filter" />
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
          Email
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Phone Number
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Last order Date
        </th>
      </template>
      <template #body="{ list: customers }">
        <tr v-for="customer of customers" :key="customer.id">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ customer.name }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ customer.email }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ customer.phone }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ customer.last_order_at | date }}
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
  name: 'Customers',

  components: {
    ListingScreen,
    TextField,
  },
};
</script>
