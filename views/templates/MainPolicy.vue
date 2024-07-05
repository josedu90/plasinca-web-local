<script lang="ts" setup>
const { cms } = useContext();
const {
  content,
} = cms.$page;
</script>

<template>
  <main>
    <MoleculesHead :data="content.title" class="mb-20" />
    <div class="container mx-auto">
      <p class="text-[20px] leading-5 w-10/12 mx-auto" v-html="content.txt" />
      <MoleculesAccordion v-for="(item, i) in content.items" :key="i" :data="item" :data-index="`${i}`" />
    </div>
  </main>
</template>
