<script lang="ts" setup>
defineProps({
  data: {
    type: String,
  },
});
</script>

<template>
  <div class="chip-contact-dona">
    <div v-if="data" class="txt" v-html="data" />
    <OrganismsChipContact class="!bg-transparent mt-10 relative z-20 md:-mb-[300px] -mb-[100px]" />
    <mk-picture e-width="1089" e-height="384" class="z-10 mx-auto rellax md:block hidden" data-rellax-speed="-0.7" src="/images/productos/arco.png" alt="" title="" />
    <mk-picture e-width="1089" e-height="384" class="z-10 mx-auto md:hidden block" src="/images/productos/arco.png" alt="" title="" />
  </div>
</template>
