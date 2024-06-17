<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
  },
});
const bind = {
  target: props.data?.blank ? '_blank' : undefined,
};
</script>

<template>
  <mk-link v-if="data?.type === 'mk'" :to="data?.url">
    <slot />
  </mk-link>
  <a v-else-if="data?.type === 'a'" :href="data?.url" v-bind="bind">
    <slot />
  </a>
  <button v-else>
    <slot />
  </button>
</template>
