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

<style lang="scss">
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: $bg-clr;
}

::-webkit-scrollbar-thumb {
  background: $primary-clr;
  border-radius: 4rem;
}

::-webkit-scrollbar-thumb:hover {
  background: $primary-dark-clr;
}

.container {
  margin: auto;
}

.musicalll {
  font-family: $font-foral-pro;
  font-weight: 700;
  color: $primary-clr;
}

.divider {
  width: 60%;
  margin: auto;
  border-top: $border-divider;
}

.font-foral-pro {
  font-family: $font-foral-pro;
}

.font-rampage-monoline {
  font-family: $font-rampage-monoline;
}

.link {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: $font-foral-pro;
  color: $primary-clr;
}

.link-gradient {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: $font-foral-pro;
  background: $gradient-bg;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>