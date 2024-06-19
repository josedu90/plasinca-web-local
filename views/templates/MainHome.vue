<script lang="ts" setup>
const { cms } = useContext();
const {
  cover,
} = cms.$page;
</script>

<template>
  <main>
    <OrganismsCoverA :data="cover" />
    <!-- <div class="app">
      <div data-scene data-speed="0.2">
        rolly.js
      </div>
      <div data-scene>
        provides…
      </div>
      <div data-scene data-speed="1.2">
        some delicious…
      </div>
      <div data-scene data-speed="1.4">
        very delicious…
      </div>
      <div data-scene data-speed="1.6">
        parallax effects ❤️
      </div>
    </div> -->
  </main>
</template>
