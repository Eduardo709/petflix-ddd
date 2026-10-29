const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: VideoEditado  (contexto: Catalogo de Videos)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class VideoEditado extends DomainEvent {
  constructor(payload) {
    super('catalogo.VideoEditado', payload);
  }
}

module.exports = { VideoEditado };
