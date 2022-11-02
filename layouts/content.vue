<template>
  <div id="app">
    <TheHeaderAside />
    <TheHeaderContent />
    <div class="content">
      <Nuxt />
    </div>

    <BaseAlert :type="alert.type" :message="alert.message" :open="alert.open" />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "ContentLayout",
  computed: {
    ...mapGetters({
      alert: "alert/alert",
    }),
  },
}
</script>

<style lang="scss" scoped>
.content {
  min-height: calc(100vh - 70px);
  // largura da logo mais o padding do menu lateral
  margin-left: calc(175px + 5rem);
  background-color: $content-bg-clr;
}
</style>
