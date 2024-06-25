<script lang="ts" setup>
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
  <section class="grid-products">
    <div class="grid md:grid-cols-3 gap-2 gap-y-8 mt-20">
      <MoleculesCardProduct v-for="(item, i) in productos" :key="i" :data="item" />
    </div>
  </section>
</template>
