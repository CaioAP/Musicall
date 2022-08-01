<template>
  <div>
    <ContentSection title="Minhas Reservas">
      <template #subtitle>
        <h2 class="content-subtitle">
          <span class="faded">Minhas Reservas ></span>
          <span>Administrar reservas</span>
        </h2>
      </template>

      <div class="content">
        <div class="content-form">
          <BaseCalendar
            id="input-date-init"
            v-model="form.initialDate"
            class="form-input"
            label="Data inicial"
            :light="true"
            :rounded="true"
          />
          <BaseCalendar
            id="input-date-final"
            v-model="form.finalDate"
            class="form-input"
            label="Data final"
            :light="true"
            :rounded="true"
          />

          <div class="filters">
            <BaseInputRadioGroup
              v-model="form.filterSelected"
              class="filter"
              :light="true"
              :options="[...filterOptions]"
            />
          </div>
        </div>

        <div class="content-labels">
          <div class="content-label">
            <div class="label-title">
              <NuxtImg src="/svg/book-open.svg" />
              <p>Total de reservas</p>
            </div>
            <p>{{ totalReservations }}</p>
          </div>
        </div>

        <div class="content-table">
          <BaseTable
            :api-mode="false"
            :fields="table.fields"
            :data="table.data"
          >
            <template #avaliation="{ rowData }">
              <div class="avaliation">
                <BaseButton
                  v-for="star in 5"
                  :key="star"
                  class="btn-plain"
                  :disabled="!!rowData.avaliation"
                  @click="sendAvaliation(rowData.id, star)"
                >
                  <NuxtImg
                    v-if="rowData.avaliation < star"
                    src="/svg/star-empty.svg"
                  />
                  <NuxtImg v-else src="/svg/star-gradient.svg" />
                </BaseButton>
              </div>
            </template>
            <template #status="{ rowData }">
              <div class="status">
                <div
                  class="status-label"
                  :class="{
                    success: rowData.status === status.confirmed,
                    warning: rowData.status === status.pending,
                    error: rowData.status === status.declined,
                  }"
                ></div>
                {{ rowData.status }}
              </div>
            </template>
            <template #config="{ rowData }">
              {{ rowData.config }}
            </template>
          </BaseTable>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/contents/ContentSection.vue'

export default {
  name: 'ReservationsContent',
  components: {
    ContentSection,
  },
  layout: 'content',
  data() {
    return {
      totalReservations: 0,
      form: {
        initialDate: null,
        finalDate: null,
        filterSelected: 2,
      },
      filterOptions: [
        { name: 'today', text: 'Hoje', radioValue: 1 },
        { name: 'week', text: 'Esta semana', radioValue: 2 },
        { name: 'month', text: 'Mês atual', radioValue: 3 },
      ],
      table: {
        fields: [
          {
            name: 'contractor',
            title: 'Contrante',
          },
          {
            name: 'type',
            title: 'Tipo',
          },
          {
            name: 'room',
            title: 'Sala',
          },
          {
            name: 'price',
            title: 'Valor',
          },
          {
            name: 'date',
            title: 'Data',
          },
          {
            name: 'hours',
            title: 'Horário',
          },
          {
            name: 'payment',
            title: 'Pagamento',
          },
          {
            name: 'avaliation',
            title: 'Avaliação',
          },
          {
            name: 'status',
            title: 'Status',
          },
          {
            name: 'config',
            title: 'Configurações',
          },
        ],
        data: [
          {
            contractor: 'Contratante 1',
            type: 'Tipo 1',
            room: 'Sala 1',
            price: 'R$ 100,00',
            date: '01/01/2020',
            hours: '10:00 às 12:00',
            payment: 'Crédito',
            avaliation: 0,
            status: 'Confirmado',
            config: 'teste',
          },
          {
            contractor: 'Contratante 2',
            type: 'Tipo 2',
            room: 'Sala 2',
            price: 'R$ 200,00',
            date: '02/01/2020',
            hours: '13:00 às 15:00',
            payment: 'Crédito',
            avaliation: 3,
            status: 'Recusado',
            config: 'teste',
          },
          {
            contractor: 'Contratante 3',
            type: 'Tipo 3',
            room: 'Sala 3',
            price: 'R$ 300,00',
            date: '03/01/2020',
            hours: '16:00 às 18:00',
            payment: 'Crédito',
            avaliation: 5,
            status: 'Pendente',
            config: 'teste',
          },
        ],
      },
    }
  },
  computed: {
    status() {
      return {
        confirmed: 'Confirmado',
        pending: 'Pendente',
        declined: 'Recusado',
      }
    },
  },
  methods: {
    isActive(f) {
      return f <= this.currentForm
    },

    sendAvaliation(reservationId, avaliation) {
      console.log(reservationId, avaliation)
    },
  },
}
</script>

<style lang="scss" scoped>
.content-subtitle {
  margin-top: 1rem;
  font-size: 2rem;
  line-height: 2rem;

  .faded {
    opacity: 0.6;
  }
}

.content {
  width: 100%;
  height: 100%;
  background-color: $text-light-clr-1;
  border: 1px solid $primary-clr;
  border-radius: 10px;
  padding: 2rem;

  .content-form {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1.5rem;
  }

  .content-labels {
    padding-block: 1.5rem;
    border-bottom: $border-divider;

    .content-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: fit-content;
      padding: 1rem;
      background: $gradient-bg;
      border-radius: 0.5rem;
      font-family: $font-foral-pro;
      font-size: 1.5rem;

      .label-title {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        font-weight: 400;

        img {
          background-color: #000;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
      }

      & > p {
        font-weight: 700;
      }
    }
  }

  .content-table {
    width: 100%;

    .avaliation {
      display: flex;
      gap: 0.25rem;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .status-label {
        width: 1rem;
        height: 1rem;
        border-radius: 4rem;

        &.success {
          background-color: $success-clr;
        }
        &.warning {
          background-color: $warning-clr;
        }
        &.error {
          background-color: $error-clr;
        }
      }
    }
  }
}
</style>
