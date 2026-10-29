/**
 * Value Object: Titulo  (contexto: Catalogo de Videos)
 * Imutavel, comparado por valor, valida a si mesmo no construtor.
 */
class Titulo {
  constructor(valor) {
    // TODO: validar invariante e lancar DomainError se invalido
    this.valor = valor;
    Object.freeze(this);
  }
}

module.exports = { Titulo };
