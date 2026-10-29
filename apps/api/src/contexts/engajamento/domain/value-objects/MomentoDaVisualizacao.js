/**
 * Value Object: MomentoDaVisualizacao  (contexto: Engajamento)
 * Imutavel, comparado por valor, valida a si mesmo no construtor.
 */
class MomentoDaVisualizacao {
  constructor(valor) {
    // TODO: validar invariante e lancar DomainError se invalido
    this.valor = valor;
    Object.freeze(this);
  }
}

module.exports = { MomentoDaVisualizacao };
