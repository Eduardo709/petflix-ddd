# Contexto delimitado: Busca

Modelo de leitura (read model) alimentado por eventos para busca global de videos e usuarios.

| Item | Valor |
| --- | --- |
| Raiz de agregado | `-` |
| Entidades | - |
| Value Objects | `TermoDeBusca` |
| Eventos de dominio | - |
| Casos de uso | `BuscaGlobal` |
| Origem no projeto atual | modules/search/* |

## Camadas

```
busca/
  domain/          regras puras (entidades, VOs, eventos, portas de repositorio)
  application/     casos de uso + portas de saida
  infrastructure/  adaptadores concretos (Sequelize, disco, broker)
  interfaces/http/ controllers, rotas e validadores Express
  index.js         composicao do contexto
```

Regra de dependencia: `interfaces -> application -> domain` e `infrastructure -> domain/application`.
O `domain/` nunca importa nada de fora dele mesmo e do `shared-kernel`.
