<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="cover-c">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-between items-center w-10/12 mx-auto">
        <div class="txt lg:w-full w-full" v-html="data?.txt" />
        <div class="image lg:w-4/12 md:w-5/12 w-full mx-auto">
          <mk-picture e-width="48" e-height="48" data-rellax-axis="x" data-rellax-speed="-2" sizes="xs:48" class="absolute -left-20 bottom-10 rellax" src="/images/productos/elipse.png" alt="" title="" />
          <mk-picture e-width="85" e-height="85" data-rellax-axis="x" data-rellax-speed="2" class="absolute -right-32 bottom-10 rellax" src="/images/productos/elipse.png" alt="" title="" />
          <mk-picture e-width="420" e-height="420" data-rellax-speed="2" class="absolute top-0 rellax" src="/images/productos/dona-cover.png" alt="" title="" />
          <mk-picture e-width="320" e-height="320" size="xs:320" data-rellax-speed="-2" class="relative z-20 mx-auto rellax" :src="data?.image.src" :alt="data?.image.alt" :title="data?.image.title" />
        </div>
      </div>
    </div>
  </section>
</template>
