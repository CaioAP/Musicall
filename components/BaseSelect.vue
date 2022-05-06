<template>
  <VSelect 
    v-bind="$attrs" 
    class="vue-select" 
    :style="{ 
      minWidth: minWidth,
      maxWidth: maxWidth
    }" 
    v-on="$listeners" 
  />
</template>

<script>
export default {
  props: {
    minWidth: {
      type: String,
      default: '200px'
    },
    maxWidth: {
      type: String,
      default: null
    },
  },
}
</script>

<style lang="scss">
.vue-select {
  .vs__dropdown-toggle {
    border: none;

    .vs__actions {
      cursor: pointer;

      .vs__open-indicator {
        fill: $primary-clr;
      }

      .vs__clear {
        fill: $primary-clr;
      }
    }

    .vs__selected-options {
      min-width: max-content;

      .vs__search {
        cursor: pointer;
      }

      .vs__selected {
        cursor: pointer;
        text-align: center;
        color: $text-light-clr-1;
      }
    }
  }

  .vs__dropdown-menu {
    top: calc(100% + 0.25rem);
    background: $bg-clr;
    border: 1px solid $primary-clr;
    border-radius: 0.5rem;

    .vs__dropdown-option {
      &.vs__dropdown-option--highlight {
        background: $gradient-bg;
        color: $btn-txt-clr;
      }
    }
  }

  &.outline {
    .vs__dropdown-toggle {
      padding: 0.5rem 1rem;
      border: 1px solid $primary-clr;
      border-radius: 60px;
    }
  }

  &.w-auto {
    .vs__selected-options {
      .vs__search {
        width: min-content;
      }
    }
  }
}
</style>