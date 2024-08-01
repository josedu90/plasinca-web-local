<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="date">
    <div class="flex">
      <div class="square">
        <mk-picture e-width="35" e-height="35" src="/images/iconos/calendar-outline.png" alt="" title="" />
        <p class="year" v-html="data?.year" />
      </div>
      <div class="txt " v-html="data?.txt" />
    </div>
  </section>
</template>
