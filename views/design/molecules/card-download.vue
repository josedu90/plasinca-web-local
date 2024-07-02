<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="card-download">
    <mk-picture e-width="85" e-height="85" :src="data?.icon?.src" :alt="data?.icon?.alt" :title="data?.icon?.title" />
    <div class="title" v-html="data?.title" />
    <AtomsButton :data="data?.link">
      <MoleculesBtn :data="data?.btn" />
    </AtomsButton>
  </div>
</template>
