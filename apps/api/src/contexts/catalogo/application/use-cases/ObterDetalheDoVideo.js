/**
 * Caso de uso (porta de entrada / driving port): ObterDetalheDoVideo  (contexto: Catalogo de Videos)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class ObterDetalheDoVideo {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { ObterDetalheDoVideo };
