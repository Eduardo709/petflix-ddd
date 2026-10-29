/**
 * Value Object: Papel  (contexto: Identidade e Acesso)
 * Imutavel, comparado por valor, valida a si mesmo no construtor.
 */
class Papel {
  constructor(valor) {
    // TODO: validar invariante e lancar DomainError se invalido
    this.valor = valor;
    Object.freeze(this);
  }
}

module.exports = { Papel };
