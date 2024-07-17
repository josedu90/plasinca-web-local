<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="subproduct-slider flex flex-wrap items-center justify-between">
    <div class="info md:w-5/12 w-full">
      <div class="title" v-html="data?.title" />
      <div class="txt text-justify" v-html="data?.txt" />
    </div>
    <div class="carousel md:w-6/12 w-full" data-interval="2000">
      <div class="carousel-inner">
        <div v-for="(item, i) in data?.slider" :key="i" class="carousel-item">
          <mk-picture e-width="384" e-height="384" class="" :src="item?.image.src" :alt="item?.image.src" :title="item?.image.src" />
        </div>
      </div>
      <div class="brand-logos">
        <div v-for="(item, i) in data?.slider" :key="i" :data-index="i" />
      </div>
    </div>
    <AtomsButton data-dialog-id="dialog-overlay-4" class="close-dialog absolute top-2 right-2 bg-gray-100 rounded-full shadow-lg">
      <mk-icon>
        ic:round-close
      </mk-icon>
    </AtomsButton>
  </div>
</template>
