<template>
  <div class="field-radio" :class="{ checked, light }">
    <input
      :id="name"
      :name="name"
      :value="radioValue"
      :checked="checked"
      type="radio"
      @change="$emit('input', radioValue)"
    />
    <label :for="name">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import InputRadioMixin from '~/mixins/input-radio.js'

export default {
  mixins: [InputRadioMixin],
  props: {
    light: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.field-radio {
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
