<script lang="ts" setup>
const { shared } = useSharedContext();
const { products } = shared;

products.forEach((item: { link?: any; slug: any }) => {
  item.link = {
    url: `single-products/${item.slug}`,
    type: 'mk',
    blank: false,
  };
});
</script>

<template>
  <section class="grid-products">
    <div class="grid md:grid-cols-3 gap-2 gap-y-8 mt-20">
      <MoleculesCardProduct v-for="(item, i) in products" :key="i" :data="item" />
    </div>
  </section>
</template>
