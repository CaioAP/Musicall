<template>
  <div class="container">
    <BaseHero image="/images/studios-hero-background.png"/>

    <SearchSection 
      class="search-section"
      :name="name"
      :title="title"
      :form-data="form"
      @form="(formData) => form = formData"
    />

    <section class="section-list" :aria-label="ariaLabel">
      <CourseSection 
        v-for="(course, i) in courses" 
        :key="i"
        v-bind="course"
        :name="name"
      />
    </section>
  </div>
</template>

<script>
import CourseSection from '@/components/courses/CourseSection.vue'
import SearchSection from '@/components/courses/SearchSection.vue'

export default {
  components: {
    SearchSection,
    CourseSection,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Cursos',
    },
    ariaLabel: {
      type: String,
      default: 'Lista de todos os cursos'
    },
    courses: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      form: {
        course: null,
        difficulty: null
      }
    }
  },
  watch: {
    '$route.query'(query) {
      this.updateForm(query)
    }
  },
  mounted () {
    this.updateForm(this.$route.query)
  },
  methods: {
    updateForm(query) {
      this.form = {
        course: Number(query.curso) || null,
        difficulty: Number(query.dificuldade) || null,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.search-section {
  max-width: 90%;
  margin: auto;
  padding-bottom: 4rem;
  border-bottom: $border-divider;
}

.section-list {
  margin-bottom: 8rem;
}
</style>