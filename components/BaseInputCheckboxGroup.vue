<template>
  <div class="field-checkbox-group flex gap-x-2">
    <BaseInputCheckbox
      v-for="option in options"
      :key="option.name"
      v-bind="option"
      v-model="checked"
      :value="option.checked"
      :light="light"
      @input="(value) => (checked = value)"
    >
      {{ option.text }}
    </BaseInputCheckbox>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [
        { name: "option1", text: "Option 1", checked: false },
        { name: "option2", text: "Option 2", checked: false },
      ],
    },
    light: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      checked: this.value,
    }
  },
  watch: {
    value(newValue) {
      this.checked = newValue
    },
    checked(newValue) {
      this.$emit("input", newValue)
    },
  },
}
</script>

<style lang="scss" scoped></style>
