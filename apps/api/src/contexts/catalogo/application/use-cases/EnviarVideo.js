/**
 * Caso de uso (porta de entrada / driving port): EnviarVideo  (contexto: Catalogo de Videos)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class EnviarVideo {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { EnviarVideo };
