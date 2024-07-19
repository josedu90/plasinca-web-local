<script lang="ts" setup>
const { cms } = useContext();
const { cookies } = cms.$settings.common;
</script>

<template>
  <div id="cookie-consent-dialog" class="cookies">
    <div class="container mx-auto">
      <div class="card">
        <div class="title">
          {{ cookies.title }}
        </div>
        <div class="txt">
          {{ cookies.txt }}
        </div>

        <div class="flex gap-4 flex-wrap">
          <MoleculesBtn id="customize" class="cursor-pointer" :data="cookies.btns[0]" />
          <MoleculesBtn id="accept-all" class="cursor-pointer" :data="cookies.btns[1]" />
          <MoleculesBtn id="reject-all" class="cursor-pointer" :data="cookies.btns[2]" />
        </div>
      </div>
    </div>
  </div>
</template>
