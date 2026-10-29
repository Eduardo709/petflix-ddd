/**
 * Caso de uso (porta de entrada / driving port): ListarAssistidos  (contexto: Engajamento)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class ListarAssistidos {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { ListarAssistidos };
