/**
 * Value Object: FotoDePerfil  (contexto: Comunidade (Perfis e Seguidores))
 * Imutavel, comparado por valor, valida a si mesmo no construtor.
 */
class FotoDePerfil {
  constructor(valor) {
    // TODO: validar invariante e lancar DomainError se invalido
    this.valor = valor;
    Object.freeze(this);
  }
}

module.exports = { FotoDePerfil };
