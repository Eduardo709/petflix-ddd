/**
 * Processo separado (worker) que consome eventos do broker:
 * - catalogo.VideoEnviado    -> processa midia (transcodificacao, duracao) e publica VideoPublicado
 * - catalogo.VideoPublicado  -> notifica seguidores, indexa na busca
 * - engajamento.VideoAssistido -> atualiza contadores/historico
 */
