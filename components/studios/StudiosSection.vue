<template>
  <section class="studios" aria-labelledby="headline">
    <header>
      <h1 id="headline" class="headline">
        <span class="musicalll">Musicalll</span> para <br />
        <span>Estudios</span>
      </h1>
      <p class="description text-lg">Encontre um estúdio para seus ensaios e gravações!</p>
    </header>

    <div class="search">
      <div class="fields">
        <form @submit.prevent="searchStudios">
          <div class="search-field">
            <div class="input-field">
              Data
            </div>
            <div class="input-field">
              Horário
            </div>
            <div class="input-field">
              Cidade
            </div>
            <div class="input-field">
              Tipo de evento
            </div>
            <BaseButton class="btn-circle">
              <nuxt-img src="/svg/search.svg" />
            </BaseButton>
          </div>
        </form>
      </div>

      <nuxt-img src="/svg/tablature-note.svg" />

      <nuxt-link class="link" to="">Quero cadastrar meu estúdio</nuxt-link>
    </div>

    <footer>
      <div class="search-available">
        <div class="search-available-icon">
          <nuxt-img src="/svg/music-box.svg" />
        </div>

        <div class="search-available-text">
          <p class="search-available-title">
            Pirenópolis
          </p>
          <p class="search-available-quantity">
            3 disponíveis
          </p>
        </div>
      </div>
      
      <div class="search-available">
        <div class="search-available-icon">
          <nuxt-img src="/svg/music-box.svg" />
        </div>

        <div class="search-available-text">
          <p class="search-available-title">
            Pirenópolis
          </p>
          <p class="search-available-quantity">
            3 disponíveis
          </p>
        </div>
      </div>
      
      <div class="search-available">
        <div class="search-available-icon">
          <nuxt-img src="/svg/music-box.svg" />
        </div>

        <div class="search-available-text">
          <p class="search-available-title">
            Pirenópolis
          </p>
          <p class="search-available-quantity">
            3 disponíveis
          </p>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  methods: {
    searchStudios() {
      
    }
  },
}
</script>

<style lang="scss" scoped>
.studios {
  color: $text-light-clr-1;

  header {
    text-align: center;

    .headline {
      font-family: $font-foral-pro;
      font-size: 4rem;

      span:last-of-type {
        font-family: $font-rampage-monoline;
        font-size: 8rem;
        line-height: 1.2;
      }
    }

    .description {
      color: $text-light-clr-3;
    }
  }

  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 2.5rem;

    .fields {
      .search-field {
        display: flex;
        padding: 1.5rem;
        border: 2px solid $primary-clr;
        border-radius: 4rem;

        .input-field {
          padding: 0.5rem 1rem;

          &:not(:first-of-type) {
            border-left: 1px solid $primary-dark-clr;
          }
        }
      }
    }

    .link {
      text-decoration: underline;
    }
  }

  footer {
    display: flex;
    justify-content: center;
    gap: 3rem;

    .search-available {
      display: flex;
      gap: 1rem;
      margin-top: 3rem;

      .search-available-icon {
        padding: 0.75rem 1.2rem;
        background-image: $gradient-bg;
        border-radius: 0.75rem;
      }

      .search-available-text {
        .search-available-title {
          font-family: $font-foral-pro;
          font-weight: 700;
          font-size: 1.5rem;
          color: $primary-clr;
        }
      }
    }
  }
}
</style>