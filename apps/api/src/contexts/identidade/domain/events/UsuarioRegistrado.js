const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: UsuarioRegistrado  (contexto: Identidade e Acesso)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class UsuarioRegistrado extends DomainEvent {
  constructor(payload) {
    super('identidade.UsuarioRegistrado', payload);
  }
}

module.exports = { UsuarioRegistrado };
