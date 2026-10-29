# Contexto delimitado: Moderacao e Administracao

Painel admin: gestao de videos, categorias, usuarios e permissoes; denuncias.

| Item | Valor |
| --- | --- |
| Raiz de agregado | `CasoDeModeracao` |
| Entidades | `CasoDeModeracao`, `Denuncia` |
| Value Objects | `MotivoDaDenuncia`, `Decisao` |
| Eventos de dominio | `VideoModerado`, `DenunciaAberta` |
| Casos de uso | `ModerarVideo`, `GerenciarCategorias`, `AlterarPermissoes` |
| Origem no projeto atual | telas admin/* (Dashboard, Videos, Categorias, Usuarios) |

## Camadas

```
moderacao/
  domain/          regras puras (entidades, VOs, eventos, portas de repositorio)
  application/     casos de uso + portas de saida
  infrastructure/  adaptadores concretos (Sequelize, disco, broker)
  interfaces/http/ controllers, rotas e validadores Express
  index.js         composicao do contexto
```

Regra de dependencia: `interfaces -> application -> domain` e `infrastructure -> domain/application`.
O `domain/` nunca importa nada de fora dele mesmo e do `shared-kernel`.
