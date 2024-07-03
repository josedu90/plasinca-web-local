<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="location">
    <div class="container mx-auto relative z-20">
      <div class="title" v-html="data?.title" />
      <div class="txt" v-html="data?.txt" />
      <div class="lg:w-10/12 w-full mx-auto">
        <MoleculesCardLocation :data="data?.card" />
      </div>
    </div>
  </section>
</template>
