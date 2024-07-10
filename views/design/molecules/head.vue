<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="head">
    <div class="container mx-auto">
      <div class="md:w-6/12 w-full mx-auto" v-html="data" />
    </div>
  </div>
</template>
