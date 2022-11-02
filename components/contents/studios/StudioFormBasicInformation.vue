<template>
  <div class="form-grid">
    <div class="form-inputs">
      <BaseInput
        id="input-name"
        v-model="name"
        label="Nome do estúdio"
        placeholder="Nome do estúdio"
        :light="true"
        @change="emitData"
      />
      <!-- <BaseInput
        id="input-location"
        v-model="location"
        label="Localização"
        placeholder="Onde fica seu estúdio?"
        :light="true"
      /> -->
      <BaseTextarea
        id="input-about"
        v-model="about"
        label="Sobre o estúdio"
        placeholder="Fale um pouco sobre seu estúdio"
        :light="true"
        :rows="10"
        @change="emitData"
      />
      <BaseTextarea
        id="input-rules"
        v-model="rules"
        label="Regras"
        placeholder="Quais são as regras do estúdio?"
        :light="true"
        :rows="10"
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
        about: null,
        rules: null,
        images: [],
      }),
    },
  },
  data() {
    return {
      name: this.value.name,
      about: this.value.about,
      rules: this.value.rules,
      images: [],
      draggedover: false,
    }
  },
  watch: {
    value(newValue) {
      this.name = newValue.name
      this.about = newValue.about
      this.rules = newValue.rules
      this.images = newValue.images
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
        name: this.name || null,
        about: this.about || null,
        rules: this.rules || null,
        images: this.images || null,
      })
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
  }
}
</style>
