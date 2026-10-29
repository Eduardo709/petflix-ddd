/**
 * Value Object: Decisao  (contexto: Moderacao e Administracao)
 * Imutavel, comparado por valor, valida a si mesmo no construtor.
 */
class Decisao {
  constructor(valor) {
    // TODO: validar invariante e lancar DomainError se invalido
    this.valor = valor;
    Object.freeze(this);
  }
}

module.exports = { Decisao };
