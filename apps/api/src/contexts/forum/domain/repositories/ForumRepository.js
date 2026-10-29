/**
 * PORTA DE SAIDA (driven port): ForumRepository  (contexto: Foruns de Especialistas)
 * Interface definida pelo dominio. A implementacao concreta (Sequelize/MySQL)
 * fica em infrastructure/ - Principio da Inversao de Dependencia (DIP).
 */
class ForumRepository {
  async buscarPorId(id) { throw new Error('nao implementado'); }
  async salvar(agregado) { throw new Error('nao implementado'); }
}

module.exports = { ForumRepository };
