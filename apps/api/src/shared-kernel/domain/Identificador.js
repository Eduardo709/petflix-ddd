/** Value Object generico para IDs de agregados. */
class Identificador {
  constructor(valor) { this.valor = Number(valor); Object.freeze(this); }
  igual(outro) { return outro instanceof Identificador && outro.valor === this.valor; }
}
module.exports = { Identificador };
