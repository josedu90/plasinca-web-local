<script lang="ts" setup>
const { cms } = useContext();
const {
  cover,
  industries,
  banner,
} = cms.$page;
</script>

<template>
  <main>
    <OrganismsCoverF :data="cover" class="pb-[150px]" />
    <OrganismsIndustriesGrid :data="industries" class="-mt-[120px]" />
    <div class="container mx-auto">
      <MoleculesBannerProduct :data="banner" class="lg:w-10/12 w-full mx-auto mb-20" />
    </div>
  </main>
</template>
