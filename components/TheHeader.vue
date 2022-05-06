<template>
  <div class="container">
    <header id="header">
      <NuxtLink to="/">
        <NuxtImg src="/images/logo.png" />
      </NuxtLink>

      <nav aria-label="primary navigation">
        <ul>
          <li v-for="nav in navigation" :key="nav.name">
            <NuxtLink v-if="!nav.btn" :to="nav.path">{{ nav.name }}</NuxtLink>
            <NuxtImg 
              v-if="!nav.btn && isNavActive(nav.path)" 
              class="nav-active" 
              src="/svg/neon-trace.svg" 
              width="500"
            />
            
            <BaseButton v-if="nav.btn" class="btn-plain" @click="openDialogLogIn">
              {{ nav.name }}
            </BaseButton>
          </li>
        </ul>
      </nav>

      <BaseButton @click="openDialogSignUp">
        Inscreva-se
      </BaseButton>
    </header>

    <BaseDialogLogin ref="dialogLogin"/>
    <BaseDialogSignup ref="dialogSignup"/>
  </div>
</template>

<script>

export default {
  computed: {
    navigation() {
      return [
        { name: 'Cursos', path: '/courses' },
        { name: 'Estúdios', path: '/studios' },
        { name: 'Login', path: '/login', btn: true },
      ] 
    },

    activeNavigation() {
      return this.$route.path
    }
  },
  methods: {
    isNavActive(path) {
      return this.activeNavigation.includes(path)
    },

    openDialogLogIn() {
      this.$refs.dialogLogin.openDialog()
    },

    openDialogSignUp() {
      this.$refs.dialogSignup.openDialog()
    }
  },
}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  max-width: 90%;
  margin: auto;
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

        .btn-plain {
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
        }
      }
    }
  }
}
</style>