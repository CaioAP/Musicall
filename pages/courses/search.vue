<template>
  <CoursesLayout 
    name="courses"
    title="Cursos"
    aria-label="Lista de cursos filtrados"
    :courses="courses"
  />
</template>

<script>
import coursesData from '@/plugins/courses.js'
import CoursesLayout from '@/components/courses/CoursesLayout.vue'

export default {
  name: 'SearchCourses',
  components: {
    CoursesLayout
  },
  asyncData() {
    const courses = coursesData.data

    return {
      courses
    }
  },
}
</script>