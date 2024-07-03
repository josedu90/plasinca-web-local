<script lang="ts" setup>
const { cms } = useContext();
const { cover } = cms.$page;
</script>

<template>
  <main>
    <mk-picture data-rellax-axis="x" data-rellax-speed="0.1" e-width="200" e-height="200" class="absolute top-[600px] z-[50] -left-[130px] rellax z-[-1] md:block hidden" src="/images/home/adorno3.png" alt="" title="" />
    <mk-picture data-rellax-axis="x" data-rellax-speed="-0.1" e-width="160" e-height="160" class="absolute top-[750px] z-[50] -right-[140px] rellax z-[-1] md:block hidden" src="/images/home/adorno4.png" alt="" title="" />
    <OrganismsCoverD :data="cover" />
    <OrganismsTestimonials class="relative z-10" />
  </main>
</template>
