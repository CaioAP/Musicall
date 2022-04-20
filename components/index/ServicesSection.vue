<template>
  <BaseSection labelledby="services-title">
    <template #content>
      <div class="content">
        <nuxt-img src="/images/services.png" />

        <div class="services">
          <header>
            <h2 id="services-title" class="description">Aqui você encontra tudo que precisa na área musical</h2>
          </header>

          <nuxt-link 
            v-for="service in services" 
            :key="service.name" 
            class="service"
            :to="service.path"
          >
            <div class="service-icon">
              <nuxt-img :src="service.icon" />
            </div>

            <div class="service-content">
              <h3 class="service-title">
                <span v-for="word in service.name.split(' ')" :key="word">
                  {{ word }}
                </span>
              </h3>

              <p class="service-description">{{ service.description }}</p>
            </div>

            <div class="service-angle">
              <nuxt-img src="/svg/angle-right.svg" />
            </div>
          </nuxt-link>

          <nuxt-link class="link-gradient" to="">
            Conheça nossos outros serviços +
          </nuxt-link>
        </div>
      </div>
    </template>
  </BaseSection>
</template>

<script>
export default {
  computed: {
    services() {
      return [
        { 
          name: 'Masterclass', 
          description: 'Aulas com profissionais de renome mundial para você entender e aprender com essas feras da música!',
          icon: '/svg/clef-bass.svg',
          path: '',
        },
        { 
          name: 'Nossos Cursos', 
          description: 'Aprenda com os melhores professores. Estudo no seu ritmo, sem sair de casa!',
          icon: '/svg/book-music.svg',
          path: '',
        },
        { 
          name: 'Musicalll Drops', 
          description: 'Nós pensamos em tudo e oferecemos gravações de aulas específicas por assuntos do seu interesse a preço acessíveis.',
          icon: '/svg/music-circle.svg',
          path: '',
        },
      ] 
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 90%;
  margin: auto;

  & > img {
    max-width: 85%;
    margin-top: auto;
  }

  .services {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    header {
      align-items: flex-start;
      max-width: 60%;

      h2 {
        line-height: 1.2;
      }
    }

    .service {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid rgb(250 250 250 / 0.3);

      .service-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 4rem;
        max-width: 4rem;
        min-height: 4rem;
        max-height: 4rem;
        background: $gradient-bg;
        border-radius: 50%;
      }

      .service-content {
        width: 100%;

        .service-title {
          font-family: $font-foral-pro;
          font-weight: 700;
          font-size: 2rem;

          span:last-of-type {
            color: $primary-clr;
          }
        }

        .service-description {
          margin-block: 0.5rem;
        }
      }
    }
  }
}
</style>