/**
 * Value Object: TermoDeBusca  (contexto: Busca)
 * Imutavel, comparado por valor, valida a si mesmo no construtor.
 */
class TermoDeBusca {
  constructor(valor) {
    // TODO: validar invariante e lancar DomainError se invalido
    this.valor = valor;
    Object.freeze(this);
  }
}

module.exports = { TermoDeBusca };
