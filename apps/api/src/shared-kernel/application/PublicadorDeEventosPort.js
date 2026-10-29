/**
 * Porta de saida para publicar eventos de dominio.
 * Implementacoes: RabbitMqPublicador (infra/messaging) e EmMemoriaPublicador (testes).
 */
class PublicadorDeEventosPort {
  async publicar(evento) { throw new Error('nao implementado'); }
}
module.exports = { PublicadorDeEventosPort };
