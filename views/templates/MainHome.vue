<script lang="ts" setup>
const { cms } = useContext();
const {
  cover,
  certifications,
} = cms.$page;
</script>

<template>
  <main>
    <OrganismsCoverA :data="cover" />
    <OrganismsCertifications :data="certifications" />
  </main>
</template>
