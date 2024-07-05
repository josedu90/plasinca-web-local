<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="accordion-item" data-index="0">
    <button class="accordion-header flex justify-between items-center bg-blue-500 text-white w-full text-left p-4 focus:outline-none">
      <span v-html="data?.title" />
      <svg class="chevron w-6 h-6 text-white rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
    </button>
    <div class="accordion-content bg-gray-100" v-html="data?.txt" />
  </div>
</template>
