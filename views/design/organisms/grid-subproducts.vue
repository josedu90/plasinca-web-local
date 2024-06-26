<script lang="ts" setup>
defineProps({
  data: {
    type: Array,
  },
});
</script>

<template>
  <section class="grid-subproducts">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center items-strech mx-auto">
        <div v-for="(item, i) in data" :key="i" class="p-2 w-2/12">
          <MoleculesCardSubproduct :data="item" />
        </div>
      </div>
    </div>
  </section>
</template>
