<script lang="ts" setup>
defineProps({
  data: {
    type: String,
  },
});
</script>

<template>
  <div :id="data" class="flex p-4 pr-6 mb-4 rounded-lg dark:bg-gray-800 mt-4" ::class="`response.containerClases`" role="alert">
    <div :v-html="`response.text`" />
    <div class="ml-auto cursor-pointer -mx-1.5 -my-1.5 rounded-lg focus:ring-2 h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700 flex justify-center items-center" :data-dismiss-target="`#${data}`" ::class="`response.insideClases`" aria-label="Close">
      <span class="sr-only">Close</span>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
    </div>
  </div>
</template>
