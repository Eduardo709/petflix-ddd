# Contexto delimitado: Catalogo de Videos

Core domain: envio, edicao, categorizacao, detalhe e Feed Geral dos videos sobre pets.

| Item | Valor |
| --- | --- |
| Raiz de agregado | `Video` |
| Entidades | `Video`, `Categoria` |
| Value Objects | `Titulo`, `Descricao`, `ArquivoDeMidia`, `Thumbnail`, `StatusDoVideo` |
| Eventos de dominio | `VideoEnviado`, `VideoPublicado`, `VideoEditado`, `VideoRemovido` |
| Casos de uso | `EnviarVideo`, `EditarVideo`, `ObterDetalheDoVideo`, `ListarFeedGeral`, `TransmitirVideo` |
| Origem no projeto atual | modules/video/*, middlewares/videoMulter.js, utils/media.js (front) |

## Camadas

```
catalogo/
  domain/          regras puras (entidades, VOs, eventos, portas de repositorio)
  application/     casos de uso + portas de saida
  infrastructure/  adaptadores concretos (Sequelize, disco, broker)
  interfaces/http/ controllers, rotas e validadores Express
  index.js         composicao do contexto
```

Regra de dependencia: `interfaces -> application -> domain` e `infrastructure -> domain/application`.
O `domain/` nunca importa nada de fora dele mesmo e do `shared-kernel`.
