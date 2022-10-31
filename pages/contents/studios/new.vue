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
          <li :class="{ active: isActive(2) }">Complementos</li>
          <li :class="{ active: isActive(3) }">Política de Cancelamento</li>
          <li :class="{ active: isActive(4) }">Salas</li>
          <li :class="{ active: isActive(6) }">Dados Bancários</li>
        </ul>
      </div>

      <form>
        <StudioFormBasicInformation
          v-show="currentForm === 1"
          v-model="form.basicInformartion"
        />
        <StudioFormComplements
          v-show="currentForm === 2"
          v-model="form.complements"
        />
        <StudioFormCancellationPolicy
          v-show="currentForm === 3"
          v-model="form.cancellationPolicy"
        />
        <StudioFormRooms v-show="currentForm === 4" :rooms="form.rooms" />
        <StudioFormRoomsNew
          v-show="currentForm === 5"
          ref="newRoom"
          v-model="form.rooms"
          :rooms="form.rooms"
        />

        <div v-if="currentForm !== 5" class="form-actions">
          <BaseButton class="btn-outline light small" @click="cancel">
            Cancelar
          </BaseButton>
          <BaseButton v-if="currentForm < 4" class="small" @click="goNext">
            Próximo
          </BaseButton>
          <BaseButton v-else-if="currentForm === 4" class="small" @click="save">
            Concluir
          </BaseButton>
        </div>
      </form>
    </div>
  </ContentSection>
</template>

<script>
import Role from '~/assets/data/role.js'
import ContentSection from '@/components/contents/ContentSection.vue'
import StudioFormBasicInformation from '@/components/contents/studios/StudioFormBasicInformation.vue'
import StudioFormComplements from '@/components/contents/studios/StudioFormComplements.vue'
import StudioFormCancellationPolicy from '@/components/contents/studios/StudioFormCancellationPolicy.vue'
import StudioFormRooms from '@/components/contents/studios/StudioFormRooms.vue'
import StudioFormRoomsNew from '@/components/contents/studios/StudioFormRoomsNew.vue'

export default {
  name: 'NewStudioContent',
  meta: {
    role: [Role.USER],
  },
  components: {
    ContentSection,
    StudioFormBasicInformation,
    StudioFormComplements,
    StudioFormCancellationPolicy,
    StudioFormRooms,
    StudioFormRoomsNew,
  },
  layout: 'content',
  asyncData({ route }) {
    const currentForm = Number(route.query.f) || 1

    return {
      currentForm,
    }
  },
  data() {
    return {
      form: {
        basicInformartion: null,
        complements: null,
        cancellationPolicy: null,
        rooms: [],
        bankAccount: null,
      },
    }
  },
  watch: {
    '$route.query.f'(currentForm) {
      this.currentForm = Number(currentForm)
    },
  },
  methods: {
    isActive(f) {
      return f <= this.currentForm
    },

    getNewRoom() {
      this.$refs.newRoom.save()
    },

    cancel() {
      this.$router.push({ path: '/contents/studios' })
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

    save() {
      this.$router.push({ path: '/contents/studios' })
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
