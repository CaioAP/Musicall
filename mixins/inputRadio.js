export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    radioValue: {
      type: [String, Number],
      default: ''
    },
    name: {
      type: String,
      required: true
    },
  },
  computed: {
    checked() {
      return this.value === this.radioValue
    }
  },
}
