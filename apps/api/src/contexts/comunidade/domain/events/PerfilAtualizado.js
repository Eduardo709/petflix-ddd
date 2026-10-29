const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: PerfilAtualizado  (contexto: Comunidade (Perfis e Seguidores))
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class PerfilAtualizado extends DomainEvent {
  constructor(payload) {
    super('comunidade.PerfilAtualizado', payload);
  }
}

module.exports = { PerfilAtualizado };
