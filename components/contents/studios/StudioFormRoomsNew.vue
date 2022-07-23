<template>
  <div>
    <div class="form-grid">
      <div class="form-inputs">
        <BaseInput
          id="input-name"
          v-model="name"
          label="Nome da sala"
          placeholder="Nome da sala"
          :light="true"
        />
        <div class="form-select">
          <label for="input-type">Tipo</label>
          <BaseSelect
            id="input-type"
            v-model="type"
            placeholder="Selecione o tipo"
            :options="typesOptions"
            :reduce="(type) => type.value"
            :light="true"
            :rounded="true"
          />
        </div>
        <div class="row-split">
          <BaseInput
            id="input-capacity"
            v-model="capacity"
            type="number"
            label="Qtd. Max. Pessoas"
            placeholder="6"
            :min="0"
            :light="true"
          />
          <BaseInput
            id="input-size"
            v-model="size"
            type="number"
            label="Metros Quadrados"
            placeholder="32"
            :min="0"
            :light="true"
          />
        </div>
        <BaseTextarea
          id="input-equipments"
          v-model="equipments"
          label="Equipamentos disponíveis nesta sala"
          placeholder="Quais os equipamentos que serão disponibilizados nesta sala?"
          :light="true"
          :rows="10"
        />
        <div class="row-split">
          <BaseInput
            id="input-price"
            v-model="price"
            type="number"
            label="Preço por hora"
            placeholder="R$ 50,00"
            :min="0"
            :light="true"
          />
          <BaseInput
            id="input-max-hours"
            v-model="maxHours"
            type="number"
            label="Máximo de Horas"
            placeholder="10"
            :min="0"
            :light="true"
          />
        </div>
        <BaseTextarea
          id="input-additional-information"
          v-model="additionalInformation"
          label="Informações adicionais"
          placeholder="Deseja adicionar mais alguma informação?"
          :light="true"
          :rows="10"
        />
        <BaseInput
          id="input-videos"
          v-model="videos"
          label="Vídeos da sala"
          placeholder="http://youtube.com/playlist/id_playlist"
          :light="true"
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
          <NuxtImg src="/svg/image-add.svg" />
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
          <p>Tipo de reserva</p>
          <div>
            <input
              v-show="false"
              id="input-reservation-auto"
              v-model="reservationType"
              type="radio"
              name="reservationType"
              value="auto"
            />
            <div
              class="input-radio-marker"
              :class="{ checked: reservationType === 'auto' }"
            ></div>
            <label for="input-reservation-auto">Automática</label>
          </div>
          <div>
            <input
              v-show="false"
              id="input-reservation-manual"
              v-model="reservationType"
              type="radio"
              name="reservationType"
              value="manual"
            />
            <div
              class="input-radio-marker"
              :class="{ checked: reservationType === 'manual' }"
            ></div>
            <label for="input-reservation-manual">Manual</label>
          </div>
        </div>
      </div>
    </div>

    <div class="form-actions">
      <BaseButton class="btn-outline light small" @click="goBack">
        Cancelar
      </BaseButton>
      <BaseButton class="small" @click="save"> Concluir </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rooms: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      name: '',
      type: '',
      capacity: '',
      size: '',
      equipments: '',
      price: '',
      maxHours: '',
      additionalInformation: '',
      videos: '',
      reservationType: 'auto',
      images: [],
      draggedover: false,
    }
  },
  computed: {
    typesOptions() {
      return [
        { value: 1, label: 'Estudio' },
        { value: 2, label: 'Youtube' },
        { value: 3, label: 'Casa' },
      ]
    },
  },
  watch: {
    $data(newValue) {
      this.$emit('input', newValue)
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
    },

    getImageString(file) {
      return URL.createObjectURL(file)
    },

    goBack() {
      this.$router.back()
    },

    save() {
      let imageString = ''
      if (this.images.length) imageString = URL.createObjectURL(this.images[0])

      const rooms = this.rooms.concat({ ...this.$data, imageString })
      this.$emit('input', rooms)
      this.clearData()
      this.goBack()
    },

    clearData() {
      this.name = ''
      this.type = ''
      this.capacity = ''
      this.size = ''
      this.equipments = ''
      this.price = ''
      this.maxHours = ''
      this.additionalInformation = ''
      this.videos = ''
      this.reservationType = 'auto'
      this.images = []
      this.draggedover = false
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

    .form-select {
      display: flex;
      flex-direction: column;
      width: 100%;

      label {
        text-align: left;
        margin-bottom: 0.5rem;
      }
    }

    .row-split {
      display: flex;
      gap: 1rem;
    }
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

.form-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-top: 2.5rem;
}
</style>
