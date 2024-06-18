<script lang="ts" setup>
const { cms } = useContext();
const { btns } = cms.$settings.common;
</script>

<template>
  <AtomsButton class="btn-whatsapp" :data="btns?.whatsapp.link">
    <mk-picture e-width="71" e-height="71" :src="btns?.whatsapp.icon.src" :alt="btns?.whatsapp.icon.alt" :title="btns?.whatsapp.icon.title" />
  </AtomsButton>
</template>
