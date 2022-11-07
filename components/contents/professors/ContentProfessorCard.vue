<template>
  <div class="professor-card">
    <div class="card-header">
      <NuxtImg :src="img" />

      <div class="card-info">
        <h3 class="card-title">
          {{ name }}
        </h3>

        <ul>
          <li v-for="instrument in intruments" :key="instrument.id">
            {{ instrument.nome }}
          </li>
        </ul>
      </div>
    </div>

    <div class="card-description">
      {{ description }}
    </div>

    <div class="card-actions">
      <BaseButton
        class="btn-outline light"
        style="padding: 0.5rem"
        @click="goToProfessor"
      >
        Editar
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: "",
    },
    instruments: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    professorLink() {
      return `/contents/professors/${this.id}`
    },
  },
  methods: {
    goToProfessor() {
      this.$router.push(this.professorLink)
    },
  },
}
</script>

<style lang="scss" scoped>
.professor-card {
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: $text-light-clr-1;
  border: 1px solid $primary-clr;
  border-radius: 10px;

  .card-header {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;

    .card-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 1rem;
      border-bottom: $border-divider;

      .card-title {
        font-family: $font-foral-pro;
        font-size: 1.5rem;
        font-weight: 700;
      }

      div:not(.card-title) {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  .card-description {
    margin-top: 1.25rem;
  }

  .card-actions {
    display: flex;
    margin-top: 2rem;

    button {
      width: 100%;
    }
  }
}
</style>
