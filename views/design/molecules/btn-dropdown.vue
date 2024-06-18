<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
  toggle: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="btn-dropdown" :class="{ toggle }">
    <div class="btn" ::class="`{'active':childState}`" :@click="`childToggle()`">
      <span>{{ data?.txt }}</span>
      <mk-icon>
        bi:chevron-down
      </mk-icon>
    </div>
    <nav ::class="`{'active':childState}`">
      <ul>
        <li v-for="(item, i) in data?.menu" :key="i" :style="`transform: translateY(-${i + (58 * (i + 1))}px);`">
          <AtomsButton :data="item.link">
            <div class="btn">
              <span>{{ item?.txt }}</span>
            </div>
          </AtomsButton>
        </li>
      </ul>
    </nav>
  </div>
</template>
