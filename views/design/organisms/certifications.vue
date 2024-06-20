<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="certifications">
    <div class="container mx-auto relative">
      <mk-picture data-rellax-axis="x" data-rellax-speed="0.2" e-width="150" e-height="386" class="absolute bottom-0 -left-10 rellax" :src="data?.flagleft.src" :alt="data?.flagleft.alt" :title="data?.flagleft.title" />
      <div class="w-6/12 mx-auto">
        <div class="pre-title relative" v-html="data?.pretitle" />
        <div class="title relative" v-html="data?.title" />
        <div class="pre-title relative" v-html="data?.subtitle" />
        <AtomsButton :data="data?.btn.link" class="mx-auto my-12">
          <MoleculesBtn :data="data?.btn" />
        </AtomsButton>
        <mk-picture e-width="351" e-height="89" :src="data?.certifications.src" :alt="data?.certifications.alt" :title="data?.certifications.title" />
      </div>
      <mk-picture data-rellax-axis="x" data-rellax-speed="-0.2" e-width="151" e-height="417" class="absolute bottom-0 -right-10 rellax" :src="data?.flagright.src" :alt="data?.flagright.alt" :title="data?.flagright.title" />
    </div>
  </section>
</template>
