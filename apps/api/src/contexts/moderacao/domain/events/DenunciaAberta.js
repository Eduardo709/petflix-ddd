const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: DenunciaAberta  (contexto: Moderacao e Administracao)
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class DenunciaAberta extends DomainEvent {
  constructor(payload) {
    super('moderacao.DenunciaAberta', payload);
  }
}

module.exports = { DenunciaAberta };
