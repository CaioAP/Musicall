<template>
  <div class="room-card">
    <img :src="imageString" />

    <div class="room-card-info">
      <div>
        <h3 class="card-title">
          {{ name }}
        </h3>

        <div>
          <NuxtImg width="16px" src="/svg/dollar-sign.svg" />
          {{ $utils.formatMoney(price) }} / hora
        </div>
        <div>
          <NuxtImg width="16px" src="/svg/user.svg" />
          {{ capacity }} pessoas
        </div>
      </div>

      <BaseButton
        class="btn-outline light"
        style="padding: 0.5rem 1.5rem; max-width: fit-content"
      >
        Editar
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    price: {
      type: [Number, String],
      default: 0,
    },
    capacity: {
      type: [Number, String],
      default: 0,
    },
    imageString: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.room-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  .room-card-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

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
}
</style>
