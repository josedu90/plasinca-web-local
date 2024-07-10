<script lang="ts" setup>
const { cms } = useContext();
const { forms } = cms.$settings.common;
</script>

<template>
  <section class="form">
    <div class="container mx-auto">
      <form id="the-person" :v-scope="'SendForm()'" :[`@submit.prevent`]="'sendForm'">
        <label :v-scope="`Field({id:'form',initValue:'person'})`">
          <input id="form" :v-model="'value'" type="hidden" name="form">
        </label>
        <template v-for="(item, i) in forms?.personal" :key="i">
          <fieldset v-if="item.type === 'text' || item.type === 'number' || item.type === 'tel' || item.type === 'email'" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
            <label :for="item.id">{{ item.label }}</label>
            <input v-if="item.id === 'large' || item.id === 'width' || item.id === 'thickness'" :type="item.type" :name="item.id" :placeholder="item.placeholder" :v-model="'value'" :@change="`calculateUnits`" class="border-red">
            <input v-else-if="item.id === 'units'" :type="item.type" :name="item.id" :placeholder="item.placeholder" :v-model="'value'" readonly disabled>
            <input v-else :type="item.type" :name="item.id" :placeholder="item.placeholder" :v-model="'value'">
            <div class="regular text-xs pt-1 pb-3 text-red-900">
              [{error}]
            </div>
          </fieldset>
          <fieldset v-if="item.type === 'file'" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
            <label :for="item.id">{{ item.label }}</label>
            <input :type="item.type" :name="item.id" :placeholder="item.placeholder" :v-model="'value'" :@change="`handleFileChange`" accept="application/pdf">
            <div class="regular text-xs pt-1 pb-3 text-red-900">
              [{error}]
            </div>
          </fieldset>
          <fieldset v-if="item.type === 'select'" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
            <label :for="item.id">{{ item.label }}</label>
            <select v-if="item.id === 'unidad'" :id="item.id" :@change="`calculateUnits`" :name="item.id" :v-model="'value'">
              <option v-for="(ite, j) in item.options" :key="j" :value="ite.value ? ite.value : ite.label">
                {{ ite.label }}
              </option>
            </select>
            <select v-else :id="item.id" :@change="`calculateUnits`" :name="item.id" :v-model="'value'">
              <option v-for="(ite, j) in item.options" :key="j" :value="ite.value ? ite.value : ite.label">
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
          <fieldset v-if="item.type === 'checkbox'" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
            <input :type="item.type" :name="item.id" :placeholder="item.placeholder" :v-model="'value'">
            <label :for="item.id" v-html="item.label" />
            <div class="regular text-xs pt-1 pb-3 text-red-900">
              [{error}]
            </div>
          </fieldset>
        </template>
        <MoleculesAlert data="alert-2" :v-show="`response.active`" />
        <atoms-button class="btn !w-full">
          <span :v-if="`!spinner`">{{ forms?.btn.txt }}</span>
          <AtomsSpinner :v-if="`spinner`" />
        </atoms-button>
      </form>
    </div>
  </section>
</template>
