/**
 * Hierarquia de erros de dominio. O adaptador HTTP traduz cada subtipo
 * para um status (400/401/404/409) - substitui o padrao atual de
 * `new Error()` + `error.status` espalhado nos services.
 */
class DomainError extends Error {}
class ValidacaoError extends DomainError {}
class NaoEncontradoError extends DomainError {}
class ConflitoError extends DomainError {}
class NaoAutorizadoError extends DomainError {}

module.exports = { DomainError, ValidacaoError, NaoEncontradoError, ConflitoError, NaoAutorizadoError };
