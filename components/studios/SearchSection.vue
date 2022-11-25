<template>
  <section class="studios" aria-labelledby="headline">
    <header>
      <h1 id="headline" class="headline">
        <span class="musicalll">Musicalll</span> para <br />
        <span>Estudios</span>
      </h1>
      <p class="description text-lg">
        Encontre um estúdio para seus ensaios e gravações!
      </p>
    </header>

    <SearchForm
      :is-searched="isSearched"
      :form-data="formData"
      @form="(formData) => $emit('form', formData)"
    />

    <footer v-if="!isSearched">
      <div class="search-available">
        <div class="search-available-icon">
          <img src="/svg/music-box.svg" />
        </div>

        <div class="search-available-text">
          <p class="search-available-title">Pirenópolis</p>
          <p class="search-available-quantity">3 disponíveis</p>
        </div>
      </div>

      <div class="search-available">
        <div class="search-available-icon">
          <img src="/svg/music-box.svg" />
        </div>

        <div class="search-available-text">
          <p class="search-available-title">Pirenópolis</p>
          <p class="search-available-quantity">3 disponíveis</p>
        </div>
      </div>

      <div class="search-available">
        <div class="search-available-icon">
          <img src="/svg/music-box.svg" />
        </div>

        <div class="search-available-text">
          <p class="search-available-title">Pirenópolis</p>
          <p class="search-available-quantity">3 disponíveis</p>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import SearchForm from "@/components/studios/SearchForm.vue"

export default {
  components: {
    SearchForm,
  },
  props: {
    isSearched: {
      type: Boolean,
      default: false,
    },
    formData: {
      type: Object,
      default: () => ({
        date: null,
        time: null,
        city: null,
        event: null,
      }),
    },
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

  @media only screen and (max-width: 600px) {
    header {
      .description {
        max-width: 80%;
        margin: auto;
      }
    }

    footer {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-top: 3rem;

      .search-available {
        margin-top: unset;
      }
    }
  }
}
</style>
