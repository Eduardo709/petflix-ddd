/**
 * PORTA DE SAIDA (driven port): TopicoRepository  (contexto: Foruns de Especialistas)
 * Interface definida pelo dominio. A implementacao concreta (Sequelize/MySQL)
 * fica em infrastructure/ - Principio da Inversao de Dependencia (DIP).
 */
class TopicoRepository {
  async buscarPorId(id) { throw new Error('nao implementado'); }
  async salvar(agregado) { throw new Error('nao implementado'); }
}

module.exports = { TopicoRepository };
