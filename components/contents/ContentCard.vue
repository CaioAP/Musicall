<template>
  <div class="content-card">
    <NuxtImg :src="`/svg/${icon}.svg`" width="70" height="70" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.content-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: fit-content;
  aspect-ratio: 1;
  padding: 0.75rem;
  background-color: $text-light-clr-1;
  border: 1px solid $primary-clr;
  border-radius: 0.75rem;

  h3 {
    font-family: $font-foral-pro;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height: 1;
  }
}
</style>
