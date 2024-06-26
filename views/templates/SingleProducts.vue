<script lang="ts" setup>
const { cms, data } = useContext();
</script>

<template>
  <main>
    <OrganismsCoverC :data="data" />
    <OrganismsGridSubproducts :data="data.options" />
    <OrganismsChipContactDona :data="data.contact" />
  </main>
</template>
