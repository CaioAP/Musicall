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

body {
  overflow-x: hidden;
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

.text-lower {
  text-transform: lowercase;
}

.badge {
  padding: 0.5rem 1rem;
  background: $gradient-bg;
  border-radius: 60px;
  color: $btn-txt-clr;
  font-weight: 700;
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

.btn-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
  background: $gradient-bg;
  border-radius: 60px;
  color: $btn-txt-clr;
  font-weight: 700;
}

.btn-outline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid $primary-clr;
  border-radius: 60px;
  color: $text-light-clr-1;
  font-weight: 400;
}

@media only screen and (max-width: 600px) {
  body, html {
    font-size: 10px;
  }
}
</style>