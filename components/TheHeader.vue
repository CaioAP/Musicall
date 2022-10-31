<template>
  <div class="container">
    <header id="header">
      <NuxtLink class="logo-link" to="/">
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

            <BaseButton
              v-if="nav.btn"
              class="btn-plain"
              @click="openDialogLogIn"
            >
              {{ nav.name }}
            </BaseButton>
          </li>
        </ul>
      </nav>

      <BaseButton v-if="!userId" @click="openDialogSignUp">
        Inscreva-se
      </BaseButton>
      <BaseButton v-else @click="goToContents">
        <NuxtImg
          src="/svg/user-light.svg"
          width="24"
          height="24"
          style="margin-right: 0.5rem"
        />
        {{ userName ? userName.split(' ')[0] : '' }}
      </BaseButton>
    </header>

    <BaseDialogLogin ref="dialogLogin" />
    <BaseDialogSignup ref="dialogSignup" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Role from '~/assets/data/role.js'

export default {
  computed: {
    ...mapGetters({
      userId: 'auth/id',
      userName: 'auth/name',
      userRole: 'auth/role',
    }),

    navigation() {
      const navigation = [
        { name: 'Cursos', path: '/courses' },
        { name: 'Estúdios', path: '/studios' },
        { name: 'Login', path: '/login', btn: true },
      ]

      if (this.userId) return navigation.filter((nav) => nav.name !== 'Login')
      return navigation
    },

    activeNavigation() {
      return this.$route.path
    },
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
    },

    goToContents() {
      this.$router.push({
        path: this.userRole === Role.ADMIN ? '/contents' : '/contents/studios',
      })
    },
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
        color: #ffd56a;
        -webkit-text-stroke-width: 0.3px;
        -webkit-text-stroke-color: #fff;
        text-shadow: 0 0 7px #ffab2d, 0 0 10px #ffab2d, 0 0 21px #ffab2d,
          0 0 42px #ffab2d, 0 0 82px #ffab2d, 0 0 92px #ffab2d,
          0 0 102px #ffab2d, 0 0 151px #ffab2d;

        .nav-active {
          position: absolute;
          top: 0.4rem;
          left: -25%;
          max-width: 150%;
        }

        .btn-plain {
          color: #ffd56a;
          -webkit-text-stroke-width: 0.3px;
          -webkit-text-stroke-color: #fff;
          text-shadow: 0 0 7px #ffab2d, 0 0 10px #ffab2d, 0 0 21px #ffab2d,
            0 0 42px #ffab2d, 0 0 82px #ffab2d, 0 0 92px #ffab2d,
            0 0 102px #ffab2d, 0 0 151px #ffab2d;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .logo-link {
      display: none;
    }

    nav {
      margin-left: unset;
      margin-right: auto;
    }
  }
}
</style>
