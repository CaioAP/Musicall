<template>
  <section class="masterclass" aria-labelledby="headline">
    <header>
      <h1 id="headline" class="headline">Apresentamos a <span>Masterclass</span></h1>
      <p class="description">As melhores aulas, feitas pelos melhores profissionais do ramo musical</p>
      <nuxt-img src="/svg/music-note.svg" />
    </header>

    <div class="masterclass-slide">
      <BaseButton class="btn-circle gradient-inverted">
        <nuxt-img src="/svg/arrow-left.svg" />
      </BaseButton>

      <div>
        <article 
          v-for="masterclass in masterClassesShown" 
          :key="masterclass.id"
          class="masterclass-card"
        >
          <nuxt-img :src="masterclass.image" />
          <div class="masterclass-card-text">
            <p>{{ masterclass.name }}</p>

            <div class="masterclass-card-separator"></div>

            <p>{{ masterclass.description }}</p>
          </div>
        </article>
      </div>

      <BaseButton class="btn-circle">
        <nuxt-img src="/svg/arrow-right.svg" />
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
      masterClassesShown: [
        { id: 1, name: 'Ana Valéria', description: 'Primeira Contrabaixista OSESP', image: '/temp/masterclass-1.png' },
        { id: 2, name: 'Darring C. Milling', description: 'Trombone Baixo Solista OSESP', image: '/temp/masterclass-2.png' },
      ],
      masterClasses: [
        { id: 1, name: 'Ana Valéria', description: 'Primeira Contrabaixista OSESP', image: '/temp/masterclass-1.png' },
        { id: 2, name: 'Darring C. Milling', description: 'Trombone Baixo Solista OSESP', image: '/temp/masterclass-2.png' },
        { id: 3, name: 'Maria Joana', description: 'Segunda Contrabaixista OSMSP', image: '/temp/masterclass-1.png' },
        { id: 4, name: 'José Smith', description: 'Trombone Alto Acorde OSMSP', image: '/temp/masterclass-2.png' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.masterclass {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: calc(100vh - 144px);

  @media only screen and (max-width: 600px) {
    & {
      display: flex;
      flex-direction: column;
    }

    & > .masterclass-action {
      grid-column: 1;
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
      display: flex;
      gap: 2rem;

      .masterclass-card {
        position: relative;
        border-radius: 16px;

        .masterclass-card-text {
          position: absolute;
          bottom: 0;
          width: 100%;
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