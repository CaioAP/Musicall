<template>
  <section :aria-labelledby="labelledby">
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </section>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    labelledby: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  margin-block: 4rem;
  color: $text-light-clr-2;

  header,
  footer {
    display: flex;
  }

  header {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-family: $font-foral-pro;

    .title {
      font-size: 2.5rem;
    }
    
    .description {
      font-size: 2rem;
    }

    .filter {
      margin-top: 2rem;
    }
  }

  footer {
    justify-content: center;
    margin-top: 5rem;
  }
}
</style>