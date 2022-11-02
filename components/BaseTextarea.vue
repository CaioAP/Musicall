<template>
  <div class="field-textarea" :class="{ light }">
    <label>{{ label }}</label>
    <textarea
      v-model="innerValue"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :rows="rows"
      @change="$emit('change')"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    rows: {
      type: Number,
      default: 4,
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      innerValue: "",
    }
  },
  watch: {
    value(newValue) {
      this.innerValue = newValue
    },
    innerValue(newValue) {
      this.$emit("input", newValue)
    },
  },
  mounted() {
    this.innerValue = this.value
  },
}
</script>

<style lang="scss" scoped>
.field-textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;

  label {
    text-align: left;
    margin-bottom: 0.5rem;
  }

  textarea {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid $primary-clr;
    border-radius: 10px;
    resize: none;

    &::placeholder {
      color: $text-dark-clr-2;
    }

    &:focus {
      outline: none;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  &.light {
    textarea {
      border: 1px solid $text-light-clr-3;

      &:focus {
        border: 1px solid $primary-clr;
      }
    }
  }
}
</style>
