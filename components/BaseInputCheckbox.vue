<template>
  <div class="field-checkbox" :class="{ checked, light }">
    <input
      :id="name"
      v-model="innerChecked"
      :value="innerValue"
      :name="name"
      type="checkbox"
      @change="$emit('input', innerValue)"
    />
    <label :for="name">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    light: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      innerValue: false,
      innerChecked: [],
    }
  },
  watch: {
    value(newValue) {
      this.innerChecked = newValue
    },
    checked(newValue) {
      this.innerValue = newValue
    },
    innerChecked(newValue) {
      this.$emit("input", newValue)
    },
  },
  mounted() {
    this.innerValue = this.checked
    this.innerChecked = this.value
  },
}
</script>

<style lang="scss" scoped>
.field-checkbox {
  padding: 0.5rem 1rem;
  border: 2px solid $primary-clr;
  border-radius: 20px;
  font-family: $font-open-sans;
  line-height: 1;

  input {
    appearance: none;
  }

  label {
    color: $text-light-clr-1;
  }

  label:hover {
    cursor: pointer;
  }

  &.light {
    border: 1px solid $primary-clr;

    label {
      color: $text-dark-clr-2;
    }
  }

  &.checked {
    background: $gradient-bg;
    border: none;

    label {
      font-weight: 700;
      color: $btn-txt-clr;
    }

    &.light {
      background: $primary-clr;

      label {
        color: $text-dark-clr-1;
      }
    }
  }
}
</style>
