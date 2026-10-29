const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: VideoRemovido  (contexto: Catalogo de Videos)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class VideoRemovido extends DomainEvent {
  constructor(payload) {
    super('catalogo.VideoRemovido', payload);
  }
}

module.exports = { VideoRemovido };
