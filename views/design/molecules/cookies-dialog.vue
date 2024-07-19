<script lang="ts" setup>
const { cms } = useContext();
const { cookies } = cms.$settings.common;
</script>

<template>
  <!-- Cookie Customization Dialog -->
  <div id="cookie-customization-dialog" class="cookie-customization-dialog" style="display: none;">
    <div class="cookie-consent-content">
      <div class="title">
        {{ cookies.custome }}
      </div>
      <form id="cookie-form">
        <label v-for="(item, i) in cookies.inputs" :key="i">
          <input type="checkbox" :name="item.value" :checked="item.value === 'essential'" :disabled="item.value === 'essential'"> {{ item.label }}
        </label>
        <div class="flex gap-4">
          <button id="save-preferences" v-html="cookies.btns[3].txt" />
          <button id="customize-accept-all" v-html="cookies.btns[1].txt" />
          <button id="customize-reject-all" v-html="cookies.btns[2].txt" />
        </div>
      </form>
    </div>
  </div>
</template>
