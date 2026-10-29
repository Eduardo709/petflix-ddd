# ADR-002 - Camada de mensageria com RabbitMQ

**Status:** aceita - 29/10/2026

**Decisao.** Introduzir RabbitMQ (exchange `topic` `petflix.events`) com
Transactional Outbox, filas por contexto consumidor, dead-letter queue e
consumidores idempotentes. Detalhes e justificativas na Questao 2 do
documento N2 e nos diagramas `docs/c4/`.
