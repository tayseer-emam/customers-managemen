<template>
  <div class="col-span-6 sm:col-span-2">
    <label for="email" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <input
      :type="type"
      :name="name"
      :id="name"
      :value="value"
      autocomplete="given-name"
      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'TextField',

  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
    },
  },
};
</script>
