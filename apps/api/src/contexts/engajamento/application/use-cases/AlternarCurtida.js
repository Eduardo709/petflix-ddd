/**
 * Caso de uso (porta de entrada / driving port): AlternarCurtida  (contexto: Engajamento)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class AlternarCurtida {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { AlternarCurtida };
