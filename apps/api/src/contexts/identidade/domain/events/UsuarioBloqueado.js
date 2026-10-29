const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: UsuarioBloqueado  (contexto: Identidade e Acesso)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class UsuarioBloqueado extends DomainEvent {
  constructor(payload) {
    super('identidade.UsuarioBloqueado', payload);
  }
}

module.exports = { UsuarioBloqueado };
