<template>
  <header>
    <BaseDropdown class="btn-user">
      <img src="/svg/user-light.svg" />
      Olá, {{ userName }}
      <img src="/svg/angle-down-light.svg" />
    </BaseDropdown>
  </header>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      userName: "auth/name",
    }),
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  background-color: $text-light-clr-1;
  padding: 1.5rem 2rem;

  .btn-user {
    gap: 1.25rem;
    font-weight: normal;
  }
}
</style>
