const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: VideoModerado  (contexto: Moderacao e Administracao)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class VideoModerado extends DomainEvent {
  constructor(payload) {
    super('moderacao.VideoModerado', payload);
  }
}

module.exports = { VideoModerado };
