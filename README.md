# Petflix - Arquitetura DDD (Hexagonal) + Mensageria

Repositorio da **Avaliacao N2 - Projeto e Arquitetura de Software** (Prof. Luiz C. Camargo, PhD).
Estudante: **Eduardo Maik Oliveira** - Engenharia de Software - Catolica SC - 29/10/2026.

> Este repositorio contem a **organizacao da arquitetura** (pastas, camadas, contratos e
> documentacao). Como pede o enunciado, ele **nao** contem o codigo-fonte do projeto web:
> os arquivos `.js` sao esqueletos que mostram a responsabilidade de cada peca.

## Dominio

O **Petflix** e uma plataforma web de conteudos em video sobre pets. Tutores publicam e
assistem videos (alimentacao, saude, adestramento, curiosidades), seguem outros perfis,
favoritam e acompanham o historico do que assistiram; especialistas (veterinarios,
adestradores) respondem duvidas em foruns tematicos; e administradores moderam videos,
categorias e usuarios. O **core domain** e o **Catalogo de Videos**: envio, publicacao e
descoberta de conteudo.

## Contextos delimitados (Bounded Contexts)

| Contexto | Tipo | Raiz de agregado | Responsabilidade |
| --- | --- | --- | --- |
| `catalogo` | **Core** | `Video` | Envio, edicao, categorias, detalhe, Feed Geral, streaming |
| `identidade` | Generic | `Usuario` | Cadastro, login/logout, papeis, bloqueio |
| `comunidade` | Supporting | `Perfil` | Perfil, foto, bio, seguir, Feed Seguindo |
| `engajamento` | Supporting | `HistoricoDoUsuario`, `Curtida`, `Comentario` | Visualizacoes, curtidas, comentarios, favoritos, assistidos |
| `forum` | Supporting | `Topico` | Foruns de especialistas |
| `busca` | Generic (read model) | - | Busca global alimentada por eventos |
| `moderacao` | Supporting | `CasoDeModeracao` | Painel admin, denuncias, permissoes |

Mapa de contextos: [`docs/mapa-de-contextos.md`](docs/mapa-de-contextos.md) - Linguagem ubiqua: [`docs/linguagem-ubiqua.md`](docs/linguagem-ubiqua.md)

## Estrutura

```
petflix-ddd/
├── apps/
│   ├── api/src/
│   │   ├── contexts/
│   │   │   └── <contexto>/                  (catalogo, identidade, comunidade, ...)
│   │   │       ├── domain/
│   │   │       │   ├── entities/            Entidades e raiz de agregado
│   │   │       │   ├── value-objects/       Titulo, Email, Bio, ArquivoDeMidia...
│   │   │       │   ├── events/              VideoEnviado, VideoPublicado, UsuarioSeguido...
│   │   │       │   ├── repositories/        PORTAS de saida (interfaces)
│   │   │       │   └── services/            Servicos de dominio
│   │   │       ├── application/
│   │   │       │   ├── use-cases/           PORTAS de entrada (EnviarVideo, Autenticar...)
│   │   │       │   └── ports/               Portas de saida (armazenamento, token, hash)
│   │   │       ├── infrastructure/          ADAPTADORES: Sequelize, disco, JWT, bcrypt, broker
│   │   │       ├── interfaces/http/         ADAPTADORES de entrada: controllers, rotas, validadores
│   │   │       └── index.js                 Composicao do contexto
│   │   ├── shared-kernel/                   DomainEvent, DomainError, Identificador, portas de eventos
│   │   ├── infrastructure/                  database (Sequelize + migrations) e messaging (RabbitMQ, Outbox)
│   │   ├── interfaces/http/                 server.js, errorHandler, apiResponse
│   │   └── main.js
│   ├── worker/                              Consumidores de eventos (processo separado)
│   └── web/src/                             Front Vue organizado por contexto + shared/
├── docs/
│   ├── c4/                                  Diagramas C4 (contexto, conteineres, componentes) - Questao 2
│   ├── adr/                                 Registros de decisao arquitetural
│   ├── mapa-de-contextos.md
│   ├── linguagem-ubiqua.md
│   └── de-para-projeto-atual.md             Onde cada arquivo atual vai parar
└── docker-compose.yml                       MySQL + RabbitMQ + API + Worker
```

## Regra de dependencia (Hexagonal)

```
interfaces/http  ──►  application  ──►  domain  ◄──  infrastructure
   (Express)          (casos de uso)    (regras)      (Sequelize, fs, amqplib)
```

- `domain/` nao importa Express, Sequelize, `fs`, `multer`, `bcrypt` nem `jsonwebtoken`.
- `application/` depende apenas de `domain/` e de **portas** (interfaces).
- `infrastructure/` implementa as portas (Inversao de Dependencia).
- Contextos **nao importam arquivos internos uns dos outros**: comunicam-se por eventos
  de dominio (camada de mensageria) ou pela API publica do contexto.

## Camada de mensageria (Questao 2)

Exchange topic `petflix.events` no RabbitMQ, Transactional Outbox, filas por contexto
consumidor, DLQ e consumidores idempotentes. Diagramas em [`docs/c4/`](docs/c4/) e decisao em
[`docs/adr/ADR-002-mensageria-rabbitmq.md`](docs/adr/ADR-002-mensageria-rabbitmq.md).

| Diagrama C4 | Arquivo |
| --- | --- |
| Nivel 1 - Contexto | [`docs/c4/c4-1-contexto.svg`](docs/c4/c4-1-contexto.svg) |
| Nivel 2 - Conteineres | [`docs/c4/c4-2-conteineres.svg`](docs/c4/c4-2-conteineres.svg) |
| Nivel 3 - Componentes | [`docs/c4/c4-3-componentes.svg`](docs/c4/c4-3-componentes.svg) |

## Origem

Arquitetura derivada do projeto **Petflix** desenvolvido em Programacao Web
(`petflix-api`: Node.js + Express + Sequelize/MySQL; `petflix-frontend`: Vue 3 + Vite + Pinia + Axios).
O mapeamento arquivo a arquivo esta em [`docs/de-para-projeto-atual.md`](docs/de-para-projeto-atual.md).
