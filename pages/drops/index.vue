<template>
  <CoursesLayout 
    name="drops"
    title="Drops"
    aria-label="Lista de todos os drops"
    :courses="courses"
  />
</template>

<script>
import coursesData from '@/plugins/courses.js'
import CoursesLayout from '@/components/courses/CoursesLayout.vue'

export default {
  name: 'CoursesPage',
  components: {
    CoursesLayout,
  },
  asyncData() {
    const courses = coursesData.data

    return {
      courses
    }
  },
}
</script>