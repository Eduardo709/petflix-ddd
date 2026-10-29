/**
 * Value Object: Conteudo  (contexto: Foruns de Especialistas)
 * Imutavel, comparado por valor, valida a si mesmo no construtor.
 */
class Conteudo {
  constructor(valor) {
    // TODO: validar invariante e lancar DomainError se invalido
    this.valor = valor;
    Object.freeze(this);
  }
}

module.exports = { Conteudo };
