<template>
  <div class="studio-card">
    <div class="card-header">
      <NuxtImg :src="img" />

      <div class="card-info">
        <h3 class="card-title">
          {{ name }}
        </h3>

        <div>
          <NuxtImg src="/svg/dollar-sign.svg" />
          {{ $utils.formatMoney(price) }} / hora
        </div>
        <div>
          <NuxtImg src="/svg/map-pin.svg" />
          {{ address }}
        </div>
        <div>
          <NuxtImg src="/svg/door.svg" />
          {{ rooms }} salas
        </div>
      </div>
    </div>

    <div class="card-description">
      {{ description }}
    </div>

    <div class="card-actions">
      <BaseButton class="btn-outline light" style="padding: 0.5rem">
        Gerenciar
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
      default: '',
    },
    rooms: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.studio-card {
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
