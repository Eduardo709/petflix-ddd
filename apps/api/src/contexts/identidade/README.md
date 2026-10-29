# Contexto delimitado: Identidade e Acesso

Contas, credenciais, login/logout, papeis (usuario, especialista, admin) e bloqueio de conta.

| Item | Valor |
| --- | --- |
| Raiz de agregado | `Usuario` |
| Entidades | `Usuario` |
| Value Objects | `Email`, `NomeDeUsuario`, `SenhaHash`, `Papel` |
| Eventos de dominio | `UsuarioRegistrado`, `UsuarioBloqueado` |
| Casos de uso | `RegistrarUsuario`, `Autenticar`, `EncerrarSessao`, `BloquearUsuario` |
| Origem no projeto atual | modules/user (register, login, logout), config/jwt.js, middlewares/auth.js, middlewares/optionalAuth.js |

## Camadas

```
identidade/
  domain/          regras puras (entidades, VOs, eventos, portas de repositorio)
  application/     casos de uso + portas de saida
  infrastructure/  adaptadores concretos (Sequelize, disco, broker)
  interfaces/http/ controllers, rotas e validadores Express
  index.js         composicao do contexto
```

Regra de dependencia: `interfaces -> application -> domain` e `infrastructure -> domain/application`.
O `domain/` nunca importa nada de fora dele mesmo e do `shared-kernel`.
