# De -> Para: projeto atual (Programacao Web) -> arquitetura DDD

| Arquivo atual (`petflix-api` / `petflix-frontend`) | Destino na arquitetura DDD |
| --- | --- |
| `modules/user/userModel.js` | `contexts/identidade/infrastructure/persistence/sequelize/UsuarioModel.js` (+ campos de perfil em `comunidade`) |
| `modules/user/userService.js` (`registerUser`, `loginUser`) | `identidade/application/use-cases/RegistrarUsuario.js`, `Autenticar.js` |
| `modules/user/userService.js` (`getUserProfile`, `getPublicProfile`, `updateUserProfile`) | `comunidade/application/use-cases/ObterMeuPerfil.js`, `ObterPerfilPublico.js`, `AtualizarPerfil.js` |
| `modules/user/userController.js`, `userRoutes.js`, `userValidator.js` | `identidade/interfaces/http/*` e `comunidade/interfaces/http/*` |
| `modules/video/videoModel.js` | `catalogo/infrastructure/persistence/sequelize/VideoModel.js` |
| `modules/video/videoService.js` (`createVideo`) | `catalogo/application/use-cases/EnviarVideo.js` (+ evento `VideoEnviado`) |
| `modules/video/videoService.js` (`getVideoById`) | `catalogo/.../ObterDetalheDoVideo.js` (leitura) + `engajamento/.../RegistrarVisualizacao.js` (escrita) |
| `modules/video/videoService.js` (`getFeed`) | `catalogo/application/use-cases/ListarFeedGeral.js` |
| `modules/video/videoController.js` (`stream`) | `catalogo/application/use-cases/TransmitirVideo.js` + `infrastructure/storage/RangeStreamer.js` |
| `modules/video/videoService.js` (`getMyVideos`, `getVideoForEdit`, `updateVideo`, `deleteVideo`) | `catalogo/application/use-cases/ListarMeusVideos.js`, `EditarVideo.js`, `RemoverVideo.js` (+ evento `VideoRemovido`) |
| `modules/like/*` | `contexts/engajamento/` - caso de uso `AlternarCurtida` (+ `VideoCurtido` / `VideoDescurtido`) |
| `modules/comment/*` | `contexts/engajamento/` - casos de uso `Comentar`, `ListarComentarios` (+ `ComentarioPublicado`) |
| `middlewares/thumbnailMulter.js` | `interfaces/http/uploadMiddleware.js` (regras de imagem unificadas) |
| `modules/search/*` | `contexts/busca/*` |
| `config/jwt.js`, `middlewares/auth.js`, `optionalAuth.js` | `identidade/infrastructure/security/JwtTokenAdapter.js` + middleware em `interfaces/http` |
| `middlewares/profileMulter.js`, `videoMulter.js` | `interfaces/http/uploadMiddleware.js` + `infrastructure/storage/*Adapter.js` |
| `config/database.js`, `config/associations.js` | `infrastructure/database/sequelize.js` (associacoes por contexto) |
| `middlewares/apiResponse.js`, `errorHandler.js` | `interfaces/http/middlewares/*` |
| `app.js` / `bin/www` | `interfaces/http/server.js` / `main.js` |
| front `services/api.js` | `apps/web/src/shared/http/apiClient.js` |
| front `views/video/*`, `views/FeedView.vue` | `apps/web/src/contexts/catalogo/views/*` |
| front `components/video/LikeButton.vue`, `CommentSection.vue`, `views/video/FavoritosView.vue` | `apps/web/src/contexts/engajamento/*` |
| front `views/admin/*` | `apps/web/src/contexts/moderacao/views/*` |
