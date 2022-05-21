<template>
  <div class="container">
    <BaseHero image="/images/studios-hero-background.png"/>

    <SearchSection 
      :is-searched="true"
      :form-data="form"
      @form="(formData) => form = formData"
    />

    <section class="section-list" aria-label="Lista de estúdios filtrados">
      <div class="section-list-actions">
        <BaseButton class="btn-gradient" @click="$refs.dialogMaps.openDialog()">
          Ver estúdios no mapa
        </BaseButton>
      </div>

      <StudioItem 
        v-for="(studio, i) in studios" 
        :key="i"
        v-bind="studio"
      />
    </section>

    <DialogMaps 
      ref="dialogMaps" 
      :locations="locations" 
    />
  </div>
</template>

<script>
import studiosData from '@/plugins/studios.js'
import StudioItem from '@/components/studios/StudioItem.vue'
import SearchSection from '@/components/studios/SearchSection.vue'
import DialogMaps from '@/components/studios/DialogMaps.vue'

export default {
  name: 'SearchStudios',
  components: {
    StudioItem,
    SearchSection,
    DialogMaps
  },
  asyncData({ route }) {
    const form = {
      date: new Date(`${route.query.data}T00:00:00`) || null,
      time: Number(route.query.horario) || null,
      city: Number(route.query.cidade) || null,
      event: Number(route.query.evento) || null
    }

    const studios = studiosData.studios
    const locations = studiosData.studios.map(studio => ({
      id: studio.id,
      name: studio.name,
      lat: studio.location.lat,
      lng: studio.location.lng,
    }))

    return {
      form,
      studios,
      locations
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

  .section-list-actions {
    display: flex;
    justify-content: flex-end;
    border-bottom: $border-divider;
    padding-block: 2rem;
  }
}
</style>