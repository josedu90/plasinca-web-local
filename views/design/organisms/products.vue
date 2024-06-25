<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="products">
    <div class="container mx-auto relative py-20">
      <div class="xl:w-10/12 w-full mx-auto">
        <div class="txt" v-html="data?.txt" />
        <MoleculesGridProducts />
      </div>
    </div>
  </section>
</template>
