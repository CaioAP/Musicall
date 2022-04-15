<template>
  <div id="app">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  background-color: $bg-clr;
  z-index: 0;
}
</style>