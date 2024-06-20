<script lang="ts" setup>
const { cms } = useContext();
const { forms } = cms.$settings.common;
</script>

<template>
  <section id="form-person">
    <div class="container mx-auto">
      <div class="w-4/12">
        <form id="the-person" :v-scope="'SendForm()'" :[`@submit.prevent`]="'sendForm'">
          <template v-for="(item, i) in forms?.personal" :key="i">
            <fieldset v-if="item.type === 'text' || item.type === 'file' || item.type === 'tel' || item.type === 'email'" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
              <label :for="item.id">{{ item.label }}</label>
              <input :type="item.type" :name="item.id" :placeholder="item.placeholder" :v-model="'value'">
              <div class="regular text-xs pt-1 pb-3 text-red-900">
                [{error}]
              </div>
            </fieldset>
            <fieldset v-if="item.type === 'select'" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
              <label :for="item.id">{{ item.label }}</label>
              <select :id="item.id" :name="item.id" :v-model="'value'">
                <option v-for="(ite, j) in item.options" :key="j" :value="ite.label">
                  {{ ite.label }}
                </option>
              </select>
              <div class="regular text-xs pt-1 pb-3 text-red-900">
                [{error}]
              </div>
            </fieldset>
            <fieldset v-if="item.type === 'textarea'" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
              <label :for="item.id">{{ item.label }}</label>
              <textarea :id="item.id" :placeholder="item.placeholder" :v-model="'value'" />
              <div class="regular text-xs pt-1 pb-3 text-red-900">
                [{error}]
              </div>
            </fieldset>
          </template>
          <MoleculesAlert :v-show="`response.active`" />
          <atoms-button class="btn-primary mx-auto block mt-10">
            <span :v-if="`!spinner`">{{ forms?.btn.txt }}</span>
            <AtomsSpinner :v-if="`spinner`" />
          </atoms-button>
        </form>
      </div>
    </div>
  </section>
</template>
