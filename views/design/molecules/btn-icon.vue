<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="btn-icon">
    <span>{{ data?.txt }}</span>
    <mk-picture e-width="24" e-height="24" :src="data?.icon.src" :alt="data?.icon.alt" :title="data?.icon.title" />
  </div>
</template>
