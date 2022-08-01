<template>
  <client-only>
    <Vuetable
      ref="vuetable"
      class="vuetable"
      v-bind="$attrs"
      :css="css.table"
      no-data-template="Nenhum dado encontrado"
    >
      <template v-for="field in $attrs.fields" #[field.name]="{ rowData }">
        <slot :name="field.name" :rowData="{ ...rowData }">
          {{ rowData[field.name] }}
        </slot>
      </template>
    </Vuetable>
  </client-only>
</template>

<script>
import Vuetable from 'vuetable-2'
import VuetableCss from '@/plugins/vuetable-css.js'

export default {
  components: {
    Vuetable,
  },
  data() {
    return {
      css: VuetableCss,
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
}
</script>

<style lang="scss">
.vuetable {
  width: 100%;
  margin-top: 2rem;

  thead,
  tbody {
    tr {
      border-bottom: 1px solid #e6e6e6;

      th,
      td {
        padding-bottom: 0.75rem;
        text-align: left;
      }
    }
  }

  tbody > tr > td {
    padding-block: 1rem;
  }

  .vuetable-empty-result {
    text-align: center;
    padding-block: 0.5rem;
  }
}
</style>
