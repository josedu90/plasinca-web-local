<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="card-product">
    <mk-picture e-width="212" e-height="216" :src="data?.image?.src" :alt="data?.image?.alt" :title="data?.image?.title" />
    <div class="chip">
      <div class="name" v-html="data?.name" />
      <AtomsButton class="rounded-full bg-gray-100 text-black shadow-xl p-2" :data="data?.link">
        <mk-icon>ph:arrow-right-bold</mk-icon>
      </AtomsButton>
    </div>
  </div>
</template>
