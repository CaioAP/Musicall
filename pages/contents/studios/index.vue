<template>
  <ContentSection
    title="Estúdios"
    subtitle="Meus estúdios"
    action="Adicionar estúdio"
    @add="
      $router.push({
        path: '/contents/studios/new',
        query: {
          f: 1,
        },
      })
    "
  >
    <div class="content-grid" :class="{ empty: !studios.length }">
      <ContentCard
        v-if="!studios.length"
        title="Cadastrar Novo"
        icon="add-studio"
      />

      <ContentStudioCard
        v-for="studio in studios"
        :key="studio.id"
        v-bind="studio"
      />
    </div>
  </ContentSection>
</template>

<script>
import ContentSection from '@/components/contents/ContentSection.vue'
import ContentCard from '@/components/contents/ContentCard.vue'
import ContentStudioCard from '@/components/contents/studios/ContentStudioCard.vue'

export default {
  name: 'StudiosContent',
  components: {
    ContentSection,
    ContentCard,
    ContentStudioCard,
  },
  layout: 'content',
  asyncData() {
    const studios = [
      {
        id: 1,
        name: 'Estúdio 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictumst turpis ultrices senectus. Imperdiet habitant adipiscing sollicitudin id non. ',
        img: '/temp/studio.png',
        address: 'Asa Sul - Brasília',
        price: 49.9,
        rooms: 5,
      },
      {
        id: 2,
        name: 'Estúdio 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictumst turpis ultrices senectus. Imperdiet habitant adipiscing sollicitudin id non. ',
        img: '/temp/studio.png',
        address: 'Asa Sul - Brasília',
        price: 49.9,
        rooms: 5,
      },
    ]

    return { studios }
  },
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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;

  .empty {
    grid-auto-columns: 240px;
  }
}
</style>
