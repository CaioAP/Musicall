<template>
  <ContentSection title="Home">
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
  name: 'ContentPage',
  components: {
    ContentSection,
    ContentCard,
  },
  layout: 'content',
  computed: {
    cards() {
      return [
        { title: 'Adicionar conteúdo', icon: 'add-content', path: '' },
        { title: 'Cadastrar professores', icon: 'add-teachers', path: '' },
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
