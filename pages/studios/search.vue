<template>
  <div class="container">
    <BaseHero image="/images/studios-hero-background.png"/>

    <StudiosSection 
      :is-searched="true"
      :form-data="form"
      @form="(formData) => form = formData"
    />

    <section class="section-list" aria-label="Lista de estúdios filtrados">
      <StudioItem 
        v-for="(studio, i) in studios" 
        :key="i"
        v-bind="studio"
      />
    </section>
  </div>
</template>

<script>
import studiosData from '@/plugins/studios.js'
import StudioItem from '@/components/studios/StudioItem.vue'

export default {
  name: 'SearchStudios',
  components: {
    StudioItem,
  },
  asyncData({ route }) {
    const form = {
      date: new Date(`${route.query.data}T00:00:00`),
      time: parseInt(route.query.horario),
      city: parseInt(route.query.cidade),
      event: parseInt(route.query.evento)
    }

    const studios = studiosData.studios

    return {
      form,
      studios
    }
  }
}
</script>

<style lang="scss" scoped>
.section-list {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 2rem;
  max-width: 90%;
}
</style>