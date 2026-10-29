# ADR-001 - Arquitetura Hexagonal com DDD

**Status:** aceita - 29/10/2026

**Contexto.** O Petflix hoje e organizado por camada tecnica dentro de cada modulo
(`routes -> controller -> service -> model`). Os services importam Sequelize, `fs`
e modelos de outros modulos diretamente (ex.: `videoService` incrementa
`User.videosCount`), o que acopla regras de negocio a infraestrutura.

**Decisao.** Organizar a API por **contextos delimitados** (Identidade, Comunidade,
Catalogo, Engajamento, Foruns, Busca, Moderacao), cada um com as camadas
`domain`, `application`, `infrastructure` e `interfaces` (Portas e Adaptadores).
Comunicacao entre contextos por **eventos de dominio** (ver ADR-002).

**Consequencias.** (+) dominio testavel sem banco; troca de MySQL/disco/broker
sem tocar regra de negocio; equipes podem evoluir contextos isoladamente.
(-) mais arquivos e indirecao; exige disciplina na regra de dependencia.
