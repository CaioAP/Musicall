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
      default: 'button',
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 2.5rem;
  background: $gradient-bg;
  border-radius: 60px;
  color: $btn-txt-clr;
  font-weight: 700;
  white-space: nowrap;

  &[disabled] {
    cursor: auto;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &.btn-plain {
    padding: 0;
    background: transparent;
    color: $text-light-clr-1;

    &.light {
      color: $text-dark-clr-1;
    }
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
    background: transparent;
    border: 1px solid $primary-clr;
    color: $text-light-clr-1;

    &.light {
      color: $text-dark-clr-1;
    }

    &:hover {
      background: $gradient-bg;
    }
  }

  &.small {
    padding: 0.75rem 2rem;
  }
}
</style>
