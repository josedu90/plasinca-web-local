<script lang="ts" setup>
const { cms } = useContext();
const { content } = cms.$page;
</script>

<template>
  <div id="error" class="container mx-auto py-10">
    <div class="lg:w-8/12 w-full mx-auto">
      <h1 class="text-[3rem] mb-5 block" v-html="content.title" />
      <p class="text-[1.5rem] leading-[1.5rem]" v-html="content.txt" />
      <AtomsButton v-for="(item, i) in content.list" :key="i" :data="item.link" class="my-3">
        <MoleculesBtn :data="item" class="min-w-[200px]" />
      </AtomsButton>
      <p class="text-[1.5rem]" v-html="content.btxt" />
    </div>
  </div>
</template>
