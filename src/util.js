class Util {

  static #defaultFormat = Intl.NumberFormat("en",{
    currency:"USD",
    style:"currency"
  })

  static formatCurrency(value){
    return this.#defaultFormat.format(value)
  }
  static unFormatCurrency(value){
    return Number(value.replace(/\D/g,''))/100
  }

}

module.exports = Util