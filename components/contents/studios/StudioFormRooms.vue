<template>
  <div class="form-inputs">
    <h3 v-if="!rooms.length">Você ainda não possui nenhuma sala adicionada</h3>
    <h3 v-else>Salas deste estúdio</h3>

    <div class="form-grid">
      <ContentRoomCard
        v-for="room in rooms"
        :key="room.id"
        v-bind="room"
        class="room-card"
        :go-to="currentTab + 1"
      />

      <NuxtLink :to="{ query: { f: currentTab + 1 } }" class="link-new-card">
        <ContentCard
          title="Cadastrar Novo"
          icon="add-studio"
          class="new-card"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import ContentCard from "@/components/contents/ContentCard.vue"
import ContentRoomCard from "@/components/contents/studios/ContentRoomCard.vue"

export default {
  components: {
    ContentCard,
    ContentRoomCard,
  },
  props: {
    studioId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      rooms: [],
    }
  },
  async fetch() {
    if (this.studioId) await this.getRooms()
  },
  computed: {
    currentTab() {
      return 5
    },
  },
  watch: {
    studioId(newValue) {
      if (newValue) this.getRooms()
    },
    "$route.query.f"(newValue) {
      if (Number(newValue) === this.currentTab) this.getRooms()
    },
  },
  methods: {
    async getRooms() {
      try {
        const rooms = await this.$apiRoom.getByStudio(this.studioId)
        this.rooms = this.formatData(rooms)
      } catch (error) {
        this.$store.commit("alert/SET_ALERT", {
          type: "error",
          message: error.message,
        })
      }
    },

    formatData(rooms) {
      return rooms.map((room) => ({
        id: room.id,
        name: room.nome,
        price: room.preco,
        capacity: room.capacidade,
      }))
    },
  },
}
</script>

<style lang="scss" scoped>
.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  h3 {
    font-family: $font-foral-pro;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .form-grid {
    display: flex;
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 1rem;

    .room-card {
      max-width: calc(33.33% - 1rem);
    }

    .link-new-card {
      display: flex;
      align-items: center;
      min-width: 20%;
    }
  }
}
</style>
