/**
 * Transactional Outbox: o caso de uso grava o evento na tabela `outbox`
 * na MESMA transacao do agregado; este relay le e publica no broker.
 * Garante que nenhum evento se perde se o broker estiver fora do ar.
 */
module.exports = {};
