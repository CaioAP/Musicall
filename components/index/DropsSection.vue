<template>
  <BaseSection labelledby="drops-title">
    <template #header>
      <header>
        <h2 id="drops-title" class="title"><span class="musicalll">Musicalll</span> Drops</h2>
        <p class="description">Sinta o gostinho e aprenda com qualidade</p>
        <BaseInputRadioGroup 
          v-model="filterSelected"
          class="filter"
          :options="[...filter]"
        />
      </header>
    </template>

    <template #content>
      <div class="content">
        <BaseButton class="btn-circle gradient-inverted">
          <nuxt-img src="/svg/arrow-left.svg" />
        </BaseButton>

        <div class="drops-list">
          <article 
            v-for="drop in drops" 
            :key="drop.id"
            class="drop-card"
          >
            <nuxt-img :src="drop.image" />
            <div class="drop-card-text">
              <p>{{ drop.name }}</p>
              <p>{{ drop.description }}</p>
            </div>
          </article>
        </div>

        <BaseButton class="btn-circle">
          <nuxt-img src="/svg/arrow-right.svg" />
        </BaseButton>
      </div>
    </template>
    
    <template #footer>
      <footer>
        <BaseButton>
          Explorar Drops
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
    drops: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      filterSelected: 2
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-circle:first-of-type {
    transform: translateX(50%);
  }

  .btn-circle:last-of-type {
    transform: translateX(-50%);
  }

  .drops-list {
    display: flex;
    gap: 1rem;
    margin-top: 4rem;
  }

}
</style>