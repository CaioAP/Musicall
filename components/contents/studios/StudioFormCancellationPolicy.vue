<template>
  <div class="form-inputs">
    <h3>Política de cancelamento de reserva do estúdio (contratante)</h3>
    <div
      v-for="reserv in reservationOptions"
      :key="`reserv-${reserv}`"
      class="form-input"
    >
      <label :for="`input-reserv-${reserv}`">
        {{
          reserv === 0
            ? `Valor cobrado com cancelamento com menos de 24 horas `
            : `Valor cobrado com cancelamento acima de ${reserv} horas de antecedência`
        }}
      </label>
      <BaseSelect
        :id="`input-reserv-${reserv}`"
        v-model="reservations[reserv]"
        :options="priceOptions"
        :reduce="(price) => price.value"
        :clearable="false"
        :light="true"
        min-width="100px"
        max-width="100px"
        @input="emitData"
      />
    </div>

    <h3>Política de remarcação de reserva já efetuada (contratante)</h3>
    <div
      v-for="reserv in reservationOptions"
      :key="`reschdl-${reserv}`"
      class="form-input"
    >
      <label :for="`input-reserv-${reserv}`">
        {{
          reserv === 0
            ? `Valor cobrado com remarcação com menos de 24 horas `
            : `Valor cobrado com remarcação acima de ${reserv} horas de antecedência`
        }}
      </label>
      <BaseSelect
        :id="`input-reserv-${reserv}`"
        v-model="reschedules[reserv]"
        :options="priceOptions"
        :reduce="(price) => price.value"
        :clearable="false"
        :light="true"
        min-width="100px"
        max-width="100px"
        @input="emitData"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        reservations: {
          0: 0,
          24: 0,
          48: 0,
          72: 0,
          96: 0,
        },
        reschedules: {
          0: 0,
          24: 0,
          48: 0,
          72: 0,
          96: 0,
        },
      }),
    },
  },
  data() {
    return {
      reservations: { ...this.value.reservations },
      reschedules: { ...this.value.reschedules },
    }
  },
  computed: {
    reservationOptions() {
      return [96, 72, 48, 24, 0]
    },

    priceOptions() {
      return [
        { value: 0, label: "0%" },
        { value: 25, label: "25%" },
        { value: 50, label: "50%" },
        { value: 75, label: "75%" },
        { value: 100, label: "100%" },
      ]
    },
  },
  watch: {
    value(newValue) {
      this.reservations = { ...newValue.reservations }
      this.reschedules = { ...newValue.reschedules }
    },
  },
  methods: {
    emitData() {
      this.$emit("change", {
        reservations: this.reservations,
        reschedules: this.reschedules,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  h3 {
    font-family: $font-foral-pro;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .form-input {
    display: flex;
    gap: 1rem;
  }
}
</style>
