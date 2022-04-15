<template>
  <BaseSection labelledby="courses-title">
    <template #header>
      <header>
        <h2 id="courses-title" class="title">Cursos na <span class="musicalll">Musicalll</span></h2>
        <p class="description">Chega de tentar e nunca conseguir</p>
        <BaseInputRadioGroup 
          v-model="filterSelected"
          class="filter"
          :options="[...filter]"
        />
      </header>
    </template>

    <template #content>
      <div class="content">
        <nuxt-img v-for="course in courses" :key="course" :src="course" />
      </div>
    </template>
    
    <template #footer>
      <footer>
        <BaseButton>
          Explorar Cursos
        </BaseButton>
      </footer>
    </template>
  </BaseSection>
</template>

<script>
export default {
  props: {
    filter: {
      type: Array,
      default: () => []
    },
    courses: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      filterSelected: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 5rem;
}
</style>