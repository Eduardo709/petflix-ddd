const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/** Evento de dominio: ComentarioPublicado  (contexto: Engajamento) */
class ComentarioPublicado extends DomainEvent {
  constructor(payload) {
    super('engajamento.ComentarioPublicado', payload);
  }
}

module.exports = { ComentarioPublicado };
