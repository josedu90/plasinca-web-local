<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="card-phones">
    <mk-picture e-width="57" e-height="57" :src="data?.icon?.src" :alt="data?.icon?.alt" :title="data?.icon?.title" />
    <div class="title" v-html="data?.title" />
    <AtomsButton v-for="(item, i) in data?.numbers" :key="i" :data="item.link">
      <div class="txt" v-html="item.number" />
    </AtomsButton>
  </div>
</template>
