<template>
  <div class="container">
    <BaseHero image="/images/studios-hero-background.png"/>

    <div class="studio">
      <h2 class="studio-name">
        {{ name }}
      </h2>

      <div class="studio-subtitle">
        <div class="studio-address">
          <NuxtImg src="/svg/map-pin.svg" />
          {{ address }} - {{ city }}
        </div>

        <BaseButton class="btn-plain">
          <NuxtImg src="/svg/share.svg" />
          Compartilhar
        </BaseButton>
      </div>

      <section class="studio-images" aria-label="Imagens do estúdio">
        <NuxtImg
          v-for="(image, i) in imgList"
          :key="i"
          :src="image"
          class="studio-image"
        />
      </section>

      <section class="studio-info" aria-label="Informações do estúdio">
        <header>
          <h2 class="studio-info-name">
            {{ name }}
            {{ room 
              ? ` - Sala ${roomSelected.label}`
              : ` - Unidade ${address}` 
            }}
          </h2>

          <div v-if="room" class="studio-info-legend">
            <div class="studio-info-legend-size">
              <NuxtImg src="/svg/room-size.svg" />
              {{ roomContent.size }} m²
            </div>
            <div class="studio-info-legend-capacity">
              <NuxtImg src="/svg/user.svg" />
              {{ roomContent.capacity }} pessoas
            </div>
          </div>

          <div class="studio-info-actions">
            <BaseSelect 
              v-model="room"
              class="outline"
              :class="!room ? 'w-auto' : ''"
              placeholder="Selecione sua sala"
              :options="rooms"
              :reduce="room => room.value"
            />

            <a :href="mapsLink" class="btn-outline">
              Localização
              <NuxtImg src="/svg/target.svg" />
            </a>
          </div>
        </header>

        <div class="studio-info-content">
          <div class="studio-content">
            <div class="studio-content-filter">
              <BaseInputRadioGroup 
                v-model="contentSelected"
                :options="[...contentOptions]"
              />
            </div>

            <div class="studio-content-title">
              {{ contentTitle }}
            </div>

            <div v-if="contentSelected === 'about'" class="studio-content-body">
              <template v-for="(paragraph, i) in studioContent.about.split('\n')" >
                <p :key="i" class="studio-content-boyd-about">
                  {{ paragraph.trim() }}
                </p>
                <br :key="`br-${i}`"/>
              </template>
            </div>

            <div v-else-if="contentSelected === 'rules'" class="studio-content-body">
              <ul class="studio-content-body-rules">
                <li v-for="(rule, i) in studioContent.rules" :key="i">
                  {{ rule }}
                </li>
              </ul>
            </div>

            <div v-else-if="contentSelected === 'recording'" class="studio-content-body"></div>

            <div v-else-if="contentSelected === 'comments'" class="studio-content-body">
              <div class="studio-content-body-comments">
                <div
                  v-for="(comment, i) in studioContent.comments"
                  :key="i"
                  class="studio-content-body-comment"
                >
                  <h3>{{ comment.name }}</h3>
                  <p>{{ comment.comment }}</p>
                </div>
              </div>
            </div>

            <div v-else-if="contentSelected === 'equipments' && room" class="studio-content-body">
              <ul class="studio-content-body-equipments">
                <li v-for="(equip, i) in roomContent.equipments" :key="i">
                  {{ equip }}
                </li>
              </ul>
            </div>

            <div v-else-if="contentSelected === 'info' && room" class="studio-content-body">
              <template v-for="(paragraph, i) in roomContent.info.split('\n')" >
                <p :key="i" class="studio-content-boyd-info">
                  {{ paragraph.trim() }}
                </p>
                <br :key="`br-${i}`"/>
              </template>
            </div>
          </div>

          <div class="studio-checkout">
            <div class="studio-checkout-info">
              Hora de início: 
              <span class="musicalll">
                {{ String(timeInitSelected.time).padStart(2, '0') }} horas
              </span>
            </div>

            <div class="studio-checkout-info">
              Hora de término: 
              <span class="musicalll">
                {{ String(timeFinalSelected.time).padStart(2, '0') }} horas
              </span>
            </div>

            <div class="studio-checkout-info">
              Data: 
              <span class="musicalll">
                {{ $utils.formatDate(dateSelected) }}
              </span>
            </div>

            <BaseButton>
              Reservar
            </BaseButton>

            <BaseButton class="btn-outline" @click="changeStudioFilter">
              Alterar agenda
            </BaseButton>

            <div class="studio-checkout-total">
              Total de
              <span class="musicalll">
                {{ $utils.formatMoney(price) }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import studiosData from '@/plugins/studios.js'
import studiosContent from '@/plugins/studios-content.js'

export default {
  asyncData({ env, params, route }) {
    const baseUrl = env.baseUrl
    const studioId = params.studio

    const studio = studiosData.studios.find(std => std.id === studioId)
    const studioContent = studiosContent[studioId]

    const timeOptions = [
      { value: 1, label: '06 horas', time: 6 },
      { value: 2, label: '07 horas', time: 7 },
      { value: 3, label: '08 horas', time: 8 },
      { value: 4, label: '09 horas', time: 9 },
      { value: 5, label: '10 horas', time: 10 },
      { value: 6, label: '11 horas', time: 11 },
      { value: 7, label: '12 horas', time: 12 },
      { value: 8, label: '13 horas', time: 13 },
      { value: 9, label: '14 horas', time: 14 },
      { value: 10, label: '15 horas', time: 15 },
      { value: 11, label: '16 horas', time: 16 },
      { value: 12, label: '17 horas', time: 17 },
      { value: 13, label: '18 horas', time: 18 },
    ]

    const timeInitSelected = timeOptions.find(
      time => time.value === Number(route.query.horarioInicial)
    )

    const timeFinalSelected = timeOptions.find(
      time => time.value === Number(route.query.horarioFinal)
    )

    const dateSelected = new Date(`${route.query.data}T00:00:00`)

    return { 
      baseUrl,
      studioId,
      studioContent,
      timeInitSelected,
      timeFinalSelected,
      dateSelected,
      ...studio 
    }
  },
  data() {
    return {
      room: null,
      contentSelected: 'about',
    }
  },
  computed: {
    linkShare() {
      return `${this.baseUrl}${this.$route.path}` 
    },

    contentOptions() {
      if (this.room) return this.roomContentOptions

      return [
        { name: 'about', text: 'Sobre', radioValue: 'about' },
        { name: 'rules', text: 'Regras', radioValue: 'rules' },
        { name: 'recording', text: 'Gravações', radioValue: 'recording' },
        { name: 'comments', text: 'Opiniões', radioValue: 'comments' },
      ]
    },

    contentTitle() {
      const titles = {
        about: 'Sobre o estúdio',
        rules: 'Regras do estúdio',
        recording: 'Gravações',
        comments: 'Opiniões',
      }

      return titles[this.contentSelected]
    },

    roomContentOptions() {
      return [
        { name: 'equipments', text: 'Equipamentos', radioValue: 'equipments'  },
        { name: 'info', text: 'Informações Adicionais', radioValue: 'info'  },
      ]
    },

    roomContent() {
      const roomData = this.studioContent.rooms[this.room]

      if (this.room) return roomData
      return null
    },

    roomSelected() {
      const room = this.rooms.find(room => room.value === this.room)

      if (room) return room
      return null
    }
  },
  watch: {
    room(newValue) {
      if (newValue) this.contentSelected = 'equipments'
      else this.contentSelected = 'about'
    }
  },
  methods: {
    changeStudioFilter() {
      this.$router.push({
        path: '/studios/search',
        query: this.$route.query
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  .studio {
    max-width: 90%;
    margin: auto;
    margin-top: 4rem;
    margin-bottom: 8rem;
    color: $text-light-clr-1;

    .studio-name {
      font-family: $font-foral-pro;
      font-weight: 700;
      font-size: 2.5rem;
    }

    .studio-subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 1.25rem;

      & > * {
        display: flex;
        gap: 1rem;
      }
    }

    .studio-images {
      display: grid;
      gap: 2rem;
      grid-template-areas: 
        "primary primary second third"
        "primary primary fourth fifth";
      margin-top: 2rem;

      .studio-image {
        width: 100%;
        height: 100%;

        &:first-of-type {
          grid-area: primary;
        }
        &:nth-of-type(2) {
          grid-area: second;
        }
        &:nth-of-type(3) {
          grid-area: third;
        }
        &:nth-of-type(4) {
          grid-area: fourth;
        }
        &:last-of-type {
          grid-area: fifth;
        }
      }
    }

    .studio-info {
      margin-top: 0.25rem;

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
        padding-block: 2.5rem;
        border-bottom: $border-divider;

        .studio-info-name {
          font-size: 2.25rem;
        }

        .studio-info-legend {
          display: flex;
          gap: 1rem;

          & > div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            min-width: max-content;
          }
        }

        .studio-info-actions {
          display: flex;
          gap: 1.5rem;
        }
      }

      .studio-info-content {
        display: grid;
        grid-template-columns: 4fr 3fr;
        gap: 2rem;

        .studio-content-title {
          margin-block: 1.5rem;
          font-family: $font-foral-pro;
          font-size: 2rem;
        }

        .studio-content-body {
          max-height: 450px;
          overflow: auto;
          font-size: 1.25rem;
          color: $text-light-clr-3;

          .studio-content-body-rules,
          .studio-content-body-equipments {
            padding-left: 1.25rem;
            list-style: disc;

            li::marker {
              color: $primary-clr;
            }
          }

          .studio-content-body-equipments {
            column-count: 2;
          }

          .studio-content-body-comments {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .studio-content-body-comment {
              padding: 1.5rem;
              background: $bg-light-clr;
              // border: thin solid $primary-clr;
              border-radius: 0.5rem;
  
              h3 {
                margin-bottom: 0.5rem;
                padding-bottom: 0.5rem;
                border-bottom: $border-divider;
                font-weight: 700;
                color: $text-light-clr-1;
              }
            }
          }
        }

        .studio-checkout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          height: min-content;
          margin-block: auto;
          padding: 3.25rem;
          font-size: 1.5rem;
          background: $bg-light-clr;
          border: 1px solid $primary-clr;
          border-radius: 1.5rem;

          button {
            min-width: 300px;
          }

          .studio-checkout-total {
            width: 100%;
            padding-top: 1.25rem;
            border-top: $border-divider;
            font-size: 2rem;
            text-align: center;
          }
        }
      }
    }

    @media only screen and (max-width: 600px) {
      .studio-subtitle {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        margin-top: 1rem;
      }

      .studio-images {
        grid-template-areas: 
          "primary primary"
          "second third"
          "fourth fifth";
      }

      .studio-info {
        header {
          flex-direction: column;
          align-items: flex-start;
        }

        .studio-info-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          .studio-content-body {
            .studio-content-body-equipments {
              padding-left: 1.5rem;
              column-count: 1;

              li {
                padding-block: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>