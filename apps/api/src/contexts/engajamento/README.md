# Contexto delimitado: Engajamento

Visualizacoes, curtidas, favoritos e historico de assistidos. Recebe eventos do Catalogo.

| Item | Valor |
| --- | --- |
| Raiz de agregado | `HistoricoDoUsuario`, `Curtida`, `Comentario` |
| Entidades | `Visualizacao`, `Favorito`, `Curtida`, `Comentario`, `HistoricoDoUsuario` |
| Value Objects | `MomentoDaVisualizacao` |
| Eventos de dominio | `VideoAssistido`, `VideoFavoritado`, `VideoCurtido`, `VideoDescurtido`, `ComentarioPublicado` |
| Casos de uso | `RegistrarVisualizacao`, `AlternarCurtida`, `Comentar`, `ListarComentarios`, `ListarCurtidos`, `ListarAssistidos` |
| Origem no projeto atual | modules/like/*, modules/comment/*, videoService.getVideoById (increment viewsCount), LikeButton, CommentSection, telas Favoritos/Assistidos |

## Camadas

```
engajamento/
  domain/          regras puras (entidades, VOs, eventos, portas de repositorio)
  application/     casos de uso + portas de saida
  infrastructure/  adaptadores concretos (Sequelize, disco, broker)
  interfaces/http/ controllers, rotas e validadores Express
  index.js         composicao do contexto
```

Regra de dependencia: `interfaces -> application -> domain` e `infrastructure -> domain/application`.
O `domain/` nunca importa nada de fora dele mesmo e do `shared-kernel`.
