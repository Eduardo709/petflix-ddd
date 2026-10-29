/**
 * Caso de uso (porta de entrada / driving port): AlterarPermissoes  (contexto: Moderacao e Administracao)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class AlterarPermissoes {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { AlterarPermissoes };
