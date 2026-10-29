/**
 * Caso de uso (porta de entrada / driving port): RegistrarUsuario  (contexto: Identidade e Acesso)
 * Camada: APPLICATION - orquestra entidades e portas; nao conhece HTTP.
 * Dependencias recebidas por injecao no construtor (DIP).
 */
class RegistrarUsuario {
  constructor(deps) {
    this.deps = deps;
  }

  async executar(comando) {
    // TODO
  }
}

module.exports = { RegistrarUsuario };
