<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="cover-f">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center items-center">
        <div class="md:w-5/12 w-full px-2">
          <div class="title" v-html="data?.title" />
          <div class="txt" v-html="data?.txt" />
        </div>
        <div class="md:w-5/12 w-full px-2 lg:mt-0 mt-10">
          <mk-picture e-width="531" e-height="531" class="mx-auto md:block hidden rellax" data-rellax-axis="x" data-rellax-speed="1.5" :src="data?.image.src" :alt="data?.image.alt" :title="data?.image.title" />
          <mk-picture e-width="531" e-height="531" class="md:hidden" :src="data?.image.src" :alt="data?.image.alt" :title="data?.image.title" />
        </div>
      </div>
    </div>
  </section>
</template>
