<script lang="ts" setup>
const { cms } = useContext();
const {
  content,
} = cms.$page;
</script>

<template>
  <main>
    <MoleculesHead :data="content.title" class="mb-20" />
    <div class="container mx-auto pb-10">
      <p class="text-[20px] leading-5 md:w-10/12 w-full mx-auto mb-5" v-html="content.txt" />
      <MoleculesAccordion v-for="(item, i) in content.items" :key="i" class="my-3 md:w-10/12 w-full mx-auto" :data="item" :data-index="`${i}`" />
    </div>
  </main>
</template>
