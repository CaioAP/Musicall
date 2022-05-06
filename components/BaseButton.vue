<template>
  <button :type="type" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  background: $gradient-bg;
  border-radius: 60px;
  color: $btn-txt-clr;
  font-weight: 700;
  white-space: nowrap;

  &:focus,
  &:active {
    outline: none;
  }

  &.btn-plain {
    padding: 0;
    background: transparent;
    color: $text-light-clr-1;
  }
  
  &.btn-circle {
    width: fit-content;
    height: fit-content;
    padding: 13px;
  }

  &.gradient-inverted {
    background: $gradient-inverted-bg;
  }

  &.btn-outline {
    background: $bg-clr;
    border: 1px solid $primary-clr;
    color: $text-light-clr-1;
  }
}
</style>