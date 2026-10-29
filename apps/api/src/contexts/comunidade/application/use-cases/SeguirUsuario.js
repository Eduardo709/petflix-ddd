/**
 * Caso de uso (porta de entrada / driving port): SeguirUsuario  (contexto: Comunidade (Perfis e Seguidores))
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class SeguirUsuario {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { SeguirUsuario };
