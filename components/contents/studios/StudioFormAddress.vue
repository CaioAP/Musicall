<template>
  <div class="form-inputs">
    <BaseInput
      id="input-cep"
      v-model="cep"
      mask="#####-###"
      label="CEP"
      placeholder="#####-###"
      :light="true"
      @change="searchCep(cep)"
    />
    <BaseInput
      id="input-estado"
      v-model="estado"
      mask="AA"
      label="Estado"
      placeholder="UF"
      :light="true"
    />
    <BaseInput
      id="input-cidade"
      v-model="cidade"
      label="Cidade"
      placeholder="Cidade"
      :light="true"
    />
    <BaseInput
      id="input-bairro"
      v-model="bairro"
      label="Bairro"
      placeholder="Bairro"
      :light="true"
    />
    <BaseInput
      id="input-logradouro"
      v-model="logradouro"
      label="Logradouro"
      placeholder="Logradouro"
      :light="true"
    />
    <BaseInput
      id="input-numero"
      v-model="numero"
      label="Número"
      placeholder="0"
      :light="true"
      @change="emitData"
    />
    <BaseInput
      id="input-complemento"
      v-model="complemento"
      label="Complemento"
      placeholder="Qd, lt ou ap"
      :light="true"
      @change="emitData"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        cep: null,
        estado: null,
        cidade: null,
        bairro: null,
        logradouro: null,
        numero: null,
        complemento: null,
      }),
    },
  },
  data() {
    return {
      cep: this.value.cep,
      estado: this.value.estado,
      cidade: this.value.cidade,
      bairro: this.value.bairro,
      logradouro: this.value.logradouro,
      numero: this.value.numero,
      complemento: this.value.complemento,
    }
  },
  watch: {
    value(newValue) {
      this.cep = newValue.cep
      this.estado = newValue.estado
      this.cidade = newValue.cidade
      this.bairro = newValue.bairro
      this.logradouro = newValue.logradouro
      this.numero = newValue.numero
      this.complemento = newValue.complemento
    },
  },
  methods: {
    async searchCep(cep) {
      try {
        const address = await this.$apiAddress.getByCep(cep)

        this.estado = address.uf
        this.cidade = address.localidade
        this.bairro = address.bairro
        this.logradouro = address.logradouro

        this.emitData()
      } catch (error) {
        this.$store.commit("alert/SET_ALERT", {
          type: "error",
          message: error.message,
        })
      }
    },

    emitData() {
      this.$emit("change", {
        cep: this.cep || null,
        estado: this.estado || null,
        cidade: this.cidade || null,
        bairro: this.bairro || null,
        logradouro: this.logradouro || null,
        numero: this.numero || null,
        complemento: this.complemento || null,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.form-inputs {
  display: grid;
  grid-template-areas:
    "cep cep est cid cid cid bai bai bai"
    "log log log num com com com com com";
  gap: 1rem;
  margin-top: 1.5rem;

  #input-cep {
    grid-area: cep;
  }
  #input-estado {
    grid-area: est;
  }
  #input-cidade {
    grid-area: cid;
  }
  #input-bairro {
    grid-area: bai;
  }
  #input-logradouro {
    grid-area: log;
  }
  #input-numero {
    grid-area: num;
  }
  #input-complemento {
    grid-area: com;
  }
}
</style>
