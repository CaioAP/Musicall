<template>
  <ContentSection
    title="Estúdios"
    subtitle="Meus estúdios"
    action="Adicionar estúdio"
    @add="
      $router.push({
        path: '/contents/professors/new',
        query: {
          f: 1,
        },
      })
    "
  >
    <div class="content-grid" :class="{ empty: !professors.length }">
      <ContentCard
        v-if="!professors.length"
        title="Cadastrar Novo"
        icon="add-studio"
      />

      <ContentProfessorCard
        v-for="professor in professors"
        :key="professor.id"
        v-bind="professor"
      />
    </div>
  </ContentSection>
</template>

<script>
import Role from "~/assets/data/role.js"
import ContentSection from "@/components/contents/ContentSection.vue"
import ContentCard from "@/components/contents/ContentCard.vue"
import ContentProfessorCard from "@/components/contents/professors/ContentProfessorCard.vue"

export default {
  name: "ProfessorsPage",
  meta: {
    role: [Role.ADMIN],
  },
  components: {
    ContentSection,
    ContentCard,
    ContentProfessorCard,
  },
  layout: "cotent",
  data() {
    return {
      professors: [],
    }
  },
  async fetch() {
    await this.getProfessors()
  },
  methods: {
    async getProfessors() {
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

<style lang="scss" scoped></style>
