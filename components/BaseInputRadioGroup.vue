<template>
  <div class="field-radio-group flex gap-x-2">
    <BaseInputRadio 
      v-for="option in options" 
      :key="option.name"
      v-bind="option"
      v-model="selected"
      @input="$emit('input', selected)"
    >
      {{ option.text }}
    </BaseInputRadio>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [
        { name: 'option1', text: 'Option 1', radioValue: 1  },
        { name: 'option2', text: 'Option 2', radioValue: 2  },
      ]
    },
  },
  data() {
    return {
      selected: 1
    }
  },
}
</script>

<style lang="scss" scoped>
</style>