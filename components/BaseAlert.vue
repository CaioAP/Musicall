<template>
  <div v-show="open" :class="type" class="alert">
    <p>{{ message }}</p>
    <button @click="close">
      <NuxtImg src="/svg/close.svg" width="12px" height="12px" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success',
    },
    message: {
      type: String,
      default: 'Esta eh uma mensagem de alerta de sucesso',
    },
    open: {
      type: Boolean,
      default: false,
    },
    delay: {
      type: Number,
      default: 5,
    },
  },
  watch: {
    open(newValue) {
      if (newValue) setTimeout(this.close, this.delay * 1000)
    },
  },
  methods: {
    close() {
      this.$store.commit('alert/SET_CLOSE')
    },
  },
}
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  gap: 0.5rem;
  position: fixed;
  bottom: 5%;
  left: 50%;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: #fff;
  z-index: 999999;
  transform: translateX(-50%);

  p {
    width: 100%;
  }

  button {
    width: fit-content;
  }
}

.success {
  background-color: $success-clr;
}

.error {
  background-color: $error-clr;
}

.warning {
  background-color: $warning-clr;
}
</style>
