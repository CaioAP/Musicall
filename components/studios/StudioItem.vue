<template>
  <div class="studio-item">
    <img :src="img" />

    <div class="studio-data">
      <h2 class="studio-name musicalll">
        {{ name }}
      </h2>
      <div class="studio-address">
        <img src="/svg/map-pin.svg" />
        <span>{{ address }} - {{ city }}</span>
      </div>
      <div class="studio-rooms">
        <img src="/svg/door.svg" />
        <span>{{ roomsCount }} salas</span>
      </div>
      <div class="studio-description">
        {{ description }}
      </div>
      <div class="studio-price">
        <img src="/svg/dollar-sign.svg" />
        <span>
          {{ $utils.formatMoney(price) }}
          <span class="studio-price-hour">&nbsp;/ Hora</span>
        </span>
      </div>
    </div>

    <div class="studio-actions">
      <NuxtLink class="btn-link" :to="linkDetails"> Detalhes </NuxtLink>
      <BaseButton
        v-if="video"
        class="btn-outline"
        @click="$refs.dialogVideo.openDialog()"
      >
        Vídeos
      </BaseButton>
      <BaseButton
        v-if="location.lat && location.lng"
        class="btn-outline"
        @click="$refs.dialogMaps.openDialog()"
      >
        Ver no Mapa
      </BaseButton>
    </div>

    <DialogVideo ref="dialogVideo" :video="video" />
    <DialogMaps
      ref="dialogMaps"
      :locations="[
        {
          id: id,
          name: name,
          ...location,
        },
      ]"
    />
  </div>
</template>

<script>
import DialogVideo from "@/components/studios/DialogVideo.vue"
import DialogMaps from "@/components/studios/DialogMaps.vue"

export default {
  components: {
    DialogVideo,
    DialogMaps,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    roomsCount: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    video: {
      type: String,
      default: null,
    },
    location: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    linkDetails() {
      return {
        path: `/studios/${this.id}`,
        query: this.$route.query,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.studio-item {
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  gap: 2.5rem;
  padding-block: 5rem;

  &:not(:last-of-type) {
    border-bottom: $border-divider;
  }

  .studio-data {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: $text-light-clr-1;

    & > * {
      display: flex;
      gap: 1rem;

      &:not(.studio-name) {
        font-size: 1.25rem;
      }
    }

    .studio-name {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .studio-description {
      color: $text-light-clr-3;
    }

    .studio-price {
      margin-top: auto;

      .studio-price-hour {
        color: $primary-clr;
      }
    }
  }

  .studio-actions {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media only screen and (max-width: 600px) {
    & {
      display: flex;
      flex-direction: column;

      .studio-data {
        gap: 1rem;
      }

      .studio-actions {
        gap: 1rem;
      }
    }
  }
}
</style>
