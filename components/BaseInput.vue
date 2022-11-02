<template>
  <div class="field-input" :class="{ light }">
    <label>{{ label }}</label>
    <input
      v-model="innerValue"
      v-mask="mask"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :min="min"
      @change="$emit('change')"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number, null],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    min: {
      type: Number,
      default: 0,
    },
    light: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      innerValue: "",
    }
  },
  watch: {
    value(newValue) {
      this.innerValue = newValue
    },
    innerValue(newValue) {
      this.$emit("input", newValue)
    },
  },
  mounted() {
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
    margin-bottom: 0.5rem;
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

  &.light {
    input {
      border: 1px solid $text-light-clr-3;

      &:focus {
        border: 1px solid $primary-clr;
      }
    }
  }
}
</style>
