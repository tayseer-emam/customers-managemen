<template>
  <table class="animate-pulse min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th v-for="col of 4" :key="col" class="bg-gray-300 h-10"></th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-300">
      <tr v-for="row of 10" :key="row">
        <td v-for="col of 4" :key="col" class="bg-gray-100 h-14"></td>
      </tr>
    </tbody>
  </table>
</template>
