<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="timeline">
    <div class="container mx-auto">
      <div class="lg:w-8/12 w-full mx-auto">
        <div class="md:grid grid-rows-4 grid-flow-col gap-4">
          <div class="title md:my-0 my-4" v-html="data?.title" />
          <MoleculesDate v-for="(item, i) in data?.items" :key="i" class="md:my-0 my-4" :data="item" data-aos="animate__fadeInUp" :data-aos-delay="`${i}00`" />
        </div>
      </div>
    </div>
  </section>
</template>
