<template>
  <div class="form-inputs">
    <h3 v-if="!rooms.length">Você ainda não possui nenhuma sala adicionada</h3>
    <h3 v-else>Salas deste estúdio</h3>

    <div class="form-grid">
      <ContentRoomCard v-for="room in rooms" :key="room.id" v-bind="room" />

      <NuxtLink :to="{ query: { f: 5 } }">
        <ContentCard title="Cadastrar Novo" icon="add-studio" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/contents/ContentCard.vue'
import ContentRoomCard from '@/components/contents/studios/ContentRoomCard.vue'

export default {
  components: {
    ContentCard,
    ContentRoomCard,
  },
  props: {
    rooms: {
      type: Array,
      default: () => [
        {
          id: 1,
          image: '/temp/studio.png',
          name: 'Sala de Lives',
          price: 49.9,
          capacity: 7,
        },
      ],
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
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    column-gap: 2rem;
  }
}
</style>
