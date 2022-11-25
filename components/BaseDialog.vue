<template>
  <dialog v-show="open" ref="dialog">
    <header>
      {{ title }}
      <BaseButton class="btn-plain btn-close" @click="closeDialog">
        <img src="/svg/x-circle-dark.svg" />
      </BaseButton>
    </header>
    <slot></slot>
  </dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    openDialog() {
      this.open = true
      this.$refs.dialog.showModal()
    },

    closeDialog() {
      this.open = false
      this.$refs.dialog.close()
    },
  },
}
</script>

<style lang="scss" scoped>
dialog {
  padding: 0;
  border-radius: 0.25rem;

  &::backdrop {
    background: rgb(0 0 0 / 0.2);
  }

  header {
    padding: 0.5rem 1.5rem;
    background-color: $primary-clr;
    font-family: $font-foral-pro;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    position: relative;

    .btn-close {
      width: 2rem;
      position: absolute;
      right: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
