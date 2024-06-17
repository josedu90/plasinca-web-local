<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="btn-dropdown toggle">
    <div class="btn" ::class="`{'active':state}`" :@click="`toggle()`">
      <span>{{ data?.txt }}</span>
      <mk-icon>
        bi:chevron-down
      </mk-icon>
    </div>
    <nav ::class="`{'active':state}`">
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
