/**
 * Value Object: Bio  (contexto: Comunidade (Perfis e Seguidores))
 * Imutavel, comparado por valor, valida a si mesmo no construtor.
 */
class Bio {
  constructor(valor) {
    // TODO: validar invariante e lancar DomainError se invalido
    this.valor = valor;
    Object.freeze(this);
  }
}

module.exports = { Bio };
