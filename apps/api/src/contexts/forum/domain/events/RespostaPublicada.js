const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: RespostaPublicada  (contexto: Foruns de Especialistas)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class RespostaPublicada extends DomainEvent {
  constructor(payload) {
    super('forum.RespostaPublicada', payload);
  }
}

module.exports = { RespostaPublicada };
