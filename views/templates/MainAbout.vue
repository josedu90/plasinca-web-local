<script lang="ts" setup>
const { cms } = useContext();
const { cover, history, certifications, downloads } = cms.$page;
</script>

<template>
  <main>
    <mk-picture data-rellax-axis="x" data-rellax-speed="0.12" e-width="160" e-height="160" class="absolute top-[1200px] -left-[150px] rellax z-[-1] md:block hidden" src="/images/home/adorno1.png" alt="" title="" />
    <mk-picture data-rellax-axis="x" data-rellax-speed="-0.1" e-width="160" e-height="160" class="absolute top-[1450px] -right-[140px] rellax z-[-1] md:block hidden" src="/images/home/adorno2.png" alt="" title="" />
    <mk-picture data-rellax-axis="x" data-rellax-speed="0.1" e-width="200" e-height="200" class="absolute top-[600px] -left-[130px] rellax z-[-1] md:block hidden" src="/images/home/adorno3.png" alt="" title="" />
    <mk-picture data-rellax-axis="x" data-rellax-speed="-0.1" e-width="160" e-height="160" class="absolute top-[750px] -right-[140px] rellax z-[-1] md:block hidden" src="/images/home/adorno4.png" alt="" title="" />
    <OrganismsCoverD :data="cover" />
    <OrganismsTimeline :data="history" />
    <div class="container mx-auto">
      <div class="lg:w-8/12 w-full mx-auto">
        <MoleculesChipCertification :data="certifications" />
      </div>
      <div class="xl:w-10/12 w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-10 py-20">
        <MoleculesCardDownload v-for="(item, i) in downloads.items" :key="i" :data="item" data-aos="animate__fadeInUp" :data-aos-delay="`${i}00`" />
      </div>
    </div>
    <OrganismsTestimonials class="relative z-10" />
  </main>
</template>
