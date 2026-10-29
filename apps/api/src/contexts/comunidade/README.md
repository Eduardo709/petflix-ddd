# Contexto delimitado: Comunidade (Perfis e Seguidores)

Perfil publico/proprio, foto, bio, seguir/deixar de seguir e Feed Seguindo.

| Item | Valor |
| --- | --- |
| Raiz de agregado | `Perfil` |
| Entidades | `Perfil`, `Seguimento` |
| Value Objects | `Bio`, `FotoDePerfil`, `Contadores` |
| Eventos de dominio | `PerfilAtualizado`, `UsuarioSeguido`, `UsuarioDeixadoDeSeguir` |
| Casos de uso | `ObterMeuPerfil`, `ObterPerfilPublico`, `AtualizarPerfil`, `SeguirUsuario`, `ListarFeedSeguindo` |
| Origem no projeto atual | modules/user (profile/me, profile/:username), middlewares/profileMulter.js |

## Camadas

```
comunidade/
  domain/          regras puras (entidades, VOs, eventos, portas de repositorio)
  application/     casos de uso + portas de saida
  infrastructure/  adaptadores concretos (Sequelize, disco, broker)
  interfaces/http/ controllers, rotas e validadores Express
  index.js         composicao do contexto
```

Regra de dependencia: `interfaces -> application -> domain` e `infrastructure -> domain/application`.
O `domain/` nunca importa nada de fora dele mesmo e do `shared-kernel`.
