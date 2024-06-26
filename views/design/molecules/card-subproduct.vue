<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="card-subproduct">
    <mk-picture e-width="130" e-height="130" :src="data?.image?.src" :alt="data?.image?.alt" :title="data?.image?.title" />
    <div class="title" v-html="data?.title" />
    <AtomsButton class="rounded-full bg-secundary text-black shadow-xl p-2" :data="data?.link">
      <mk-icon>ph:arrow-down-bold</mk-icon>
    </AtomsButton>
  </div>
</template>
