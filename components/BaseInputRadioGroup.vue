<template>
  <div class="field-radio-group flex gap-x-2">
    <BaseInputRadio
      v-for="option in options"
      :key="option.name"
      v-bind="option"
      v-model="selected"
      :light="light"
    >
      {{ option.text }}
    </BaseInputRadio>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array,
      default: () => [
        { name: 'option1', text: 'Option 1', radioValue: 1 },
        { name: 'option2', text: 'Option 2', radioValue: 2 },
      ],
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: this.value,
    }
  },
  watch: {
    value(newValue) {
      this.selected = newValue
    },
    selected(newValue) {
      this.$emit('input', newValue)
    },
  },
}
</script>

<style lang="scss" scoped></style>
