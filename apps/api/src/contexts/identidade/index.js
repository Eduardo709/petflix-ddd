/**
 * Modulo de composicao do contexto "Identidade e Acesso".
 * Monta adaptadores + casos de uso e exporta apenas o router HTTP
 * e os consumidores de eventos. Outros contextos NAO importam
 * arquivos internos deste contexto - so se comunicam por eventos
 * ou pela API publica (Anti-Corruption Layer).
 */
module.exports = {};
