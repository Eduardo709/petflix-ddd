const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: VideoFavoritado  (contexto: Engajamento)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class VideoFavoritado extends DomainEvent {
  constructor(payload) {
    super('engajamento.VideoFavoritado', payload);
  }
}

module.exports = { VideoFavoritado };
