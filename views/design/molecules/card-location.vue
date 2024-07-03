<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="card-location">
    <div class="basis-1/4 flex flex-col justify-between">
      <mk-picture e-width="57" e-height="57" :src="data?.icon?.src" :alt="data?.icon?.alt" :title="data?.icon?.title" />
      <div class="place" v-html="data?.place" />
      <div class="address" v-html="data?.address" />
      <AtomsButton :data="data?.btn.link">
        <MoleculesBtn :data="data?.btn" />
      </AtomsButton>
    </div>
    <div class="basis-3/4 md:mt-0 mt-5">
      <div v-html="data?.map" />
    </div>
  </div>
</template>
