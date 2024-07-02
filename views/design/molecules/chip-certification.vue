<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="chip-certification">
    <div class="txt" v-html="data?.txt" />
    <mk-picture e-width="309" e-height="120" :src="data?.image?.src" :alt="data?.image?.alt" :title="data?.image?.title" />
    <AtomsButton :data="data?.btn.link">
      <MoleculesBtn :data="data?.btn" />
    </AtomsButton>
  </section>
</template>
