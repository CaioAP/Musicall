<template>
  <div class="container">
    <div id="header">
      <nuxt-img src="/images/logo.png" />

      <nav>
        <ul>
          <li v-for="nav in navigation" :key="nav.name">
            <nuxt-link :to="nav.path">{{ nav.name }}</nuxt-link>
            <nuxt-img 
              v-if="activeNavigation === nav.name" 
              class="nav-active" 
              src="/svgs/neon-trace.svg" 
              width="500"
            />
          </li>
        </ul>
      </nav>

      <BaseButton>
        Inscreva-se
      </BaseButton>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeNavigation: 'Cursos'
    }
  },
  computed: {
    navigation() {
      return [
        { name: 'Cursos', path: '/' },
        { name: 'Estúdios', path: '/' },
        { name: 'Login', path: '/' },
      ] 
    }
  },
}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding-block: 2.5rem;
  z-index: 9;

  nav {
    margin-left: auto;
    color: $primary-clr;

    ul {
      display: flex;
      gap: 1.5rem;

      li {
        position: relative;
        letter-spacing: 0.07em;
        color: #FFD56A;
        -webkit-text-stroke-width: 0.3px;
        -webkit-text-stroke-color: #fff;
        text-shadow: 
          0 0 7px #FFAB2D,
          0 0 10px #FFAB2D,
          0 0 21px #FFAB2D,
          0 0 42px #FFAB2D,
          0 0 82px #FFAB2D,
          0 0 92px #FFAB2D,
          0 0 102px #FFAB2D,
          0 0 151px #FFAB2D;

        .nav-active {
          position: absolute;
          top: 0.4rem;
          left: -25%;
          max-width: 150%;
        }
      }
    }
  }
}
</style>