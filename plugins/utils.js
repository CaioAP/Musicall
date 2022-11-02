export default (context, inject) => {
  const utils = {
    formatDate(date) {
      if (!date) return ""

      return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(date)
    },

    formatMoney(money) {
      if (!money) return "R$ 0,00"

      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(money)
    },

    formatAddress(address) {
      return `${address.logradouro}, ${address.cidade} - ${address.estado}`
    },

    getPassworValidationRegex() {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
    },

    validateEmail(email) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(email)
    },
  }

  inject("utils", { ...utils })
}
