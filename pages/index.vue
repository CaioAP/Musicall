<template>
  <div class="container">
    <div class="hero-bg">
      <nuxt-img src="/images/hero-background.png" />
    </div>

    <section class="masterclass" aria-labelledby="headline">
      <div>
        <h1 id="headline" class="headline">Apresentamos a <span>Masterclass</span></h1>
        <p class="description">As melhores aulas, feitas pelos melhores profissionais do ramo musical</p>
        <nuxt-img src="/svgs/music-note.svg" />
      </div>

      <div>
        <BaseButton class="btn-circle gradient-inverted">
          <nuxt-img src="/svgs/arrow-left.svg" />
        </BaseButton>

        <div>
          <article 
            v-for="masterclass in masterClassesShown" 
            :key="masterclass.id"
            class="masterclass-card"
          >
            <nuxt-img :src="masterclass.image" />
          </article>
        </div>

        <BaseButton class="btn-circle">
          <nuxt-img src="/svgs/arrow-right.svg" />
        </BaseButton>
      </div>

      <div>
        <BaseButton>
          Explorar Masterclass
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      masterClassesShown: [
        { id: 1, name: 'Ana Valéria', class: 'Primeira Contrabaixista OSESP', image: '/temp/masterclass-1.png' },
        { id: 1, name: 'Darring C. Milling', class: 'Trombone Baixo Solista OSESP', image: '/temp/masterclass-2.png' },
      ],
      masterClasses: [
        { id: 1, name: 'Ana Valéria', class: 'Primeira Contrabaixista OSESP', image: '/temp/masterclass-1.png' },
        { id: 1, name: 'Darring C. Milling', class: 'Trombone Baixo Solista OSESP', image: '/temp/masterclass-2.png' },
        { id: 1, name: 'Maria Joana', class: 'Segunda Contrabaixista OSMSP', image: '/temp/masterclass-1.png' },
        { id: 1, name: 'José Smith', class: 'Trombone Alto Acorde OSMSP', image: '/temp/masterclass-2.png' },
      ]
    }
  },
}
</script>


<style lang="scss" scoped>
.container {
  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    & > img {
      mix-blend-mode: screen;
      width: 100vw;
      height: 100vh;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #000;
    }
  }

  .masterclass {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: calc(100vh - 144px);

    & > div:first-of-type {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      .headline {
        font-family: $font-foral-pro;
        font-size: 4rem;
        text-align: center;
        color: $light-txt-clr-2;

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
        color: $light-txt-clr-3;
      }
    }

    & > div:nth-of-type(2) {
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
        }
      }
    }

    & > div:last-of-type {
      grid-column: 1 / span 2;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-block: 4rem;
    }
  }
}
</style>