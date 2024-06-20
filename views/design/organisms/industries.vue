<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="industries">
    <mk-picture data-rellax-axis="x" data-rellax-speed="0.12" e-width="160" e-height="160" class="absolute top-0 -left-[250px] rellax" src="/images/home/adorno1.png" alt="" title="" />
    <mk-picture data-rellax-axis="x" data-rellax-speed="-0.1" e-width="160" e-height="160" class="absolute top-0 -right-[230px] rellax" src="/images/home/adorno2.png" alt="" title="" />
    <mk-picture data-rellax-axis="x" data-rellax-speed="0.1" e-width="200" e-height="200" class="absolute bottom-0 -left-[300px] rellax" src="/images/home/adorno3.png" alt="" title="" />
    <mk-picture data-rellax-axis="x" data-rellax-speed="-0.1" e-width="160" e-height="160" class="absolute bottom-0 -right-[300px] rellax" src="/images/home/adorno4.png" alt="" title="" />
    <div class="container mx-auto">
      <div class="w-10/12 mx-auto">
        <div class="title relative" v-html="data?.title" />
        <div class="grid grid-cols-5 gap-5 mt-20">
          <div v-for="(item, i) in data?.items" :key="i" :data="item" class="mb-5">
            <mk-picture e-width="150" e-height="150" class="mx-auto block" :src="item?.image.src" :alt="item?.image.alt" :title="item?.image.title" />
            <div class="txt" v-html="item.txt" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
