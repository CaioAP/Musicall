<template>
  <ContentSection title="Home">
    <div class="content-grid">
      <ContentCard
        v-for="(card, i) in cards"
        :key="i"
        :title="card.title"
        :icon="card.icon"
      />
    </div>
  </ContentSection>
</template>

<script>
import ContentSection from '@/components/contents/ContentSection.vue'
import ContentCard from '@/components/contents/ContentCard.vue'

export default {
  name: 'ContentPage',
  components: {
    ContentSection,
    ContentCard,
  },
  layout: 'content',
  computed: {
    cards() {
      return [
        { title: 'Adicionar conteúdo', icon: 'add-content' },
        { title: 'Cadastrar professores', icon: 'add-teachers' },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.content-grid {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 240px;
  column-gap: 2rem;
}
</style>
