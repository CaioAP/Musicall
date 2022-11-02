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
import Role from "~/assets/data/role.js"
import ContentSection from "@/components/contents/ContentSection.vue"
import ContentCard from "@/components/contents/ContentCard.vue"
import ContentStudioCard from "@/components/contents/studios/ContentStudioCard.vue"

export default {
  name: "StudiosContent",
  meta: {
    role: [Role.USER],
  },
  components: {
    ContentSection,
    ContentCard,
    ContentStudioCard,
  },
  layout: "content",
  data() {
    return {
      studios: [],
    }
  },
  async fetch() {
    await this.getStudios()
  },
  methods: {
    async getStudios() {
      try {
        const studios = await this.$apiStudio.getAll()
        this.studios = this.formatData(studios)
      } catch (error) {
        this.$store.commit("alert/SET_ALERT", {
          type: "error",
          message: error.message,
        })
      }
    },

    formatData(studios) {
      return studios.map((studio) => ({
        id: studio.id,
        name: studio.nome,
        description: studio.descricao,
        img: studio.foto || "/images/img-placeholder.png",
        address: this.$utils.formatAddress(studio.Endereco),
        price: this.getAveragePrice(studio.Sala),
        rooms: studio.Sala?.length || 0,
      }))
    },

    getAveragePrice(rooms = []) {
      let total = 0

      rooms.forEach((room) => {
        total += room.preco
      })

      return Math.floor(total / rooms.length)
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
