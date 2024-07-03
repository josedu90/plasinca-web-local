<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="cover-e">
    <div class="head">
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center xl:justify-start justify-center">
          <div class="xl:w-4/12 md:w-5/12 w-full xl:ml-24 h-fit">
            <div class="title" v-html="data?.title" />
          </div>
          <div class="xl:w-4/12 md:w-5/12 w-full md:ml-24">
            <mk-picture e-width="420" e-height="420" class="md:block hidden rellax relative md:top-0 top-10" data-rellax-axis="x" data-rellax-speed="1.5" :src="data?.image.src" :alt="data?.image.alt" :title="data?.image.title" />
            <mk-picture e-width="420" e-height="420" class="md:hidden relative md:top-0 top-10" :src="data?.image.src" :alt="data?.image.alt" :title="data?.image.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
