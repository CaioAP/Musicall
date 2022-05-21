<template>
  <CourseLayout
    :id="courseId"
    :course="course"
    :content="content"
  />
</template>

<script>
import courseData from '@/plugins/course.js'
import coursesContent from '@/plugins/courses-content.js'
import CourseLayout from '@/components/courses/CourseLayout.vue';

export default {
  components: {
    CourseLayout,
  },
  asyncData({ env, params }) {
    const baseUrl = env.baseUrl
    const courseId = params.masterclass

    const course = courseData[courseId]
    const content = coursesContent[courseId]

    return { 
      baseUrl,
      courseId,
      course,
      content,
    }
  },
}
</script>