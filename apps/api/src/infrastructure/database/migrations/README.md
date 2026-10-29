# Migrations

Substituem o `sequelize.sync({ alter: true })` chamado hoje no `app.js`.
Cada alteracao de schema vira um arquivo versionado (sequelize-cli / umzug).
