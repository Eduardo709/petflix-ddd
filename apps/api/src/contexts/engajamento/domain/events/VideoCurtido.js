const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: VideoCurtido  (contexto: Engajamento)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class VideoCurtido extends DomainEvent {
  constructor(payload) {
    super('engajamento.VideoCurtido', payload);
  }
}

module.exports = { VideoCurtido };
