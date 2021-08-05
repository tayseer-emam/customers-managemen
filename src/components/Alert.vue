<template>
  <div
    class="text-white px-6 mx-4 py-4 my-4 border-0 rounded mb-4"
    :class="type === 'info' ? 'bg-gray-500' : 'bg-red-500'"
  >
    <span class="text-xl inline-block mr-5 align-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="icons[type]"
        />
      </svg>
    </span>
    <span class="inline-block align-middle mr-8">
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
      validator(value) {
        return ['info', 'error'].includes(value);
      },
    },
    label: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    icons: {
      info:
        'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      error: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  }),
};
</script>
