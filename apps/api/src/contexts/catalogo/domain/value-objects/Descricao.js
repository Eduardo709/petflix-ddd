/**
 * Value Object: Descricao  (contexto: Catalogo de Videos)
 * Imutavel, comparado por valor, valida a si mesmo no construtor.
 */
class Descricao {
  constructor(valor) {
    // TODO: validar invariante e lancar DomainError se invalido
    this.valor = valor;
    Object.freeze(this);
  }
}

module.exports = { Descricao };
