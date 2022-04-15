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
  padding: 20px 40px;
  background: $gradient-bg;
  border-radius: 60px;
  color: $btn-txt-clr;
  font-weight: 700;
  
  &.btn-circle {
    width: fit-content;
    height: fit-content;
    padding: 13px;
  }

  &.gradient-inverted {
    background: $gradient-inverted-bg;
  }
}
</style>