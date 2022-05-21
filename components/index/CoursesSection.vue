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
        <NuxtImg v-for="course in courses" :key="course" :src="course" />
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

@media only screen and (max-width: 600px) {
  .filter {
    max-width: 70%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .content {
    max-width: 90%;
    margin-inline: auto;
  }
}
</style>