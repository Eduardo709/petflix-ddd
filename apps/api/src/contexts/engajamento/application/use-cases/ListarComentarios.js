/**
 * Caso de uso (porta de entrada / driving port): ListarComentarios  (contexto: Engajamento)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class ListarComentarios {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { ListarComentarios };
