<template>
  <div class="container">
    <BaseHero image="/images/index-hero-background.png"/>

    <MasterclassSection />

    <CoursesSection :filter="filterOptions" :courses="courses" />

    <div class="divider"></div>

    <DropsSection :filter="filterOptions" :drops="drops" />

    <div class="divider"></div>

    <ServicesSection />
  </div>
</template>

<script>
import MasterclassSection from '@/components/index/MasterclassSection.vue'
import CoursesSection from '@/components/index/CoursesSection.vue'
import DropsSection from '@/components/index/DropsSection.vue'
import ServicesSection from '@/components/index/ServicesSection.vue'

export default {
  name: 'IndexPage',
  components: {
    MasterclassSection,
    CoursesSection,
    DropsSection,
    ServicesSection,
  },
  data() {
    return {
      filterOptions: [
        { name: 'guitar', text: 'Guitarra', radioValue: 1  },
        { name: 'drums', text: 'Bateria', radioValue: 2  },
        { name: 'singing', text: 'Canto', radioValue: 3  },
        { name: 'beginner', text: 'Iniciante', radioValue: 4  },
        { name: 'intermediate', text: 'Intermediário', radioValue: 5  },
        { name: 'advanced', text: 'Avançado', radioValue: 6  },
      ],
      courses: [
        '/temp/courses-1.png',
        '/temp/courses-2.png',
        '/temp/courses-3.png',
        '/temp/courses-4.png',
      ],
      drops: [
        { id: 1, instructor: 'Ana Iaci', description: 'Drops de canto', image: '/temp/drops-1.png' },
        { id: 2, instructor: 'Keu Aragão', description: 'Drops de Percussão', image: '/temp/drops-2.png' },
        { id: 3, instructor: 'Rafael Alabarcce', description: 'Drops de Gaita Básica', image: '/temp/drops-3.png' },
        { id: 4, instructor: 'Rafael Alabarcce', description: 'Drops de Finale', image: '/temp/drops-4.png' },
        { id: 5, instructor: 'Ana Iaci', description: 'Drops de canto', image: '/temp/drops-1.png' },
        { id: 6, instructor: 'Keu Aragão', description: 'Drops de Percussão', image: '/temp/drops-2.png' },
        { id: 7, instructor: 'Rafael Alabarcce', description: 'Drops de Gaita Básica', image: '/temp/drops-3.png' },
        { id: 8, instructor: 'Rafael Alabarcce', description: 'Drops de Finale', image: '/temp/drops-4.png' },
      ],
    }
  },
}
</script>