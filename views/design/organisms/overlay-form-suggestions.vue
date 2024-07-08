<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div id="dialog-overlay-4" class="overlay dialog-overlay">
    <MoleculesFormSuggestions :data="data" class="chip" />
  </div>
</template>
