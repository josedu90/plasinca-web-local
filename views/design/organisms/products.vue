<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});

const productos = [
  {
    name: 'Rollos Naturales o pigmentados (color)',
    image: {
      src: '/images/home/rolos-naturales-o-pigmentados.png',
      alt: '',
      title: '',
    },
    link: {},
  },
  {
    name: 'Rollos Naturales o pigmentados (color)',
    image: {
      src: '/images/home/rolos-naturales-o-pigmentados.png',
      alt: '',
      title: '',
    },
    link: {},
  },
  {
    name: 'Rollos Naturales o pigmentados (color)',
    image: {
      src: '/images/home/rolos-naturales-o-pigmentados.png',
      alt: '',
      title: '',
    },
    link: {},
  },
];
</script>

<template>
  <section class="products">
    <div class="container mx-auto relative py-20">
      <mk-picture e-width="1992" e-height="386" class="absolute z-10 top-0 rellax" data-rellax-speed="1.5" src="/images/home/donaC.png" alt="" title="" />
      <div class="w-10/12 mx-auto relative z-20">
        <div class="title relative" v-html="data?.title" />
        <div class="txt relative" v-html="data?.txt" />
        <AtomsButton class="mx-auto my-12 open-dialog">
          <MoleculesBtn :data="data?.btn" />
        </AtomsButton>
        <div class="grid grid-cols-3 gap-2 mt-20">
          <MoleculesCardProduct v-for="(item, i) in productos" :key="i" :data="item" />
        </div>
      </div>
    </div>
  </section>
</template>
