<template>
  <div class="container">
    <BaseHero image="/images/hero-background-studios.png"/>

    <StudiosSection />

    <AdvantagesSection />
  </div>
</template>

<script>
import StudiosSection from '~/components/studios/StudiosSection.vue'
import AdvantagesSection from '~/components/studios/AdvantagesSection.vue'

export default {
  name: 'StudiosPage',
  components: { 
    StudiosSection,
    AdvantagesSection
  }
}
</script>

<style lang="scss" scoped>

</style>