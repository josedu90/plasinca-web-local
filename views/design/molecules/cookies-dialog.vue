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
          <input type="checkbox" :name="item.value"> {{ item.label }}
        </label>
        <button id="save-preferences" v-html="cookies.btns[3].txt" />
        <button id="accept-all" v-html="cookies.btns[1].txt" />
        <button id="reject-all" v-html="cookies.btns[2].txt" />
      </form>
    </div>
  </div>
</template>
