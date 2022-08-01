<template>
  <ContentSection title="Estúdios">
    <div class="content-grid">
      <NuxtLink
        v-for="card in cards"
        :key="card.title"
        :to="`${$route.path}/${card.path}`"
      >
        <ContentCard :title="card.title" :icon="card.icon" />
      </NuxtLink>
    </div>
  </ContentSection>
</template>

<script>
import ContentSection from '@/components/contents/ContentSection.vue'
import ContentCard from '@/components/contents/ContentCard.vue'

export default {
  name: 'StudiosContent',
  components: {
    ContentSection,
    ContentCard,
  },
  layout: 'content',
  computed: {
    cards() {
      return [
        { title: 'Adicionar estúdio', icon: 'add-studio', path: 'new' },
        { title: 'Meus estúdios', icon: 'my-studios', path: 'my-studios' },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.content-grid {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(200px, 200px);
  column-gap: 2rem;

  .content-card {
    width: 100%;
    height: 100%;
  }
}
</style>
