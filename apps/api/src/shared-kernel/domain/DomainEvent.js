/**
 * Classe base de todos os eventos de dominio.
 */
const { randomUUID } = require('crypto');

class DomainEvent {
  constructor(nome, payload) {
    this.id = randomUUID();
    this.nome = nome;            // ex.: 'catalogo.VideoPublicado'
    this.ocorridoEm = new Date().toISOString();
    this.versao = 1;
    this.payload = payload;
    Object.freeze(this);
  }
}

module.exports = { DomainEvent };
