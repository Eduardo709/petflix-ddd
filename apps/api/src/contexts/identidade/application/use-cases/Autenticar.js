/**
 * Caso de uso (porta de entrada / driving port): Autenticar  (contexto: Identidade e Acesso)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class Autenticar {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { Autenticar };
