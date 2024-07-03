<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="descri-form">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div class="xl:basis-1/3 md:basis-1/2 xl:ml-20">
          <div class="txt" v-html="data?.txt" />
        </div>
        <div class="xl:basis-1/3 md:basis-1/2 xl:ml-12">
          <div class="box">
            <div class="title" v-html="data?.title" />
            <MoleculesFormTalent :data="data" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
