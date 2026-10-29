/**
 * Caso de uso (porta de entrada / driving port): ResponderTopico  (contexto: Foruns de Especialistas)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class ResponderTopico {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { ResponderTopico };
