<template>
  <client-only>
    <VDatePicker
      v-model="innerValue"
      class="field-date-picker"
      v-bind="$attrs"
      :formatter="format"
      :lang="lang"
      :style="{ maxWidth: maxWidth }"
      v-on="$listeners"
    >
      <template #icon-calendar >

      </template>
    </VDatePicker>
  </client-only>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    value: {
      type: Date,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      innerValue: null,
    }
  },
  computed: {
    lang() {
      return {
        formatLocale: {
          months: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
          monthsShort: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
          weekdays: ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],
          weekdaysShort: ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],
          weekdaysMin: ["Do", "Se","Te","Qa","Qi","Se","Sa"],
          firstDayOfWeek: 0,
          firstWeekContainsDate: 1
        },
        days: ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],
        monthFormat: 'MMMM',
        monthBeforeYear: false,
      }
    },
    format() {
      return {
        stringify: (date) => {
          return date ? moment(date).format('DD/MM/YYYY') : ''
        },
        parse: (value) => {
          return value ? moment(value, 'DD/MM/YYYY').toDate() : null
        },
      }
    }
  },
  watch: {
    value(newValue) {
      this.innerValue = newValue
    },
    innerValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  mounted () {
    this.innerValue = this.value
  },
}
</script>

<style lang="scss">
.field-date-picker {
  .mx-input-wrapper {
    .mx-input {
      font-size: 1rem;
      color: $text-light-clr-1;
      background-color: transparent;
      border: none;

      &:hover {
        cursor: pointer;
      }

      &::placeholder {
        font-size: 1rem;
        color: $text-light-clr-1;
      }
    }
  }
}

.mx-datepicker-main {
  background-color: $bg-clr !important;
  border: 1px solid $primary-clr !important;
  border-radius: 0.5rem;

  .mx-calendar-header {
    .mx-btn {
      color: $primary-clr;
    }
  }

  .mx-calendar-content {
    .mx-date-row {
      .cell {
        &.active {
          color: $text-light-clr-1;
          background-color: $primary-clr;
          border-radius: 4rem;
        }
        
        &:hover {
          color: $text-light-clr-1;
          background-color: $primary-clr;
          border-radius: 4rem;
        }
      }
    }
  }
}
</style>