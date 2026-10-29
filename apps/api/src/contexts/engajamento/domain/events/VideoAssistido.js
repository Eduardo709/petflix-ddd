const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: VideoAssistido  (contexto: Engajamento)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class VideoAssistido extends DomainEvent {
  constructor(payload) {
    super('engajamento.VideoAssistido', payload);
  }
}

module.exports = { VideoAssistido };
