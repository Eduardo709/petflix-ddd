const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/** Evento de dominio: VideoDescurtido  (contexto: Engajamento) */
class VideoDescurtido extends DomainEvent {
  constructor(payload) {
    super('engajamento.VideoDescurtido', payload);
  }
}

module.exports = { VideoDescurtido };
