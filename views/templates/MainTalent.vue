<script lang="ts" setup>
const { cms } = useContext();
const { cover, form } = cms.$page;
</script>

<template>
  <main>
    <OrganismsCoverE :data="cover" />
    <OrganismsDescripForm :data="form" class="my-10" />
  </main>
</template>
