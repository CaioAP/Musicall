<template>
  <section class="container" aria-labelledby="content-title">
    <header>
      <h1 id="content-title">
        {{ title }}
      </h1>

      <slot name="subtitle"></slot>

      <div v-if="subtitle || action" class="sub-header">
        <h2 v-if="subtitle" class="content-subtitle">
          {{ subtitle }}
        </h2>

        <BaseButton v-if="action" class="btn-content" @click="$emit('add')">
          {{ action }}
        </BaseButton>
      </div>
    </header>

    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  padding: 1.5rem 2rem;

  header {
    margin-bottom: 2.5rem;
    font-family: $font-foral-pro;
    font-weight: 700;

    #content-title {
      font-size: 4rem;
      line-height: 4rem;
    }

    .sub-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .content-subtitle {
        font-size: 2rem;
        line-height: 2rem;
      }

      .btn-content {
        font-weight: bold;
        font-family: $font-open-sans;
      }
    }
  }
}
</style>
