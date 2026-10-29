const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: TopicoCriado  (contexto: Foruns de Especialistas)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class TopicoCriado extends DomainEvent {
  constructor(payload) {
    super('forum.TopicoCriado', payload);
  }
}

module.exports = { TopicoCriado };
