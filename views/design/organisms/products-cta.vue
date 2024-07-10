<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="products-cta">
    <div class="container mx-auto relative py-20">
      <mk-picture e-width="1992" e-height="386" class="absolute z-10 top-0 rellax" data-rellax-speed="1.5" src="/images/home/donaC.png" alt="" title="" />
      <div class="xl:w-10/12 w-full mx-auto relative z-20">
        <div class="title relative" v-html="data?.title" />
        <div class="txt relative" v-html="data?.txt" />
        <AtomsButton data-aos="animate__fadeIn" class="mx-auto my-12 open-dialog" data-dialog-id="dialog-overlay-1">
          <MoleculesBtn :data="data?.btn" class="mx-auto" />
        </AtomsButton>
        <MoleculesGridProducts />
      </div>
    </div>
  </section>
</template>
