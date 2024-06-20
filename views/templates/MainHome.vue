<script lang="ts" setup>
const { cms } = useContext();
const {
  cover,
  certifications,
  products,
  industries,
} = cms.$page;
</script>

<template>
  <main class="overflow-x-hidden">
    <MoleculesPersonForm></MoleculesPersonForm>
    <OrganismsCoverA :data="cover" />
    <OrganismsCertifications :data="certifications" />
    <OrganismsProducts :data="products" />
    <OrganismsIndustries :data="industries" />
    <OrganismsTestimonials class="relative z-10" />
    <OrganismsChipContact class="relative z-20" />
  </main>
</template>
