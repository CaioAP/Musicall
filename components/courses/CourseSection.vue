<template>
  <section class="course-section" :aria-label="`Cursos de ${type}`">
    <h2 class="course-section-title">
      {{ type }}
    </h2>

    <div class="course-section-cards">
      <CourseCard 
        v-for="(course, i) in courses" 
        :key="i"
        v-bind="course"
        :type="type"
        :type-id="id"
      />
    </div>
  </section>
</template>

<script>
import CourseCard from '@/components/courses/CourseCard.vue';

export default {
  components: {
    CourseCard,
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    type: {
      type: String,
      required: true
    },
    courses: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style lang="scss" scoped>
.course-section {
  max-width: 90%;
  margin: auto;

  .course-section-title {
    margin-block: 2.5rem;
    font-family: $font-foral-pro;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: $primary-clr;
  }

  .course-section-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }

  @media only screen and (max-width: 600px) {
    .course-section-cards {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>