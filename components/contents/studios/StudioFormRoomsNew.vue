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
            :options="roomTypes"
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
            placeholder="0"
            :min="0"
            :light="true"
          />
          <BaseInput
            id="input-size"
            v-model="size"
            type="number"
            label="Metros Quadrados"
            placeholder="0"
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
            placeholder="R$ 0,00"
            :min="0"
            :light="true"
          />
          <BaseInput
            id="input-max-hours"
            v-model="maxHours"
            type="number"
            label="Máximo de Horas"
            placeholder="0"
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
          <p>Tipo de reserva</p>
          <div>
            <input
              v-show="false"
              id="input-reservation-auto"
              v-model="reservationType"
              type="radio"
              name="reservationType"
              value="Automatica"
            />
            <div
              class="input-radio-marker"
              :class="{ checked: reservationType === 'Automatica' }"
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
              value="Manual"
            />
            <div
              class="input-radio-marker"
              :class="{ checked: reservationType === 'Manual' }"
            ></div>
            <label for="input-reservation-manual">Manual</label>
          </div>
        </div>
      </div>
    </div>

    <div class="form-actions">
      <BaseButton class="btn-outline light small" @click="clearData">
        Cancelar
      </BaseButton>
      <BaseButton class="small" :loading="loading" @click="save">
        Salvar sala
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  props: {
    studioId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      name: "",
      type: "",
      capacity: "",
      size: "",
      equipments: "",
      price: "",
      maxHours: "",
      additionalInformation: "",
      videos: "",
      images: [],
      draggedover: false,
      roomTypes: [],
      reservationType: "Automatica",
      reservationTypes: [],
      loading: false,
    }
  },
  async fetch() {
    await this.getRoomTypes()
    await this.getReservationTypes()
  },
  computed: {
    ...mapGetters({
      roomId: "studio/room",
    }),
  },
  watch: {
    $data(newValue) {
      this.$emit("input", newValue)
    },
    roomId(newValue) {
      if (newValue) this.getRoom(newValue)
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

    async getRoomTypes() {
      this.roomTypes = await this.$apiRoom.getTypes()
    },

    async getReservationTypes() {
      this.reservationTypes = await this.$apiReservation.getTypes()
    },

    async getRoom(id) {
      try {
        const room = await this.$apiRoom.get(id)
        this.destructData(room)
      } catch (error) {
        this.$store.commit("alert/SET_ALERT", {
          type: "error",
          message: error.message,
        })
      }
    },

    destructData(room) {
      this.name = room.nome
      this.type = room.tipo
      this.capacity = room.capacidade
      this.size = room.tamanho
      this.equipments = room.equipamentos
      this.price = room.preco
      this.maxHours = room.horas
      this.additionalInformation = room.informacoes
      this.videos = room.video
      this.reservationType = room.reserva
    },

    async save() {
      // let imageString = ""
      // if (this.images.length) imageString = URL.createObjectURL(this.images[0])

      const data = { ...this.$data }

      try {
        this.loading = true
        const formattedData = this.formatData(data)

        if (this.roomId) await this.update(formattedData)
        else await this.create(formattedData)

        this.$store.commit("alert/SET_ALERT", {
          type: "success",
          message: "Sala salvada com sucesso",
        })

        this.clearData()
      } catch (error) {
        this.$store.commit("alert/SET_ALERT", {
          type: "error",
          message: error.message,
        })
      } finally {
        this.loading = false
      }
    },

    async create(data) {
      await this.$apiRoom.create(data)
    },

    async update(data) {
      await this.$apiRoom.update(this.roomId, data)
    },

    formatData(data) {
      return {
        estudioId: this.studioId,
        nome: data.name,
        tipo: data.type,
        equipamentos: data.equipments,
        preco: Number(data.price) || null,
        horas: Number(data.maxHours) || null,
        informacoes: data.additionalInformation,
        video: data.videos,
        capacidade: Number(data.capacity) || null,
        tamanho: Number(data.size) || null,
        reserva: data.reservationType,
      }
    },

    clearData() {
      this.name = null
      this.type = null
      this.capacity = null
      this.size = null
      this.equipments = null
      this.price = null
      this.maxHours = null
      this.additionalInformation = null
      this.videos = null
      this.reservationType = "Automatica"
      this.images = []
      this.draggedover = false

      this.$store.dispatch("studio/setRoom", null)

      this.goBack()
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
