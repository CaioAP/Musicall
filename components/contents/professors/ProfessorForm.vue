<template>
  <div class="form-grid">
    <div class="form-inputs">
      <BaseInput
        id="input-name"
        v-model="name"
        label="Nome do professor"
        placeholder="Nome do professor"
        :light="true"
        @change="emitData"
      />
      <BaseTextarea
        id="input-description"
        v-model="description"
        label="Descrição"
        placeholder="Fale um pouco sobre o professor"
        :light="true"
        :rows="10"
        @change="emitData"
      />
      <BaseCalendar
        id="input-birthdate"
        v-model="birthdate"
        class="form-input"
        label="Data de nascimento"
        :light="true"
        :rounded="true"
        disabled
      />
      <BaseInput
        id="input-cpf"
        v-model="cpf"
        label="Nome do professor"
        placeholder="Nome do professor"
        :light="true"
        @change="emitData"
      />
      <BaseInput
        id="input-email"
        v-model="email"
        label="Nome do professor"
        placeholder="Nome do professor"
        :light="true"
        @change="emitData"
      />
    </div>

    <div class="form-images">
      <label for="input-images"> Fotos do estúdio </label>

      <div
        id="dropzone"
        :class="{ dragover: draggedover }"
        @dragover.prevent="dragover"
        @dragleave.prevent="dragleave"
      >
        <img src="/svg/image-add.svg" />
        <input
          id="input-images"
          type="file"
          accept="image/png,image/jpg,image/jpeg"
          multiple
          @change="dropped"
        />
      </div>

      <div class="images-dropped">
        <div v-for="image in images" :key="image.name" class="image-dropped">
          <img :src="getImageString(image)" />
        </div>
      </div>

      <div class="input-options">
        <p>Instrumentos</p>
        <BaseInputCheckbox
          v-model="instrumentsChecked"
          :options="instruments"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        name: null,
        description: null,
        birthdate: null,
        cpf: null,
        email: null,
        instruments: [],
        images: [],
      }),
    },
  },
  data() {
    return {
      name: this.value.name,
      description: this.value.description,
      birthdate: this.value.birthdate,
      cpf: this.value.cpf,
      email: this.value.email,
      instrumentsChecked: this.value.instruments,
      images: [],
      draggedover: false,
      instruments: [],
    }
  },
  watch: {
    value(newValue) {
      this.name = newValue.name
      this.description = newValue.description
      this.brithdate = newValue.brithdate
      this.cpf = newValue.cpf
      this.email = newValue.email
      this.instrumentsChecked = newValue.instruments
    },
  },
  methods: {
    dragover() {
      this.draggedover = true
    },
    dragleave() {
      this.draggedover = false
    },
    dropped(e) {
      this.images = e.target.files
      this.emitData()
    },
    getImageString(file) {
      return URL.createObjectURL(file)
    },
    emitData() {
      this.$emit("change", {
        name: this.value.name,
        description: this.value.description,
        birthdate: this.value.birthdate,
        cpf: this.value.cpf,
        email: this.value.email,
        instruments: this.value.instrumentsChecked,
      })
    },

    async getInstruments() {
      try {
        const instruments = await this.$apiInstruments.getAll()
        this.instruments = this.formatInstruments(instruments)
      } catch (error) {
        this.$store.commit("alert/SET_ALERT", {
          type: "error",
          message: error.message,
        })
      }
    },

    formatInstruments(instruments) {
      return instruments
    },
  },
}
</script>

<style lang="scss" scoped>
.form-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;

  .form-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .form-images {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;

    label {
      margin-bottom: 0.5rem;
    }

    #dropzone {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-block: 2rem;
      border: 1px dashed $primary-clr;
      border-radius: 12px;
      position: relative;

      &.dragover {
        border: 1px solid $primary-clr;
      }

      #input-images {
        cursor: pointer;
        position: absolute;
        opacity: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }

    .images-dropped {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-top: 1.5rem;

      .image-dropped {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: calc(25% - 1.2rem);
        height: 250px;
        border-radius: 12px;
      }
    }

    .input-options {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      div {
        display: flex;
        align-items: center;

        label {
          margin: 0;
          cursor: pointer;
        }

        .input-radio-marker {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          border: 1px solid $primary-clr;
          background-color: #fff;
          margin-right: 0.5rem;

          &.checked {
            background-color: $primary-clr;
          }
        }
      }
    }
  }
}
</style>
