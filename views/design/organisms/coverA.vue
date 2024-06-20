<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="cover-a">
    <div class="container mx-auto">
      <div class="flex justify-end">
        <div class="w-3/12">
          <mk-picture data-rellax-speed="5" e-width="309" e-height="309" class="mx-auto -mb-[272px] relative top-10 z-10 rellax" src="/images/home/dona1-cover.png" alt="" title="" />
          <mk-picture data-rellax-axis="x" data-rellax-speed="-0.2" e-width="229" e-height="512" class="mx-auto relative z-20 rellax" :src="data?.image.src" :alt="data?.image.alt" :title="data?.image.title" />
        </div>
        <div class="w-8/12">
          <div class="w-10/12 mx-auto mb-10">
            <div class="title" v-html="data?.title" />
            <div class="txt" v-html="data?.txt" />
          </div>
          <mk-picture data-rellax-speed="-0.8" e-width="599" e-height="344" class="-mb-[290px] mx-auto relative z-20 rellax" :src="data?.products.src" :alt="data?.products.alt" :title="data?.products.title" />
          <mk-picture data-rellax-axis="x" data-rellax-speed="0.2" e-width="867" e-height="307" class="mx-auto relative z-10 rellax" src="/images/home/donaB.png" alt="" title="" />
        </div>
      </div>
    </div>
  </section>
</template>
