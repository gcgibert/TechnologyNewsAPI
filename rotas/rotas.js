module.exports = app => {
    const controller = require("../controladores/controller.js");

    var router = require("express").Router();

    router.get("/4gnews", controller.go4gnews);

    router.get("/noticiasaominuto", controller.goNoticiaAoMinuto);

    router.get("/sapo", controller.goSapo);

    router.get("/tecmundo", controller.goTecMundo);

    router.get("/tugatech", controller.goTugaTech);

    router.get("/", controller.goAllArticles);

    app.use('/api', router);
}