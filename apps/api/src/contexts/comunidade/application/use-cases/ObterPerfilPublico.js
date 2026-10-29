/**
 * Caso de uso (porta de entrada / driving port): ObterPerfilPublico  (contexto: Comunidade (Perfis e Seguidores))
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class ObterPerfilPublico {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { ObterPerfilPublico };
