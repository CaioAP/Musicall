<template>
  <section class="masterclass" aria-labelledby="headline">
    <header>
      <h1 id="headline" class="headline">
        Apresentamos a <span>Masterclass</span>
      </h1>
      <p class="description">
        As melhores aulas, feitas pelos melhores profissionais do ramo musical
      </p>
      <img class="icon" src="/svg/music-note.svg" />
    </header>

    <div class="masterclass-slide">
      <BaseButton
        class="btn-circle gradient-inverted"
        @click="previousSlideCard"
      >
        <img src="/svg/arrow-left.svg" />
      </BaseButton>

      <div ref="slide">
        <NuxtLink
          v-for="masterclass in masterClasses"
          :key="masterclass.id"
          :to="`/masterclass/${masterclass.id}`"
        >
          <article class="masterclass-card">
            <img :src="masterclass.image" />
            <div class="masterclass-card-text">
              <p>{{ masterclass.instructor }}</p>

              <div class="masterclass-card-separator"></div>

              <p>{{ masterclass.description }}</p>
            </div>
          </article>
        </NuxtLink>
      </div>

      <BaseButton class="btn-circle" @click="nextSlideCard">
        <img src="/svg/arrow-right.svg" />
      </BaseButton>
    </div>

    <div class="masterclass-action">
      <NuxtLink class="btn-link" to="/masterclass">
        Explorar Masterclass
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      masterClasses: [
        {
          id: 1,
          instructor: "Ana Valéria",
          description: "Primeira Contrabaixista OSESP",
          image: "/temp/masterclass-1.png",
        },
        {
          id: 2,
          instructor: "Darring C. Milling",
          description: "Trombone Baixo Solista OSESP",
          image: "/temp/masterclass-2.png",
        },
        {
          id: 3,
          instructor: "Maria Joana",
          description: "Segunda Contrabaixista OSMSP",
          image: "/temp/masterclass-1.png",
        },
        {
          id: 4,
          instructor: "José Smith",
          description: "Trombone Alto Acorde OSMSP",
          image: "/temp/masterclass-2.png",
        },
      ],
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
.masterclass {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 90%;
  min-height: calc(100vh - 144px);
  margin: auto;

  & > header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .headline {
      font-family: $font-foral-pro;
      font-size: 4rem;
      text-align: center;
      color: $text-light-clr-2;

      span {
        font-family: $font-rampage-monoline;
        font-size: 9rem;
        color: $primary-clr;
      }
    }

    .description {
      max-width: 50%;
      font-size: 1.25rem;
      text-align: center;
      color: $text-light-clr-3;
    }
  }

  & > .masterclass-slide {
    display: flex;
    align-items: center;

    .btn-circle {
      z-index: 2;
    }

    .btn-circle:first-of-type {
      transform: translateX(50%);
    }

    .btn-circle:last-of-type {
      transform: translateX(-50%);
    }

    & > div {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: calc(50% - 1rem);
      gap: 2rem;
      @include carousel;

      .masterclass-card {
        width: 100%;
        position: relative;
        border-radius: 16px;
        scroll-snap-align: start;

        img {
          width: 100%;
          object-fit: cover;
        }

        .masterclass-card-text {
          position: absolute;
          bottom: 0;
          width: 100%;
          margin-block: 1.5rem;
          padding-inline: 1rem;
          text-align: center;
          color: $text-light-clr-2;

          p:first-of-type {
            font-family: $font-foral-pro;
            font-size: 3rem;
            line-height: 1;
          }

          p:last-of-type {
            font-size: 1.25rem;
          }

          .masterclass-card-separator {
            width: 50px;
            height: 3px;
            margin-block: 1rem;
            margin-inline: auto;
            border-radius: 0.5rem;
            background-color: $text-light-clr-1;
          }
        }
      }
    }
  }

  & > .masterclass-action {
    grid-column: 1 / span 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block: 4rem;
  }

  @media only screen and (max-width: 600px) {
    & {
      display: flex;
      flex-direction: column;
    }

    & > header {
      margin-bottom: 2rem;

      .icon {
        width: 8rem;
      }
    }

    & > .masterclass-action {
      grid-column: 1;
    }

    & > .masterclass-slide {
      .btn-circle {
        img {
          width: 5rem;
        }
      }

      & > div {
        .masterclass-card {
          .masterclass-card-text {
            margin-inline: auto;

            p:first-of-type {
              font-size: 2rem;
            }

            p:last-of-type {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
