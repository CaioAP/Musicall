<template>
  <div class="search">
    <form @submit.prevent="searchStudios">
      <div class="search-field">
        <div class="input-field">
          <BaseSelect
            v-model="form.course" 
            class="form-input"
            placeholder="Todos os cursos" 
            :options="courseOptions"
            :reduce="course => course.value"
            @option:selected="emitForm"
          />
        </div>
        <div class="input-field">
          <BaseSelect 
            v-model="form.difficulty"
            class="form-input"
            placeholder="Todos os níveis"
            :options="difficultyOptions"
            :reduce="difficulty => difficulty.value"
            @option:selected="emitForm"
          />
        </div>
        <BaseButton class="btn-circle" @click="searchStudios">
          <NuxtImg src="/svg/search.svg" />
        </BaseButton>
        <BaseButton class="btn-gradient" @click="searchStudios">
          Pesquisar
        </BaseButton>
      </div>
    </form>

    <div class="search-prices">
      <span class="musicalll">Preços:&nbsp;</span>
      {{ $utils.formatMoney(startPrice) }} até
      {{ $utils.formatMoney(endPrice) }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    formData: {
      type: Object,
      default: () => ({
        date: null,
        time: null,
        city: null,
        event: null,
      })
    }
  },
  data() {
    return {
      form: this.formData,
      courseOptions: [],
      difficultyOptions: [],
      startPrice: 49.90,
      endPrice: 250,
    }
  },
  fetch () {
    this.courseOptions = [
      { value: 1, label: 'Canto' },
      { value: 2, label: 'Clarineta' },
      { value: 3, label: 'Gaita' },
      { value: 4, label: 'Baixo' },
      { value: 5, label: 'Bateria' },
    ]

    this.difficultyOptions = [
      { value: 1, label: 'Iniciante' },
      { value: 2, label: 'Intermediário' },
      { value: 3, label: 'Avançado' },
      { value: 4, label: 'Profissional' },
    ]
  },
  watch: {
    formData(newValue) {
      this.form = newValue
    },
    '$route.query'() {
      this.$emit('fetch')
    }
  },
  methods: {
    emitForm() {
      this.$emit('form', this.form)
    },

    searchStudios() {
      this.$router.push({
        path: `/${this.name}/search`,
        query: {
          curso: this.form.course,
          dificuldade: this.form.difficulty
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2.5rem;

  .search-field {
    display: flex;
    padding: 1rem 1.5rem;
    border: 2px solid $primary-clr;
    border-radius: 4rem;

    .input-field {
      display: flex;
      align-items: center;
      padding: 0 1rem;

      &:not(:first-of-type) {
        border-left: 1px solid $primary-dark-clr;
      }
    }

    .btn-gradient {
      display: none;
    }
  }

  .search-prices {
    display: flex;
    align-items: center;
    padding: 1.25rem 2.5rem;
    font-size: 1.25rem;
    border: 2px solid $primary-clr;
    border-radius: 4rem;

    span {
      font-size: 1.5rem;
    }
  }

  .link {
    text-decoration: underline;
  }

  @media only screen and (max-width: 600px) {
    form {
      max-width: 90%;
      min-width: 90%;
    }

    .search-field {
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 1rem;
      width: 100%;
      border: none;

      .input-field {
        &:not(:first-of-type) {
          border-left: unset;
        }

        .form-input {
          width: 100%;
          min-height: 2.5rem;
          padding-inline: 1rem;
          padding-block: 0.5rem;
          border: 1px solid $primary-clr;
          border-radius: 4rem;
        }
      }

      .btn-circle {
        display: none;
      }

      .btn-gradient {
        display: flex;
        align-self: center;
        height: fit-content;
      }
    }
  }
}
</style>