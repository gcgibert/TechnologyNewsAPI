module.exports = app => {
    const controller = require("../controladores/controller.js");

    var router = require("express").Router();

    // Cria um novo utilizador
    router.post("/registar", controller.registar);

    // Rota para login - tem de ser POST para não vir user e pass na URL
    router.post("/login", controller.login);

    // Rota para verificar e ativar o utilizador
    router.get("/auth/confirm/:confirmationCode", controller.verificaUtilizador)

    router.get("/4gnews", controller.go4gnews);

    router.get("/noticiasaominuto", controller.goNoticiaAoMinuto);

    router.get("/sapo", controller.goSapo);

    router.get("/tecmundo", controller.goTecMundo);

    router.get("/tugatech", controller.goTugaTech);

    router.get("/", controller.goAllArticles);

    app.use('/api', router);
}