<template>
  <div class="search">
    <form @submit.prevent="searchStudios">
      <div class="search-field">
        <div class="input-field">
          <BaseCalendar 
            v-model="form.date" 
            placeholder="Data"
            max-width="144px"
            @change="emitForm"
          />
        </div>
        <div class="input-field">
          <BaseSelect
            v-model="form.time" 
            placeholder="Horário" 
            :options="timeOptions"
            :reduce="time => time.value"
            @option:selected="emitForm"
          />
        </div>
        <div class="input-field">
          <BaseSelect 
            v-model="form.city"
            placeholder="Cidade"
            :options="cityOptions"
            :reduce="city => city.value"
            @option:selected="emitForm"
          />
        </div>
        <div class="input-field">
          <BaseSelect 
            v-model="form.event"
            placeholder="Tipo de evento"
            :options="eventOptions"
            :reduce="event => event.value"
            @option:selected="emitForm"
          />
        </div>
        <BaseButton class="btn-circle" @click="searchStudios">
          <nuxt-img src="/svg/search.svg" />
        </BaseButton>
      </div>
    </form>

    <template v-if="!isSearched">
      <nuxt-img src="/svg/tablature-note.svg" />

      <nuxt-link class="link" to="">Quero cadastrar meu estúdio</nuxt-link>
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
        time: null,
        city: null,
        event: null,
      })
    }
  },
  data() {
    return {
      form: this.formData,
      timeOptions: [],
      cityOptions: [],
      eventOptions: [],
      startPrice: 49.90,
      endPrice: 250,
    }
  },
  fetch () {
    this.timeOptions = [
      { value: 1, label: '06 às 07 horas' },
      { value: 2, label: '07 às 08 horas' },
      { value: 3, label: '08 às 09 horas' },
      { value: 4, label: '09 às 10 horas' },
      { value: 5, label: '10 às 11 horas' },
      { value: 6, label: '11 às 12 horas' },
      { value: 7, label: '12 às 13 horas' },
      { value: 8, label: '13 às 14 horas' },
      { value: 9, label: '14 às 15 horas' },
      { value: 10, label: '15 às 16 horas' },
      { value: 11, label: '16 às 17 horas' },
      { value: 12, label: '17 às 18 horas' },
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
          horario: this.form.time,
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
}
</style>