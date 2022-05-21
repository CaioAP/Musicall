<template>
  <section class="courses" aria-labelledby="headline">
    <header>
      <h1 id="headline" class="headline">
        <span>{{ title }}</span><br />
        Na <span class="musicalll">Musicalll</span>
      </h1>
    </header>

    <SearchForm 
      :name="name"
      :form-data="formData"
      @form="(formData) => $emit('form', formData)"
      @fetch="$emit('fetch')"
    />
  </section>
</template>

<script>
import SearchForm from '@/components/courses/SearchForm.vue';

export default {
  components: {
    SearchForm,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Cursos'
    },
    formData: {
      type: Object,
      default: () => ({
        course: null,
        difficulty: null
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.courses {
  color: $text-light-clr-1;

  header {
    text-align: center;

    .headline {
      font-family: $font-foral-pro;
      font-size: 4rem;

      span:first-of-type {
        font-family: $font-rampage-monoline;
        font-size: 8rem;
        line-height: 1.2;
      }
    }
  }
}
</style>