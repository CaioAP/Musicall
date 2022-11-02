<template>
  <ContentSection title="Estúdios">
    <template #subtitle>
      <h2 class="content-subtitle">
        <span class="faded">Estúdios ></span>
        <span>Novo estúdio</span>
      </h2>
    </template>

    <div class="content-forms">
      <div class="forms-header">
        <BaseButton class="btn-plain light" @click="goBack">
          <NuxtImg src="/svg/arrow-point-left.svg" />
        </BaseButton>

        <ul>
          <li :class="{ active: isActive(1) }">Informações Básicas</li>
          <li :class="{ active: isActive(2) }">Endereço</li>
          <li :class="{ active: isActive(3) }">Complementos</li>
          <li :class="{ active: isActive(4) }">Política de Cancelamento</li>
          <li :class="{ active: isActive(5) }">Salas</li>
        </ul>
      </div>

      <form>
        <StudioFormBasicInformation
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
          :studio-id="studioId"
          @change="(data) => (form.rooms = data)"
        />
        <StudioFormRoomsNew v-show="currentForm === 6" :studio-id="studioId" />

        <div v-if="currentForm < 5" class="form-actions">
          <BaseButton class="btn-outline light small" @click="cancel">
            Cancelar
          </BaseButton>
          <BaseButton
            v-if="currentForm === 4 || (currentForm === 4 && studioEdited)"
            class="small"
            :loading="loading"
            :disabled="loading"
            @click="save"
          >
            Salvar estúdio
          </BaseButton>
          <BaseButton
            v-if="currentForm < 4 || studioId"
            class="small"
            :loading="loading"
            :disabled="loading"
            @click="goNext"
          >
            Próximo
          </BaseButton>
          <BaseButton v-if="currentForm === 5" class="small" @click="cancel">
            Concluir
          </BaseButton>
        </div>
      </form>
    </div>
  </ContentSection>
</template>
newValue
<script>
import { mapGetters } from "vuex"
import Role from "~/assets/data/role.js"
import ContentSection from "@/components/contents/ContentSection.vue"
import StudioFormBasicInformation from "@/components/contents/studios/StudioFormBasicInformation.vue"
import StudioFormAddress from "@/components/contents/studios/StudioFormAddress.vue"
import StudioFormComplements from "@/components/contents/studios/StudioFormComplements.vue"
import StudioFormCancellationPolicy from "@/components/contents/studios/StudioFormCancellationPolicy.vue"
import StudioFormRooms from "@/components/contents/studios/StudioFormRooms.vue"
import StudioFormRoomsNew from "@/components/contents/studios/StudioFormRoomsNew.vue"

export default {
  name: "NewStudioContent",
  meta: {
    role: [Role.USER],
  },
  components: {
    ContentSection,
    StudioFormBasicInformation,
    StudioFormAddress,
    StudioFormComplements,
    StudioFormCancellationPolicy,
    StudioFormRooms,
    StudioFormRoomsNew,
  },
  layout: "content",
  asyncData({ route, params, store }) {
    const currentForm = Number(route.query.f) || 1

    if (params.studio && params.studio !== "new") {
      store.dispatch("studio/setStudio", params.studio)
    } else {
      store.dispatch("studio/setStudio", null)
    }

    return {
      currentForm,
    }
  },
  data() {
    return {
      form: {
        basicInformation: {
          name: null,
          about: null,
          rules: null,
        },
        address: {
          cep: null,
          estado: null,
          cidade: null,
          bairro: null,
          logradouro: null,
          numero: null,
          complemento: null,
        },
        complements: {
          soundcloud: null,
          spotify: null,
        },
        cancellation: {
          reservations: {
            0: 0,
            24: 0,
            48: 0,
            72: 0,
            96: 0,
          },
          reschedules: {
            0: 0,
            24: 0,
            48: 0,
            72: 0,
            96: 0,
          },
        },
      },
      loading: false,
      studioEdited: false,
    }
  },
  async fetch() {
    const studioId = await this.$store.dispatch("studio/getStudio")
    if (studioId) await this.getStudio(this.studioId)
  },
  computed: {
    ...mapGetters({
      studioId: "studio/id",
    }),
  },
  watch: {
    "$route.query.f"(currentForm) {
      this.currentForm = Number(currentForm) || 1
    },
    form() {
      this.studioEdited = true
    },
  },
  methods: {
    isActive(f) {
      return f <= this.currentForm
    },

    cancel() {
      this.$router.push({ path: "/contents/studios" })
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

    async getStudio(id) {
      this.loading = true
      try {
        const studio = await this.$apiStudio.get(id)
        this.form = this.destructData(studio)
      } catch (error) {
        this.$store.commit("alert/SET_ALERT", {
          type: "error",
          message: error.message,
        })
      } finally {
        this.loading = false
      }
    },

    destructData(studio) {
      const form = {}

      form.basicInformation = {
        name: studio.nome,
        about: studio.sobre,
        rules: studio.regras,
      }

      form.address = {
        cep: studio.Endereco.cep,
        estado: studio.Endereco.estado,
        cidade: studio.Endereco.cidade,
        bairro: studio.Endereco.bairro,
        logradouro: studio.Endereco.logradouro,
        numero: studio.Endereco.numero,
        complemento: studio.Endereco.complemento,
      }

      form.complements = {
        soundcloud: studio.soundcloud,
        spotify: studio.spotify,
      }

      form.cancellation = {
        reservations: {
          0: studio.EstudioCancelamento.menor24h,
          24: studio.EstudioCancelamento.maior24h,
          48: studio.EstudioCancelamento.maior48h,
          72: studio.EstudioCancelamento.maior72h,
          96: studio.EstudioCancelamento.maior96h,
        },
        reschedules: {
          0: studio.EstudioRemarcacao.menor24h,
          24: studio.EstudioRemarcacao.maior24h,
          48: studio.EstudioRemarcacao.maior48h,
          72: studio.EstudioRemarcacao.maior72h,
          96: studio.EstudioRemarcacao.maior96h,
        },
      }

      return form
    },

    async save() {
      this.loading = true

      try {
        const formattedData = this.formatData(this.form)
        let studio = {}

        if (this.studioId) {
          studio = await this.update(formattedData)
        } else {
          studio = await this.create(formattedData)
          this.$store.dispatch("studio/setStudio", studio.id)
        }

        this.$store.commit("alert/SET_ALERT", {
          type: "success",
          message: "Estúdio salvo com sucesso",
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
      return await this.$apiStudio.update(this.studioId, data)
    },

    formatData(data) {
      const reservations = this.formatCancellation(
        data.cancellation.reservations,
      )
      const reschedules = this.formatCancellation(data.cancellation.reschedules)

      return {
        nome: data.basicInformation.name,
        sobre: data.basicInformation.about,
        regras: data.basicInformation.rules,
        soundcloud: data.complements.soundcloud,
        spotify: data.complements.spotify,
        Endereco: {
          ...data.address,
          numero: Number(data.address.numero) || null,
          complemento: data.address.complemento || null,
        },
        Cancelamento: { ...reservations },
        Remarcacao: { ...reschedules },
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
