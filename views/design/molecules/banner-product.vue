<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="banner-product overflow-hidden">
    <div class="basis-1/3">
      <div class="txt" v-html="data?.txt" />
      <AtomsButton :data="data?.btn.link">
        <MoleculesBtn :data="data?.btn" />
      </AtomsButton>
    </div>
    <div class="basis-2/3 flex justify-center">
      <mk-picture e-width="533" e-height="225" :src="data?.image?.src" :alt="data?.image?.alt" :title="data?.image?.title" data-aos="animate__fadeInRight" />
    </div>
  </div>
</template>
