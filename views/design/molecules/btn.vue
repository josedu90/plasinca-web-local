<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="btn">
    <span>{{ data?.txt }}</span>
  </div>
</template>
