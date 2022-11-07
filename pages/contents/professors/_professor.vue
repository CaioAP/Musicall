<template>
  <ContentSection title="Estúdios">
    <template #subtitle>
      <h2 class="content-subtitle">
        <span class="faded">Professores ></span>
        <span>Novo professor</span>
      </h2>
    </template>

    <div class="content-forms">
      <div class="forms-header">
        <BaseButton class="btn-plain light" @click="goBack">
          <NuxtImg src="/svg/arrow-point-left.svg" />
        </BaseButton>

        <ul>
          <li :class="{ active: isActive(1) }">Dados Básicos</li>
          <li :class="{ active: isActive(2) }">Cursos</li>
        </ul>
      </div>

      <form>
        <!-- <StudioFormBasicInformation
          v-show="currentForm === 1"
          :value="form.basicInformation"
          @change="(data) => (form.basicInformation = data)"
        />
        <StudioFormAddress
          v-show="currentForm === 2"
          :value="form.address"
          @change="(data) => (form.address = data)"
        />
        <StudioFormComplements
          v-show="currentForm === 3"
          :value="form.complements"
          @change="(data) => (form.complements = data)"
        />
        <StudioFormCancellationPolicy
          v-show="currentForm === 4"
          :value="form.cancellation"
          @change="(data) => (form.cancellation = data)"
        />
        <StudioFormRooms
          v-show="currentForm === 5"
          :studio-id="professorId"
          @change="(data) => (form.rooms = data)"
        />
        <StudioFormRoomsNew
          v-show="currentForm === 6"
          :studio-id="professorId"
        /> -->

        <div v-if="currentForm < 2" class="form-actions">
          <BaseButton class="btn-outline light small" @click="cancel">
            Cancelar
          </BaseButton>
          <BaseButton
            v-if="currentForm === 1"
            class="small"
            :loading="loading"
            :disabled="loading"
            @click="save"
          >
            Salvar professor
          </BaseButton>
          <BaseButton
            v-if="currentForm === 1 || professorId"
            class="small"
            :loading="loading"
            :disabled="loading"
            @click="goNext"
          >
            Próximo
          </BaseButton>
          <BaseButton v-if="currentForm === 2" class="small" @click="cancel">
            Concluir
          </BaseButton>
        </div>
      </form>
    </div>
  </ContentSection>
</template>
newValue
<script>
import Role from "~/assets/data/role.js"
import ContentSection from "@/components/contents/ContentSection.vue"

export default {
  name: "NewProfessorContent",
  meta: {
    role: [Role.ADMIN],
  },
  components: {
    ContentSection,
  },
  layout: "content",
  asyncData({ route, params }) {
    let professorId = null
    const currentForm = Number(route.query.f) || 1

    if (params.professor && params.professor !== "new") {
      professorId = params.professor
    }

    return {
      currentForm,
      professorId,
    }
  },
  data() {
    return {
      form: {},
      loading: false,
    }
  },
  async fetch() {
    if (this.professorId) await this.getProfessor(this.professorId)
  },
  watch: {
    "$route.query.f"(currentForm) {
      this.currentForm = Number(currentForm) || 1
    },
  },
  methods: {
    isActive(f) {
      return f <= this.currentForm
    },

    cancel() {
      this.$router.push({ path: "/contents/professors" })
    },

    goBack() {
      this.$router.back()
    },

    goNext() {
      this.$router.push({
        query: {
          f: this.currentForm + 1,
        },
      })
    },

    async getProfessor(id) {
      this.loading = true
      try {
        const professor = await this.$apiStudio.get(id)
        this.form = this.destructData(professor)
      } catch (error) {
        this.$store.commit("alert/SET_ALERT", {
          type: "error",
          message: error.message,
        })
      } finally {
        this.loading = false
      }
    },

    destructData(professor) {
      const form = {}

      return form
    },

    async save() {
      this.loading = true

      try {
        const formattedData = this.formatData(this.form)

        if (this.professorId) {
          await this.update(formattedData)
        } else {
          await this.create(formattedData)
        }

        this.$store.commit("alert/SET_ALERT", {
          type: "success",
          message: "Professor salvo com sucesso",
        })
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
      return await this.$apiStudio.create(data)
    },

    async update(data) {
      return await this.$apiStudio.update(this.professorId, data)
    },

    formatData(data) {
      return {
        nome: data.basicInformation.name,
        sobre: data.basicInformation.about,
        regras: data.basicInformation.rules,
        soundcloud: data.complements.soundcloud,
        spotify: data.complements.spotify,
      }
    },

    formatCancellation(data) {
      const dataObject = {}

      Object.entries(data).forEach(([key, value]) => {
        if (key === "0") dataObject.menor24h = value
        else dataObject[`maior${key}h`] = value
      })

      return dataObject
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

.content-forms {
  width: 100%;
  height: 100%;
  background-color: $text-light-clr-1;
  border: 1px solid $primary-clr;
  border-radius: 10px;
  padding: 2rem;

  .forms-header {
    display: flex;
    align-items: center;
    column-gap: 2.5rem;

    ul {
      display: flex;
      align-items: center;

      li {
        padding-inline: 0.75rem;
        padding-bottom: 1.5rem;
        border-bottom: 2px solid $text-light-clr-3;
        font-family: $font-foral-pro;
        font-size: 1.5rem;
        font-weight: 700;
        color: $text-light-clr-3;

        &.active {
          color: $text-dark-clr-1;
          border-bottom: 2px solid $primary-clr;
        }
      }
    }
  }

  form {
    .form-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      margin-top: 2.5rem;
    }
  }
}
</style>
