<template>
  <div class="container">
    <BaseHero image="/images/studios-hero-background.png"/>

    <SearchSection 
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
import SearchSection from '@/components/studios/SearchSection.vue'

export default {
  name: 'SearchStudios',
  components: {
    StudioItem,
    SearchSection
  },
  asyncData({ route }) {
    const form = {
      date: new Date(`${route.query.data}T00:00:00`) || null,
      time: Number(route.query.horario) || null,
      city: Number(route.query.cidade) || null,
      event: Number(route.query.evento) || null
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