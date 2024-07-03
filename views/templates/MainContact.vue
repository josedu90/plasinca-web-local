<script lang="ts" setup>
const { cms } = useContext();
const { cover, cards, location, form } = cms.$page;
</script>

<template>
  <main>
    <OrganismsCoverD :data="cover" />
    <div class="container mx-auto">
      <div class="lg:w-10/12 w-full md:flex items-stretch mx-auto gap-8">
        <MoleculesCardPhones class="basis-1/3 md:my-0 my-5" :data="cards.phones" />
        <MoleculesCardSuppliers class="basis-2/3" :data="cards.suggestions" />
      </div>
    </div>
    <OrganismsLocation :data="location" />
    <OrganismsOverlayFormSuppliers :data="form" />
  </main>
</template>
