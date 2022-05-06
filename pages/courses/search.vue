<template>
  <div class="container">
    <BaseHero image="/images/studios-hero-background.png"/>

    <SearchSection 
      class="search-section"
      :form-data="form"
      @form="(formData) => form = formData"
    />

    <section class="section-list" aria-label="Lista de cursos filtrados">
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
  name: 'SearchStudios',
  components: {
    CourseSection,
    SearchSection
  },
  asyncData({ route }) {
    const form = {
      course: Number(route.query.curso) || null,
      difficulty: Number(route.query.dificuldade) || null,
    }

    let courses

    if (form.course && form.difficulty) {
      courses = coursesData.data.filter(type => {
        type.courses = type.courses.filter(course => course.difficulty === form.difficulty)
        return type.courses.length && form.course === type.id
      })
    } else if (!form.course && form.difficulty) {
      courses = coursesData.data.filter(type => {
        type.courses = type.courses.filter(course => course.difficulty === form.difficulty)
        return type.courses.length
      })
    } else if (form.course && !form.difficulty) {
      courses = coursesData.data.filter(type => form.course === type.id)
    } else {
      courses = coursesData.data
    }

    return { form, courses }
  },
  data() {
    return {
      courses: []
    }
  },
  watchQuery: true,
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