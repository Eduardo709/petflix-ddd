/**
 * PORTA DE SAIDA (driven port): SeguimentoRepository  (contexto: Comunidade (Perfis e Seguidores))
 * Interface definida pelo dominio. A implementacao concreta (Sequelize/MySQL)
 * fica em infrastructure/ - Principio da Inversao de Dependencia (DIP).
 */
class SeguimentoRepository {
  async buscarPorId(id) { throw new Error('nao implementado'); }
  async salvar(agregado) { throw new Error('nao implementado'); }
}

module.exports = { SeguimentoRepository };
