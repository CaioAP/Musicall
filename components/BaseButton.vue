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
  background: linear-gradient(266.39deg, #F5691A 19.34%, #FFD643 94.95%);
  border-radius: 60px;
  color: $btn-txt-clr;
}

.btn-circle {
  padding: 13px;
}

.gradient-inverted {
  background: linear-gradient(86.39deg, #F5691A 19.34%, #FFD643 94.95%);
}
</style>