<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="form !max-h-auto !overflow-none">
    <div class="container mx-auto">
      <form id="the-talent" :v-scope="'SendForm()'" :[`@submit.prevent`]="'sendForm'">
        <template v-for="(item, i) in data?.form" :key="i">
          <fieldset v-if="item.type === 'text' || item.type === 'number' || item.type === 'file' || item.type === 'tel' || item.type === 'email'" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
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
          <fieldset v-if="item.type === 'checkbox'" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
            <input :type="item.type" :name="item.id" :placeholder="item.placeholder" :v-model="'value'">
            <label :for="item.id" v-html="item.label" />
            <div class="regular text-xs pt-1 pb-3 text-red-900">
              [{error}]
            </div>
          </fieldset>
        </template>
        <MoleculesAlert :v-show="`response.active`" />
        <atoms-button class="btn !w-full">
          <span :v-if="`!spinner`">{{ data?.btn.txt }}</span>
          <AtomsSpinner :v-if="`spinner`" />
        </atoms-button>
      </form>
    </div>
  </section>
</template>
