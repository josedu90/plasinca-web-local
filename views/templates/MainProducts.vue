<script lang="ts" setup>
const { cms } = useContext();
const {
  cover,
  products,
} = cms.$page;
</script>

<template>
  <main class="overflow-x-hidden">
    <OrganismsCoverB :data="cover" class="!pb-40" />
    <div class="bg-white rounded-t-[110px] -mt-[110px] relative overflow-hidden">
      <OrganismsProducts :data="products" />
      <OrganismsChipContact class="!bg-transparent mt-10 relative z-20 md:-mb-[300px] -mb-[100px]" />
      <mk-picture e-width="1089" e-height="384" class="z-10 mx-auto rellax md:block hidden" data-rellax-speed="-0.7" src="/images/productos/arco.png" alt="" title="" />
      <mk-picture e-width="1089" e-height="384" class="z-10 mx-auto md:hidden block" src="/images/productos/arco.png" alt="" title="" />
    </div>
  </main>
</template>
