<template>
  <aside class="aside-nav">
    <div class="aside-header-logo">
      <NuxtLink to="/">
        <img src="/images/logo.png" width="175" />
      </NuxtLink>
    </div>

    <nav>
      <ul>
        <NuxtLink v-for="nav in navigation" :key="nav.name" :to="nav.path">
          <li :class="{ active: isActive(nav) }">
            <img
              :src="`/svg/${nav.icon}${isActive(nav) ? '-active' : ''}.svg`"
            />
            {{ nav.name }}
          </li>
        </NuxtLink>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      userId: "auth/id",
    }),

    navigation() {
      if (this.userId)
        return [
          { name: "Estúdios", path: "/contents/studios", icon: "microphone" },
          {
            name: "Reservas",
            path: "/contents/reservations",
            icon: "listing-book",
          },
        ]

      return [{ name: "Home", path: "/contents", icon: "home" }]
    },
  },
  methods: {
    isActive(nav) {
      return this.$route.path === nav.path
    },
  },
}
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 1rem 2.5rem;
  background-color: $aside-bg-clr;

  nav {
    li {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin-block: 2.75rem;
      font-size: 1.25rem;
      color: $text-light-clr-3;

      &.active {
        color: $text-light-clr-1;
      }
    }
  }
}
</style>
