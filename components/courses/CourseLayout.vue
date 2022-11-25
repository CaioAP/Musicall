<template>
  <div class="container">
    <section class="course" aria-labelledby="course-title">
      <div class="course-bg">
        <img :src="content.img" />
      </div>

      <div class="course-badges">
        <span class="badge">{{ course.type }}</span>
        <span class="badge">{{ difficultyName }}</span>
      </div>

      <h1 id="course-title" class="course-title">
        Aula de <span class="text-lower">{{ course.type }}</span> com
        <span class="musicalll">{{ course.name }}</span>
      </h1>

      <div class="course-infos">
        <div class="course-info">
          <img src="/svg/layout-white.svg" />
          {{ course.classes }} aulas
        </div>

        <div class="course-info">
          <img src="/svg/feather-white.svg" />
          {{ course.activities }} atividades
        </div>

        <div class="course-info">
          <img src="/svg/clock-white.svg" />
          {{ course.duration }}h de conteúdo
        </div>
      </div>
    </section>

    <section class="course-contents" aria-labelledby="course-content-title">
      <BaseInputRadioGroup
        v-model="contentSelected"
        :options="[...contentOptions]"
      />

      <div v-if="contentSelected === 'menu'" class="course-content">
        <h2 id="course-content-title" class="course-title">
          {{ contentTitle }}
        </h2>

        <ul class="course-content-columns">
          <li v-for="(menu, i) in content.menus" :key="i">
            {{ menu }}
          </li>
        </ul>
      </div>

      <div v-else-if="contentSelected === 'about'" class="course-content">
        <h2 id="course-content-title" class="course-title">
          {{ contentTitle }}
        </h2>

        <template v-for="(paragraph, i) in content.aboutArtist.split('\n')">
          <p :key="i" class="course-content-body">
            {{ paragraph.trim() }}
          </p>
        </template>
      </div>
    </section>

    <section class="course-classes" aria-labelledby="course-classes-title">
      <h2 id="course-classes-title" class="course-title">Aulas desse curso</h2>

      <div class="course-classes-content">
        <div class="course-classes-list">
          <div
            v-for="(courseClass, i) in content.classes"
            :key="i"
            class="course-classes-class"
          >
            <a :href="courseClass.link">
              <img src="/svg/video-white.svg" />
              <div class="course-class-text">
                <p>{{ courseClass.name }}</p>
                <p>{{ courseClass.duration }} minutos</p>
              </div>
            </a>
          </div>
        </div>

        <div class="course-classes-img">
          <img :src="course.img" />
        </div>
      </div>
    </section>

    <section class="course-checkout">
      <div class="course-checkout-box">
        <p class="course-checkout-price">
          de {{ $utils.formatMoney(content.price) }}
        </p>

        <p class="course-checkout-discount musicalll">
          por {{ $utils.formatMoney(content.discountPrice) }}
        </p>

        <p>a vista</p>

        <BaseButton> Comprar </BaseButton>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    course: {
      type: Object,
      required: true,
    },
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      contentSelected: "menu",
      difficultyName: "",
      difficultyOptions: [],
    }
  },
  fetch() {
    this.difficultyOptions = [
      { value: 1, label: "Iniciante" },
      { value: 2, label: "Intermediário" },
      { value: 3, label: "Avançado" },
      { value: 4, label: "Profissional" },
    ]
    this.difficultyName = this.difficultyOptions.find(
      (diff) => diff.value === this.course.difficulty,
    ).label
  },
  computed: {
    contentOptions() {
      return [
        { name: "menu", text: "Ementa", radioValue: "menu" },
        { name: "about", text: "Sobre o artista", radioValue: "about" },
      ]
    },

    contentTitle() {
      const titles = {
        menu: "O que você vai aprender nesse curso:",
        about: "Sobre o artista:",
      }

      return titles[this.contentSelected]
    },
  },
}
</script>

<style lang="scss" scoped>
.course,
.course-contents,
.course-classes,
.course-checkout {
  max-width: 90%;
  margin: auto;
  padding-block: 2.5rem;
  color: $text-light-clr-1;

  .course-title {
    margin-top: 2rem;
    font-family: $font-foral-pro;
    font-size: 2.5rem;
    font-weight: 700;
  }
}

.course {
  padding-block: 4.5rem;

  .course-bg {
    position: absolute;
    top: 9rem;
    left: 0;
    z-index: -1;

    & > img {
      mix-blend-mode: screen;
      width: 100%;
      height: 100%;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(
        60.29deg,
        #000000 42.67%,
        rgba(0, 0, 0, 0) 93.95%
      );
    }
  }

  .course-badges {
    display: flex;
    gap: 0.5rem;
  }

  .course-infos {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3rem;

    .course-info {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      font-size: 1.5rem;
      color: $text-light-clr-3;

      img {
        background: $gradient-bg;
        padding: 0.75rem;
        border-radius: 50%;
      }
    }
  }
}

.course-contents {
  .course-content-columns {
    column-count: 2;
    margin-top: 1.5rem;
    padding-left: 1.25rem;
    list-style: disc;
    font-size: 1.25rem;

    li::marker {
      color: $primary-clr;
    }
  }

  .course-content-body {
    max-width: 50%;
    margin-top: 1.5rem;
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 600px) {
    .course-content-columns {
      column-count: 1;

      li {
        padding-block: 0.5rem;
      }
    }
  }
}

.course-classes {
  .course-classes-content {
    display: grid;
    grid-template-columns: 2fr 1fr;

    .course-classes-list {
      margin-top: 2rem;
      column-count: 2;

      .course-classes-class {
        &:not(:first-of-type) {
          margin-top: 1.5rem;
        }

        a {
          display: flex;
          align-items: center;
          gap: 1.5rem;

          img {
            background: $gradient-bg;
            padding: 0.75rem;
            border-radius: 50%;
          }

          p:last-of-type {
            color: $primary-clr;
          }
        }
      }
    }

    .course-classes-img {
      display: flex;

      img {
        width: 100%;
        margin: auto;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .course-classes-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
}

.course-checkout {
  padding-block: 4rem;

  .course-checkout-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    max-width: fit-content;
    margin: auto;
    padding: 5rem 7rem;
    background: $bg-light-clr;
    border: 1px solid $primary-clr;
    border-radius: 1rem;

    p {
      font-family: $font-foral-pro;
      font-size: 2.5rem;
      line-height: 1;
    }

    .course-checkout-price {
      text-decoration: line-through;
    }
  }
}
</style>
