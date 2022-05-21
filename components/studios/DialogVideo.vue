<template>
  <dialog v-show="open" ref="dialog">
    <BaseButton class="btn-outline" @click="closeDialog">
      x
    </BaseButton>

    <iframe 
      width="900" 
      height="500"
      :src="video"
    ></iframe>
  </dialog>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: ''
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  background: $bg-light-clr;
  border: 2px solid $primary-clr;
  border-radius: 1rem;
  text-align: center;

  &::backdrop {
    background: rgb(0 0 0 / 0.5);
  }

  .btn-outline {
    margin-left: auto;
    padding: 0.5rem;
    background: transparent;
    color: $text-light-clr-1;
    line-height: 0.5;
  }
}
</style>