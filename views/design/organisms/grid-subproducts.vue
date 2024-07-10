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
        <div v-for="(item, i) in data" :key="i" class="p-2 xl:w-2/12 md:w-3/12 w-full">
          <MoleculesCardSubproduct :data="item" :cardId="`card-${i}`" data-aos="animate__fadeInDown" :data-aos-delay="`${i}00`" />
        </div>
      </div>
    </div>
  </section>
</template>
