# Mapa de Contextos (Context Map)

```mermaid
flowchart LR
  ID[Identidade e Acesso<br/><i>generic</i>]
  COM[Comunidade<br/><i>supporting</i>]
  CAT[Catalogo de Videos<br/><b>CORE</b>]
  ENG[Engajamento<br/><i>supporting</i>]
  FOR[Foruns<br/><i>supporting</i>]
  BUS[Busca<br/><i>generic / read model</i>]
  MOD[Moderacao<br/><i>supporting</i>]

  ID -- "Open Host Service: usuarioId + papel (JWT)" --> CAT
  ID -- OHS --> COM
  ID -- OHS --> FOR
  CAT -- "eventos: VideoPublicado / VideoRemovido" --> ENG
  CAT -- eventos --> BUS
  CAT -- "VideoPublicado" --> COM
  COM -- "UsuarioSeguido" --> BUS
  MOD -- "Customer/Supplier: ModerarVideo" --> CAT
  ENG -- "VideoAssistido" --> CAT
```

| Relacao | Padrao DDD | Como se comunica |
| --- | --- | --- |
| Identidade -> demais | Open Host Service + Published Language | Token JWT com `id`, `username`, `papel` |
| Catalogo -> Engajamento, Busca, Comunidade | Publisher/Subscriber | Eventos de dominio via broker (Questao 2) |
| Moderacao -> Catalogo | Customer/Supplier | Caso de uso `ModerarVideo` exposto pelo Catalogo |
| Engajamento -> Catalogo | Eventos | `VideoAssistido` atualiza `viewsCount` de forma assincrona |
