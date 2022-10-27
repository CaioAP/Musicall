<template>
  <BaseDialog
    ref="dialogCancelReservarion"
    title="Deseja cancelar sua reserva?"
  >
    <div class="dialog-content">
      <p class="content-description">
        {{ user.name }}, esses são os dados gerados pelo cancelamento da
        reserva:
      </p>

      <div class="content-grid">
        <ul>
          <li>
            <span class="info-label">Contrante: </span>
            {{ data.contractor }}
          </li>
          <li>
            <span class="info-label">Tipo: </span>
            {{ data.type }}
          </li>
          <li>
            <span class="info-label">Sala: </span>
            {{ data.room }}
          </li>
          <li>
            <span class="info-label">Valor: </span>
            {{ data.price }}
          </li>
          <li>
            <span class="info-label">Data: </span>
            {{ data.date }}
          </li>
          <li>
            <span class="info-label">Horário: </span>
            {{ data.hours }}
          </li>
        </ul>

        <div>
          <BaseTextarea
            id="input-motivation"
            v-model="motivation"
            label="Motivo do cancelamento"
            placeholder="Fale um pouco sobre o motivo do cancelamento"
            :light="true"
            :rows="10"
          />
        </div>
      </div>

      <div class="divider"></div>

      <div class="content-info">
        <p>
          <span class="info-label">
            Valor cobrado com cancelamento acima de {{ hoursFromToday }}h:
          </span>
          {{ amountToCharge }}% do valor da reserva
        </p>
        <p>
          <span class="info-label"> Política de cancelamento: </span>
          <a href="">Você pode visualizar os termos da sua reserva aqui</a>
        </p>
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

  .content-description {
    margin-block: 1.5rem;
    font-family: $font-foral-pro;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-block: 1.5rem;
  }

  .divider {
    width: 100%;
    border-top: $border-divider;
    margin-block: 2rem;
  }

  .content-info,
  .content-buttons {
    margin-block: 1.5rem;
  }

  .content-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
  }
}
</style>
