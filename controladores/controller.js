const model_articles = require('../models/articles')

exports.go4gnews = (req, res) => {
    model_articles.get4gnews(req, res)
}

exports.goNoticiaAoMinuto = (req, res) => {
    model_articles.getNoticiaAoMinuto(req, res)
}

exports.goSapo = (req, res) => {
    model_articles.getSapo(req, res)
}

exports.goTecMundo = (req, res) => {
    model_articles.getTecMundo(req, res)
}

exports.goTugaTech = (req, res) => {
    model_articles.getTugaTech(req, res)
}

exports.goAllArticles = (req, res) => {
    model_articles.getAllArticles(req, res)
}
