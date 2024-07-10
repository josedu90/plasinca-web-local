<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="card-industrie">
    <mk-picture e-width="130" e-height="130" :src="data?.image?.src" :alt="data?.image?.alt" :title="data?.image?.title" />
    <h2 class="title block" v-html="data?.title" />
    <ul>
      <li v-for="(item, i) in data?.list" :key="i">
        <h3 v-html="item.txt" />
      </li>
    </ul>
  </div>
</template>
