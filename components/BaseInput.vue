<template>
  <input 
    v-model="innerValue"
    v-bind="$attrs"
    class="field-input"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      innerValue: null
    }
  },
  watch: {
    value(newValue) {
      this.innerValue = newValue
    },
    innerValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  mounted () {
    this.innerValue = this.value
  },
}
</script>

<style lang="scss" scoped>
.field-input {
  width: fit-content;
  background-color: transparent;

  &::placeholder {
    color: $text-light-clr-1;
  }

  &:focus {
    outline: none;
  }
}
</style>