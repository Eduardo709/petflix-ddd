/**
 * Caso de uso (porta de entrada / driving port): ModerarVideo  (contexto: Moderacao e Administracao)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class ModerarVideo {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { ModerarVideo };
