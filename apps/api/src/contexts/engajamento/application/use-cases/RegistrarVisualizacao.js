/**
 * Caso de uso (porta de entrada / driving port): RegistrarVisualizacao  (contexto: Engajamento)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class RegistrarVisualizacao {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { RegistrarVisualizacao };
