export default ((context, inject) => {
  const utils = {
    formatDate(date) {
      if (!date) return ''

      return new Intl.DateTimeFormat(
        'pt-BR', 
        { timeZone: 'UTC' }
      ).format(date)
    },

    formatMoney(money) {
      if (!money) return 'R$ 0,00'

      return new Intl.NumberFormat(
        'pt-BR', 
        { style: 'currency', currency: 'BRL' }
      ).format(money)
    },
  }

  inject('utils', { ...utils })
})