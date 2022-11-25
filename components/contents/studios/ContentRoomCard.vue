<template>
  <div class="room-card">
    <img
      :src="imageString || '/images/img-placeholder.png'"
      style="width: 100%; height: 100%; border-radius: 1rem"
    />

    <div class="room-card-info">
      <div>
        <h3 class="card-title">
          {{ name }}
        </h3>

        <div>
          <img width="16px" src="/svg/dollar-sign.svg" />
          {{ $utils.formatMoney(price) }} / hora
        </div>
        <div v-if="capacity">
          <img width="16px" src="/svg/user.svg" />
          {{ capacity }} pessoas
        </div>
      </div>

      <BaseButton
        class="btn-outline light"
        style="padding: 0.5rem 1.5rem; max-width: fit-content"
        @click="goToRoom"
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
    name: {
      type: String,
      default: "",
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
      default: "",
    },
    goTo: {
      type: Number,
      default: 6,
    },
  },
  methods: {
    goToRoom() {
      this.$store.dispatch("studio/setRoom", this.id)
      this.$router.push({
        path: this.$route.path,
        query: { f: this.goTo },
      })
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
