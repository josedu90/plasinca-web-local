<script lang="ts" setup>
const { cms } = useContext();
const {
  cover,
  products,
} = cms.$page;
</script>

<template>
  <main>
    <OrganismsCoverB :data="cover" class="!pb-40" />
    <div class="bg-white rounded-t-[110px] -mt-[110px] relative overflow-hidden">
      <OrganismsProducts :data="products" />
      <OrganismsChipContactDona />
    </div>
  </main>
</template>
