<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="industries-grid relative">
    <mk-picture data-rellax-axis="x" data-rellax-speed="0.1" e-width="160" e-height="160" class="absolute top-[400px] -left-[150px] rellax z-20 md:block hidden" src="/images/home/adorno3.png" alt="" title="" />
    <mk-picture data-rellax-axis="x" data-rellax-speed="-0.1" e-width="160" e-height="160" class="absolute top-[500px] -right-[150px] rellax z-20 md:block hidden" src="/images/home/adorno4.png" alt="" title="" />
    <div class="container mx-auto relative z-20">
      <div class="xl:w-10/12 w-full mx-auto">
        <div class="flex flex-wrap justify-center items-stretch py-20">
          <div v-for="(item, i) in data?.items" :key="i" class="lg:w-3/12 md:w-4/12 w-full p-3" data-aos="animate__fadeInDown" :data-aos-delay="`${i}00`">
            <MoleculesCardIndustrie :data="item" class="h-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
