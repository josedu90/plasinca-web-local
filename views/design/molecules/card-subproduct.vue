<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
  cardId: {
    type: String,
  },
});
</script>

<template>
  <div class="card-subproduct">
    <mk-picture e-width="130" e-height="130" :src="data?.image?.src" :alt="data?.image?.alt" :title="data?.image?.title" />
    <h2 class="title block" v-html="data?.title" />
    <AtomsButton data-dialog-id="dialog-overlay-4" class="rounded-full bg-secundary text-black shadow-xl p-2 open-dialog" :data-card-id="cardId">
      <mk-icon>ph:arrow-down-bold</mk-icon>
    </AtomsButton>
  </div>
</template>
