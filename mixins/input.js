export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    innerValue: null,
  }),
  watch: {
    value(newValue) {
      this.innerValue = newValue
    },

    innerValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  mounted() {
    this.innerValue = this.value
  },
}
