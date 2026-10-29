const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: VideoEnviado  (contexto: Catalogo de Videos)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class VideoEnviado extends DomainEvent {
  constructor(payload) {
    super('catalogo.VideoEnviado', payload);
  }
}

module.exports = { VideoEnviado };
