<template>
  <div class="container">
    <BaseHero image="/images/hero-background-studios.png"/>

    <StudiosSection />
  </div>
</template>

<script>
import StudiosSection from '~/components/studios/StudiosSection.vue'
export default {
  name: 'StudiosPage',
  components: { StudiosSection }
}
</script>

<style lang="scss" scoped>

</style>