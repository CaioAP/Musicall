<template>
  <div class="hero-bg">
    <nuxt-img :src="image" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss" scoped>
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  & > img {
    mix-blend-mode: screen;
    width: 100vw;
    height: 100vh;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #000;
  }
}
</style>