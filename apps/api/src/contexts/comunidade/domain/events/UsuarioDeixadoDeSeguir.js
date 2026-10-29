const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: UsuarioDeixadoDeSeguir  (contexto: Comunidade (Perfis e Seguidores))
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class UsuarioDeixadoDeSeguir extends DomainEvent {
  constructor(payload) {
    super('comunidade.UsuarioDeixadoDeSeguir', payload);
  }
}

module.exports = { UsuarioDeixadoDeSeguir };
