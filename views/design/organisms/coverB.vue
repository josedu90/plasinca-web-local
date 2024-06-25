<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="cover-b">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center items-center">
        <div class="flex items-center gap-4 lg:w-5/12 w-full px-2">
          <mk-picture e-width="187" e-height="179" class="levitation min-w-[187px] lg:block hidden" src="/images/productos/adorno1.png" alt="" title="" />
          <div class="txt lg:text-left text-center" v-html="data?.txt" />
        </div>
        <div class="lg:w-5/12 w-full px-2 lg:mt-0 mt-10">
          <mk-picture e-width="531" e-height="531" class="mx-auto" :src="data?.image.src" :alt="data?.image.alt" :title="data?.image.title" />
        </div>
      </div>
    </div>
  </section>
</template>
