<template>
  <div class="container">
    <BaseHero image="/images/studios-hero-background.png"/>

    <SearchSection 
      class="search-section"
      :form-data="form"
      @form="(formData) => form = formData"
    />

    <section class="section-list" aria-label="Lista de todos os cursos">
      <CourseSection 
        v-for="(course, i) in courses" 
        :key="i"
        v-bind="course"
      />
    </section>
  </div>
</template>

<script>
import coursesData from '@/plugins/courses.js'
import CourseSection from '@/components/courses/CourseSection.vue'
import SearchSection from '@/components/courses/SearchSection.vue'

export default {
  name: 'SearchPage',
  components: {
    SearchSection,
    CourseSection,
  },
  asyncData() {
    const courses = coursesData.data

    return {
      courses
    }
  },
  data() {
    return {
      form: {
        course: null,
        difficulty: null
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