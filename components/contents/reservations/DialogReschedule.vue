<template>
  <BaseDialog ref="dialogCancelReservarion" title="Remarcar reserva">
    <div class="dialog-content">
      <p class="content-description">Deseja remarcar a sua reserva?</p>

      <div class="content-grid">
        <ul>
          <li>
            <span class="info-label">Contrante: </span>
            <BaseInput
              id="input-contractor"
              v-model="currentData.contractor"
              :light="true"
              disabled
            />
          </li>
          <li>
            <span class="info-label">Tipo: </span>
            <BaseInput
              id="input-type"
              v-model="currentData.type"
              :light="true"
              disabled
            />
          </li>
          <li>
            <span class="info-label">Sala: </span>
            <BaseInput
              id="input-room"
              v-model="currentData.room"
              :light="true"
              disabled
            />
          </li>
          <li>
            <span class="info-label">Valor: </span>
            {{ data.price }}
          </li>
          <li>
            <span class="info-label">Data: </span>
            <BaseCalendar
              id="input-date"
              v-model="currentData.date"
              class="form-input"
              :light="true"
              :rounded="true"
              disabled
            />
          </li>
          <li>
            <span class="info-label">Horário: </span>
            <BaseSelect
              id="input-hours"
              v-model="currentData.date"
              :options="priceOptions"
              :reduce="(price) => price.value"
              :clearable="false"
              :light="true"
              min-width="100px"
              max-width="100px"
            />
          </li>
        </ul>
      </div>

      <div class="content-buttons">
        <BaseButton
          class="no-gradient light small"
          style="width: 100%"
          @click="close"
        >
          Confirmar cancelamento
        </BaseButton>
        <BaseButton
          class="btn-outline light small"
          style="width: 100%"
          @click="close"
        >
          Voltar
        </BaseButton>
      </div>
    </div>
  </BaseDialog>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      motivation: '',
      hoursFromToday: 96,
      amountToCharge: 10,
      currentData: {
        contractor: this.data.contractor,
        type: this.data.type,
        room: this.data.room,
        price: this.data.price,
        date: this.data.date,
        hours: this.data.hours,
      },
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
  },
  watch: {
    open(isOpen) {
      if (isOpen) this.$refs.dialogCancelReservarion.openDialog()
    },
  },
  methods: {
    close() {
      this.$refs.dialogCancelReservarion.closeDialog()
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-content {
  padding: 2rem;

  .info-label {
    font-family: $font-foral-pro;
    font-size: 1.25rem;
    font-weight: 700;
  }

  .content-description,
  .content-grid,
  .content-buttons {
    margin-block: 1.5rem;
  }

  .content-description {
    font-family: $font-foral-pro;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
  }

  .content-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
  }
}
</style>
