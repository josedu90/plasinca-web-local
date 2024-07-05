<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="accordion-item" data-index="0">
    <button class="accordion-header">
      <span v-html="data?.title" />
      <mk-icon class="chevron">
        tabler:chevron-down
      </mk-icon>
    </button>
    <div class="accordion-content">
      <div class="pb-5" v-html="data?.txt" />
    </div>
  </div>
</template>
