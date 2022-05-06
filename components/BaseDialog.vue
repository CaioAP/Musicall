<template>
  <dialog v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </dialog>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
dialog {
  &::backdrop {
    background: rgb(0 0 0 / 0.2);
  }
}
</style>