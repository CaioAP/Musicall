<template>
  <BaseSection labelledby="drops-title">
    <template #header>
      <header>
        <h2 id="drops-title" class="title">
          <span class="musicalll">Musicalll</span> Drops
        </h2>
        <p class="description">Sinta o gostinho e aprenda com qualidade</p>
        <BaseInputRadioGroup
          v-model="filterSelected"
          class="filter"
          :options="[...filter]"
        />
      </header>
    </template>

    <template #content>
      <div class="content">
        <BaseButton
          class="btn-circle gradient-inverted"
          @click="previousSlideCard"
        >
          <img src="/svg/arrow-left.svg" />
        </BaseButton>

        <div ref="slide" class="drops-list">
          <NuxtLink
            v-for="drop in drops"
            :key="drop.id"
            :to="`/drops/${drop.id}`"
          >
            <article class="drop-card">
              <img :src="drop.image" />
              <div class="drop-card-text">
                <p>{{ drop.instructor }}</p>
                <p>{{ drop.description }}</p>
              </div>
            </article>
          </NuxtLink>
        </div>

        <BaseButton class="btn-circle" @click="nextSlideCard">
          <img src="/svg/arrow-right.svg" />
        </BaseButton>
      </div>
    </template>

    <template #footer>
      <footer>
        <NuxtLink class="btn-link" to="/drops"> Explorar Drops </NuxtLink>
      </footer>
    </template>
  </BaseSection>
</template>

<script>
export default {
  props: {
    filter: {
      type: Array,
      default: () => [],
    },
    drops: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filterSelected: 2,
    }
  },
  methods: {
    previousSlideCard() {
      this.$refs.slide.scrollBy(-200, 0)
    },
    nextSlideCard() {
      this.$refs.slide.scrollBy(200, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  .btn-circle:first-of-type {
    transform: translateX(50%);
  }

  .btn-circle:last-of-type {
    transform: translateX(-50%);
  }

  .drops-list {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc(25% - 0.75rem);
    gap: 1rem;
    @include carousel;

    .drop-card {
      scroll-snap-align: start;

      img {
        width: 100%;
        object-fit: cover;
      }

      .drop-card-text {
        text-align: center;

        p:first-of-type {
          font-family: $font-foral-pro;
          font-weight: 700;
          font-size: 1.5rem;
          color: $text-light-clr-2;
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .filter {
    max-width: 70%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .content {
    max-width: 90%;
    margin-inline: auto;
    overflow-x: hidden;

    .btn-circle {
      width: 6rem;
    }

    .drops-list {
      grid-auto-columns: 100%;

      .drop-card {
        min-width: 50%;
      }
    }
  }
}
</style>
