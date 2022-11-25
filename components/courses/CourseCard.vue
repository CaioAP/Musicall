<template>
  <div class="course-card">
    <h3 class="course-title">
      Aula de
      <span class="course-title-type">
        {{ type }}
      </span>
      com
      <span class="musicalll">
        {{ instructor }}
      </span>
    </h3>

    <img class="course-image" :src="img" />

    <p class="course-description">
      {{ description }}
    </p>

    <div class="course-info duration">
      <img src="/svg/clock.svg" />
      {{ duration }}h de conteúdo
    </div>

    <div class="course-info classes">
      <img src="/svg/layout.svg" />
      {{ classes }} aulas
    </div>

    <div class="course-columns-2">
      <div class="course-info classes">
        <img src="/svg/feather.svg" />
        {{ activities }} atividades
      </div>

      <div class="course-info price">
        <img src="/svg/dollar-sign.svg" />
        {{ $utils.formatMoney(price) }}
      </div>
    </div>

    <NuxtLink class="btn-link course-action" :to="linkCourseDetails">
      Detalhes
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    typeId: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    duration: {
      type: Number,
      default: 0,
    },
    classes: {
      type: Number,
      default: 0,
    },
    activities: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
  },
  computed: {
    linkCourseDetails() {
      return `/${this.name}/${this.id}`
    },
  },
}
</script>

<style lang="scss" scoped>
.course-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem;
  background: $gradient-course-card;
  color: $text-light-clr-1;

  .course-title {
    font-family: $font-foral-pro;
    font-size: 2.5rem;
    line-height: 1.1;

    .course-title-type {
      text-transform: lowercase;
    }
  }

  .course-image {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .course-description {
    margin-bottom: 1rem;
    color: $text-light-clr-3;
  }

  .course-info {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: $text-light-clr-3;
  }

  .course-columns-2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .course-action {
    max-width: min-content;
    margin: auto;
  }
}
</style>
