<template>
  <div class="search">
    <form @submit.prevent="searchStudios">
      <div class="search-field">
        <div class="input-field">
          <label for="input-date">
            Data
          </label>
          <BaseCalendar 
            id="input-date"
            v-model="form.date" 
            class="form-input"
            placeholder="Data"
            @change="emitForm"
          />
        </div>
        <div class="input-field">
          <label for="input-time-init">
            Horário inicial
          </label>
          <BaseSelect
            id="input-time-init"
            v-model="form.timeInit" 
            class="form-input"
            placeholder="Horário inicial" 
            :options="timeInitOptions"
            :reduce="time => time.value"
            @option:selected="emitForm"
          />
        </div>
        <div class="input-field">
          <label for="input-time-final">
            Horário final
          </label>
          <BaseSelect
            id="input-time-final"
            v-model="form.timeFinal" 
            class="form-input"
            placeholder="Horário inicial" 
            :options="timeFinalOptions"
            :reduce="time => time.value"
            @option:selected="emitForm"
          />
        </div>
        <div class="input-field">
          <label for="input-city">
            Localidade
          </label>
          <BaseSelect 
            id="input-city"
            v-model="form.city"
            class="form-input"
            placeholder="Cidade"
            :options="cityOptions"
            :reduce="city => city.value"
            @option:selected="emitForm"
          />
        </div>
        <div class="input-field">
          <label for="input-event">
            Evento
          </label>
          <BaseSelect 
            id="input-event"
            v-model="form.event"
            class="form-input"
            placeholder="Tipo de evento"
            :options="eventOptions"
            :reduce="event => event.value"
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

    <template v-if="!isSearched">
      <NuxtImg src="/svg/tablature-note.svg" />

      <NuxtLink class="link" to="">Quero cadastrar meu estúdio</NuxtLink>
    </template>
    <div v-else class="search-prices">
      <span class="musicalll">Preços:&nbsp;</span>
      {{ $utils.formatMoney(startPrice) }} até
      {{ $utils.formatMoney(endPrice) }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    isSearched: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      default: () => ({
        date: null,
        timeInit: null,
        timeFinal: null,
        city: null,
        event: null,
      })
    }
  },
  data() {
    return {
      form: this.formData,
      timeInitOptions: [],
      timeFinalOptions: [],
      cityOptions: [],
      eventOptions: [],
      startPrice: 49.90,
      endPrice: 250,
    }
  },
  fetch () {
    this.timeInitOptions = [
      { value: 1, label: '06 horas' },
      { value: 2, label: '07 horas' },
      { value: 3, label: '08 horas' },
      { value: 4, label: '09 horas' },
      { value: 5, label: '10 horas' },
      { value: 6, label: '11 horas' },
      { value: 7, label: '12 horas' },
      { value: 8, label: '13 horas' },
      { value: 9, label: '14 horas' },
      { value: 10, label: '15 horas' },
      { value: 11, label: '16 horas' },
      { value: 12, label: '17 horas' },
    ]
    this.timeFinalOptions = [
      { value: 2, label: '07 horas' },
      { value: 3, label: '08 horas' },
      { value: 4, label: '09 horas' },
      { value: 5, label: '10 horas' },
      { value: 6, label: '11 horas' },
      { value: 7, label: '12 horas' },
      { value: 8, label: '13 horas' },
      { value: 9, label: '14 horas' },
      { value: 10, label: '15 horas' },
      { value: 11, label: '16 horas' },
      { value: 12, label: '17 horas' },
      { value: 13, label: '18 horas' },
    ]

    this.cityOptions = [
      { value: 1, label: 'Goiânia' },
      { value: 2, label: 'Brasília' },
      { value: 3, label: 'São Paulo' },
      { value: 4, label: 'Rio de Janeiro' },
    ]

    this.eventOptions = [
      { value: 1, label: 'Show' },
      { value: 2, label: 'Teatro' },
      { value: 3, label: 'Festival' },
    ]
  },
  watch: {
    formData(newValue) {
      this.form = newValue
    },
    '$route.query'() {
      this.searchStudios()
    }
  },
  methods: {
    emitForm() {
      this.$emit('form', this.form)
    },

    searchStudios() {
      this.$router.push({
        path: '/studios/search',
        query: {
          data: this.form.date ? moment(this.form.date).format('YYYY-MM-DD') : null,
          horarioInicial: this.form.timeInit,
          horarioFinal: this.form.timeFinal,
          cidade: this.form.city,
          evento: this.form.event
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

      label {
        display: none;
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

  @media only screen and (max-width: 1279px) {
    form {
      max-width: 75%;
      min-width: 45%;
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

  @media only screen and (max-width: 1023px) {
    form {
      min-width: 60%;
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      max-width: 90%;
      min-width: 80%;
    }
  }
}
</style>