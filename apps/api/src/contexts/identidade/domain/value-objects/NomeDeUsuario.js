/**
 * Value Object: NomeDeUsuario  (contexto: Identidade e Acesso)
 * Imutavel, comparado por valor, valida a si mesmo no construtor.
 */
class NomeDeUsuario {
  constructor(valor) {
    // TODO: validar invariante e lancar DomainError se invalido
    this.valor = valor;
    Object.freeze(this);
  }
}

module.exports = { NomeDeUsuario };
