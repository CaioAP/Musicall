<template>
  <div class="field-input">
    <label>{{ label }}</label>
    <input 
      v-model="innerValue"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      innerValue: ''
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
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;

  label {
    text-align: left;
  }

  input {
    padding: 0.5rem 1rem;
    border: 1px solid $primary-clr;
    border-radius: 4rem;

    &::placeholder {
      color: $text-dark-clr-2;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>