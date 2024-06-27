<script lang="ts" setup>
const { cms, data } = useContext();
</script>

<template>
  <main class="overflow-hidden">
    <OrganismsCoverC :data="data" />
    <OrganismsGridSubproducts :data="data.options" />
    <OrganismsChipContactDona :data="data.contact" />
    <div id="dialog-overlay-4" class="overlay dialog-overlay">
      <div class="chip">
        <OrganismsSubproductSlider v-for="(item, i) in data.options" :key="i" :data="item" :data-card="`card-${i}`" />
      </div>
    </div>
  </main>
</template>
