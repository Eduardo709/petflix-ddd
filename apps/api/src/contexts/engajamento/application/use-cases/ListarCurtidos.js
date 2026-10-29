/**
 * Caso de uso (porta de entrada / driving port): ListarCurtidos  (contexto: Engajamento)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class ListarCurtidos {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { ListarCurtidos };
