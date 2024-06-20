<script lang="ts" setup>
const { cms } = useContext();
const { contact } = cms.$settings.common;
</script>

<template>
  <section class="chip-contact">
    <div class="container mx-auto">
      <div class="w-8/12 mx-auto chip">
        <mk-picture e-width="160" e-height="126" class="relative mx-auto -top-16 -mb-10" :src="contact?.image.src" :alt="contact?.image.alt" :title="contact?.image.title" />
        <div class="pre-title" v-html="contact?.pretitle" />
        <div class="title" v-html="contact?.title" />
        <div class="flex flex-wrap gap-3 justify-center">
          <AtomsButton v-for="(item, i) in contact.btns" :key="i">
            <MoleculesBtnTxtIcon class="blue flex-row-reverse" :data="item" />
          </AtomsButton>
        </div>
      </div>
    </div>
  </section>
</template>
