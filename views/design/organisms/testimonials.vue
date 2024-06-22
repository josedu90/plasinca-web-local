<script lang="ts" setup>
const { cms } = useContext();
const { testimonials } = cms.$settings.common;
</script>

<template>
  <section class="testimonials">
    <mk-picture data-rellax-axis="x" data-rellax-speed="0.22" e-width="646" e-height="646" class="absolute rellax z-10 top-5" src="/images/home/donaD.png" alt="" title="" />
    <div class="container mx-auto">
      <div class="md:w-8/12 w-full mx-auto relative z-20">
        <div class="title" v-html="testimonials?.title" />
        <div class="carousel">
          <div class="carousel-inner">
            <div v-for="(item, i) in testimonials?.items" :key="i" class="carousel-item">
              <p class="top">
                {{ item.title }}
              </p>
              <mk-picture e-width="84" e-height="84" sizes="xs:84" :src="item.image.src" :alt="item.image.alt" :title="item.image.title" />
              <div class="txt" v-html="item.txt" />
            </div>
          </div>
        </div>
        <div class="brand-logos">
          <div v-for="(item, i) in testimonials?.items" :key="i" :data-index="i">
            <mk-picture e-width="139" e-height="100" :src="item.image.src" :alt="item.image.alt" :title="item.image.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
