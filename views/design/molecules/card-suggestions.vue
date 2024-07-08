<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="card-suggestions">
    <mk-picture e-width="57" e-height="57" :src="data?.icon?.src" :alt="data?.icon?.alt" :title="data?.icon?.title" />
    <div class="title" v-html="data?.title" />
    <div class="txt" v-html="data?.txt" />
    <AtomsButton :data="data?.btn.link" data-dialog-id="dialog-overlay-4" class="open-dialog">
      <MoleculesBtn :data="data?.btn" />
    </AtomsButton>
  </div>
</template>
