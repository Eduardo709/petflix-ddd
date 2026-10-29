const { DomainEvent } = require('../../../../shared-kernel/domain/DomainEvent');

/**
 * Evento de dominio: UsuarioSeguido  (contexto: Comunidade (Perfis e Seguidores))
 * Fato ocorrido no passado. Publicado via PublicadorDeEventosPort (Questao 2).
 */
class UsuarioSeguido extends DomainEvent {
  constructor(payload) {
    super('comunidade.UsuarioSeguido', payload);
  }
}

module.exports = { UsuarioSeguido };
