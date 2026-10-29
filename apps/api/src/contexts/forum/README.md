# Contexto delimitado: Foruns de Especialistas

Foruns tematicos onde especialistas (veterinarios, adestradores) respondem duvidas.

| Item | Valor |
| --- | --- |
| Raiz de agregado | `Topico` |
| Entidades | `Forum`, `Topico`, `Resposta` |
| Value Objects | `Conteudo`, `SeloDeEspecialista` |
| Eventos de dominio | `TopicoCriado`, `RespostaPublicada` |
| Casos de uso | `CriarTopico`, `ResponderTopico`, `ListarForuns` |
| Origem no projeto atual | ForunsView.vue, ForumDetailView.vue (ainda sem backend) |

## Camadas

```
forum/
  domain/          regras puras (entidades, VOs, eventos, portas de repositorio)
  application/     casos de uso + portas de saida
  infrastructure/  adaptadores concretos (Sequelize, disco, broker)
  interfaces/http/ controllers, rotas e validadores Express
  index.js         composicao do contexto
```

Regra de dependencia: `interfaces -> application -> domain` e `infrastructure -> domain/application`.
O `domain/` nunca importa nada de fora dele mesmo e do `shared-kernel`.
