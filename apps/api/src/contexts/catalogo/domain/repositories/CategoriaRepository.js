/**
 * PORTA DE SAIDA (driven port): CategoriaRepository  (contexto: Catalogo de Videos)
 * Interface definida pelo dominio. A implementacao concreta (Sequelize/MySQL)
 * fica em infrastructure/ - Principio da Inversao de Dependencia (DIP).
 */
class CategoriaRepository {
  async buscarPorId(id) { throw new Error('nao implementado'); }
  async salvar(agregado) { throw new Error('nao implementado'); }
}

module.exports = { CategoriaRepository };
