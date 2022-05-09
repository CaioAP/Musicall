<template>
  <section class="masterclass" aria-labelledby="headline">
    <header>
      <h1 id="headline" class="headline">Apresentamos a <span>Masterclass</span></h1>
      <p class="description">As melhores aulas, feitas pelos melhores profissionais do ramo musical</p>
      <NuxtImg src="/svg/music-note.svg" />
    </header>

    <div class="masterclass-slide">
      <BaseButton class="btn-circle gradient-inverted" @click="previousSlideCard">
        <NuxtImg src="/svg/arrow-left.svg" />
      </BaseButton>

      <div ref="slide">
        <article 
          v-for="masterclass in masterClasses" 
          :key="masterclass.id"
          class="masterclass-card"
        >
          <NuxtImg :src="masterclass.image" />
          <div class="masterclass-card-text">
            <p>{{ masterclass.name }}</p>

            <div class="masterclass-card-separator"></div>

            <p>{{ masterclass.description }}</p>
          </div>
        </article>
      </div>

      <BaseButton class="btn-circle" @click="nextSlideCard">
        <NuxtImg src="/svg/arrow-right.svg" />
      </BaseButton>
    </div>

    <div class="masterclass-action">
      <BaseButton>
        Explorar Masterclass
      </BaseButton>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      masterClasses: [
        { id: 1, name: 'Ana Valéria', description: 'Primeira Contrabaixista OSESP', image: '/temp/masterclass-1.png' },
        { id: 2, name: 'Darring C. Milling', description: 'Trombone Baixo Solista OSESP', image: '/temp/masterclass-2.png' },
        { id: 3, name: 'Maria Joana', description: 'Segunda Contrabaixista OSMSP', image: '/temp/masterclass-1.png' },
        { id: 4, name: 'José Smith', description: 'Trombone Alto Acorde OSMSP', image: '/temp/masterclass-2.png' },
      ],
    }
  },
  methods: {
    previousSlideCard() {
      this.$refs.slide.scrollBy(-200, 0)
    },

    nextSlideCard() {
      this.$refs.slide.scrollBy(200, 0)
    }
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

  @media only screen and (max-width: 600px) {
    & {
      display: flex;
      flex-direction: column;
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
    }
  }

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
          width: 90%;
          margin-block: 1.5rem;
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
}
</style>