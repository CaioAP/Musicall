<template>
  <VSelect
    v-bind="$attrs"
    class="vue-select"
    :class="{ light, rounded }"
    :style="{
      minWidth: minWidth,
      maxWidth: maxWidth,
    }"
    :clearable="clearable"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    minWidth: {
      type: String,
      default: "200px",
    },
    maxWidth: {
      type: String,
      default: null,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    light: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
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

  &.light {
    .vs__dropdown-toggle {
      border: 1px solid $text-light-clr-3;
      padding: 0.5rem 0.5rem;

      .vs__selected-options {
        .vs__selected {
          color: $text-dark-clr-1;
        }
      }
    }

    .vs__dropdown-menu {
      background: $text-light-clr-1;

      .vs__dropdown-option {
        &.vs__dropdown-option--highlight {
          background: $gradient-bg;
          color: $btn-txt-clr;
        }
      }
    }
  }

  &.rounded {
    .vs__dropdown-toggle {
      border-radius: 4rem;
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      min-width: 100px !important;
    }
  }
}
</style>
