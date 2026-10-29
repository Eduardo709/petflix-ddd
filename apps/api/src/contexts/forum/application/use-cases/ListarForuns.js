/**
 * Caso de uso (porta de entrada / driving port): ListarForuns  (contexto: Foruns de Especialistas)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class ListarForuns {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { ListarForuns };
