<template>
  <div class="field-radio" :class="{ checked }">
    <input 
      :id="name" 
      :name="name"
      :value="radioValue"
      :checked="checked"
      type="radio"
      @change="$emit('input', radioValue)"
    >
    <label :for="name">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import InputRadioMixin from '~/mixins/input-radio.js'

export default {
  mixins: [InputRadioMixin],
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

  &.checked {
    background: $gradient-bg;
    border: none;

    label {
      font-weight: 700;
      color: $btn-txt-clr;
    }
  }
}
</style>