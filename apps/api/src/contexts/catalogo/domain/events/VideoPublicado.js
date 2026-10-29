const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: VideoPublicado  (contexto: Catalogo de Videos)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class VideoPublicado extends DomainEvent {
  constructor(payload) {
    super('catalogo.VideoPublicado', payload);
  }
}

module.exports = { VideoPublicado };
